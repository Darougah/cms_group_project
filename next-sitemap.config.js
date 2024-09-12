/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://cms-group-project.vercel.app',
  generateRobotsTxt: true,  // Generate a robots.txt file
  sitemapSize: 50000,  // Set a large number to prevent splitting
  changefreq: 'daily',  // Change frequency of the content
  priority: 0.8,  // Default priority of URLs
  autoLastmod: true,  // Automatically add last modified timestamp
};
