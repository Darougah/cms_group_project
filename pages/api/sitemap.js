
import { getStoryblokApi } from '@storyblok/react';

export default async function handler(req, res) {
  const StoryblokApi = getStoryblokApi();
  const { data } = await StoryblokApi.get('cdn/links/');

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  Object.keys(data.links).forEach((link) => {
    const url = data.links[link];
    sitemap += `<url>\n<loc>https://yourwebsite.com/${url.slug}</loc>\n</url>\n`;
  });

  sitemap += '</urlset>';
  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();
}
