import { del, put } from "@vercel/blob";
import { NextResponse } from "next/server";
import sharp from "sharp";
import { getBlobAuth, getCmsData, saveCmsData } from "@/lib/cms";

export const runtime="nodejs";
export const dynamic="force-dynamic";
export const maxDuration=60;

const TARGET=950*1024;
const BATCH=4;

async function compressUnder1Mb(input:Buffer){
 let width=2000;
 for(let round=0;round<5;round++){
  for(let quality=84;quality>=42;quality-=7){
   const out=await sharp(input).rotate().resize({width,withoutEnlargement:true}).jpeg({quality,mozjpeg:true}).toBuffer();
   if(out.length<=TARGET)return out;
  }
  width=Math.max(900,Math.round(width*.82));
 }
 throw new Error("COMPRESS_FAILED");
}

export async function GET(request:Request){
 try{
  const {searchParams}=new URL(request.url);
  if(searchParams.get("run")!=="yes")return NextResponse.json({ok:false,error:"CONFIRM_REQUIRED"},{status:400});
  const auth=getBlobAuth();
  const data=await getCmsData();
  const candidates:{photo:(typeof data.photos)[number];source:Buffer}[]=[];
  let oversized=0;
  for(const photo of data.photos){
   try{
    const res=await fetch(photo.url,{cache:"no-store"});
    if(!res.ok)continue;
    const source=Buffer.from(await res.arrayBuffer());
    if(source.length>TARGET){
     oversized++;
     if(candidates.length<BATCH)candidates.push({photo,source});
    }
   }catch{}
  }
  if(!candidates.length)return NextResponse.json({ok:true,done:true,processed:0,remaining:0,total:data.photos.length,targetBytes:TARGET});
  let processed=0;
  for(const {photo,source} of candidates){
   try{
    const output=await compressUnder1Mb(source);
    const safe=photo.name.replace(/[^a-zA-Z0-9._-]/g,"-").replace(/\.[^.]+$/,".jpg");
    const blob=await put(`albums/${photo.albumId}/compressed-${Date.now()}-${safe}`,output,{access:"public",contentType:"image/jpeg",addRandomSuffix:true,...auth});
    data.photos=data.photos.map(p=>p.id===photo.id?{...p,url:blob.url,name:p.name.replace(/\.[^.]+$/,".jpg")}:p);
    await saveCmsData(data);
    try{await del(photo.url,auth)}catch{}
    processed++;
   }catch{}
  }
  const remaining=Math.max(0,oversized-processed);
  return NextResponse.json({ok:true,done:remaining===0,processed,remaining,total:data.photos.length,targetBytes:TARGET});
 }catch(error){return NextResponse.json({ok:false,error:error instanceof Error?error.message:"OPTIMIZE_FAILED"},{status:500})}
}
