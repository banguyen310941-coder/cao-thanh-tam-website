import type { Metadata } from "next";
import { Cormorant_Garamond, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ subsets: ["latin", "vietnamese"], variable: "--font-display", weight: ["500", "600", "700"] });
const sans = Be_Vietnam_Pro({ subsets: ["latin", "vietnamese"], variable: "--font-sans", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "Cao Thanh Tâm", template: "%s | Cao Thanh Tâm" },
  description: "Website Cao Thanh Tâm — không gian trang trọng, hiện đại và giàu giá trị nhân văn.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}
