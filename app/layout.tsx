import type { Metadata } from "next";
import { Cormorant_Garamond, Be_Vietnam_Pro } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";
import "./homepage.css";
import "./cms.css";
import "./admin-enhancements.css";
import "./home-polish.css";
import "./home-fixes.css";
import "./home-reference.css";
import "./readability-fixes.css";

const display = Cormorant_Garamond({ subsets: ["latin", "vietnamese"], variable: "--font-display", weight: ["500", "600", "700"] });
const sans = Be_Vietnam_Pro({ subsets: ["latin", "vietnamese"], variable: "--font-sans", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hoavienthienphucvinhhang.com.vn"),
  title: { default: "Thiên Phúc Vĩnh Hằng Viên", template: "%s | Thiên Phúc Vĩnh Hằng Viên" },
  description: "Công viên nghĩa trang Thiên Phúc Vĩnh Hằng Viên tại Uông Bí - Yên Tử, Quảng Ninh.",
  openGraph: {
    title: "Thiên Phúc Vĩnh Hằng Viên",
    description: "Không gian tưởng niệm sinh thái, trang trọng và bền vững giữa miền di sản Yên Tử.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${display.variable} ${sans.variable}`}><SiteHeader/>{children}<SiteFooter/></body></html>;
}
