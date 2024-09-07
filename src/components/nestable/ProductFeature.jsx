import { storyblokEditable } from "@storyblok/react";

const ProductFeature = ({ blok }) => {
  // Check if the product and product[0] exist
  const product = blok.product && blok.product[0];

  if (!product) {
    return <p>No product data available</p>; // Show a fallback if no product data is found
  }

  return (
    <section {...storyblokEditable(blok)}>
      <h2>{blok.headline}</h2>
      <div>
        {/* Safely access image, name, and price */}
        {product.image && (
          <img src={product.image.filename} alt={product.image.alt || product.name} />
        )}
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </section>
  );
};

export default ProductFeature;
