
import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const ImageWithText = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="image-with-text">
      <img src={blok.image.filename} alt={blok.image.alt} />
      <p>{blok.text}</p>
    </div>
  );
};

export default ImageWithText;
