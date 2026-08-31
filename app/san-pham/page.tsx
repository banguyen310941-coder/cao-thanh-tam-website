import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";

export const metadata: Metadata = { title: "Sản phẩm", description: "Các nhóm sản phẩm an táng tại Thiên Phúc Vĩnh Hằng Viên." };
const items=[
  ["Mộ đơn","Không gian an nghỉ dành cho một phần mộ, thiết kế trang trọng, hài hòa với cảnh quan chung."],
  ["Mộ đôi","Không gian dành cho hai phần mộ, hướng tới sự cân đối, gắn kết và thuận tiện cho gia đình thăm viếng."],
  ["Khuôn viên gia tộc","Không gian tưởng niệm dành cho nhiều thế hệ, chú trọng tính đồng bộ, trang nghiêm và giá trị lâu dài."],
];
export default function ProductPage(){return <main><InnerHero eyebrow="Không gian an nghỉ" title="Sản phẩm an táng" description="Các nhóm sản phẩm được tổ chức theo định hướng quy hoạch của Thiên Phúc Vĩnh Hằng Viên và sẽ tiếp tục cập nhật theo hồ sơ chính thức."/><section className="section"><div className="shell"><div className="section-head"><span className="eyebrow">Danh mục sản phẩm</span><h2 className="section-title">Lựa chọn phù hợp cho từng gia đình</h2><p className="lead max-copy">Thiên Phúc Vĩnh Hằng Viên định hướng phát triển nhiều loại hình an táng trong cùng một tổng thể cảnh quan xanh, giúp gia đình lựa chọn không gian phù hợp với nhu cầu tưởng niệm và gìn giữ giá trị qua nhiều thế hệ.</p></div><div className="detail-cards">{items.map(([title,desc],i)=><article className="detail-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p><a href="/lien-he">Đăng ký nhận tư vấn →</a></article>)}</div></div></section></main>}
