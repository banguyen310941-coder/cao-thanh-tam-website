import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";

export const metadata: Metadata = { title: "Tin tức", description: "Tin tức và nội dung tư vấn từ Cao Thanh Tâm." };
const posts=[
  ["Cẩm nang chuẩn bị cho một buổi tham quan dự án","Nội dung hướng dẫn gia đình chuẩn bị câu hỏi, hồ sơ và nhu cầu trước khi tham quan."],
  ["Những yếu tố nên cân nhắc khi lựa chọn không gian tưởng niệm","Gợi ý cách đánh giá vị trí, cảnh quan, dịch vụ và khả năng chăm sóc dài hạn."],
  ["Giá trị của một không gian xanh trong hành trình tưởng niệm","Góc nhìn về cảnh quan, sự an yên và trải nghiệm của gia đình qua nhiều thế hệ."]
];
export default function NewsPage(){return <main><InnerHero eyebrow="Thông tin hữu ích" title="Tin tức" description="Khu vực dành cho tin dự án, kiến thức và nội dung tư vấn dành cho gia đình."/><section className="section"><div className="shell news-list">{posts.map(([title,desc],i)=><article key={title}><div className="news-index">0{i+1}</div><div><span className="eyebrow">Cẩm nang</span><h2>{title}</h2><p>{desc}</p><span className="coming">Bài viết chi tiết đang cập nhật</span></div></article>)}</div></section></main>}
