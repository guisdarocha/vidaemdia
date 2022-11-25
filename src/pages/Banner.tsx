import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);


  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\banner1.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\assets\banner2.png"
          alt="Second slide"
        />

        
      </Carousel.Item>
    </Carousel>
  );
};

