import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product._uid} {...storyblokEditable(product)} className="product-item bg-white p-4 shadow-md rounded-lg">
            {product.productImage && (
              <Image
                src={product.productImage.filename}
                alt={product.productName}
                className="w-full h-64 object-cover mb-4"
              />
            )}
            <h3 className="text-center text-lg font-semibold mb-2">{product.productName}</h3>
            <p className="text-center text-gray-800 font-bold">Price: ${product.productPrice}</p>
            <div
              className="text-center text-gray-700"
              dangerouslySetInnerHTML={{
                __html: product.productDescription?.content?.map(content => content.content[0]?.text).join(' ') || '',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
