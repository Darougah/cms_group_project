import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const Hero = ({ blok }) => {
  return (
    <section 
      {...storyblokEditable(blok)} 
      className={`hero p-8 text-center text-white ${blok.bgColor ? blok.bgColor : 'bg-indigo-500'}`}>
      <h1 className="text-4xl font-bold mb-4">{blok.title}</h1>
      <p className="text-lg mb-4">{blok.subtitle}</p>

      {/* Conditionally render the button if buttonText and buttonUrl exist */}
      {blok.buttonText && blok.buttonUrl && (
        <a 
          href={blok.buttonUrl.url} 
          className="inline-block bg-white text-indigo-500 px-4 py-2 rounded hover:bg-indigo-100">
          {blok.buttonText}
        </a>
      )}
    </section>
  );
};

export default Hero;
