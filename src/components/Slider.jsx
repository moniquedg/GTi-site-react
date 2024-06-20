import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../assets/slide 1.jpg';
import slide2 from '../assets/slide 2.jpg';
import slide3 from '../assets/slide 3.jpg';
import slide4 from '../assets/slide 4.jpg';

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000 
  };

  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
        <div className="relative w-full max-h-96"> 
          <img src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full max-h-96"> 
          <img src={slide2} alt="Slide 2" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full max-h-96"> 
          <img src={slide3} alt="Slide 3" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full max-h-96"> 
          <img src={slide4} alt="Slide 4" className="w-full h-full object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
