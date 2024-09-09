import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';

const ProductGrid = ({ blok }) => {
  const gridColumns = blok.grid_columns || 3;
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridColumns} gap-10`;

  return (
    <section {...storyblokEditable(blok)} className="mb-12 container mx-auto">
      <h2 className="text-center text-3xl font-bold mb-8">{blok.headline}</h2>
      <div className={gridClass}>
        {blok.products.map((product, index) => (
          <div key={index} className="product-item bg-white shadow-lg rounded-lg overflow-hidden p-6">
            {/* Render product image */}
            {product.productImage && (
              <Image
                src={product.productImage.filename}
                alt={product.productImage.alt || product.productName}
                width={800} // You can adjust these values as needed
                height={600} // Adjust according to your image aspect ratio
                className="w-full h-64 object-cover mb-4" // Height here is for styling, not for Image component
              />
            )}
            <h3 className="text-center text-lg font-semibold">{product.productName}</h3>
            <p className="text-center text-gray-600 mb-2">Price: ${product.productPrice}</p>

            {/* Safely render product description */}
            {product.productDescription?.content?.length > 0 && (
              <div
                className="text-center text-gray-700 mb-4"
                dangerouslySetInnerHTML={{
                  __html: product.productDescription.content
                    .map((content) => content.content?.[0]?.text || '')
                    .join(' '),
                }}
              />
            )}

            {/* Conditionally render the link with label and dynamic URL */}
            {product.productUrl && product.productUrl.length > 0 && (
              <a
                href={product.productUrl[0].url.cached_url || product.productUrl[0].url.url}
                className="text-blue-500 underline"
                target={product.productUrl[0].url.linktype === 'url' ? '_blank' : '_self'}
                rel={product.productUrl[0].url.linktype === 'url' ? 'noopener noreferrer' : ''}
              >
                {product.productUrl[0].label ? product.productUrl[0].label : 'View Product'}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
