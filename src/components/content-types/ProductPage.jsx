import { storyblokEditable } from "@storyblok/react";

const ProductPage = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="product-page p-8 bg-white">
      <h1 className="text-3xl font-bold mb-4">{blok.title}</h1>
      
      {/* Check if the image exists before rendering */}
      {blok.image && (
        <img className="w-full h-auto mb-4" src={blok.image.filename} alt={blok.image.alt || "Product image"} />
      )}
      
      <p className="text-lg mb-2">{blok.description}</p>
      <p className="text-xl font-semibold text-indigo-600">Price: {blok.price}</p>
    </div>
  );
};

export default ProductPage;
