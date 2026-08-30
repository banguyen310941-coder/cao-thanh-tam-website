import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";

export const metadata: Metadata = { title: "Sản phẩm", description: "Các nhóm không gian dự kiến tại Cao Thanh Tâm." };
const items=[
  ["Không gian đơn","Phù hợp nhu cầu riêng tư, thiết kế gọn gàng và trang trọng."],
  ["Không gian song thân","Dành cho gia đình mong muốn một không gian gắn kết và cân đối."],
  ["Khuôn viên gia tộc","Định hướng dành cho nhiều thế hệ, tạo dấu ấn và sự liền mạch cho gia đình."],
];
export default function ProductPage(){return <main><InnerHero eyebrow="Không gian lựa chọn" title="Sản phẩm" description="Các nhóm sản phẩm sẽ được hoàn thiện theo hồ sơ quy hoạch và bảng hàng chính thức."/><section className="section"><div className="shell"><div className="section-head"><span className="eyebrow">Danh mục dự kiến</span><h2 className="section-title">Lựa chọn phù hợp cho từng gia đình</h2><p className="lead max-copy">Nội dung dưới đây đang ở mức định hướng thiết kế website. Thông số diện tích, vật liệu, giá và chính sách chưa được công bố nên không hiển thị số liệu giả định.</p></div><div className="detail-cards">{items.map(([title,desc],i)=><article className="detail-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p><a href="/lien-he">Đăng ký nhận thông tin →</a></article>)}</div></div></section></main>}
