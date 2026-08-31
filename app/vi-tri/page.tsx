import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Mountain, Route, TreePine } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import { getCmsData, type CmsPhoto } from "@/lib/cms";

export const dynamic = "force-dynamic";
const siteUrl = "https://www.hoavienthienphucvinhhang.com.vn";
const pageUrl = `${siteUrl}/vi-tri`;
const title = "Vị trí Thiên Phúc Vĩnh Hằng Viên | Uông Bí – Yên Tử, Quảng Ninh";
const description = "Khám phá vị trí Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên tại phường Uông Bí và phường Yên Tử, Quảng Ninh; không gian cảnh quan, kết nối khu vực và hình ảnh dự án.";
export const metadata: Metadata = {
  title,
  description,
  keywords: ["vị trí Thiên Phúc Vĩnh Hằng Viên", "Thiên Phúc Vĩnh Hằng Viên Uông Bí", "nghĩa trang Uông Bí", "nghĩa trang Yên Tử", "công viên nghĩa trang Quảng Ninh"],
  alternates: { canonical: pageUrl },
  openGraph: { type: "website", locale: "vi_VN", url: pageUrl, siteName: "Thiên Phúc Vĩnh Hằng Viên", title, description },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};
const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").toLowerCase();

export default async function LocationPage() {
  const cms = await getCmsData();
  const albumPhotos = (keyword: string): CmsPhoto[] => {
    const album = cms.albums.find((a) => norm(a.title).includes(keyword));
    return album ? cms.photos.filter((p) => p.albumId === album.id) : [];
  };
  const locationPhotos = albumPhotos("vi tri");
  const planningPhotos = albumPhotos("mat bang tong the");
  const architecturePhotos = albumPhotos("cong trinh kien truc");
  const hero = locationPhotos[0] || planningPhotos[0];
  const gallery = locationPhotos.slice(1, 9);
  const planning = planningPhotos[0];
  const architecture = architecturePhotos[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên",
    description,
    url: pageUrl,
    ...(hero ? { image: hero.url } : {}),
    address: { "@type": "PostalAddress", addressLocality: "Uông Bí – Yên Tử", addressRegion: "Quảng Ninh", addressCountry: "VN" },
  };

  return <main className="location-seo-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <InnerHero eyebrow="Vị trí dự án" title="Vị trí Thiên Phúc Vĩnh Hằng Viên" description="Dự án được triển khai trên địa bàn phường Uông Bí và phường Yên Tử, tỉnh Quảng Ninh – một không gian gắn với cảnh quan, văn hóa và đời sống tâm linh của vùng Yên Tử." />

    <section className="section"><div className="shell location-grid">
      <div className="location-visual">{hero ? <Image src={hero.url} alt="Vị trí Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên tại Uông Bí Yên Tử Quảng Ninh" fill priority sizes="(max-width:900px) 100vw,58vw" style={{objectFit:"cover"}} /> : <div style={{height:"100%",display:"grid",placeItems:"center",background:"#edf1ec"}}>Đang cập nhật hình ảnh vị trí</div>}<div className="location-badge"><MapPin size={24}/><span>Khu vực dự án</span><strong>Uông Bí – Yên Tử</strong></div></div>
      <div className="location-copy"><span className="eyebrow">Kết nối khu vực</span><h1 className="section-title">Công viên nghĩa trang tại Uông Bí – Yên Tử, Quảng Ninh</h1><p className="lead"><strong>Thiên Phúc Vĩnh Hằng Viên</strong> được quy hoạch trên địa bàn hai phường Uông Bí và Yên Tử, tỉnh Quảng Ninh, với quy mô khoảng <strong>32,54 ha</strong>.</p><p>Vị trí dự án nằm trong không gian phát triển của khu vực phía Tây Quảng Ninh, đồng thời gắn với vùng Yên Tử giàu giá trị lịch sử, văn hóa và tâm linh. Đây là yếu tố quan trọng trong định hướng hình thành một công viên nghĩa trang sinh thái, trang nghiêm và hài hòa với cảnh quan.</p><div className="location-points"><div><Mountain size={18}/><span>Gắn với không gian văn hóa – tâm linh vùng Yên Tử</span></div><div><MapPin size={18}/><span>Địa bàn phường Uông Bí và phường Yên Tử, Quảng Ninh</span></div><div><Route size={18}/><span>Kết nối với hệ thống giao thông và khu vực dân cư phía Tây tỉnh</span></div></div><Link href="/lien-he" className="btn btn-outline">Nhận thông tin dự án <ArrowRight size={16}/></Link></div>
    </div></section>

    <section className="section soft"><div className="shell prose-content">
      <span className="eyebrow">Giá trị vị trí</span><h2 className="section-title">Vì sao vị trí Uông Bí – Yên Tử phù hợp với một công viên tưởng niệm sinh thái?</h2>
      <p>Với một công viên nghĩa trang được quy hoạch sử dụng lâu dài, vị trí không chỉ được đánh giá bằng khoảng cách di chuyển. Các yếu tố như cảnh quan, môi trường, khả năng tổ chức hạ tầng, giao thông nội khu và sự hài hòa với không gian văn hóa xung quanh đều có ý nghĩa quan trọng. Thiên Phúc Vĩnh Hằng Viên được triển khai tại Uông Bí – Yên Tử trong định hướng xây dựng nghĩa trang tập trung, hiện đại và đồng bộ về hạ tầng kỹ thuật.</p>
      <p>Khu vực Yên Tử từ lâu gắn với lịch sử Phật giáo Trúc Lâm và đời sống tinh thần của người Việt. Đối với một dự án mang chức năng tưởng niệm, sự hiện diện trong một vùng có chiều sâu văn hóa tạo nên bối cảnh đặc biệt. Tuy nhiên, giá trị của vị trí dự án vẫn cần được nhìn nhận trên cơ sở quy hoạch, cảnh quan thực tế và các hạng mục được triển khai theo hồ sơ được phê duyệt.</p>
      <p>Theo thông tin công bố của chính quyền địa phương vào tháng 6/2026, dự án được định hướng đáp ứng nhu cầu an táng của người dân trên địa bàn và khu vực phía Tây tỉnh Quảng Ninh. Khi hoàn thiện, dự án được kỳ vọng góp phần thay thế dần các nghĩa trang nhỏ lẻ, đồng thời hình thành không gian xanh, sạch, có quản lý tập trung và phù hợp với định hướng phát triển đô thị văn minh.</p>
    </div></section>

    {planning && <section className="section"><div className="shell" style={{display:"grid",gridTemplateColumns:"minmax(0,1.15fr) minmax(320px,.85fr)",gap:48,alignItems:"center"}}><figure style={{margin:0}}><div style={{position:"relative",minHeight:460,borderRadius:22,overflow:"hidden"}}><Image src={planning.url} alt="Mặt bằng tổng thể thể hiện vị trí và quy hoạch Thiên Phúc Vĩnh Hằng Viên" fill sizes="(max-width:900px) 100vw,58vw" style={{objectFit:"cover"}} /></div><figcaption style={{fontSize:13,color:"#6d766f",marginTop:10}}>Hình ảnh mặt bằng tổng thể được cập nhật từ album dự án.</figcaption></figure><div><span className="eyebrow">Quy hoạch tổng thể</span><h2 className="section-title">Vị trí được đặt trong một tổng thể hạ tầng và cảnh quan đồng bộ</h2><p className="lead">Quy mô khoảng 32,54 ha cho phép dự án tổ chức các khu chức năng, hệ thống giao thông nội bộ và cảnh quan trong cùng một tổng thể.</p><p>Đối với gia đình tìm hiểu nơi an nghỉ lâu dài, việc xem vị trí cùng mặt bằng quy hoạch giúp có góc nhìn đầy đủ hơn về hướng tiếp cận, cách tổ chức không gian và mối liên hệ giữa các khu chức năng. Bạn có thể xem thêm thông tin tại trang <Link href="/quy-hoach"><strong>Quy hoạch Thiên Phúc Vĩnh Hằng Viên</strong></Link>.</p></div></div></section>}

    <section className="section" style={{background:"#123f30",color:"white"}}><div className="shell"><div style={{maxWidth:860,margin:"0 auto",textAlign:"center"}}><span className="eyebrow" style={{color:"#e4bd6c"}}>Không gian tưởng niệm</span><h2 className="section-title" style={{color:"white"}}>Cảnh quan là một phần quan trọng của trải nghiệm thăm viếng</h2><p style={{fontSize:16,lineHeight:1.9,color:"#dbe8e2"}}>Một nơi an nghỉ được quy hoạch bài bản cần tạo được cảm giác trang nghiêm nhưng không nặng nề. Cây xanh, khoảng mở, công trình kiến trúc và đường nội khu khi được tổ chức hài hòa sẽ giúp hành trình thăm viếng thuận tiện hơn, đồng thời tạo không gian để các gia đình tưởng nhớ người đã khuất trong sự yên tĩnh và tôn nghiêm.</p></div></div></section>

    {architecture && <section className="section"><div className="shell" style={{display:"grid",gridTemplateColumns:"minmax(320px,.85fr) minmax(0,1.15fr)",gap:48,alignItems:"center"}}><div><span className="eyebrow">Cảnh quan & kiến trúc</span><h2 className="section-title">Từ vị trí đến không gian sử dụng thực tế</h2><p className="lead">Vị trí tốt cần được hoàn thiện bằng hạ tầng, cảnh quan và kiến trúc phù hợp với chức năng của một công viên nghĩa trang.</p><p>Thiên Phúc Vĩnh Hằng Viên được định hướng kết hợp yếu tố tâm linh truyền thống với cảnh quan sinh thái. Các hình ảnh kiến trúc trong album dự án giúp người xem hình dung rõ hơn về ngôn ngữ thiết kế và không gian dự kiến sau khi các hạng mục được triển khai đồng bộ.</p><Link href="/gioi-thieu" className="btn btn-outline">Tìm hiểu tổng quan <ArrowRight size={16}/></Link></div><figure style={{margin:0}}><div style={{position:"relative",minHeight:430,borderRadius:22,overflow:"hidden"}}><Image src={architecture.url} alt="Không gian kiến trúc cảnh quan Thiên Phúc Vĩnh Hằng Viên Quảng Ninh" fill sizes="(max-width:900px) 100vw,58vw" style={{objectFit:"cover"}} /></div></figure></div></section>}

    <section className="section soft"><div className="shell"><div className="section-head"><span className="eyebrow">Thông tin cần biết</span><h2 className="section-title">Tìm hiểu vị trí dự án trước khi lựa chọn</h2></div><div className="values-grid"><article><MapPin/><h3>Địa bàn dự án</h3><p>Phường Uông Bí và phường Yên Tử, tỉnh Quảng Ninh theo thông tin công bố khi dự án khởi động tháng 6/2026.</p></article><article><TreePine/><h3>Định hướng sinh thái</h3><p>Dự án hướng đến mô hình công viên nghĩa trang tập trung, kết hợp hạ tầng kỹ thuật với cảnh quan xanh.</p></article><article><Mountain/><h3>Không gian Yên Tử</h3><p>Vị trí gắn với vùng có chiều sâu văn hóa và tâm linh, tạo bối cảnh đặc trưng cho không gian tưởng niệm.</p></article><article><Route/><h3>Tham quan thực tế</h3><p>Gia đình nên tìm hiểu vị trí, quy hoạch và tiến độ thực tế để có đầy đủ thông tin trước khi đưa ra quyết định.</p></article></div></div></section>

    {gallery.length > 0 && <section className="section"><div className="shell"><div className="section-head"><span className="eyebrow">Album vị trí</span><h2 className="section-title">Hình ảnh khu vực Thiên Phúc Vĩnh Hằng Viên</h2><p className="lead max-copy">Hình ảnh được lấy trực tiếp từ album Vị trí của dự án để người xem có thêm góc nhìn trực quan về khu vực.</p></div><div className="gallery-grid">{gallery.map((p,i)=><figure className={i===0?"gallery-wide":"gallery-item"} key={p.id}><Image src={p.url} alt={`Hình ảnh vị trí Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên Uông Bí Yên Tử ${i+2}`} fill sizes="(max-width:700px) 100vw,33vw" style={{objectFit:"cover"}} /></figure>)}</div></div></section>}

    <section className="section"><div className="shell"><div className="quote-panel" style={{textAlign:"center"}}><span className="eyebrow">Tham quan dự án</span><h2 className="section-title">Cần tư vấn vị trí Thiên Phúc Vĩnh Hằng Viên?</h2><p className="lead" style={{maxWidth:760,margin:"0 auto 24px"}}>Liên hệ để được cung cấp thông tin cập nhật về vị trí, quy hoạch, tiến độ và sắp xếp tìm hiểu dự án. Hotline: <strong>0976 074 385</strong>.</p><div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}><a href="tel:0976074385" className="btn btn-primary">Gọi 0976 074 385</a><Link href="/quy-hoach" className="btn btn-outline">Xem quy hoạch <ArrowRight size={16}/></Link></div></div></div></section>
  </main>;
}
