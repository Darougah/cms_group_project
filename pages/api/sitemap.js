// import { StoryblokCMS } from "@/utils/cms";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// // Initialize Storyblok with the preview token
// storyblokInit({
//   accessToken: process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN,
//   use: [apiPlugin],
// });

// export default async function sitemap() {
//   try {
//     // Get all static paths (slugs) from Storyblok
//     const paths = await StoryblokCMS.getStaticPaths();

//     // Create sitemap entries from paths
//     const sitemap = paths.map((path) => {
//       const slug = path.slug.join("/");  // Join the slug array into a string
//       const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`;

//       return {
//         loc: fullUrl,  // Full URL for the page
//         lastModified: new Date().toISOString(),  // Use ISO string for the last modified date
//         priority: 0.8,  // Priority for each page (can be adjusted)
//       };
//     });

//     // Return the generated sitemap
//     return sitemap;
//   } catch (error) {
//     console.error("Error generating sitemap:", error);
//     return [];
//   }
// }
