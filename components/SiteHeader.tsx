"use client";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const LOGO_URL="https://w5u2tvearllpuwlv.public.blob.vercel-storage.com/albums/album-1788099739370/1788099762145-Logo-Thien-Phuc-Mau-Kem-1024x1024-f8SatUuNs6fPXNzYmae3lKpjsz8PBK.png";
const links=[["TRANG CHỦ","/"],["GIỚI THIỆU","/gioi-thieu"],["VỊ TRÍ","/vi-tri"],["QUY HOẠCH","/quy-hoach"],["SẢN PHẨM","/san-pham"],["TIỆN ÍCH & DỊCH VỤ","/tien-ich"],["TIẾN ĐỘ","/tien-do"],["TIN TỨC","/tin-tuc"],["LIÊN HỆ","/lien-he"]];

export default function SiteHeader(){
 const[open,setOpen]=useState(false);
 return <header className="site-header ref-header">
  <div className="shell nav">
   <Link className="official-logo-link" href="/" aria-label="Trang chủ Thiên Phúc Vĩnh Hằng Viên" style={{height:66,width:150,minWidth:150,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",borderRadius:8,background:"#123f31",padding:"3px 10px"}}>
    <img src={LOGO_URL} alt="Logo Thiên Phúc Vĩnh Hằng Viên" width="130" height="58" loading="eager" fetchPriority="high" style={{display:"block",width:130,height:58,objectFit:"contain"}}/>
   </Link>
   <nav className="navlinks" aria-label="Điều hướng chính">{links.map(([l,h])=><Link href={h} key={l}>{l}</Link>)}</nav>
   <a className="ref-phone" href="tel:0976074385" aria-label="Gọi hotline 0976 074 385"><Phone size={16}/> 0976 074 385</a>
   <button className="mobile-menu-button" aria-label={open?"Đóng menu":"Mở menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<div className="mobile-panel"><nav className="shell mobile-links" aria-label="Điều hướng di động">{links.map(([l,h])=><Link href={h} key={l} onClick={()=>setOpen(false)}>{l}</Link>)}<a className="mobile-hotline" href="tel:0976074385"><Phone size={15}/> 0976 074 385</a></nav></div>}
 </header>
}
