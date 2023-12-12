import React from "react";
import SimpleSlider from "./Sliders/SimpleSlider";
import ProductSlider from "./Sliders/ProductSlider";
import "../styles/SliderContainer.css";

const SliderContainer = ({ sliderType, title, data }) => {
  return (
    <div className={sliderType === "SimpleSlider" ? "slider-main-container" : "slider-main-container product-slider-addon"}>
        <h2 className="font-bold text-2xl mb-2 max-sm:text-xl">{ title }</h2>
      {sliderType === "SimpleSlider" && (<SimpleSlider data={data} />)}
      {sliderType === "ProductSlider" && (<ProductSlider data={data} />)}
    </div>
  );
};

export default SliderContainer;
