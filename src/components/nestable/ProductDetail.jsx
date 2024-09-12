"use client";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function ProductDetail({ story }) {
  console.log("Story data in ProductDetail:", story);

  // Check if the story and content exist before accessing them
  if (!story || !story.content) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    ); // Display Loading if no story is available
  }

  const content = story.content;

  return (
    <div className="product-detail container mx-auto px-4 py-8" {...storyblokEditable(content)}>
      {/* Render the title */}
      {content.title && (
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">{content.title}</h1>
      )}

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Product Image */}
        {content.productImage?.filename && (
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={content.productImage.filename}
              alt={content.productImage.alt || content.title || "Product image"}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8">
          {/* Product Price */}
          {content.productPrice && (
            <p className="text-2xl font-semibold text-gray-800 mb-4">${content.productPrice}</p>
          )}

          {/* Product Description */}
          {content.productDescription?.content?.length > 0 && (
            <div className="product-description space-y-4 mb-6">
              {content.productDescription.content.map((desc, index) => {
                const paragraph = desc?.content?.[0]?.text;
                return paragraph ? (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ) : null;
              })}
            </div>
          )}

          {/* Buy Button */}
          {content.buttonUrl?.cached_url && content.buttonText && (
            <a
              href={`/${content.buttonUrl.cached_url}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300"
            >
              {content.buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
