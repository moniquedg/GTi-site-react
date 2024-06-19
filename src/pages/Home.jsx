import React from 'react';
import Slider from '../components/Slider';
import HomeTitle from '../components/HomeTitle';
import HorizonNumbers from '../components/HorizonNumbers';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div>
      <Slider />
      <HomeTitle />
      <HorizonNumbers />
      <Testimonials />
    </div>
  );
};

export default Home;
