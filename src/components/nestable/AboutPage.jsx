import React, { useEffect } from 'react';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import ProductFeature from '@/components/nestable/ProductFeature'; // Import ProductFeature

const AboutPage = ({ blok }) => {
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

  useEffect(() => {
    console.log('Blok data:', blok);
  }, [blok]);

  return (
    <div {...storyblokEditable(blok)} className="bg-white">
      <section className="py-16 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{blok.title}</h1>
          <h2 className="text-2xl font-semibold mb-8">{blok.subtitle}</h2>
          <div className="text-lg">
            {paragraphs.map((para, index) => (
              <p key={index} className="mb-4">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-300 h-40 w-full mb-8"></div>

      {blok.body && blok.body.map((block, index) => {
        if (block.component === 'product-feature') {
          return <ProductFeature key={index} blok={block} />;
        }

        return <StoryblokComponent blok={block} key={index} />;
      })}
    </div>
  );
};

export default AboutPage;
