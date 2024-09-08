import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const AboutPage = ({ blok }) => {
  // Function to split description into 5 paragraphs
  const splitIntoParagraphs = (text, numParagraphs) => {
    const paragraphs = text.split('\n').filter(p => p.trim() !== '');
    const paragraphChunks = [];
    const chunkSize = Math.ceil(paragraphs.length / numParagraphs);

    for (let i = 0; i < paragraphs.length; i += chunkSize) {
      paragraphChunks.push(paragraphs.slice(i, i + chunkSize).join('\n'));
    }

    return paragraphChunks;
  };

  const paragraphs = splitIntoParagraphs(blok.description, 5);

  return (
    <div {...storyblokEditable(blok)} className="bg-white">
      <section className="py-16 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{blok.title}</h1>
          <h2 className="text-2xl font-semibold mb-8">{blok.subtitle}</h2>
          {/* Render plain text description as 5 paragraphs */}
          <div className="text-lg">
            {paragraphs.map((para, index) => (
              <p key={index} className="mb-4">{para}</p>
            ))}
          </div>
        </div>
      </section>
      {/* Gray headband-like divider */}
      <div className="bg-gray-300 h-60 w-full mb-20"></div>
      {/* Add the "product-slider" section here */}
    </div>
  );
};

export default AboutPage;
