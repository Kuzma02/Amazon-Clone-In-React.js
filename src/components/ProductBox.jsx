import React from "react";
import "../styles/ProductBox.css";


const ProductBox = ({ content }) => {
  return (
    <div className="product-box-main">
      <h2 className="text-2xl font-bold">{ content.boxTitle }</h2>
      <img src={`../src/assets/images/${content.image}`} alt="" />
      <a href="#">Shop now</a>
    </div>
  );
};

export default ProductBox;
