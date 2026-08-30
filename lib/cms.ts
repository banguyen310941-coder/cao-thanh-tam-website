import { list, put } from "@vercel/blob";

export type CmsPhoto={id:string;url:string;name:string;albumId:string;createdAt:string};
export type CmsAlbum={id:string;title:string;createdAt:string};
export type CmsPost={id:string;title:string;status:"Nháp"|"Đã xuất bản";date:string};
export type CmsStaff={id:string;name:string;email:string;role:"Quản trị viên"|"Biên tập viên"|"Nhân viên nội dung";active:boolean};
export type CmsData={home:{heroTitle:string;heroSubtitle:string;heroDescription:string;hotline:string};albums:CmsAlbum[];photos:CmsPhoto[];posts:CmsPost[];staff:CmsStaff[]};

export const defaultCms:CmsData={home:{heroTitle:"THIÊN PHÚC VĨNH HẰNG VIÊN",heroSubtitle:"THANH TỊNH – NHÂN VĂN – TRƯỜNG TỒN",heroDescription:"Công viên nghĩa trang sinh thái cao cấp tại Uông Bí – Yên Tử, nơi giao hòa giữa thiên nhiên và tâm linh.",hotline:"0976074385"},albums:[{id:"toan-canh",title:"Toàn cảnh dự án",createdAt:"2026-08-30"},{id:"tien-do",title:"Tiến độ thi công",createdAt:"2026-08-30"}],photos:[],posts:[{id:"1",title:"Khởi động dự án Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên",status:"Đã xuất bản",date:"02/06/2026"}],staff:[{id:"1",name:"Quản trị hệ thống",email:"admin@thienphuc.vn",role:"Quản trị viên",active:true}]};
const CMS_PATH="cms/data.json";

// Vercel's current Blob connection uses OIDC automatically in deployments.
// Only pass an explicit token when a legacy read/write token exists; otherwise
// let @vercel/blob obtain the deployment credential from the connected store.
function blobOptions(){const token=process.env.BLOB_READ_WRITE_TOKEN;return token?{token}:{};}
export function isBlobConfigured(){return !!(process.env.BLOB_STORE_ID||process.env.BLOB_READ_WRITE_TOKEN);}

export async function getCmsData():Promise<CmsData>{
 if(!isBlobConfigured())return defaultCms;
 try{const result=await list({prefix:CMS_PATH,limit:1,...blobOptions()});const found=result.blobs.find(b=>b.pathname===CMS_PATH);if(!found)return defaultCms;const res=await fetch(found.url,{cache:"no-store"});if(!res.ok)return defaultCms;const json=await res.json();return {...defaultCms,...json,home:{...defaultCms.home,...json.home}}}catch{return defaultCms}
}
export async function saveCmsData(data:CmsData){if(!isBlobConfigured())throw new Error("BLOB_NOT_CONFIGURED");await put(CMS_PATH,JSON.stringify(data),{access:"public",addRandomSuffix:false,allowOverwrite:true,contentType:"application/json",...blobOptions()});return data;}
export function getBlobAuth(){if(!isBlobConfigured())throw new Error("BLOB_NOT_CONFIGURED");return blobOptions();}
