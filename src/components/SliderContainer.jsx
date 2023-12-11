import React from "react";
import SimpleSlider from "./SimpleSlider/SimpleSlider";
import "../styles/SliderContainer.css";

const SliderContainer = () => {
  return (
    <div className="slider-main-container">
        <h2 className="font-bold text-2xl mb-2 max-sm:text-xl">Most wished for in Movies & TV</h2>
      <SimpleSlider />
    </div>
  );
};

export default SliderContainer;
