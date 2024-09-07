import Slider from 'react-slick';
import { storyblokEditable } from '@storyblok/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = ({ blok }) => {
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
    <section {...storyblokEditable(blok)} className="mb-12">
      <h2 className="text-center text-3xl font-bold mb-8">{blok.headline}</h2>
      <Slider {...settings}>
        {blok.products.map((product, index) => (
          <div key={index} className="product-slide mb-6 mx-4">
            {/* Render product image */}
            <a
              href={product.productUrl?.[0]?.url.cached_url || product.productUrl?.[0]?.url.url || '#'}
              target={product.productUrl?.[0]?.url.linktype === 'url' ? '_blank' : '_self'}
              rel={product.productUrl?.[0]?.url.linktype === 'url' ? 'noopener noreferrer' : ''}
              className="block"
            >
              {product.productImage && (
                <img
                  src={product.productImage.filename}
                  alt={product.productImage.alt || product.productName}
                  className="w-full h-auto"
                />
              )}
              <h3 className="text-lg font-semibold mt-2">{product.productName}</h3>
              <p className="text-gray-600">${product.productPrice}</p>
            </a>

            {/* Conditionally render the label link below the product */}
            {product.productUrl && product.productUrl.length > 0 && (
              <a
                href={product.productUrl[0].url.cached_url || product.productUrl[0].url.url}
                className="text-blue-500 underline mt-2 block"
                target={product.productUrl[0].url.linktype === 'url' ? '_blank' : '_self'}
                rel={product.productUrl[0].url.linktype === 'url' ? 'noopener noreferrer' : ''}
              >
                {product.productUrl[0].label ? product.productUrl[0].label : 'View Product'}
              </a>
            )}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;
