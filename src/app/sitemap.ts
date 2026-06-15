import type { MetadataRoute } from "next";

const routes = ["", "/about", "/teams", "/achievements", "/partners", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://xpoze-esports.example${route}`,
    lastModified: new Date("2026-06-15"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
