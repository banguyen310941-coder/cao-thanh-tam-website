import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import { getCmsData } from "@/lib/cms";

export const dynamic = "force-dynamic";

const siteUrl = "https://www.hoavienthienphucvinhhang.com.vn";
const pageUrl = `${siteUrl}/gioi-thieu`;
const seoTitle = "Giới thiệu Thiên Phúc Vĩnh Hằng Viên | Công viên nghĩa trang Quảng Ninh";
const seoDescription = "Giới thiệu Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên tại Uông Bí – Yên Tử, Quảng Ninh: quy mô 32,54 ha, vốn đầu tư khoảng 451 tỷ đồng, định hướng sinh thái, hiện đại và nhân văn.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "Thiên Phúc Vĩnh Hằng Viên",
    "Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên",
    "nghĩa trang Quảng Ninh",
    "công viên nghĩa trang Quảng Ninh",
    "nghĩa trang Uông Bí",
    "nghĩa trang Yên Tử",
    "công viên nghĩa trang Uông Bí",
    "Long Hải Quảng Ninh",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "article",
    locale: "vi_VN",
    url: pageUrl,
    siteName: "Thiên Phúc Vĩnh Hằng Viên",
    title: seoTitle,
    description: seoDescription,
  },
  twitter: { card: "summary_large_image", title: seoTitle, description: seoDescription },
  robots: { index: true, follow: true },
};

const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").toLowerCase();

export default async function AboutPage() {
  const cms = await getCmsData();
  const album = cms.albums.find((a) => norm(a.title).includes("cong trinh kien truc"));
  const photos = album ? cms.photos.filter((p) => p.albumId === album.id) : [];
  const heroImage = photos[0]?.url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Giới thiệu Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên",
    description: seoDescription,
    mainEntityOfPage: pageUrl,
    inLanguage: "vi-VN",
    author: { "@type": "Organization", name: "Thiên Phúc Vĩnh Hằng Viên", url: siteUrl },
    publisher: { "@type": "Organization", name: "Thiên Phúc Vĩnh Hằng Viên", url: siteUrl },
    ...(heroImage ? { image: [heroImage] } : {}),
    about: {
      "@type": "Place",
      name: "Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên",
      address: { "@type": "PostalAddress", addressLocality: "Uông Bí – Yên Tử", addressRegion: "Quảng Ninh", addressCountry: "VN" },
    },
  };

  return (
    <main className="about-seo-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InnerHero
        eyebrow="Công viên nghĩa trang sinh thái tại Quảng Ninh"
        title="Giới thiệu Thiên Phúc Vĩnh Hằng Viên"
        description="Không gian an nghỉ được định hướng theo mô hình nghĩa trang tập trung, hiện đại, đồng bộ hạ tầng, hài hòa giữa giá trị tâm linh truyền thống và cảnh quan sinh thái tại Uông Bí – Yên Tử, Quảng Ninh."
      />

      <article>
        <section className="section">
          <div className="shell two">
            <div>
              <span className="eyebrow">Tổng quan dự án</span>
              <h1 className="section-title">Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên – không gian tưởng niệm giữa miền di sản Quảng Ninh</h1>
              <p className="lead"><strong>Thiên Phúc Vĩnh Hằng Viên</strong> là dự án công viên nghĩa trang được triển khai trên địa bàn phường Uông Bí và phường Yên Tử, tỉnh Quảng Ninh. Dự án do <strong>Công ty Cổ phần Long Hải Quảng Ninh</strong> làm chủ đầu tư, có quy mô khoảng <strong>32,54 ha</strong> và tổng mức đầu tư khoảng <strong>451 tỷ đồng</strong>.</p>
              <p className="lead">Theo thông tin được cơ quan địa phương công bố tại lễ khởi động ngày 02/06/2026, dự án được định hướng xây dựng thành nghĩa trang tập trung, hiện đại, đồng bộ về hạ tầng kỹ thuật, kết hợp hài hòa giữa yếu tố tâm linh truyền thống với cảnh quan sinh thái. Công trình dự kiến hoàn thành và đưa vào hoạt động trong <strong>Quý II/2028</strong>.</p>
            </div>
            {heroImage ? <div style={{ position: "relative", minHeight: 420, borderRadius: 20, overflow: "hidden" }}><Image src={heroImage} alt="Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên tại Uông Bí Yên Tử Quảng Ninh" fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} /></div> : <div className="quote-panel"><p>“Một không gian tưởng niệm cần sự trang nghiêm, thanh tịnh, đồng bộ và bền vững theo thời gian.”</p></div>}
          </div>
        </section>

        <section className="section soft"><div className="shell values-grid">
          <article><b>32,54 ha</b><h2>Quy mô dự án</h2><p>Không gian quy hoạch tập trung cho hạ tầng, cảnh quan, công trình tâm linh và các khu chức năng phục vụ nhu cầu an táng.</p></article>
          <article><b>~451 tỷ đồng</b><h2>Tổng mức đầu tư</h2><p>Nguồn lực đầu tư cho hệ thống hạ tầng kỹ thuật, cảnh quan và các công trình chức năng của dự án.</p></article>
          <article><b>02/06/2026</b><h2>Lễ khởi động</h2><p>Dấu mốc mở đầu giai đoạn triển khai mới của Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên.</p></article>
          <article><b>Q2/2028</b><h2>Dự kiến hoàn thành</h2><p>Thời điểm dự kiến công trình hoàn thành và đưa vào hoạt động theo thông tin công bố của địa phương.</p></article>
        </div></section>

        <section className="section"><div className="shell prose-content">
          <span className="eyebrow">Tầm nhìn phát triển</span>
          <h2 className="section-title">Từ nghĩa trang truyền thống đến công viên nghĩa trang sinh thái, văn minh</h2>
          <p>Trong quá trình đô thị hóa, nhu cầu về một hệ thống nghĩa trang tập trung, có quy hoạch và được đầu tư hạ tầng đồng bộ ngày càng trở nên rõ ràng. Một công viên nghĩa trang hiện đại không đơn thuần là nơi an táng. Đó còn là không gian tưởng niệm, nơi các thế hệ trong gia đình có thể trở về tri ân người đã khuất trong một môi trường trang nghiêm, sạch sẽ, có cảnh quan và được tổ chức khoa học.</p>
          <p>Thiên Phúc Vĩnh Hằng Viên được phát triển trong bối cảnh Quảng Ninh đang từng bước chuyển đổi hệ thống nghĩa trang từ mô hình nhỏ lẻ, phân tán sang các khu nghĩa trang tập trung và công viên nghĩa trang có hạ tầng kỹ thuật đồng bộ. Định hướng này góp phần sử dụng quỹ đất hiệu quả hơn, giảm tác động môi trường và tạo sự đồng bộ với quá trình phát triển đô thị.</p>
          <p>Với dự án tại Uông Bí – Yên Tử, yếu tố sinh thái được đặt song hành với giá trị tâm linh truyền thống. Không gian cây xanh, mặt nước, đường nội khu và các công trình kiến trúc được định hướng tạo thành một tổng thể thống nhất. Mục tiêu không phải tạo cảm giác nặng nề của một nghĩa trang khép kín, mà hướng tới một không gian tưởng niệm thanh tịnh, có chiều sâu văn hóa và phù hợp với cảnh quan địa phương.</p>

          <h2>Vị trí tại Uông Bí – Yên Tử và giá trị của không gian tâm linh</h2>
          <p>Dự án nằm trên địa bàn hai phường Uông Bí và Yên Tử, tỉnh Quảng Ninh. Đây là khu vực gắn với một vùng văn hóa – tâm linh đặc biệt của miền Đông Bắc. Yên Tử từ lâu được biết đến như một không gian có giá trị lớn về lịch sử, văn hóa và đời sống tinh thần. Vì vậy, việc tổ chức một công viên nghĩa trang tại khu vực này đòi hỏi sự hài hòa giữa công năng sử dụng, cảnh quan, môi trường và tính trang nghiêm.</p>
          <p>Đối với các gia đình, vị trí của nơi an nghỉ không chỉ được nhìn nhận qua khoảng cách địa lý. Sự thuận tiện trong hành trình thăm viếng, môi trường xung quanh, không gian cây xanh, tổ chức giao thông nội khu và cảm giác thanh tịnh đều là những yếu tố cần cân nhắc lâu dài. Một nơi an nghỉ được quy hoạch bài bản giúp hoạt động tưởng niệm vào ngày giỗ, tiết Thanh Minh hay các dịp truyền thống trở nên thuận tiện và trang trọng hơn.</p>
          <p>Thiên Phúc Vĩnh Hằng Viên vì thế được định hướng như một phần của hệ thống hạ tầng xã hội tại khu vực phía Tây Quảng Ninh, đáp ứng nhu cầu an táng của người dân địa phương và khu vực lân cận. Khi hoàn thiện, dự án được kỳ vọng góp phần thay thế dần mô hình nghĩa trang nhỏ lẻ, đồng thời hình thành không gian xanh, sạch và có quản lý tập trung.</p>

          <h2>Quy mô 32,54 ha và định hướng quy hoạch đồng bộ</h2>
          <p>Quy mô khoảng 32,54 ha tạo điều kiện để dự án tổ chức nhiều nhóm chức năng trong cùng một tổng thể. Theo các thông tin đã được địa phương công bố trong quá trình triển khai, dự án có định hướng bố trí các hạng mục phục vụ tang lễ, lưu giữ tro cốt, không gian cây xanh, hồ điều hòa, bãi đỗ xe, đường giao thông và các công trình phụ trợ. Việc bố trí cụ thể được thực hiện theo hồ sơ quy hoạch và quá trình triển khai thực tế của dự án.</p>
          <p>Điểm quan trọng của mô hình công viên nghĩa trang là tính đồng bộ. Thay vì các phần mộ hình thành tự phát, hạ tầng giao thông, thoát nước, cây xanh và các khu chức năng được tổ chức từ quy hoạch tổng thể. Điều này giúp không gian có trật tự, thuận tiện cho việc chăm sóc, thăm viếng và quản lý lâu dài.</p>
          <p>Quy hoạch đồng bộ cũng tạo điều kiện dành tỷ lệ phù hợp cho cảnh quan. Cây xanh và mặt nước không chỉ có giá trị thẩm mỹ mà còn giúp tạo khoảng đệm, cải thiện vi khí hậu và giảm cảm giác khô cứng của các công trình xây dựng. Với một dự án có vòng đời sử dụng dài, chất lượng cảnh quan và khả năng duy trì cảnh quan theo thời gian là những yếu tố đặc biệt quan trọng.</p>

          <h2>Hạ tầng kỹ thuật và yêu cầu bảo vệ môi trường</h2>
          <p>Một nghĩa trang tập trung hiện đại phải được xem xét như một hệ thống hạ tầng hoàn chỉnh. Đường giao thông nội khu cần phục vụ việc di chuyển của gia đình và các hoạt động vận hành. Hệ thống thoát nước, xử lý chất thải, cây xanh, bãi đỗ xe và các công trình dịch vụ cần được tổ chức phù hợp với quy hoạch, tiêu chuẩn xây dựng và quy định về môi trường.</p>
          <p>Tại lễ khởi động dự án, chính quyền địa phương nhấn mạnh yêu cầu chủ đầu tư và các đơn vị thi công thực hiện nghiêm các cam kết về tiến độ, chất lượng công trình, an toàn lao động, phòng cháy chữa cháy và bảo vệ môi trường. Đây là những yêu cầu nền tảng đối với một dự án có tính chất đặc thù và có ảnh hưởng lâu dài đến cộng đồng.</p>
          <p>Về mặt xã hội, việc phát triển nghĩa trang tập trung còn có ý nghĩa giảm dần tình trạng các khu chôn cất nhỏ lẻ, sử dụng đất manh mún và khó kiểm soát về môi trường. Khi được vận hành đúng quy định, mô hình công viên nghĩa trang có thể hỗ trợ quản lý quỹ đất tốt hơn, đồng thời tạo điều kiện chuẩn hóa các hoạt động tang lễ và tưởng niệm theo hướng văn minh.</p>

          <h2>Giá trị tâm linh truyền thống trong một không gian hiện đại</h2>
          <p>Người Việt coi trọng đạo lý uống nước nhớ nguồn và việc chăm sóc nơi an nghỉ của tổ tiên. Bởi vậy, một công viên nghĩa trang dù được đầu tư theo tiêu chuẩn hiện đại vẫn cần giữ được sự gần gũi với văn hóa tưởng niệm truyền thống. Yếu tố hiện đại ở đây không có nghĩa là thay thế truyền thống, mà là sử dụng quy hoạch, kiến trúc và dịch vụ để hỗ trợ các nghi thức được thực hiện trang trọng, thuận tiện hơn.</p>
          <p>Các không gian tâm linh, khu tưởng niệm, cây xanh và kiến trúc cảnh quan cần tạo cảm giác tĩnh tại. Sự tiết chế trong hình thức, tính cân đối trong bố cục và sự hài hòa với thiên nhiên có thể giúp gia đình cảm nhận được sự bình an khi đến thăm viếng. Đây cũng là lý do khái niệm “công viên nghĩa trang” ngày càng được quan tâm: cảnh quan trở thành một phần quan trọng của trải nghiệm tưởng niệm.</p>
          <p>Đối với Thiên Phúc Vĩnh Hằng Viên, định hướng kết hợp yếu tố tâm linh truyền thống với cảnh quan sinh thái đã được nêu trong thông tin chính thức về dự án. Đây là nền tảng để hình thành một không gian vừa đáp ứng công năng an táng, vừa có khả năng duy trì giá trị tinh thần và cảnh quan trong thời gian dài.</p>

          <h2>Chủ đầu tư Công ty Cổ phần Long Hải Quảng Ninh</h2>
          <p>Công ty Cổ phần Long Hải Quảng Ninh là chủ đầu tư triển khai Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên. Theo thông tin từ địa phương, doanh nghiệp đã tham gia quá trình thực hiện các thủ tục quy hoạch, giải phóng mặt bằng, thiết kế, đánh giá tác động môi trường và triển khai một số hạng mục của dự án trong những năm trước khi lễ khởi động giai đoạn mới được tổ chức vào tháng 6/2026.</p>
          <p>Dự án đã trải qua một quá trình chuẩn bị kéo dài với nhiều thủ tục và vướng mắc cần tháo gỡ. Việc tổ chức lễ khởi động ngày 02/06/2026 vì vậy là dấu mốc quan trọng, thể hiện việc dự án bước sang giai đoạn triển khai với yêu cầu rõ ràng hơn về tiến độ, chất lượng và sự phối hợp giữa chủ đầu tư với chính quyền địa phương.</p>
          <p>Trong quá trình tiếp theo, thông tin về các hạng mục, tiến độ thi công và hình ảnh thực tế cần được cập nhật minh bạch theo từng giai đoạn. Website Thiên Phúc Vĩnh Hằng Viên sẽ ưu tiên sử dụng hình ảnh dự án và dữ liệu được cập nhật để người quan tâm có thể theo dõi quá trình hình thành công viên nghĩa trang.</p>

          <h2>Tiến độ từ lễ khởi động năm 2026 đến mục tiêu Quý II/2028</h2>
          <p>Ngày 02/06/2026, lễ khởi động Dự án Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên được tổ chức với sự tham dự của đại diện chính quyền hai phường Uông Bí, Yên Tử, chủ đầu tư, đối tác và người dân. Theo thông tin công bố, dự án dự kiến hoàn thành và đưa vào hoạt động trong Quý II/2028.</p>
          <p>Khoảng thời gian triển khai này là giai đoạn quan trọng để hoàn thiện hạ tầng, cảnh quan và các công trình theo quy hoạch. Tiến độ thực tế có thể được cập nhật theo quá trình thi công, thủ tục liên quan và điều kiện triển khai. Vì vậy, người quan tâm nên theo dõi mục <Link href="/tien-do">Tiến độ dự án</Link> để xem những thông tin và hình ảnh mới được công bố trên website.</p>
          <p>Việc công khai tiến độ bằng hình ảnh thực tế giúp khách hàng và gia đình có cơ sở trực quan hơn khi tìm hiểu dự án. Đây cũng là nguyên tắc mà website hướng tới: phân biệt rõ hình ảnh thực tế, hình ảnh quy hoạch và phối cảnh minh họa, hạn chế gây nhầm lẫn về tình trạng hoàn thiện của từng hạng mục.</p>

          <h2>Vì sao mô hình công viên nghĩa trang ngày càng được quan tâm?</h2>
          <p>Đối với nhiều gia đình, lựa chọn nơi an nghỉ là một quyết định có tính dài hạn qua nhiều thế hệ. Ngoài yếu tố vị trí, người tìm hiểu thường quan tâm đến quy hoạch, cảnh quan, khả năng chăm sóc, sự thuận tiện khi thăm viếng và tính ổn định của khu vực. Mô hình công viên nghĩa trang tập trung có lợi thế ở khả năng tổ chức những yếu tố này trong cùng một hệ thống.</p>
          <p>Từ góc độ đô thị, nghĩa trang tập trung giúp giảm tình trạng chôn cất phân tán và tạo cơ sở cho việc quản lý môi trường, đất đai tốt hơn. Từ góc độ gia đình, không gian được chăm sóc và tổ chức đồng bộ có thể giảm bớt gánh nặng duy tu riêng lẻ, đồng thời tạo một nơi tưởng niệm trang trọng hơn. Tuy nhiên, khi lựa chọn, gia đình vẫn cần tìm hiểu kỹ hồ sơ pháp lý, quy hoạch, loại hình sản phẩm, chính sách dịch vụ và tiến độ thực tế.</p>
          <p>Thiên Phúc Vĩnh Hằng Viên được định hướng đáp ứng nhu cầu đó tại Uông Bí – Yên Tử và khu vực phía Tây Quảng Ninh. Quy mô dự án, định hướng sinh thái và việc đầu tư hạ tầng đồng bộ là những thông tin nền tảng để người quan tâm tiếp tục tìm hiểu sâu hơn trước khi đưa ra quyết định phù hợp với nhu cầu gia đình.</p>

          <h2>Thông tin nên tìm hiểu trước khi lựa chọn nơi an nghỉ</h2>
          <p>Mỗi gia đình có nhu cầu khác nhau về hình thức an táng, quy mô khuôn viên và cách thức tưởng niệm. Vì vậy, trước khi lựa chọn, nên xác định rõ nhu cầu sử dụng hiện tại và dài hạn. Gia đình có thể tìm hiểu <Link href="/quy-hoach">quy hoạch tổng thể</Link>, vị trí các phân khu, hệ thống giao thông, cảnh quan, công trình chung và các loại hình được giới thiệu tại mục <Link href="/san-pham">Sản phẩm</Link>.</p>
          <p>Bên cạnh đó, việc khảo sát thực tế là bước quan trọng. Hình ảnh trên website giúp hình dung ban đầu nhưng không thay thế cho việc trực tiếp quan sát địa hình, đường tiếp cận và tiến độ thi công. Nếu cần trao đổi trước khi đi khảo sát, người quan tâm có thể liên hệ hotline để được cung cấp thông tin phù hợp với thời điểm hiện tại.</p>
          <p>Website không nên được xem là tài liệu thay thế hồ sơ pháp lý hay văn bản của cơ quan có thẩm quyền. Các thông số quan trọng về dự án được trình bày dựa trên nguồn công bố của địa phương và dữ liệu dự án; những nội dung có thể thay đổi theo quá trình triển khai sẽ được cập nhật khi có thông tin mới.</p>

          <h2>Thiên Phúc Vĩnh Hằng Viên hướng tới giá trị bền vững cho nhiều thế hệ</h2>
          <p>Một nơi an nghỉ bền vững cần nhiều hơn một vị trí đẹp. Đó là sự kết hợp giữa quy hoạch có tầm nhìn, hạ tầng được đầu tư, cảnh quan được duy trì, môi trường được kiểm soát và cách vận hành tôn trọng giá trị văn hóa. Những yếu tố này quyết định chất lượng không gian không chỉ ở thời điểm hoàn thành mà còn trong nhiều năm sau đó.</p>
          <p>Với quy mô 32,54 ha và tổng mức đầu tư khoảng 451 tỷ đồng, Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên đang được triển khai theo định hướng nghĩa trang tập trung, hiện đại và sinh thái. Vị trí Uông Bí – Yên Tử tạo nên bối cảnh riêng cho dự án, nơi cảnh quan thiên nhiên và đời sống tâm linh có mối liên hệ sâu sắc.</p>
          <p>Trong hành trình phát triển, giá trị quan trọng nhất vẫn là xây dựng một không gian đủ trang nghiêm để tưởng nhớ người đã khuất, đủ thuận tiện để người thân trở về thăm viếng và đủ bền vững để gìn giữ ký ức gia đình qua nhiều thế hệ. Đó cũng là định hướng mà Thiên Phúc Vĩnh Hằng Viên hướng tới khi từng bước hoàn thiện tại Quảng Ninh.</p>
        </div></section>

        {photos.length > 1 && <section className="section soft"><div className="shell"><div className="section-head"><span className="eyebrow">Hình ảnh dự án</span><h2 className="section-title">Kiến trúc và cảnh quan Thiên Phúc Vĩnh Hằng Viên</h2><p>Hình ảnh được lấy trực tiếp từ thư viện dự án đang quản lý trên website.</p></div><div className="gallery-grid">{photos.slice(1, 9).map((p, i) => <figure key={p.id} className="gallery-item"><Image src={p.url} alt={`Kiến trúc và cảnh quan Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên ${i + 2}`} fill sizes="(max-width: 700px) 100vw, 25vw" style={{ objectFit: "cover" }} /></figure>)}</div></div></section>}

        <section className="section"><div className="shell"><div className="quote-panel"><span className="eyebrow">Tìm hiểu dự án</span><h2>Nhận thông tin Thiên Phúc Vĩnh Hằng Viên</h2><p>Để tìm hiểu vị trí, quy hoạch, sản phẩm và lịch khảo sát dự án tại Uông Bí – Yên Tử, vui lòng liên hệ trực tiếp để nhận thông tin cập nhật.</p><div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:20}}><a className="btn primary" href="tel:0976074385">Gọi 0976 074 385</a><Link className="btn ghost" href="/lien-he">Liên hệ tư vấn</Link></div></div></div></section>
      </article>
    </main>
  );
}
