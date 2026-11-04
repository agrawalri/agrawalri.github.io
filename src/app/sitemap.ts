import type { MetadataRoute } from "next";

import { DATA } from "@/app/data";

export const dynamic = "force-static";

const baseUrl = "https://agrawalri.github.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = ["", "/projects", "/about"].map((route) => ({
        url: `${baseUrl}${route}/`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1.0 : 0.8,
    }));

    const projectRoutes: MetadataRoute.Sitemap = Object.values(DATA.PROJECTS)
        .filter((p) => p.SLUG)
        .map((p) => ({
            url: `${baseUrl}/projects/${p.SLUG}/`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        }));

    return [...staticRoutes, ...projectRoutes];
}
