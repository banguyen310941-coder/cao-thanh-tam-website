import Link from "next/link";
import { ArrowRight, Bus, CalendarDays, Car, Coins, Flower2, HeartHandshake, Landmark, Leaf, MapPin, Mountain, ShieldCheck, Sparkles, TreePine } from "lucide-react";

const img={hero:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=88",overview:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",location:"https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1400&q=85"};
const values=[[TreePine,"CÔNG VIÊN SINH THÁI","Cảnh quan xanh hài hòa, bền vững"],[Landmark,"GIÁ TRỊ TÂM LINH","Gắn kết với văn hóa Yên Tử – Trúc Lâm"],[HeartHandshake,"NHÂN VĂN BỀN VỮNG","Không gian an nghỉ trang nghiêm, yên bình"],[ShieldCheck,"DỊCH VỤ CHU TOÀN","Đồng hành trọn đời cùng gia đình"]];
const products=[
 ["MỘ ĐƠN","Thiết kế trang trọng, hài hòa với thiên nhiên","https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85"],
 ["MỘ ĐÔI","Gắn kết yêu thương – Bên nhau vĩnh hằng","https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85"],
 ["MỘ GIA TỘC","Không gian tôn nghiêm cho các thế hệ","https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=85"]
];
const amenities=[[Landmark,"NHÀ TANG LỄ","Trang nghiêm, hiện đại"],[Mountain,"KHU HÓA TÁNG","Công nghệ hiện đại, thân thiện môi trường"],[ShieldCheck,"KHU LƯU GIỮ TRO CỐT","An toàn, trang trọng"],[TreePine,"NHÀ NGUYỆN","Không gian tĩnh lặng thanh tịnh"],[Flower2,"KHÔNG GIAN TƯỞNG NIỆM","Tôn vinh ký ức, tri ân người thân"],[Sparkles,"HỒ ĐIỀU HÒA","Cảnh quan sinh thái trong lành"],[Bus,"BÃI ĐỖ XE","Rộng rãi, thuận tiện"],[HeartHandshake,"KHU DỊCH VỤ","Đáp ứng đầy đủ mọi nhu cầu"]];
const news=[
 ["02/06/2026","Khởi động dự án Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên",img.overview],
 ["20/05/2026","Thiên Phúc Vĩnh Hằng Viên – Không gian an nghỉ sinh thái tại Yên Tử",img.hero],
 ["15/05/2026","Ý nghĩa phong thủy an nghỉ tại vùng đất linh thiêng Yên Tử",img.location],
 ["10/05/2026","Định hướng phát triển bền vững của Thiên Phúc Vĩnh Hằng Viên",img.overview]
];

export default function Home(){return <main className="ref-home">
<section className="ref-hero"><div className="shell ref-hero-copy"><h1>THIÊN PHÚC<br/>VĨNH HẰNG VIÊN</h1><h3>Kiến tạo không gian an nghỉ</h3><h2>THANH TỊNH – NHÂN VĂN – TRƯỜNG TỒN</h2><p>Công viên nghĩa trang sinh thái cao cấp tại Uông Bí – Yên Tử, nơi giao hòa giữa thiên nhiên và tâm linh.</p><div className="ref-actions"><Link href="/gioi-thieu" className="ref-btn green">KHÁM PHÁ DỰ ÁN</Link><Link href="/lien-he" className="ref-btn white"><CalendarDays size={16}/> ĐĂNG KÝ THAM QUAN</Link></div></div></section>

<section className="shell ref-facts"><div><MapPin/><p><b>32,54 ha</b><span>QUY MÔ DỰ ÁN</span></p></div><div><Coins/><p><b>~451 tỷ đồng</b><span>TỔNG MỨC ĐẦU TƯ</span></p></div><div><CalendarDays/><p><b>02/06/2026</b><span>KHỞI ĐỘNG DỰ ÁN</span></p></div><div><Sparkles/><p><b>Quý II/2028</b><span>DỰ KIẾN HOÀN THÀNH</span></p></div></section>

<section className="ref-overview"><div className="shell ref-overview-grid"><div className="ref-overview-copy"><span className="ref-ornament">♧</span><h2>TỔNG QUAN DỰ ÁN</h2><p>Thiên Phúc Vĩnh Hằng Viên là công viên nghĩa trang sinh thái hiện đại, kết hợp hài hòa giữa giá trị truyền thống, kiến trúc tâm linh và cảnh quan thiên nhiên, mang đến không gian an nghỉ thanh tịnh, nhân văn và bền vững cho muôn đời sau.</p><Link className="ref-btn green" href="/gioi-thieu">TÌM HIỂU THÊM</Link></div><div className="ref-values">{values.map(([Icon,t,d]:any)=><article key={t}><Icon/><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

<section className="ref-location"><div className="ref-location-image"/><div className="ref-location-copy"><h2>VỊ TRÍ & KẾT NỐI</h2><p>Dự án tọa lạc tại địa bàn phường Uông Bí và phường Yên Tử, tỉnh Quảng Ninh – vùng đất linh thiêng, giàu truyền thống văn hóa và tâm linh.</p><div className="ref-distance"><div><Mountain/><b>Yên Tử</b><span>Kết nối vùng di sản</span></div><div><MapPin/><b>Uông Bí</b><span>Kết nối trung tâm</span></div><div><Car/><b>Quảng Ninh</b><span>Giao thông thuận tiện</span></div></div><Link className="ref-btn white outline" href="/gioi-thieu">XEM CHI TIẾT VỊ TRÍ <ArrowRight size={14}/></Link></div></section>

<section className="ref-section"><div className="shell"><div className="ref-title"><h2>SẢN PHẨM AN TÁNG</h2><p>Đa dạng sản phẩm – Phù hợp nhu cầu – Tôn vinh giá trị truyền thống</p></div><div className="ref-products">{products.map(([n,d,i])=><article key={n}><img src={i} alt={n}/><div><Flower2/><h3>{n}</h3><p>{d}</p><Link href="/san-pham">Xem chi tiết <ArrowRight size={12}/></Link></div></article>)}</div></div></section>

<section className="ref-amenity"><div className="shell"><div className="ref-title"><h2>TIỆN ÍCH & DỊCH VỤ</h2><p>Hệ thống tiện ích đồng bộ – Dịch vụ chuyên nghiệp – An tâm trọn đời</p></div><div className="ref-amenity-grid">{amenities.map(([Icon,n,d]:any)=><article key={n}><Icon/><h3>{n}</h3><p>{d}</p></article>)}</div></div></section>

<section className="ref-progress"><div className="shell ref-progress-grid"><div><span>♧</span><h2>TIẾN ĐỘ DỰ ÁN</h2><p>Dự án đang được triển khai đúng tiến độ, dự kiến hoàn thành và đưa vào hoạt động trong Quý II/2028.</p><Link href="/tin-tuc" className="ref-btn gold-outline">XEM THÊM HÌNH ẢNH</Link></div><div className="ref-progress-cards">{["Chuẩn bị & San nền","Thi công hạ tầng","Thi công công trình","Hoàn thiện cảnh quan"].map((x,i)=><article key={x}><img src={[img.location,img.hero,img.overview,img.location][i]} alt={x}/><p>{x}</p></article>)}</div></div></section>

<section className="ref-section ref-news"><div className="shell"><div className="ref-news-head"><h2>TIN TỨC</h2><Link href="/tin-tuc">XEM TẤT CẢ ›</Link></div><div className="ref-news-grid">{news.map(([date,title,image])=><article key={title}><img src={image} alt={title}/><div><small>{date}</small><h3>{title}</h3><Link href="/tin-tuc">Xem chi tiết <ArrowRight size={12}/></Link></div></article>)}</div></div></section>

<section className="ref-register"><div className="shell"><div className="ref-title"><h2>ĐĂNG KÝ THAM QUAN & TƯ VẤN</h2><p>Đội ngũ chuyên viên tận tâm luôn sẵn sàng hỗ trợ Quý khách.</p></div><div className="ref-register-box"><input placeholder="Họ và tên*"/><input placeholder="Số điện thoại*"/><select defaultValue=""><option value="" disabled>Nhu cầu quan tâm</option><option>Sản phẩm an táng</option><option>Tham quan dự án</option><option>Tư vấn thông tin</option></select><Link href="/lien-he" className="ref-btn green">ĐĂNG KÝ NGAY</Link></div></div></section>
</main>}
