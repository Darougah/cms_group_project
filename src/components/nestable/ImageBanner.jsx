import React from 'react';
import { storyblokEditable } from '@storyblok/react'; // For Storyblok dynamic content

const ImageBanner = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="bg-gray-200 py-4">
      <div className="container mx-auto">
        {/* Render the dynamic image */}
        {blok.image && (
          <img
            src={blok.image.filename}
            alt={blok.image.alt || "Banner Image"} // Default alt text
            className="w-full h-64 object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default ImageBanner;
