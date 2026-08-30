import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Mountain, Route } from "lucide-react";
import InnerHero from "@/components/InnerHero";
import { getCmsData } from "@/lib/cms";

export const dynamic = "force-dynamic";

const siteUrl = "https://hoavienthienphucvinhhang.com.vn";
const title = "Vị trí Thiên Phúc Vĩnh Hằng Viên | Uông Bí – Yên Tử, Quảng Ninh";
const description = "Thông tin vị trí Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên tại phường Uông Bí và phường Yên Tử, Quảng Ninh cùng hình ảnh vị trí thực tế từ album dự án.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "vị trí Thiên Phúc Vĩnh Hằng Viên",
    "Thiên Phúc Vĩnh Hằng Viên Uông Bí",
    "Thiên Phúc Vĩnh Hằng Viên Yên Tử",
    "công viên nghĩa trang Quảng Ninh",
    "nghĩa trang Uông Bí",
  ],
  alternates: { canonical: "/vi-tri" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: `${siteUrl}/vi-tri`,
    siteName: "Thiên Phúc Vĩnh Hằng Viên",
    title,
    description,
  },
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
}

export default async function LocationPage() {
  const cms = await getCmsData();
  const locationAlbum = cms.albums.find((album) => {
    const name = normalize(album.title);
    return name === "vi tri" || name.includes("vi tri");
  });
  const photos = locationAlbum
    ? cms.photos.filter((photo) => photo.albumId === locationAlbum.id)
    : [];

  const hero = photos[0];
  const gallery = photos.slice(1, 7);

  return (
    <main>
      <InnerHero
        eyebrow="Vị trí dự án"
        title="Vị trí Thiên Phúc Vĩnh Hằng Viên"
        description="Dự án tọa lạc tại phường Uông Bí và phường Yên Tử, tỉnh Quảng Ninh – khu vực giàu giá trị văn hóa, cảnh quan và tâm linh."
      />

      <section className="section">
        <div className="shell location-grid">
          <div className="location-visual">
            {hero ? (
              <Image
                src={hero.url}
                alt="Vị trí Thiên Phúc Vĩnh Hằng Viên tại Uông Bí – Yên Tử, Quảng Ninh"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
                quality={72}
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div style={{width:"100%",height:"100%",display:"grid",placeItems:"center",background:"#edf1ec",color:"#456057"}}>Đang cập nhật ảnh album Vị trí</div>
            )}
            <div className="location-badge">
              <MapPin size={24}/>
              <span>Khu vực dự án</span>
              <strong>Uông Bí – Yên Tử</strong>
            </div>
          </div>

          <div className="location-copy">
            <span className="eyebrow">Kết nối khu vực</span>
            <h2 className="section-title">Vị trí giàu giá trị cảnh quan và tâm linh</h2>
            <p className="lead">Thiên Phúc Vĩnh Hằng Viên được triển khai trên địa bàn phường Uông Bí và phường Yên Tử, tỉnh Quảng Ninh.</p>
            <p>Vị trí dự án tạo điều kiện kết nối với khu vực Yên Tử, trung tâm Uông Bí và các tuyến giao thông trong tỉnh Quảng Ninh. Toàn bộ hình ảnh trên trang này được ưu tiên lấy đúng từ album <strong>Vị trí</strong> trong hệ thống quản trị.</p>
            <div className="location-points">
              <div><Mountain size={18}/><span>Liên kết không gian văn hóa – tâm linh Yên Tử</span></div>
              <div><MapPin size={18}/><span>Thuộc địa bàn Uông Bí – Yên Tử, Quảng Ninh</span></div>
              <div><Route size={18}/><span>Kết nối thuận tiện với mạng lưới giao thông khu vực</span></div>
            </div>
            <Link href="/lien-he" className="btn btn-outline">Đăng ký nhận thông tin vị trí <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="section" style={{paddingTop:0}}>
          <div className="shell">
            <div className="section-head">
              <span className="eyebrow">Hình ảnh vị trí</span>
              <h2 className="section-title">Hình ảnh từ album Vị trí</h2>
            </div>
            <div className="gallery-grid">
              {gallery.map((photo, index) => (
                <figure className={index === 0 ? "gallery-wide" : ""} key={photo.id}>
                  <Image
                    src={photo.url}
                    alt={`Vị trí Thiên Phúc Vĩnh Hằng Viên Uông Bí – Yên Tử ${index + 1}`}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    quality={68}
                    style={{objectFit:"cover"}}
                  />
                  <figcaption>Vị trí Thiên Phúc Vĩnh Hằng Viên – Quảng Ninh</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
