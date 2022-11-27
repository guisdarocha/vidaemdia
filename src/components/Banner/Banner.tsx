import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstSlide from "../../assets/banner1.png";
import secondSlide from "../../assets/banner2.png";

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);


  return (
    <Carousel >
      <Carousel.Item>
      <img src={firstSlide} />
      </Carousel.Item>
      <Carousel.Item>
      <img src={secondSlide} />  
      </Carousel.Item>
    </Carousel>
  );
};




