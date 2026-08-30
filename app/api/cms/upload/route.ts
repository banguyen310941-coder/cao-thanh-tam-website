import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { getCmsData, saveCmsData } from "@/lib/cms";

export const runtime="nodejs";
export const dynamic="force-dynamic";

export async function POST(request:Request){
 if(!process.env.BLOB_READ_WRITE_TOKEN)return NextResponse.json({ok:false,error:"BLOB_NOT_CONFIGURED"},{status:503});
 try{
  const form=await request.formData();
  const albumId=String(form.get("albumId")||"");
  const file=form.get("file");
  if(!albumId||!(file instanceof File))return NextResponse.json({ok:false,error:"INVALID_INPUT"},{status:400});
  if(!file.type.startsWith("image/"))return NextResponse.json({ok:false,error:"ONLY_IMAGES"},{status:400});
  if(file.size>4*1024*1024)return NextResponse.json({ok:false,error:"FILE_TOO_LARGE"},{status:413});
  const safe=file.name.replace(/[^a-zA-Z0-9._-]/g,"-");
  const blob=await put(`albums/${albumId}/${Date.now()}-${safe}`,file,{access:"public",addRandomSuffix:true});
  const data=await getCmsData();
  const photo={id:crypto.randomUUID(),url:blob.url,name:file.name,albumId,createdAt:new Date().toISOString()};
  data.photos=[photo,...data.photos];
  await saveCmsData(data);
  return NextResponse.json({ok:true,photo});
 }catch(error){
  return NextResponse.json({ok:false,error:error instanceof Error?error.message:"UPLOAD_FAILED"},{status:500});
 }
}
