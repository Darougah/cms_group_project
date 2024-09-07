import Slider from 'react-slick';
import { storyblokEditable } from '@storyblok/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = ({ blok }) => {
  // React Slick settings for autoplay and responsive breakpoints
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section {...storyblokEditable(blok)} className="mb-12"> {/* Added margin to the bottom */}
      <h2 className="text-center text-3xl font-bold mb-8">{blok.headline}</h2>
      <Slider {...settings}>
        {blok.products.map((product, index) => (
          <div key={index} className="product-slide mb-6"> {/* Added margin below each slide */}
            {product.productImage && (
              <img
                src={product.productImage.filename}
                alt={product.productImage.alt || product.productName}
                className="w-full h-auto"
              />
            )}
            <h3 className="text-lg font-semibold mt-2">{product.productName}</h3>
            <p className="text-gray-600">{product.productPrice}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;
