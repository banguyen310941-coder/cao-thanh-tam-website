import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cao-thanh-tam-website.vercel.app";
  return ["", "/gioi-thieu", "/san-pham", "/tien-ich", "/thu-vien", "/tin-tuc", "/lien-he"].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
