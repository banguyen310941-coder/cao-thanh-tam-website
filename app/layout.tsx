import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageNavigator from "@/components/PageNavigator";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";
import "./homepage.css";
import "./cms.css";
import "./admin-enhancements.css";
import "./home-polish.css";
import "./home-fixes.css";
import "./home-reference.css";
import "./readability-fixes.css";
import "./home-readability.css";
import "./home-redesign.css";

const sans = Be_Vietnam_Pro({ subsets: ["latin", "vietnamese"], variable: "--font-sans", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hoavienthienphucvinhhang.com.vn"),
  title: { default: "Thiên Phúc Vĩnh Hằng Viên", template: "%s | Thiên Phúc Vĩnh Hằng Viên" },
  description: "Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên tại Uông Bí - Yên Tử, Quảng Ninh.",
  openGraph: { title: "Thiên Phúc Vĩnh Hằng Viên", description: "Không gian tưởng niệm sinh thái, trang trọng và bền vững giữa miền di sản Yên Tử.", type: "website", locale: "vi_VN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={sans.variable}><SiteHeader/>{children}<PageNavigator/><SiteFooter/><FloatingContact/><style>{`.page-navigator{background:#f3efe4;border-top:1px solid #dfd8ca;padding:46px 0}.page-navigator .shell{display:grid;grid-template-columns:330px 1fr;gap:55px;align-items:center}.page-navigator-heading span{font-size:10px;letter-spacing:.1em;font-weight:700;color:#9d6b26}.page-navigator-heading h2{font-size:23px;line-height:1.4;color:#173f31;margin:7px 0 0}.page-navigator nav{display:flex;flex-wrap:wrap;gap:9px}.page-navigator nav a{text-decoration:none;color:#24493c;background:#fff;border:1px solid #ddd7ca;border-radius:999px;padding:10px 14px;font-size:12px;font-weight:600;transition:.2s}.page-navigator nav a:hover{background:#174b39;color:#fff;border-color:#174b39}@media(max-width:800px){.page-navigator .shell{grid-template-columns:1fr;gap:22px}.page-navigator{padding:36px 0}}`}</style></body></html>;
}
