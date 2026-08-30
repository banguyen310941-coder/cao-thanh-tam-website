import { del } from "@vercel/blob";
import { NextResponse } from "next/server";
import { getBlobAuth } from "@/lib/cms";

export const runtime="nodejs";
export const dynamic="force-dynamic";

export async function DELETE(request:Request){
 try{
  const {url}=await request.json() as {url?:string};
  if(!url||!url.includes("blob.vercel-storage.com"))return NextResponse.json({ok:false,error:"INVALID_URL"},{status:400});
  await del(url,getBlobAuth());
  return NextResponse.json({ok:true});
 }catch(error){return NextResponse.json({ok:false,error:error instanceof Error?error.message:"DELETE_FAILED"},{status:500})}
}
