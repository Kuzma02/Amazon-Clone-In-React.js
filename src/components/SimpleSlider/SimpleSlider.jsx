import React from 'react'
import Slider from 'react-slick';
import "./slick.css"; 
import "./slick-theme.css";
import data from "../../../mock.json";
import SliderCard from '../MovieCard/SliderCard';

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
        
      };
      return (
        <div>
          <Slider {...settings} >
            { data.map((movie) => {
              return <SliderCard key={movie.id} movie={movie} />
            }) }
          </Slider>
        </div>
      );
}

export default SimpleSlider