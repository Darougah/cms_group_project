import { storyblokEditable } from "@storyblok/react";

const ProductGrid = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <h2>{blok.headline}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blok.products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image.filename} alt={product.image.alt || product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
