import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function SiteFooter(){
  return <footer className="footer">
    <div className="shell footer-grid">
      <div>
        <Link className="footer-logo-link" href="/" aria-label="Thiên Phúc Vĩnh Hằng Viên"><BrandLogo className="footer-official-logo"/></Link>
        <p>Công viên nghĩa trang sinh thái tại Uông Bí - Yên Tử, Quảng Ninh. Không gian tưởng niệm trang trọng giữa thiên nhiên.</p>
      </div>
      <div><b>Khám phá</b><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/san-pham">Sản phẩm</Link><Link href="/tien-ich">Tiện ích</Link><Link href="/thu-vien">Thư viện</Link></div>
      <div><b>Thông tin</b><Link href="/tin-tuc">Tin tức</Link><Link href="/lien-he">Liên hệ</Link><a href="tel:0976074385">Hotline: 0976 074 385</a><p>Địa chỉ văn phòng: đang cập nhật</p></div>
    </div>
    <div className="shell footer-bottom">© 2026 Thiên Phúc Vĩnh Hằng Viên. Thông tin chi tiết được cập nhật theo hồ sơ chính thức của dự án.</div>
  </footer>
}
