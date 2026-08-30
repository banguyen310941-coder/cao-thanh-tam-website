"use client";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const links=[["TRANG CHỦ","/"],["GIỚI THIỆU","/gioi-thieu"],["VỊ TRÍ","/vi-tri"],["QUY HOẠCH","/quy-hoach"],["SẢN PHẨM","/san-pham"],["TIỆN ÍCH & DỊCH VỤ","/tien-ich"],["TIẾN ĐỘ","/tien-do"],["TIN TỨC","/tin-tuc"],["LIÊN HỆ","/lien-he"]];

export default function SiteHeader(){
 const[open,setOpen]=useState(false);
 return <header className="site-header ref-header">
  <div className="shell nav">
   <Link className="official-logo-link" href="/" aria-label="Trang chủ Thiên Phúc Vĩnh Hằng Viên">
    <span className="header-brand-mark" aria-hidden="true">♧</span>
    <span className="header-brand-text"><strong>THIÊN PHÚC</strong><small>VĨNH HẰNG VIÊN</small></span>
   </Link>
   <nav className="navlinks" aria-label="Điều hướng chính">{links.map(([l,h])=><Link href={h} key={l}>{l}</Link>)}</nav>
   <a className="ref-phone" href="tel:0976074385" aria-label="Gọi hotline 0976 074 385"><Phone size={16}/> 0976 074 385</a>
   <button className="mobile-menu-button" aria-label={open?"Đóng menu":"Mở menu"} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<div className="mobile-panel"><nav className="shell mobile-links" aria-label="Điều hướng di động">{links.map(([l,h])=><Link href={h} key={l} onClick={()=>setOpen(false)}>{l}</Link>)}<a className="mobile-hotline" href="tel:0976074385"><Phone size={15}/> 0976 074 385</a></nav></div>}
 </header>
}
