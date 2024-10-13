import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';
import { SiAntdesign } from "react-icons/si";
import { MdLinearScale } from "react-icons/md";



const Testimonials = () => {
  const testimonials = [
    {
      name: "Efecha Omoware",
      message: "I now enjoy financial freedom like I’ve never known before doing what I love.",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Efecha Omoware",
      message: "I now enjoy financial freedom like I’ve never known before doing what I love.",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Efecha Omoware",
      message: "I now enjoy financial freedom like I’ve never known before doing what I love.",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      name: "Efecha Omoware",
      message: "I now enjoy financial freedom like I’ve never known before doing what I love.",
      image: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];

  const settings = {
    centerMode: true,
    centerPadding: '40px',
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='textmono-head'>
        <h1>Testimonials</h1>
        <p className=''><MdLinearScale /> <span><SiAntdesign className='head-icon'/>
        </span> <MdLinearScale /></p>
   
    <div className="testimonial-container-reel">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <div className="testimonial-container-box">
              <figure className="testimonial-container-image">
                <img className="img-fluid rounded-circle" 
                src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1728482583~exp=1728486183~hmac=6b93a96a5c37d74b3a177932815ca9779f16fa35a9f450ba3fe1f2e3f48d933a&w=740"
                // src={testimonial.image}
                 alt={testimonial.name} />
              </figure>
              <div className="testimonial-container-component">
                <article className="testimonial-container-title">
                  <h4>{testimonial.name}</h4>
                </article>
                <article className="testimonial-container-content">
                  <p>{testimonial.message}</p>
                </article>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Testimonials;
