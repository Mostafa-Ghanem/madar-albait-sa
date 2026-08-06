import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import { siteConfig } from "./src/site.config";

export default defineConfig({
  site: siteConfig.url,
  integrations: [
    sitemap(),
    mdx(),
    robotsTxt(),
    webmanifest({
      name: siteConfig.title,
      short_name: siteConfig.shortTitle,
      description: siteConfig.description,
      lang: siteConfig.lang,
      icon: "public/icon.svg",
      start_url: "/",
      background_color: "#f7faf8",
      theme_color: "#087b64",
      display: "standalone",
      config: { insertFaviconLinks: false, insertThemeColorMeta: false, insertManifestLink: false },
    }),
  ],
  markdown: { shikiConfig: { theme: "github-light" } },
  vite: { plugins: [tailwind()] },
});
