import { storyblokEditable } from "@storyblok/react";

const ProductGrid = ({ blok }) => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">{blok.title}</h2>

      {/* Grid layout for products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blok.products && blok.products.map((product, index) => (
          <div key={index} {...storyblokEditable(product)} className="bg-white shadow-md rounded-lg p-4">
            <img 
              src={product.image.filename} 
              alt={product.image.alt || product.title} 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <a 
              href={product.url.cached_url} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
            >
              View Product
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
