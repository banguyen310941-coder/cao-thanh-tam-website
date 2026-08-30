import { del, list } from "@vercel/blob";
import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { getBlobAuth } from "@/lib/cms";

export const runtime="nodejs";
export const dynamic="force-dynamic";

const ONE_MB=1024*1024;

async function sha256(url:string){
 const res=await fetch(url,{cache:"no-store"});
 if(!res.ok)throw new Error(`FETCH_${res.status}`);
 const buf=Buffer.from(await res.arrayBuffer());
 return createHash("sha256").update(buf).digest("hex");
}

export async function POST(){
 try{
  const auth=getBlobAuth();
  const result=await list({prefix:"albums/",limit:1000,...auth});
  const blobs=result.blobs as any[];
  const oversized=blobs.filter(b=>(b.size||0)>ONE_MB);
  if(oversized.length)await del(oversized.map(b=>b.url),auth);

  const remaining=blobs.filter(b=>(b.size||0)<=ONE_MB);
  const seen=new Map<string,any>();
  const duplicates:any[]=[];
  for(let i=0;i<remaining.length;i+=8){
   const batch=remaining.slice(i,i+8);
   const hashed=await Promise.all(batch.map(async b=>({b,hash:await sha256(b.url)})));
   for(const {b,hash} of hashed){
    const old=seen.get(hash);
    if(old)duplicates.push(b);else seen.set(hash,b);
   }
  }
  if(duplicates.length)await del(duplicates.map(b=>b.url),auth);
  return NextResponse.json({ok:true,scanned:blobs.length,deletedOversized:oversized.length,deletedDuplicates:duplicates.length,remaining:blobs.length-oversized.length-duplicates.length});
 }catch(error){return NextResponse.json({ok:false,error:error instanceof Error?error.message:"CLEANUP_FAILED"},{status:500})}
}
