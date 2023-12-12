import React from 'react';

const SimpleSliderCard = ({sliderElement}) => {
    return (
      <div>
      <img src={ sliderElement.image } alt="" className='h-44' />  
      </div>

    )
}

export default SimpleSliderCard;