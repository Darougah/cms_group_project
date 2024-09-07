import React from 'react';
import { storyblokEditable } from '@storyblok/react'; // For Storyblok dynamic content

const ImageBanner = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="bg-gray-200 py-4">
      {/* Remove container to allow full width */}
      {blok.image && (
        <img
          src={blok.image.filename}
          alt={blok.image.alt || "Banner Image"} // Default alt text
          className="w-full h-96 object-cover" // Full width and taller height
        />
      )}
    </section>
  );
};

export default ImageBanner;
