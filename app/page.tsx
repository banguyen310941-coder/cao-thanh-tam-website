import Link from "next/link";
import { ArrowRight, Flower2, Leaf, MapPin, Mountain, ShieldCheck, Sparkles, TreePine } from "lucide-react";

const products = [
  {
    name: "Khuôn viên đơn",
    desc: "Không gian tưởng niệm riêng tư, chỉn chu và hài hòa cùng cảnh quan.",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Khuôn viên song thân",
    desc: "Không gian trang trọng dành cho sự gắn kết và ký ức gia đình.",
    img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Khuôn viên gia tộc",
    desc: "Không gian riêng biệt, quy hoạch đồng bộ dành cho nhiều thế hệ.",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=85",
  },
];

const values = [
  [TreePine, "Sinh thái", "Cảnh quan xanh được tổ chức hài hòa với địa hình tự nhiên."],
  [Sparkles, "Trang trọng", "Kiến trúc tiết chế, tạo nên không gian tưởng niệm thanh tịnh."],
  [ShieldCheck, "Chu toàn", "Dịch vụ hướng tới sự tận tâm và bền vững cho mỗi gia đình."],
  [Flower2, "Nhân văn", "Gìn giữ ký ức bằng một trải nghiệm nhẹ nhàng và nhiều cảm xúc."],
];

export default function Home() {
  return <main>
    <section className="home-hero">
      <div className="hero-shade"/>
      <div className="shell home-hero-inner">
        <div className="home-hero-copy">
          <span className="eyebrow hero-eyebrow">Công viên nghĩa trang sinh thái · Quảng Ninh</span>
          <p className="hero-kicker">Một miền an tĩnh giữa thiên nhiên Yên Tử</p>
          <h1>THIÊN PHÚC<br/><em>Vĩnh Hằng Viên</em></h1>
          <p className="hero-intro">Nơi ký ức được gìn giữ trong không gian xanh, trang trọng và thanh tịnh — hướng tới giá trị bền vững cho nhiều thế hệ.</p>
          <div className="actions">
            <Link className="btn btn-gold" href="/gioi-thieu">Khám phá dự án <ArrowRight size={16}/></Link>
            <Link className="text-link" href="/lien-he">Đăng ký tham quan <span>↗</span></Link>
          </div>
        </div>
        <div className="hero-side-note">
          <span>Uông Bí · Yên Tử</span>
          <strong>Quảng Ninh</strong>
        </div>
      </div>
      <div className="hero-scroll">Kéo xuống để khám phá <span>↓</span></div>
    </section>

    <section className="facts-strip">
      <div className="shell facts-grid">
        <div><b>32,54</b><span>ha quy mô dự án</span></div>
        <div><b>451</b><span>tỷ đồng tổng vốn đầu tư</span></div>
        <div><b>2026</b><span>khởi động dự án</span></div>
        <div><b>Q2/2028</b><span>dự kiến hoàn thành</span></div>
      </div>
    </section>

    <section className="section intro-section">
      <div className="shell intro-grid">
        <div className="intro-heading">
          <span className="eyebrow">Về Thiên Phúc</span>
          <h2 className="section-title">An nhiên giữa<br/>miền di sản</h2>
          <span className="gold-line"/>
        </div>
        <div className="intro-copy">
          <p className="lead lead-large">Thiên Phúc Vĩnh Hằng Viên được định hướng trở thành một công viên nghĩa trang sinh thái hiện đại, nơi cảnh quan, kiến trúc và dịch vụ cùng tạo nên trải nghiệm tưởng niệm trang trọng.</p>
          <p>Không gian được phát triển tại khu vực Uông Bí - Yên Tử, Quảng Ninh, kết nối giá trị thiên nhiên với chiều sâu văn hóa và tinh thần của vùng đất di sản.</p>
          <Link className="arrow-link" href="/gioi-thieu">Tìm hiểu câu chuyện dự án <ArrowRight size={15}/></Link>
        </div>
      </div>
      <div className="shell image-composition">
        <div className="image-large"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85" alt="Cảnh quan thiên nhiên xanh"/></div>
        <div className="image-small"><img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85" alt="Không gian rừng xanh yên tĩnh"/></div>
        <div className="floating-card"><Mountain size={26}/><span>Giữa miền di sản</span><strong>Yên Tử</strong><p>Không gian an tĩnh, hòa mình vào cảnh quan thiên nhiên.</p></div>
      </div>
    </section>

    <section className="section values-section">
      <div className="shell">
        <div className="section-center-head">
          <span className="eyebrow">Giá trị cốt lõi</span>
          <h2 className="section-title">Một nơi để ký ức<br/>được tiếp nối</h2>
        </div>
        <div className="value-cards">
          {values.map(([Icon, title, desc]: any, i) => <article className="value-card" key={title}>
            <span className="value-index">0{i + 1}</span>
            <Icon size={25}/>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section product-showcase">
      <div className="shell product-head">
        <div><span className="eyebrow light-eyebrow">Không gian lựa chọn</span><h2 className="section-title">Gìn giữ yêu thương<br/>qua nhiều thế hệ</h2></div>
        <p>Mỗi khuôn viên được định hướng như một khoảng xanh riêng tư, cân bằng giữa thẩm mỹ, sự trang nghiêm và giá trị lưu truyền.</p>
      </div>
      <div className="shell products premium-products">
        {products.map((item, i) => <article className="product premium-product" key={item.name}>
          <img src={item.img} alt={item.name}/>
          <div className="product-number">0{i + 1}</div>
          <div className="product-copy">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <Link href="/san-pham">Khám phá <ArrowRight size={14}/></Link>
          </div>
        </article>)}
      </div>
    </section>

    <section className="section location-section">
      <div className="shell location-grid">
        <div className="location-visual">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85" alt="Cảnh quan Quảng Ninh"/>
          <div className="location-badge"><MapPin size={22}/><span>Uông Bí · Yên Tử</span><strong>Quảng Ninh</strong></div>
        </div>
        <div className="location-copy">
          <span className="eyebrow">Vị trí dự án</span>
          <h2 className="section-title">Chạm vào sự bình yên của miền Đông Bắc</h2>
          <p className="lead">Tọa lạc tại khu vực Uông Bí và Yên Tử, dự án nằm trong vùng cảnh quan có chiều sâu văn hóa, tâm linh và thiên nhiên đặc sắc của Quảng Ninh.</p>
          <div className="location-points">
            <div><Leaf size={18}/><span>Không gian cảnh quan xanh</span></div>
            <div><Mountain size={18}/><span>Gần vùng di sản Yên Tử</span></div>
            <div><MapPin size={18}/><span>Kết nối khu vực Uông Bí</span></div>
          </div>
          <Link className="btn btn-outline" href="/gioi-thieu">Xem thông tin dự án <ArrowRight size={15}/></Link>
        </div>
      </div>
    </section>

    <section className="experience-banner">
      <div className="experience-overlay"/>
      <div className="shell experience-copy">
        <span className="eyebrow light-eyebrow">Không gian tưởng niệm</span>
        <h2>Nơi bình yên<br/>trở thành di sản</h2>
        <p>Một hành trình được chăm chút từ cảnh quan, kiến trúc đến dịch vụ — để mỗi lần trở về đều là một khoảnh khắc nhẹ nhàng.</p>
        <Link className="btn btn-gold" href="/thu-vien">Khám phá không gian <ArrowRight size={15}/></Link>
      </div>
    </section>

    <section className="section consultation-section">
      <div className="shell consultation-grid">
        <div><span className="eyebrow">Đồng hành cùng gia đình</span><h2 className="section-title">Nhận tư vấn<br/>thông tin dự án</h2></div>
        <div><p className="lead">Để lại thông tin để được cập nhật chính sách, sản phẩm và lịch tham quan dự án khi có thông tin chính thức.</p><Link className="btn btn-gold" href="/lien-he">Đăng ký tư vấn <ArrowRight size={15}/></Link></div>
      </div>
    </section>
  </main>;
}
