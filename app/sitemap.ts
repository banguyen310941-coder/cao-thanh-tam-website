import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hoavienthienphucvinhhang.com.vn";
  return ["", "/gioi-thieu", "/vi-tri", "/quy-hoach", "/san-pham", "/tien-ich", "/tien-do", "/thu-vien", "/tin-tuc", "/tin-tuc/khoi-dong-du-an-thien-phuc-vinh-hang-vien", "/tin-tuc/quy-hoach-nghia-trang-uong-bi-thien-phuc", "/tin-tuc/kinh-nghiem-tim-hieu-khong-gian-an-nghi", "/lien-he"].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
