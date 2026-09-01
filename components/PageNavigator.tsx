import Link from "next/link";

const pages=[
 ["Giới thiệu","/gioi-thieu"],
 ["Vị trí","/vi-tri"],
 ["Quy hoạch","/quy-hoach"],
 ["Sản phẩm","/san-pham"],
 ["Tiện ích & Dịch vụ","/tien-ich"],
 ["Tiến độ","/tien-do"],
 ["Tin tức","/tin-tuc"],
 ["Liên hệ","/lien-he"],
];

export default function PageNavigator(){return <section className="page-navigator" aria-label="Khám phá Thiên Phúc Vĩnh Hằng Viên"><div className="shell"><div className="page-navigator-heading"><span>KHÁM PHÁ DỰ ÁN</span><h2>Tiếp tục tìm hiểu Thiên Phúc Vĩnh Hằng Viên</h2></div><nav>{pages.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></div></section>}
