import assert from "node:assert/strict";

const base = process.env.SEO_BASE_URL || "http://localhost:3000";
// A local build without Blob credentials has no CMS homepage hero image.
const emptyCms = process.env.SEO_EMPTY_CMS === "1";
const canonicalBase = "https://www.hoavienthienphucvinhhang.com.vn";
const brand = "Thiên Phúc Vĩnh Hằng Viên";
const routes = ["", "/gioi-thieu", "/vi-tri", "/quy-hoach", "/san-pham", "/tien-ich", "/tien-do", "/thu-vien", "/tin-tuc", "/tin-tuc/khoi-dong-du-an-thien-phuc-vinh-hang-vien", "/tin-tuc/quy-hoach-nghia-trang-uong-bi-thien-phuc", "/tin-tuc/kinh-nghiem-tim-hieu-khong-gian-an-nghi", "/lien-he"];
const titles = new Set();
const descriptions = new Set();

function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map((m) => [m[1].toLowerCase(), m[2]]));
}

async function get(path) {
  const response = await fetch(`${base}${path}`, { redirect: "error" });
  assert.equal(response.status, 200, `${path || "/"}: HTTP status`);
  assert(!/noindex/i.test(response.headers.get("x-robots-tag") || ""), `${path}: X-Robots-Tag`);
  return response.text();
}

const robots = await get("/robots.txt");
assert.match(robots, new RegExp(`^Sitemap: ${canonicalBase.replaceAll(".", "\\.")}/sitemap\\.xml$`, "m"));
assert(!robots.includes("vercel.app"), "robots must not advertise the Vercel alias");
const sitemap = await get("/sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
assert.deepEqual(sitemapUrls.sort(), routes.map((route) => `${canonicalBase}${route}`).sort());

for (const route of routes) {
  const html = await get(route);
  const titleTags = [...html.matchAll(/<title>(.*?)<\/title>/gs)];
  assert.equal(titleTags.length, 1, `${route}: one title`);
  const title = titleTags[0][1];
  assert.equal(title.split(brand).length - 1, 1, `${route}: brand once in title`);
  assert(!titles.has(title), `${route}: unique title`);
  titles.add(title);
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => attrs(m[0]));
  const descriptionTags = metas.filter((meta) => meta.name === "description");
  assert.equal(descriptionTags.length, 1, `${route}: one description`);
  const description = descriptionTags[0].content;
  assert(description?.length > 20, `${route}: descriptive metadata`);
  assert(!descriptions.has(description), `${route}: unique description`);
  descriptions.add(description);
  const robotTags = metas.filter((meta) => meta.name === "robots");
  assert.equal(robotTags.length, 1, `${route}: one robots directive`);
  assert.match(robotTags[0].content, /\bindex\b/);
  assert(!/noindex/.test(robotTags[0].content), `${route}: public page stays indexable`);
  const canonicals = [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attrs(m[0])).filter((link) => link.rel === "canonical");
  assert.equal(canonicals.length, 1, `${route}: one canonical`);
  assert.equal(canonicals[0].href.replace(/\/$/, ""), `${canonicalBase}${route}`, `${route}: canonical`);
  if (!(emptyCms && route === "")) {
    assert.equal([...html.matchAll(/<h1(?:\s[^>]*)?>/g)].length, 1, `${route}: one H1`);
  }
  for (const schema of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) JSON.parse(schema[1]);
  if (route === "/thu-vien") {
    assert(description.includes("tham khảo") && description.includes("chưa phải hình ảnh dự án chính thức"), "gallery metadata must not imply official project images");
    assert(html.includes("images.unsplash.com"), "gallery image sources remain unchanged");
  }
  console.log(`PASS ${route || "/"}: title, description, canonical, indexability, ${emptyCms && route === "" ? "H1 skipped (no CMS hero)" : "H1"} and JSON-LD`);
}
console.log(`PASS robots.txt, sitemap.xml and ${routes.length} public pages`);
