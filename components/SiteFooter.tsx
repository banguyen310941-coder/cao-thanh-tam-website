import Link from "next/link";

export default function SiteFooter(){
  return <footer className="footer">
    <div className="shell footer-grid">
      <div><Link className="brand" href="/">CAO THANH TÂM</Link><p>Không gian trang trọng, thanh tịnh và giàu giá trị nhân văn.</p></div>
      <div><b>Khám phá</b><Link href="/gioi-thieu">Giới thiệu</Link><Link href="/san-pham">Sản phẩm</Link><Link href="/tien-ich">Tiện ích</Link><Link href="/thu-vien">Thư viện</Link></div>
      <div><b>Thông tin</b><Link href="/tin-tuc">Tin tức</Link><Link href="/lien-he">Liên hệ</Link><p>Hotline: đang cập nhật</p><p>Địa chỉ: đang cập nhật</p></div>
    </div>
    <div className="shell footer-bottom">© 2026 Cao Thanh Tâm. Nội dung thông tin chính thức sẽ được cập nhật theo hồ sơ dự án.</div>
  </footer>
}
