"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FileText, Home, Images, LayoutDashboard, Plus, Save, ShieldCheck, Trash2, Upload, Users } from "lucide-react";

type Tab="dashboard"|"home"|"albums"|"posts"|"staff";
type Photo={id:string;url:string;name:string;albumId:string;createdAt:string};
type Album={id:string;title:string;createdAt:string};
type Post={id:string;title:string;status:"Nháp"|"Đã xuất bản";date:string};
type Staff={id:string;name:string;email:string;role:"Quản trị viên"|"Biên tập viên"|"Nhân viên nội dung";active:boolean};
type CmsData={home:{heroTitle:string;heroSubtitle:string;heroDescription:string;hotline:string};albums:Album[];photos:Photo[];posts:Post[];staff:Staff[]};

const empty:CmsData={home:{heroTitle:"",heroSubtitle:"",heroDescription:"",hotline:""},albums:[],photos:[],posts:[],staff:[]};

async function prepareImage(file:File):Promise<File>{
 if(file.size<=3.7*1024*1024)return file;
 if(!["image/jpeg","image/png","image/webp"].includes(file.type))throw new Error("Ảnh lớn phải là JPG, PNG hoặc WEBP");
 const bitmap=await createImageBitmap(file);
 const maxSide=2200;
 const scale=Math.min(1,maxSide/Math.max(bitmap.width,bitmap.height));
 const width=Math.max(1,Math.round(bitmap.width*scale));
 const height=Math.max(1,Math.round(bitmap.height*scale));
 const canvas=document.createElement("canvas");canvas.width=width;canvas.height=height;
 const ctx=canvas.getContext("2d");if(!ctx)throw new Error("Không thể xử lý ảnh");
 ctx.drawImage(bitmap,0,0,width,height);bitmap.close();
 let quality=.84;let blob:Blob|null=null;
 do{blob=await new Promise<Blob|null>(resolve=>canvas.toBlob(resolve,"image/jpeg",quality));quality-=.08}while(blob&&blob.size>3.7*1024*1024&&quality>=.52);
 if(!blob)throw new Error("Không thể nén ảnh");
 const base=file.name.replace(/\.[^.]+$/,"");
 return new File([blob],`${base}.jpg`,{type:"image/jpeg",lastModified:Date.now()});
}

export default function AdminConsole(){
 const[tab,setTab]=useState<Tab>("dashboard");
 const[data,setData]=useState<CmsData>(empty);
 const[ready,setReady]=useState(false);
 const[storage,setStorage]=useState(false);
 const[notice,setNotice]=useState("");
 const[saving,setSaving]=useState(false);
 const[uploading,setUploading]=useState(false);
 const[uploadProgress,setUploadProgress]=useState("");
 const[selectedAlbum,setSelectedAlbum]=useState("");
 const fileRef=useRef<HTMLInputElement>(null);
 async function load(){const r=await fetch("/api/cms",{cache:"no-store"});const j=await r.json();if(j.data){setData(j.data);setStorage(!!j.storage);setSelectedAlbum(v=>v||j.data.albums?.[0]?.id||"")}setReady(true)}
 useEffect(()=>{load()},[]);
 const stats=useMemo(()=>[{label:"Bài viết",value:data.posts.length,icon:FileText},{label:"Album ảnh",value:data.albums.length,icon:Images},{label:"Hình ảnh",value:data.photos.length,icon:Upload},{label:"Nhân viên",value:data.staff.length,icon:Users}],[data]);
 const flash=(m:string)=>{setNotice(m);setTimeout(()=>setNotice(""),4000)};
 async function save(next=data,msg="Đã lưu thay đổi"){setSaving(true);const r=await fetch("/api/cms",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(next)});const j=await r.json();setSaving(false);if(!r.ok){flash(j.error==="BLOB_NOT_CONFIGURED"?"Chưa kết nối Vercel Blob":`Không thể lưu dữ liệu: ${j.error||r.status}`);return false}setData(next);flash(msg);return true}
 async function uploadFiles(files:FileList|null){
  if(!files?.length||!selectedAlbum)return;
  setUploading(true);let ok=0,fail=0;const errors:string[]=[];const chosen=Array.from(files);
  for(let i=0;i<chosen.length;i++){
   const original=chosen[i];setUploadProgress(`Đang xử lý ${i+1}/${chosen.length}: ${original.name}`);
   try{
    const file=await prepareImage(original);
    const form=new FormData();form.append("albumId",selectedAlbum);form.append("file",file);
    const r=await fetch("/api/cms/upload",{method:"POST",body:form});
    const j=await r.json().catch(()=>({}));
    if(r.ok)ok++;else{fail++;errors.push(`${original.name}: ${j.error||`HTTP ${r.status}`}`)}
   }catch(e){fail++;errors.push(`${original.name}: ${e instanceof Error?e.message:"Lỗi xử lý ảnh"}`)}
  }
  await load();setUploading(false);setUploadProgress("");if(fileRef.current)fileRef.current.value="";
  flash(ok?`Đã tải ${ok}/${chosen.length} ảnh${fail?`. ${fail} ảnh lỗi`:""}`:`Không tải được ảnh. ${errors[0]||"Vui lòng thử lại"}`);
 }
 if(!ready)return <main className="admin-shell"><section className="admin-main"><div className="admin-card"><h2>Đang tải hệ thống quản trị...</h2></div></section></main>;
 return <main className="admin-shell">
  <aside className="admin-sidebar"><div className="admin-logo"><b>THIÊN PHÚC</b><span>ADMIN CMS</span></div><nav>{[["dashboard",LayoutDashboard,"Tổng quan"],["home",Home,"Sửa trang chủ"],["albums",Images,"Album ảnh"],["posts",FileText,"Bài viết"],["staff",Users,"Nhân viên & phân quyền"]].map(([id,Icon,label]:any)=><button key={id} onClick={()=>setTab(id)} className={tab===id?"active":""}><Icon size={18}/>{label}</button>)}</nav><div className="admin-sidebar-foot"><span>CMS dùng chung dữ liệu website</span><a href="/">← Xem website</a></div></aside>
  <section className="admin-main"><header className="admin-topbar"><div><small>HỆ THỐNG QUẢN TRỊ</small><h1>{tab==="dashboard"?"Tổng quan":tab==="home"?"Sửa trang chủ":tab==="albums"?"Quản lý album ảnh":tab==="posts"?"Quản lý bài viết":"Nhân viên & phân quyền"}</h1></div><div className="admin-user"><span>Quản trị viên</span><b>AD</b></div></header>
  {notice&&<div className="admin-notice">{notice}</div>}
  <div className={storage?"admin-storage-ok":"admin-local-warning"}>{storage?"Cơ sở dữ liệu Vercel Blob đã kết nối. Nội dung admin và website dùng chung dữ liệu.":"Chưa có Vercel Blob. Hãy tạo Blob Store trong Vercel để bật lưu dữ liệu và upload ảnh thật."}</div>
  {tab==="dashboard"&&<><div className="admin-stats">{stats.map(({label,value,icon:Icon})=><article key={label}><Icon size={21}/><div><b>{value}</b><span>{label}</span></div></article>)}</div><div className="admin-panels"><article><h2>Truy cập nhanh</h2><div className="quick-grid"><button onClick={()=>setTab("home")}><Home/>Sửa nội dung trang chủ</button><button onClick={()=>setTab("albums")}><Images/>Tải ảnh hàng loạt</button><button onClick={()=>setTab("posts")}><FileText/>Viết bài mới</button><button onClick={()=>setTab("staff")}><Users/>Phân quyền nhân viên</button></div></article><article><h2>Tình trạng hệ thống</h2><ul className="status-list"><li><span/>Website đang hoạt động</li><li><span/>Dữ liệu CMS dùng chung</li><li><span className={storage?"":"warn"}/>{storage?"Kho ảnh đã kết nối":"Kho ảnh chưa kết nối"}</li></ul></article></div></>}
  {tab==="home"&&<div className="admin-card"><div className="admin-card-head"><div><h2>Nội dung trang chủ</h2><p>Nội dung lưu tại đây sẽ được trang chủ đọc trực tiếp.</p></div><button className="admin-primary" disabled={saving} onClick={()=>save()}><Save size={16}/>{saving?"Đang lưu...":"Lưu thay đổi"}</button></div><div className="admin-form"><label>Tiêu đề chính<input value={data.home.heroTitle} onChange={e=>setData({...data,home:{...data.home,heroTitle:e.target.value}})}/></label><label>Thông điệp nổi bật<input value={data.home.heroSubtitle} onChange={e=>setData({...data,home:{...data.home,heroSubtitle:e.target.value}})}/></label><label>Mô tả<textarea rows={4} value={data.home.heroDescription} onChange={e=>setData({...data,home:{...data.home,heroDescription:e.target.value}})}/></label><label>Hotline<input value={data.home.hotline} onChange={e=>setData({...data,home:{...data.home,hotline:e.target.value}})}/></label></div></div>}
  {tab==="albums"&&<div className="admin-card"><div className="admin-card-head"><div><h2>Album hình ảnh</h2><p>Chọn nhiều ảnh cùng lúc. Ảnh lớn sẽ được tự động nén trước khi tải lên.</p></div><button className="admin-primary" onClick={async()=>{const title=prompt("Tên album mới");if(!title)return;const next={...data,albums:[...data.albums,{id:`album-${Date.now()}`,title,createdAt:new Date().toISOString()}]};if(await save(next,"Đã tạo album"))setSelectedAlbum(next.albums.at(-1)?.id||"")}}><Plus size={16}/>Thêm album</button></div>
   <div className="admin-upload-box"><div><b>Tải ảnh hàng loạt</b><p>JPG, PNG, WEBP. Ảnh trên 3,7MB sẽ tự động thu nhỏ và nén.</p>{uploadProgress&&<p><b>{uploadProgress}</b></p>}</div><select value={selectedAlbum} onChange={e=>setSelectedAlbum(e.target.value)}>{data.albums.map(a=><option key={a.id} value={a.id}>{a.title}</option>)}</select><input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={e=>uploadFiles(e.target.files)} hidden/><button className="admin-primary" disabled={uploading||!storage||!selectedAlbum} onClick={()=>fileRef.current?.click()}><Upload size={16}/>{uploading?"Đang tải...":"Chọn nhiều ảnh"}</button></div>
   <div className="admin-album-grid">{data.albums.map(a=>{const photos=data.photos.filter(p=>p.albumId===a.id);return <article key={a.id} className={selectedAlbum===a.id?"selected":""} onClick={()=>setSelectedAlbum(a.id)}><div className="admin-album-cover">{photos[0]?<img src={photos[0].url} alt={a.title}/>:<Images size={28}/>}</div><div><b>{a.title}</b><span>{photos.length} hình ảnh</span></div><button className="icon-btn" onClick={async e=>{e.stopPropagation();if(!confirm(`Xóa album ${a.title}?`))return;await save({...data,albums:data.albums.filter(x=>x.id!==a.id),photos:data.photos.filter(p=>p.albumId!==a.id)},"Đã xóa album")}}><Trash2 size={16}/></button></article>})}</div>
   {selectedAlbum&&<><h3 className="admin-gallery-title">Ảnh trong album</h3><div className="admin-photo-grid">{data.photos.filter(p=>p.albumId===selectedAlbum).map(p=><figure key={p.id}><img src={p.url} alt={p.name}/><figcaption>{p.name}</figcaption><button onClick={()=>save({...data,photos:data.photos.filter(x=>x.id!==p.id)},"Đã bỏ ảnh khỏi album")}><Trash2 size={14}/></button></figure>)}</div></>}
  </div>}
  {tab==="posts"&&<div className="admin-card"><div className="admin-card-head"><div><h2>Bài viết & tin tức</h2><p>Dữ liệu bài viết cũng được lưu chung trong CMS.</p></div><button className="admin-primary" onClick={async()=>{const title=prompt("Tiêu đề bài viết");if(title)await save({...data,posts:[{id:String(Date.now()),title,status:"Nháp",date:new Date().toLocaleDateString("vi-VN")},...data.posts]},"Đã tạo bài viết nháp")}}><Plus size={16}/>Viết bài mới</button></div><div className="admin-table">{data.posts.map(p=><div className="admin-row" key={p.id}><div className="post-icon"><FileText size={19}/></div><div className="grow"><b>{p.title}</b><span>{p.date}</span></div><select value={p.status} onChange={e=>save({...data,posts:data.posts.map(x=>x.id===p.id?{...x,status:e.target.value as Post["status"]}:x)},"Đã cập nhật trạng thái")}><option>Nháp</option><option>Đã xuất bản</option></select><button className="icon-btn" onClick={()=>save({...data,posts:data.posts.filter(x=>x.id!==p.id)},"Đã xóa bài viết")}><Trash2 size={17}/></button></div>)}</div></div>}
  {tab==="staff"&&<div className="admin-card"><div className="admin-card-head"><div><h2>Nhân viên & phân quyền</h2><p>Danh sách quyền được lưu chung; bước đăng nhập bảo mật sẽ được nối riêng.</p></div><button className="admin-primary" onClick={async()=>{const name=prompt("Tên nhân viên");const email=name?prompt("Email nhân viên"):null;if(name&&email)await save({...data,staff:[...data.staff,{id:String(Date.now()),name,email,role:"Nhân viên nội dung",active:true}]},"Đã thêm nhân viên")}}><Plus size={16}/>Thêm nhân viên</button></div><div className="admin-table">{data.staff.map(s=><div className="admin-row staff-row" key={s.id}><div className="staff-avatar">{s.name.slice(0,2).toUpperCase()}</div><div className="grow"><b>{s.name}</b><span>{s.email}</span></div><select value={s.role} onChange={e=>save({...data,staff:data.staff.map(x=>x.id===s.id?{...x,role:e.target.value as Staff["role"]}:x)},"Đã cập nhật quyền")}><option>Quản trị viên</option><option>Biên tập viên</option><option>Nhân viên nội dung</option></select><label className="switch-label"><input type="checkbox" checked={s.active} onChange={e=>save({...data,staff:data.staff.map(x=>x.id===s.id?{...x,active:e.target.checked}:x)},"Đã cập nhật tài khoản")}/><span>{s.active?"Hoạt động":"Khóa"}</span></label></div>)}</div></div>}
  </section>
 </main>
}
