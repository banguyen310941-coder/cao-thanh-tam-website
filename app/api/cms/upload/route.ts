import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { getBlobAuth } from "@/lib/cms";

export const runtime="nodejs";
export const dynamic="force-dynamic";

export async function POST(request:Request){
 try{
  const auth=getBlobAuth();
  const form=await request.formData();
  const albumId=String(form.get("albumId")||"");
  const file=form.get("file");
  if(!albumId||!(file instanceof File))return NextResponse.json({ok:false,error:"INVALID_INPUT"},{status:400});
  if(!file.type.startsWith("image/"))return NextResponse.json({ok:false,error:"ONLY_IMAGES"},{status:400});
  if(file.size>4*1024*1024)return NextResponse.json({ok:false,error:"FILE_TOO_LARGE"},{status:413});
  const safe=file.name.replace(/[^a-zA-Z0-9._-]/g,"-");
  const blob=await put(`albums/${albumId}/${Date.now()}-${safe}`,file,{access:"public",addRandomSuffix:true,...auth});
  const photo={id:blob.pathname,url:blob.url,name:file.name,albumId,createdAt:new Date().toISOString()};
  return NextResponse.json({ok:true,photo});
 }catch(error){
  const message=error instanceof Error?error.message:"UPLOAD_FAILED";
  return NextResponse.json({ok:false,error:message},{status:message==="BLOB_NOT_CONFIGURED"?503:500});
 }
}
