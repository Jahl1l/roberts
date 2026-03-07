import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://robertswebapps.com";
  const routes = [
    "",
    "/services",
    "/packages",
    "/portfolio",
    "/about",
    "/contact",
    "/free-consultation"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
