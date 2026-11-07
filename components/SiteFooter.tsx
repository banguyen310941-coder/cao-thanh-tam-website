import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, CalendarDays } from "lucide-react";

const logoUrl="https://w5u2tvearllpuwlv.public.blob.vercel-storage.com/albums/album-1788099739370/1788099762145-Logo-Thien-Phuc-Mau-Kem-1024x1024-f8SatUuNs6fPXNzYmae3lKpjsz8PBK.png";
const projectLinks=[["Giới thiệu","/gioi-thieu"],["Vị trí dự án","/vi-tri"],["Quy hoạch","/quy-hoach"],["Sản phẩm","/san-pham"],["Tiện ích & Dịch vụ","/tien-ich"]];
const infoLinks=[["Tiến độ dự án","/tien-do"],["Tin tức & cập nhật","/tin-tuc"],["Thư viện hình ảnh","/thu-vien"],["Liên hệ","/lien-he"]];

export default function SiteFooter(){
  return <footer className="footer tp-footer">
    <div className="shell tp-footer-top">
      <div><span className="tp-footer-eyebrow">THIÊN PHÚC VĨNH HẰNG VIÊN</span><h2>Không gian an nghỉ<br/>thanh tịnh &amp; trường tồn.</h2><p>Khám phá thông tin dự án và nhận tư vấn từ đội ngũ hỗ trợ.</p></div>
      <Link className="tp-footer-cta" href="/lien-he">ĐĂNG KÝ NHẬN THÔNG TIN <ArrowUpRight size={17}/></Link>
    </div>
    <div className="shell tp-footer-main">
      <div className="tp-footer-brand">
        <Link className="tp-footer-logo" href="/" aria-label="Về trang chủ Thiên Phúc Vĩnh Hằng Viên"><img src={logoUrl} alt="Logo Thiên Phúc Vĩnh Hằng Viên" loading="lazy"/></Link>
        <p>Dự án Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên tại Uông Bí – Yên Tử, Quảng Ninh. Hướng đến không gian tưởng niệm trang nghiêm, hài hòa cùng cảnh quan thiên nhiên.</p>
        <span className="tp-footer-tagline">THANH TỊNH · NHÂN VĂN · TRƯỜNG TỒN</span>
      </div>
      <nav className="tp-footer-column" aria-label="Khám phá dự án"><h3>KHÁM PHÁ DỰ ÁN</h3>{projectLinks.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
      <nav className="tp-footer-column" aria-label="Thông tin hữu ích"><h3>THÔNG TIN HỮU ÍCH</h3>{infoLinks.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
      <div className="tp-footer-column tp-footer-contact"><h3>LIÊN HỆ &amp; HỖ TRỢ</h3><div className="tp-footer-contact-line"><MapPin size={18}/><span>Phường Uông Bí và phường Yên Tử, tỉnh Quảng Ninh</span></div><a className="tp-footer-contact-line" href="tel:0976074385"><Phone size={18}/><span>0976 074 385</span></a><Link className="tp-footer-contact-line" href="/lien-he"><CalendarDays size={18}/><span>Đăng ký tham quan và nhận thông tin</span></Link><a className="tp-footer-call" href="tel:0976074385">GỌI TƯ VẤN <ArrowUpRight size={15}/></a></div>
    </div>
    <div className="shell tp-footer-bottom"><span>© {new Date().getFullYear()} Thiên Phúc Vĩnh Hằng Viên. Bảo lưu mọi quyền.</span><span>Thông tin dự án được cập nhật theo công bố chính thức.</span><Link href="/">Về đầu trang ↑</Link></div>
    <style>{`
      .tp-footer{background:#0b3026!important;color:#f4f0e5!important;padding:0!important;overflow:hidden}
      .tp-footer .shell{width:min(1280px,calc(100% - 64px))!important}
      .tp-footer-top{display:flex;align-items:center;justify-content:space-between;gap:32px;padding:48px 0 44px;border-bottom:1px solid rgba(255,255,255,.15)}
      .tp-footer-eyebrow{display:block;color:#d7b875;font-size:10px;font-weight:700;letter-spacing:.2em;margin-bottom:13px}
      .tp-footer-top h2{font-family:var(--font-display),Georgia,serif!important;font-size:clamp(28px,3vw,41px);font-weight:500;line-height:1.24;letter-spacing:-.015em;margin:0 0 10px}
      .tp-footer-top p{font-size:13px!important;line-height:1.7!important;color:#c9d7ce!important;margin:0}
      .tp-footer-cta,.tp-footer-call{display:inline-flex!important;align-items:center;justify-content:center;gap:13px;background:#c6a260!important;color:#102f25!important;font-weight:700!important;letter-spacing:.045em;white-space:nowrap;border-radius:5px;transition:background .2s,transform .2s}
      .tp-footer-cta{padding:16px 22px;font-size:11px!important}.tp-footer-cta:hover,.tp-footer-call:hover{background:#e4c589!important;transform:translateY(-2px)}
      .tp-footer-main{display:grid;grid-template-columns:minmax(240px,1.45fr) minmax(135px,.8fr) minmax(145px,.9fr) minmax(210px,1.1fr);gap:clamp(22px,3.2vw,55px);padding:49px 0 54px}
      .tp-footer-logo{display:inline-flex!important;width:174px!important;max-width:100%;height:100px;align-items:center;justify-content:flex-start;margin-bottom:16px}
      .tp-footer-logo img{display:block;width:170px;max-width:100%;height:100px;object-fit:contain}
      .tp-footer-brand>p{font-size:12.5px!important;line-height:1.9!important;color:#c9d7ce!important;margin:0 0 18px;max-width:355px}
      .tp-footer-tagline{font-size:9px;color:#d7b875;letter-spacing:.13em;font-weight:700;line-height:1.7}
      .tp-footer-column{display:flex;flex-direction:column;align-items:flex-start;gap:12px;min-width:0}
      .tp-footer-column h3{font-family:var(--font-sans),Arial,sans-serif!important;font-size:11px!important;font-weight:700!important;letter-spacing:.09em;color:#e6c687!important;margin:7px 0 11px;line-height:1.5}
      .tp-footer-column>a:not(.tp-footer-call),.tp-footer-contact-line{font-size:12.5px!important;line-height:1.65!important;color:#d5e0d9!important;margin:0;transition:color .2s}
      .tp-footer-column>a:hover{color:#f3d59c!important}
      .tp-footer-contact-line{display:flex!important;align-items:flex-start;gap:10px;margin-bottom:4px!important}
      .tp-footer-contact-line svg{flex:0 0 18px;color:#d7b875;margin-top:2px}
      .tp-footer-contact-line span{display:block}
      .tp-footer-call{padding:12px 16px;font-size:10px!important;margin-top:10px}
      .tp-footer-bottom{border-top:1px solid rgba(255,255,255,.15);padding:22px 0 26px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:10px;color:#afc5b8}
      .tp-footer-bottom a{font-size:10px!important;color:#e5c889!important;white-space:nowrap}
      @media(max-width:980px){.tp-footer-main{grid-template-columns:repeat(2,minmax(0,1fr));gap:35px 38px}.tp-footer-top{padding:42px 0}}
      @media(max-width:600px){.tp-footer .shell{width:calc(100% - 36px)!important}.tp-footer-top{display:block;padding:37px 0 33px}.tp-footer-eyebrow{font-size:9px;letter-spacing:.14em}.tp-footer-top h2{font-size:29px;line-height:1.3}.tp-footer-top p{font-size:12.5px!important}.tp-footer-cta{margin-top:23px;width:100%;min-height:46px;padding:12px 14px;font-size:10px!important}.tp-footer-main{grid-template-columns:repeat(2,minmax(0,1fr));gap:30px 18px;padding:34px 0 39px}.tp-footer-brand{grid-column:1/-1}.tp-footer-logo{height:83px;margin-bottom:12px}.tp-footer-logo img{height:83px;width:150px}.tp-footer-brand>p{max-width:none;font-size:12.5px!important;line-height:1.8!important}.tp-footer-column{gap:11px}.tp-footer-column h3{font-size:10px!important;margin:0 0 5px}.tp-footer-column>a:not(.tp-footer-call){font-size:11.5px!important}.tp-footer-contact{grid-column:1/-1;padding-top:21px;border-top:1px solid rgba(255,255,255,.12)}.tp-footer-contact-line{font-size:12px!important}.tp-footer-call{margin-top:8px}.tp-footer-bottom{padding:20px 0 90px;display:grid;gap:8px;font-size:10px;line-height:1.6}.tp-footer-bottom a{margin-top:4px}}
      @media(prefers-reduced-motion:reduce){.tp-footer-cta,.tp-footer-call{transition:none}}
    `}</style>
  </footer>;
}
