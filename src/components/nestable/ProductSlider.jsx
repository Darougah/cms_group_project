import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { storyblokEditable } from "@storyblok/react";

const ProductSlider = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <h2 className="text-center text-3xl font-bold mb-8">{blok.headline}</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="product-slider"
      >
        {blok.products.map((product, index) => (
          <SwiperSlide key={index} className="product-slide">
            {/* Check if product has an image */}
            {product.productImage && (
              <img
                src={product.productImage.filename}
                alt={product.productImage.alt || product.productName}
                className="w-full h-auto"
              />
            )}
            <h3 className="text-lg font-semibold mt-2">{product.productName}</h3>
            <p className="text-gray-600">{product.productPrice}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductSlider;
