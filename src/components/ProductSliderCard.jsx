import React from 'react';
import "../styles/ProductSliderCard.css";

const ProductSliderCard = ({sliderElement}) => {
    return (
      <div className='product-slider-card-main'>
      <img src={ sliderElement.image } className='h-44' alt="" />  
      <div className="product-slider-card-product-info mt-5">
        <span className='text-white bg-red-600 p-1 text-sm'>{ sliderElement.discount }% off</span>
        <span className='text-red-600 font-bold text-sm ml-1'>Deal</span>
        <div className='flex items-center gap-x-1 my-1'>
            <p className='font-bold text-lg'>${ sliderElement.currentPrice }</p>
            <p className='text-sm'>List Price: <span className='line-through'>${ sliderElement.previousPrice }</span></p>
        </div>
        <p className='product-slider-card-short-description'>{ sliderElement.shortDescription }</p>
      </div>
      </div>

    )
}

export default ProductSliderCard;