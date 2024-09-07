import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const Hero = ({ blok }) => {
  return (
    <section 
      {...storyblokEditable(blok)} 
      className={`hero py-16 px-8 text-center text-white ${blok.bgColor ? blok.bgColor : 'bg-blue-600'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">{blok.title}</h1>
        <p className="text-2xl mb-6">{blok.subtitle}</p>

        {/* Conditionally render the button if buttonText and buttonUrl exist */}
        {blok.buttonText && blok.buttonUrl && (
          <a 
            href={blok.buttonUrl.url} 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded hover:bg-blue-700 text-xl font-semibold">
            {blok.buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;
