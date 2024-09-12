// "use client";
// import { StoryblokCMS } from "@/utils/cms";
// import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// import Page from "@/components/content-types/Page";
// import Teaser from "@/components/nestable/Teaser";
// import RichTextDefault from "@/components/nestable/RichText";
// import hero from "@/components/nestable/Hero";
// import FilterBar from "@/components/nestable/FilterBar";
// import LatestProducts from "@/components/nestable/LatestProducts";
// import ProductList from "@/components/nestable/ProductList";
// import ImageBanner from "@/components/nestable/ImageBanner";
// import ProductGrid from "@/components/nestable/ProductGrid";
// import ProductFeature from "@/components/nestable/ProductFeature";
// import ProductSlider from "@/components/nestable/ProductSlider";
// import ProductPage from "@/components/content-types/ProductPage";
// import AboutPage from "@/components/nestable/AboutPage";
// import ContactForm from "@/components/nestable/ContactForm";

// console.log("Access token:", StoryblokCMS.TOKEN);

// const components = {
//   page: Page,
//   about: AboutPage,
//   teaser: Teaser,
//   richtext: RichTextDefault,
//   hero: hero,
//   filterBar: FilterBar,
//   latestproducts: LatestProducts,
//   productlist: ProductList,
//   imagebanner: ImageBanner,
//   productgrid: ProductGrid,
//   "product-feature": ProductFeature,
//   "product-slider": ProductSlider,
//   "product-listing": ProductPage,
//   "product-listing": ProductGrid,
//   "contact-form": ContactForm,
// };

// storyblokInit({
//   accessToken: StoryblokCMS.TOKEN,
//   use: [apiPlugin],
//   components,
// });

// export default function StoryblokProvider({ children }) {
//   return children;
// }


"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page"; // General Page Component
import ProductDetail from "@/components/nestable/ProductDetail"; // Product Detail Component
import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import hero from "@/components/nestable/Hero";
import FilterBar from "@/components/nestable/FilterBar";
import LatestProducts from "@/components/nestable/LatestProducts";
import ProductList from "@/components/nestable/ProductList";
import ImageBanner from "@/components/nestable/ImageBanner";
import ProductGrid from "@/components/nestable/ProductGrid";
import ProductFeature from "@/components/nestable/ProductFeature";
import ProductSlider from "@/components/nestable/ProductSlider";
import ProductPage from "@/components/content-types/ProductPage";
import AboutPage from "@/components/nestable/AboutPage";
import ContactForm from "@/components/nestable/ContactForm";

console.log("Access token:", StoryblokCMS.TOKEN);

const components = {
  page: Page,
  productDetail: ProductDetail, // Register Product Detail Component
  about: AboutPage,
  teaser: Teaser,
  richtext: RichTextDefault,
  hero: hero,
  filterBar: FilterBar,
  latestproducts: LatestProducts,
  productlist: ProductList,
  imagebanner: ImageBanner,
  productgrid: ProductGrid,
  "product-feature": ProductFeature,
  "product-slider": ProductSlider,
  "product-listing": ProductPage,
  "product-listing": ProductGrid,
  "contact-form": ContactForm,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
