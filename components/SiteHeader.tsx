"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Giới thiệu", "/gioi-thieu"],
  ["Sản phẩm", "/san-pham"],
  ["Tiện ích", "/tien-ich"],
  ["Thư viện", "/thu-vien"],
  ["Tin tức", "/tin-tuc"],
  ["Liên hệ", "/lien-he"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell nav">
        <Link className="brand" href="/">CAO THANH TÂM</Link>
        <nav className="navlinks" aria-label="Điều hướng chính">
          {links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className="btn btn-gold nav-contact" href="/lien-he">Đăng ký tư vấn</Link>
        <button className="mobile-menu-button" aria-label="Mở menu" onClick={() => setOpen(v => !v)}>
          {open ? <X size={24}/> : <Menu size={24}/>} 
        </button>
      </div>
      {open && <div className="mobile-panel">
        <nav className="shell mobile-links">
          {links.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="btn btn-gold" href="/lien-he" onClick={() => setOpen(false)}>Đăng ký tư vấn</Link>
        </nav>
      </div>}
    </header>
  );
}
