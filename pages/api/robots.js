export default function Robots() {
  return {
    rules: [
      {
        userAgent: '*',  // Applies to all user agents
        allow: '/',      // Allow all routes to be crawled
        disallow: '/api/',  // Disallow crawling of API routes
      },
      {
        userAgent: 'Googlebot',  // Special rules for Googlebot
        allow: '/',  // Allow all public routes
        disallow: '/private/',  // Disallow Googlebot from crawling private routes
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,  // Link to the sitemap
  };
}
