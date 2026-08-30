import { NextResponse } from "next/server";
import { getCmsData, isBlobConfigured, saveCmsData, type CmsData } from "@/lib/cms";

export const dynamic="force-dynamic";

export async function GET(){
 const data=await getCmsData();
 return NextResponse.json({ok:true,data,storage:isBlobConfigured()});
}

export async function PUT(request:Request){
 try{
  const data=await request.json() as CmsData;
  await saveCmsData(data);
  return NextResponse.json({ok:true,data});
 }catch(error){
  const message=error instanceof Error?error.message:"UNKNOWN_ERROR";
  return NextResponse.json({ok:false,error:message},{status:message==="BLOB_NOT_CONFIGURED"?503:500});
 }
}
