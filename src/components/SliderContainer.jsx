import React from "react";
import SimpleSlider from "./SimpleSlider/SimpleSlider";
import "../styles/SliderContainer.css";

const SliderContainer = ({ title, data }) => {
  return (
    <div className="slider-main-container">
        <h2 className="font-bold text-2xl mb-2 max-sm:text-xl">{ title }</h2>
      <SimpleSlider data={data} />
    </div>
  );
};

export default SliderContainer;
