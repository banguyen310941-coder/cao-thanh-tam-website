import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import { getCmsData } from "@/lib/cms";

export const dynamic="force-dynamic";
export const metadata: Metadata = { title: "Sản phẩm", description: "Các nhóm sản phẩm an táng tại Thiên Phúc Vĩnh Hằng Viên." };
const norm=(s:string)=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").toLowerCase();
const items=[
  ["Mộ đơn","Không gian an nghỉ dành cho một phần mộ, thiết kế trang trọng, hài hòa với cảnh quan chung."],
  ["Mộ đôi","Không gian dành cho hai phần mộ, hướng tới sự cân đối, gắn kết và thuận tiện cho gia đình thăm viếng."],
  ["Khuôn viên gia tộc","Không gian tưởng niệm dành cho nhiều thế hệ, chú trọng tính đồng bộ, trang nghiêm và giá trị lâu dài."],
];
export default async function ProductPage(){
 const cms=await getCmsData();
 const album=cms.albums.find(a=>norm(a.title).includes("mau mo"));
 const photos=album?cms.photos.filter(p=>p.albumId===album.id):[];
 return <main><InnerHero eyebrow="Không gian an nghỉ" title="Sản phẩm an táng" description="Các nhóm sản phẩm được tổ chức theo định hướng quy hoạch của Thiên Phúc Vĩnh Hằng Viên, hài hòa giữa kiến trúc tưởng niệm và cảnh quan xanh."/>
 <section className="section"><div className="shell"><div className="section-head"><span className="eyebrow">Danh mục sản phẩm</span><h2 className="section-title">Lựa chọn phù hợp cho từng gia đình</h2><p className="lead max-copy">Thiên Phúc Vĩnh Hằng Viên định hướng nhiều loại hình an táng trong cùng một tổng thể cảnh quan, đáp ứng nhu cầu tưởng niệm cá nhân, gia đình và nhiều thế hệ.</p></div><div className="detail-cards">{items.map(([title,desc],i)=><article className="detail-card" key={title}>{photos[i]&&<div style={{position:"relative",width:"100%",aspectRatio:"16/10",overflow:"hidden",borderRadius:14,marginBottom:18}}><Image src={photos[i].url} alt={`${title} Thiên Phúc Vĩnh Hằng Viên`} fill sizes="(max-width: 800px) 100vw, 33vw" style={{objectFit:"cover"}}/></div>}<span>0{i+1}</span><h3>{title}</h3><p>{desc}</p><Link href="/lien-he">Đăng ký nhận tư vấn →</Link></article>)}</div></div></section>
 {photos.length>3&&<section className="section soft"><div className="shell"><div className="section-head"><span className="eyebrow">Hình ảnh thực tế</span><h2 className="section-title">Các mẫu mộ trong album dự án</h2></div><div className="gallery-grid">{photos.slice(3,11).map((p,i)=><figure key={p.id} className="gallery-item"><Image src={p.url} alt={`Mẫu mộ Thiên Phúc Vĩnh Hằng Viên ${i+4}`} fill sizes="(max-width: 700px) 50vw, 25vw" style={{objectFit:"cover"}}/></figure>)}</div></div></section>}
 </main>;
}
