import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const Hero = ({ blok }) => {
  // Check if blok.bgColor exists, if not fallback to 'bg-blue-600'
  const backgroundColor = blok.bgColor ? blok.bgColor : 'bg-blue-600';

  // Determine the correct URL for the button
  const buttonUrl = blok.buttonUrl?.cached_url || blok.buttonUrl?.url || null;

  return (
    <section 
      {...storyblokEditable(blok)} 
      className={`hero py-16 px-8 text-center text-white ${backgroundColor}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">{blok.title}</h1>
        <p className="text-2xl mb-6">{blok.subtitle}</p>

        {blok.buttonText && buttonUrl && (
          <a 
            href={`/${buttonUrl}`} // Ensure the link is valid
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-700 text-xl font-semibold">
            {blok.buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
