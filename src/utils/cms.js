import { getStoryblokApi } from "@storyblok/react/rsc";

export class StoryblokCMS {
  static IS_PROD = process.env.NODE_ENV === "production";
  static IS_DEV = process.env.NODE_ENV === "development";
  static VERSION = this.IS_PROD ? "published" : "draft";
  static TOKEN = process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN;

  static async sbGet(path, params) {
    return getStoryblokApi().get(path, params);
  }

  static async getStory({ slug }) {
    if (!slug) return {};
    const uri = slug.join("/"); // Join the slug array to form the full URI
    const storyUrl = "cdn/stories/" + uri;
    const { data } = await this.sbGet(storyUrl, this.getDefaultSBParams());
    return data.story;
  }

  static getDefaultSBParams() {
    return {
      version: this.VERSION,
      resolve_links: "url",
      cv: Date.now(),
    };
  }

  static async getConfig() {
    try {
      const { data } = await this.sbGet("cdn/stories/config", this.getDefaultSBParams());
      return data?.story;
    } catch (error) {
      console.log("CONFIG ERROR", error);
      return {};
    }
  }

  static async generateMetaFromStory(slug) {
    try {
      const story = await this.getStory({ slug: slug.split("/") });
      if (!story) throw new Error("Story not found");

      const title = story.content.title || "KDH";
      const description = story.content.description || "Your place for fashion";

      return {
        title,
        description,
      };
    } catch (error) {
      console.error("Error generating metadata:", error);
      return {
        title: "Default Title",
        description: "Default Description",
      };
    }
  }

  static async getStaticPaths() {
    try {
      const sbParams = {
        version: this.VERSION,
      };

      const { data } = await this.sbGet("cdn/links/", sbParams);
      const paths = [];

      Object.keys(data.links).forEach((linkKey) => {
        const link = data.links[linkKey];
        if (link.is_folder || link.slug === "home") {
          return;
        }
        let slug = link.slug === "home" ? [] : link.slug;
        if (slug !== "") {
          paths.push({ slug: slug.split("/") });
        }
      });

      return paths;
    } catch (error) {
      console.log("PATHS ERROR", error);
    }
  }
}
