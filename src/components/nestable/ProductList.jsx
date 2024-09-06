import React from 'react';
import { storyblokEditable } from '@storyblok/react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div 
          key={product._uid} 
          {...storyblokEditable(product)} 
          className="product-item p-4 border rounded-lg shadow-sm">
          <img 
            src={product.image.filename} 
            alt={product.image.alt || product.name} 
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-lg font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
