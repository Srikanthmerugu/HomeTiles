import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="my-8 px-4">
      <h2 className="text-center text-2xl font-bold mb-4">Explore Popular Designs</h2>
      <Slider {...settings}>
        <div className="p-4">
          <img src="image1.jpg" alt="Product 1" className="w-full" />
          <h3 className="text-center mt-2">Product 1</h3>
        </div>
        <div className="p-4">
          <img src="image2.jpg" alt="Product 2" className="w-full" />
          <h3 className="text-center mt-2">Product 2</h3>
        </div>
        <div className="p-4">
          <img src="image3.jpg" alt="Product 3" className="w-full" />
          <h3 className="text-center mt-2">Product 3</h3>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
