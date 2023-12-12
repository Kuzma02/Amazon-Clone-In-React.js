import React from 'react'
import Slider from 'react-slick';
import "./slick.css"; 
import "./slick-theme.css";

import SimpleSliderCard from '../SimpleSliderCard';
import { nanoid } from 'nanoid';
import ProductSliderCard from '../ProductSliderCard';

const SimpleSlider = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        
      };
      return (
        <div>
          <Slider {...settings} >
            { data.map((item) => {
              return <ProductSliderCard key={nanoid()} sliderElement={item} />
            }) }
          </Slider>
        </div>
      );
}

export default SimpleSlider