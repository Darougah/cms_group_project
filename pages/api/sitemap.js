import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export default async function handler(req, res) {
  try {
    const paths = await StoryblokCMS.getStaticPaths();

    const sitemap = paths
      .map((path) => {
        const slug = path.slug.join("/");
        const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`;
        return `<url>
          <loc>${fullUrl}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.8</priority>
        </url>`;
      })
      .join("");

    const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemap}
      </urlset>`;

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(xmlSitemap);
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).send("Error generating sitemap");
  }
}
