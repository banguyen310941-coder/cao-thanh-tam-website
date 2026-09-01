import Link from "next/link";

const logoUrl="https://w5u2tvearllpuwlv.public.blob.vercel-storage.com/albums/album-1788099739370/1788099762145-Logo-Thien-Phuc-Mau-Kem-1024x1024-f8SatUuNs6fPXNzYmae3lKpjsz8PBK.png";

export default function SiteFooter(){
  return <footer className="footer">
    <div className="shell footer-grid">
      <div>
        <Link className="footer-logo-link" href="/" aria-label="Thiên Phúc Vĩnh Hằng Viên"><img className="footer-official-logo" src={logoUrl} alt="Logo Thiên Phúc Vĩnh Hằng Viên" loading="lazy"/></Link>
        <p>Công viên nghĩa trang tại Uông Bí – Yên Tử, Quảng Ninh. Không gian tưởng niệm được quy hoạch trong tổng thể cảnh quan và hạ tầng đồng bộ.</p>
      </div>
      <div><b>Khám phá dự án</b><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/vi-tri">Vị trí</Link><Link href="/quy-hoach">Quy hoạch</Link><Link href="/san-pham">Sản phẩm</Link><Link href="/tien-ich">Tiện ích & Dịch vụ</Link></div>
      <div><b>Thông tin & hỗ trợ</b><Link href="/tien-do">Tiến độ</Link><Link href="/tin-tuc">Tin tức</Link><Link href="/lien-he">Đăng ký nhận thông tin</Link><a href="tel:0976074385">Hotline: 0976 074 385</a><p>Khu vực dự án: Uông Bí – Yên Tử, Quảng Ninh</p></div>
    </div>
    <div className="shell footer-bottom">© 2026 Thiên Phúc Vĩnh Hằng Viên. Thông tin được cập nhật theo dữ liệu dự án đang công bố.</div>
  </footer>
}
