"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
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

const components = {
  "page": Page,
  "teaser": Teaser,
  "richtext": RichTextDefault,
  "hero": hero,
  "filterBar": FilterBar,
  "latestproducts": LatestProducts,
  "productlist": ProductList,
  "imagebanner": ImageBanner,
  "productgrid": ProductGrid,
  "product-feature": ProductFeature,
  "product-slider": ProductSlider,
  "product-listing": ProductPage,
  "product-listing": ProductGrid,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
