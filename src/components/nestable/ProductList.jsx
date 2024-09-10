import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

const ProductList = ({ products, searchQuery }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._uid} {...storyblokEditable(product)} className="product-item bg-white p-4 shadow-md rounded-lg">
              {product.productImage?.filename ? (
                <Image
                  src={product.productImage.filename}
                  alt={product.productName}
                  className="w-full h-74 object-cover mb-4"
                  width={500}
                  height={500}
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 mb-4 flex items-center justify-center">
                  <p className="text-gray-500">No Image Available</p>
                </div>
              )}
              <h3 className="text-center text-lg font-semibold mb-2 text-black">{product.productName}</h3>
              <p className="text-center text-gray-800 font-bold">Price: ${product.productPrice}</p>
              <div
                className="text-center text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: typeof product.productDescription === 'string'
                    ? product.productDescription
                    : '', // Ensure this handles the data structure of `productDescription`
                }}
              />
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No products match your search.</p>
        )}
      </div>
    </section>
  );
};

export default ProductList;
