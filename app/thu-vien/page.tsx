import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";

const title = "Thư viện hình ảnh tham khảo";
const description = "Thư viện hình ảnh tham khảo về cảnh quan và không gian xanh, dùng để thể hiện định hướng thiết kế. Đây chưa phải hình ảnh dự án chính thức.";
const url = "https://www.hoavienthienphucvinhhang.com.vn/thu-vien";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { title, description, url, type: "website", locale: "vi_VN" },
};
const images=[
  ["Cảnh quan xanh","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85"],
  ["Không gian yên tĩnh","https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"],
  ["Thiên nhiên & mặt nước","https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85"],
  ["Lối dạo cảnh quan","https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85"],
  ["Không gian cây xanh","https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=85"],
  ["Khoảng nghỉ an yên","https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85"]
];
export default function GalleryPage(){return <main><InnerHero eyebrow="Cảm hứng thiết kế" title="Thư viện" description="Hình ảnh hiện tại dùng để thể hiện ngôn ngữ thiết kế; sẽ được thay bằng hình dự án chính thức."/><section className="section"><div className="shell gallery-grid">{images.map(([title,url],i)=><figure className={i===0||i===5?"gallery-wide":""} key={title}><img src={url} alt={title}/><figcaption>{title}</figcaption></figure>)}</div></section></main>}
