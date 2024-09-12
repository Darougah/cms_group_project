
// export default function handler(req, res) {
//   res.setHeader('Content-Type', 'text/plain');
//   res.write('User-agent: *\nAllow: /\n');
//   res.end();
// }


export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",  // Allow all user agents
        allow: "/",      // Allow everything
        disallow: "/api/", // Disallow the API routes
      },
    ],
    sitemap: "https://cms-group-project.vercel.app/sitemap.xml", // Provide the sitemap URL
  };
}
