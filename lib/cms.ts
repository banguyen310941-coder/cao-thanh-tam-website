import { list, put } from "@vercel/blob";

export type CmsPhoto={id:string;url:string;name:string;albumId:string;createdAt:string};
export type CmsAlbum={id:string;title:string;createdAt:string};
export type CmsPost={id:string;title:string;status:"Nháp"|"Đã xuất bản";date:string};
export type CmsStaff={id:string;name:string;email:string;role:"Quản trị viên"|"Biên tập viên"|"Nhân viên nội dung";active:boolean};
export type CmsData={home:{heroTitle:string;heroSubtitle:string;heroDescription:string;hotline:string};albums:CmsAlbum[];photos:CmsPhoto[];posts:CmsPost[];staff:CmsStaff[]};

export const defaultCms:CmsData={home:{heroTitle:"THIÊN PHÚC VĨNH HẰNG VIÊN",heroSubtitle:"THANH TỊNH – NHÂN VĂN – TRƯỜNG TỒN",heroDescription:"Công viên nghĩa trang sinh thái cao cấp tại Uông Bí – Yên Tử, nơi giao hòa giữa thiên nhiên và tâm linh.",hotline:"0976074385"},albums:[{id:"toan-canh",title:"Toàn cảnh dự án",createdAt:"2026-08-30"},{id:"tien-do",title:"Tiến độ thi công",createdAt:"2026-08-30"}],photos:[],posts:[{id:"1",title:"Khởi động dự án Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên",status:"Đã xuất bản",date:"02/06/2026"}],staff:[{id:"1",name:"Quản trị hệ thống",email:"admin@thienphuc.vn",role:"Quản trị viên",active:true}]};
const CMS_PATH="cms/data.json";
function blobOptions(){const token=process.env.BLOB_READ_WRITE_TOKEN;return token?{token}:{};}
export function isBlobConfigured(){return !!(process.env.BLOB_STORE_ID||process.env.BLOB_READ_WRITE_TOKEN);}
function cleanName(pathname:string){const raw=pathname.split("/").pop()||pathname;return raw.replace(/^\d+-/,"");}

async function getBlobPhotos():Promise<CmsPhoto[]>{
 if(!isBlobConfigured())return [];
 try{
  const result=await list({prefix:"albums/",limit:1000,...blobOptions()});
  return result.blobs.map((b:any)=>{const parts=b.pathname.split("/");return {id:b.pathname,url:b.url,name:cleanName(b.pathname),albumId:parts[1]||"",createdAt:b.uploadedAt?new Date(b.uploadedAt).toISOString():new Date().toISOString()}}).filter(p=>p.albumId);
 }catch{return []}
}

function recoverAlbums(base:CmsAlbum[],photos:CmsPhoto[]):CmsAlbum[]{
 const byId=new Map(base.map(a=>[a.id,a]));
 for(const p of photos){
  if(byId.has(p.albumId))continue;
  const timestamp=p.albumId.match(/^album-(\d+)$/)?.[1];
  const createdAt=timestamp?new Date(Number(timestamp)).toISOString():p.createdAt;
  const d=new Date(createdAt);
  const label=Number.isNaN(d.getTime())?"Album khôi phục":`Album khôi phục ${d.toLocaleDateString("vi-VN")}`;
  byId.set(p.albumId,{id:p.albumId,title:label,createdAt});
 }
 return Array.from(byId.values());
}

export async function getCmsData():Promise<CmsData>{
 let base:CmsData=defaultCms;
 if(isBlobConfigured()){
  try{
   const result=await list({prefix:CMS_PATH,limit:1,...blobOptions()});
   const found=result.blobs.find(b=>b.pathname===CMS_PATH);
   if(found){const separator=found.url.includes("?")?"&":"?";const res=await fetch(`${found.url}${separator}v=${Date.now()}`,{cache:"no-store",headers:{"cache-control":"no-cache"}});if(res.ok){const json=await res.json();base={...defaultCms,...json,home:{...defaultCms.home,...json.home}}}}
  }catch{}
 }
 const photos=await getBlobPhotos();
 const albums=recoverAlbums(base.albums||[],photos);
 return {...base,albums,photos};
}

export async function saveCmsData(data:CmsData){
 if(!isBlobConfigured())throw new Error("BLOB_NOT_CONFIGURED");
 const currentPhotos=await getBlobPhotos();
 const albums=recoverAlbums(data.albums||[],currentPhotos);
 const safe={...data,albums,photos:[]};
 await put(CMS_PATH,JSON.stringify(safe),{access:"public",addRandomSuffix:false,allowOverwrite:true,contentType:"application/json",...blobOptions()});
 return {...data,albums,photos:currentPhotos};
}
export function getBlobAuth(){if(!isBlobConfigured())throw new Error("BLOB_NOT_CONFIGURED");return blobOptions();}
