/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://cms-group-project.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 50000,
  changefreq: "daily",
  priority: 0.8,
  autoLastmod: true,
  outDir: "./public",
};
