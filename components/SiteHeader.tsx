"use client";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
const links=[["TRANG CHỦ","/"],["GIỚI THIỆU","/gioi-thieu"],["VỊ TRÍ","/gioi-thieu"],["QUY HOẠCH","/gioi-thieu"],["SẢN PHẨM","/san-pham"],["TIỆN ÍCH & DỊCH VỤ","/tien-ich"],["TIẾN ĐỘ","/tin-tuc"],["TIN TỨC","/tin-tuc"],["LIÊN HỆ","/lien-he"]];
export default function SiteHeader(){const[open,setOpen]=useState(false);return <header className="site-header ref-header"><div className="shell nav"><Link className="brand brand-lockup" href="/"><span className="brand-lotus">♧</span><span className="brand-text"><strong>THIÊN PHÚC</strong><small>VĨNH HẰNG VIÊN</small></span></Link><nav className="navlinks">{links.map(([l,h])=><Link href={h} key={l}>{l}</Link>)}</nav><Link className="ref-phone" href="/lien-he"><Phone size={16}/> LIÊN HỆ</Link><button className="mobile-menu-button" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<div className="mobile-panel"><nav className="shell mobile-links">{links.map(([l,h])=><Link href={h} key={l} onClick={()=>setOpen(false)}>{l}</Link>)}</nav></div>}</header>}
