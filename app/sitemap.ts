import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.hoavienthienphucvinhhang.com.vn";
  return ["", "/gioi-thieu", "/vi-tri", "/quy-hoach", "/san-pham", "/tien-ich", "/tien-do", "/thu-vien", "/tin-tuc", "/lien-he"].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
