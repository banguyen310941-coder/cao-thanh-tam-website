import Link from "next/link";

const logoUrl="https://w5u2tvearllpuwlv.public.blob.vercel-storage.com/albums/album-1788099739370/1788099762145-Logo-Thien-Phuc-Mau-Kem-1024x1024-f8SatUuNs6fPXNzYmae3lKpjsz8PBK.png";

export default function SiteFooter(){
  return <footer className="footer">
    <div className="shell footer-grid">
      <div>
        <Link className="footer-logo-link" href="/" aria-label="Thiên Phúc Vĩnh Hằng Viên"><img className="footer-official-logo" src={logoUrl} alt="Logo Thiên Phúc Vĩnh Hằng Viên" loading="lazy"/></Link>
        <p>Công viên nghĩa trang sinh thái tại Uông Bí – Yên Tử, Quảng Ninh. Không gian tưởng niệm trang trọng, hài hòa cùng thiên nhiên.</p>
      </div>
      <div><b>Khám phá</b><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/vi-tri">Vị trí</Link><Link href="/san-pham">Sản phẩm</Link><Link href="/tien-ich">Tiện ích</Link><Link href="/thu-vien">Thư viện</Link></div>
      <div><b>Thông tin</b><Link href="/tin-tuc">Tin tức</Link><Link href="/lien-he">Liên hệ</Link><a href="tel:0976074385">Hotline: 0976 074 385</a><p>Khu vực dự án: Uông Bí – Yên Tử, Quảng Ninh</p></div>
    </div>
    <div className="shell footer-bottom">© 2026 Thiên Phúc Vĩnh Hằng Viên. Thông tin được cập nhật theo hồ sơ dự án.</div>
  </footer>
}
