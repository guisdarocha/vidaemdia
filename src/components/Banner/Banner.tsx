import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstSlide from "../../assets/banner1.png";
import secondSlide from "../../assets/banner2.png";
import './banner.css';

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);


  return (
    <Carousel className='banner' >
      <Carousel.Item className='item'>
      <img className='img-banner' src={firstSlide} />
      </Carousel.Item>
      <Carousel.Item className='item'>
      <img className='img-banner' src={secondSlide} />  
      </Carousel.Item>
    </Carousel>
  );
};




