import React from 'react';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';

const ProductFeature = ({ blok }) => {
  const products = blok.product || [];

  if (products.length === 0) {
    return <p>No product data available</p>;
  }

  return (
    <section {...storyblokEditable(blok)}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">{blok.headline}</h2>
        <p className="text-sm font-semibold">{blok.subtitle}</p>
        <p className="text-sm font-semibold">{blok.subtitle2}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="border p-4">
            {product.productImage && (
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.productImage.filename}
                  alt={product.productImage.alt || product.productName}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute inset-0 object-cover"
                />
              </div>
            )}
            <h3 className="text-center text-xl font-semibold mb-2">{product.productName}</h3>
            <p className="text-center text-lg text-gray-700 mb-4">${product.productPrice}</p>
            <p className="text-center text-sm text-gray-500">
              {product.productDescription?.content?.[0]?.content?.[0]?.text || 'No description available.'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeature;
