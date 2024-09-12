"use client";
import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

export default function ProductDetail({ story }) {
  // State to track selected color and size
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!story || !story.content) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">Loading...</p>
      </div>
    );
  }

  const content = story.content;

  return (
    <div className="product-detail container mx-auto px-4 py-8" {...storyblokEditable(content)}>
      {/* Render the title */}
      {content.title && (
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          {content.title}
        </h1>
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
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              ${content.productPrice}
            </p>
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

          {/* Color Selection */}
          {content.availableColors?.length > 0 && (
            <div className="flex flex-col space-y-2 mb-6">
              <p className="text-sm font-semibold">Color</p>
              <div className="flex space-x-4">
                {content.availableColors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-full border border-black focus:outline-none ${color} ${selectedColor === color ? 'ring-4 ring-blue-500' : ''}`}
                    onClick={() => setSelectedColor(color)} // Update selected color
                    aria-label={`Color option ${color}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {content.availableSizes?.length > 0 && (
            <div className="flex flex-col space-y-2 mb-6">
              <p className="text-sm font-semibold">Size</p>
              <div className="flex space-x-4">
                {content.availableSizes.map((size, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 border border-black text-black text-sm font-semibold w-16 h-16 flex items-center justify-center ${selectedSize === size ? 'bg-gray-200 border-blue-500' : ''}`}
                    onClick={() => setSelectedSize(size)} // Update selected size
                  >
                    {size}
                  </button>
                ))}
              </div>
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
