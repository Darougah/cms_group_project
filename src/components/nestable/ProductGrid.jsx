import { storyblokEditable } from '@storyblok/react';

const ProductGrid = ({ blok }) => {
  // Use the grid_columns field from Storyblok or default to 3 columns
  const gridColumns = blok.grid_columns || 3;

  // Dynamically create the grid class based on the number of columns
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${gridColumns} gap-8`;

  return (
    <section {...storyblokEditable(blok)} className="mb-12">
      <h2 className="text-center text-3xl font-bold mb-8">{blok.headline}</h2>
      <div className={gridClass}>
        {blok.products.map((product, index) => (
          <div key={index} className="product-item bg-white shadow-lg rounded-lg overflow-hidden p-4">
            {/* Render product image */}
            {product.productImage && (
              <img
                src={product.productImage.filename}
                alt={product.productImage.alt || product.productName}
                className="w-full h-48 object-cover mb-4"
              />
            )}
            <h3 className="text-lg font-semibold">{product.productName}</h3>
            <p className="text-gray-600 mb-2">Price: ${product.productPrice}</p>

            {/* Safely render product description */}
            {product.productDescription?.content?.length > 0 && (
              <div
                className="text-gray-700 mb-4"
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
