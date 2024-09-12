
// import { getStoryblokApi } from '@storyblok/react';

// export default async function handler(req, res) {
//   const StoryblokApi = getStoryblokApi();
//   const { data } = await StoryblokApi.get('cdn/links/');

//   let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

//   Object.keys(data.links).forEach((link) => {
//     const url = data.links[link];
//     sitemap += `<url>\n<loc>https://yourwebsite.com/${url.slug}</loc>\n</url>\n`;
//   });

//   sitemap += '</urlset>';
//   res.setHeader('Content-Type', 'application/xml');
//   res.write(sitemap);
//   res.end();
// }


import { StoryblokCMS } from "@/utils/cms"; // Make sure this is your Storyblok API instance
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN,  
  use: [apiPlugin],
});

export default async function sitemap() {
  try {
    // Fetch all static paths from Storyblok CMS (ensure this method exists)
    const pages = await StoryblokCMS.getStaticPaths();

    // Map over the fetched pages and return the correct sitemap structure
    const sitemap = pages.map((page) => {
      const currentUrl = `https://cms-group-project.vercel.app/${page.full_slug}`;
      return {
        url: currentUrl,
        lastModified: new Date().toISOString(), // Standard format for lastModified
        priority: 0.8, // Define a priority (e.g., 1 for homepage, 0.8 for other pages)
      };
    });

    // Return the sitemap array
    return sitemap;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [];
  }
}
