import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";

export const metadata: Metadata = { title: "Tin tức", description: "Tin tức dự án Thiên Phúc Vĩnh Hằng Viên và thông tin hữu ích dành cho gia đình." };
const posts=[
  ["02/06/2026","Tin dự án","Khởi động dự án Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên","Dự án chính thức khởi động tại Quảng Ninh, đánh dấu bước đầu triển khai công viên nghĩa trang sinh thái quy mô 32,54 ha."],
  ["Cập nhật","Quy hoạch","Không gian cảnh quan và công trình kiến trúc tại Thiên Phúc","Tổng thể dự án hướng tới sự hài hòa giữa cảnh quan xanh, công trình tưởng niệm, giao thông nội khu và các khu an táng."],
  ["Cẩm nang","Tư vấn","Những yếu tố nên cân nhắc khi lựa chọn không gian an nghỉ","Vị trí, cảnh quan, quy hoạch, dịch vụ chăm sóc và khả năng kết nối lâu dài là những yếu tố gia đình nên quan tâm."],
  ["Cẩm nang","Tham quan","Chuẩn bị gì trước khi tham quan dự án","Gia đình nên xác định nhu cầu, số lượng phần mộ, loại hình quan tâm và các câu hỏi cần tư vấn để buổi tham quan hiệu quả hơn."]
];
export default function NewsPage(){return <main><InnerHero eyebrow="Thông tin mới" title="Tin tức" description="Cập nhật thông tin dự án, quy hoạch, tiến độ và các nội dung tư vấn hữu ích dành cho gia đình."/><section className="section"><div className="shell news-list">{posts.map(([date,cat,title,desc],i)=><article key={title}><div className="news-index">0{i+1}</div><div><span className="eyebrow">{cat} · {date}</span><h2>{title}</h2><p>{desc}</p><a href="/lien-he">Nhận thông tin chi tiết →</a></div></article>)}</div></section></main>}
