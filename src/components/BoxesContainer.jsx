import React from "react";
import MoreProductsBox from "./MoreProductsBox";
import "../styles/BoxesContainer.css";
import ProductBox from "./ProductBox";

const boxesContent = {
  singleProductBox1: {
    boxTitle: "Toys under $25",
    image: "single product box image 1.jpg",
  },
  singleProductBox2: {
    boxTitle: "Deals in PCs",
    image: "single product box image 2.jpg",
  },
  singleProductBox3: {
    boxTitle: "Top Deal",
    image: "single product box image 4.jpg",
  },
  singleProductBox4: {
    boxTitle: "Home décor under $50",
    image: "single product box image 3.jpg",
  },
  moreProductsBox1: {
    boxTitle: "Gaming accessories",
    images: [
      { image: "moreproductsbox product image 1.jpg", imageTitle: "Headsets" },
      { image: "moreproductsbox product image 2.jpg", imageTitle: "Keyboards" },
      {
        image: "moreproductsbox product image 3.jpg",
        imageTitle: "Computer mice",
      },
      { image: "moreproductsbox product image 4.jpg", imageTitle: "Chairs" },
    ],
  },
  moreProductsBox2: {
    boxTitle: "Refresh your space",
    images: [
      { image: "moreproductsbox product image 5.jpg", imageTitle: "Dining" },
      { image: "moreproductsbox product image 6.jpg", imageTitle: "Home" },
      { image: "moreproductsbox product image 7.jpg", imageTitle: "Kitchen" },
      {
        image: "moreproductsbox product image 8.jpg",
        imageTitle: "Health and Beauty",
      },
    ],
  },
  moreProductsBox3: {
    boxTitle: "Shop deals in Fashion",
    images: [
      {
        image: "moreproductsbox product image 9.jpg",
        imageTitle: "Jeans under $50",
      },
      {
        image: "moreproductsbox product image 10.jpg",
        imageTitle: "Tops under $25",
      },
      {
        image: "moreproductsbox product image 11.jpg",
        imageTitle: "Dresses under $30",
      },
      {
        image: "moreproductsbox product image 12.jpg",
        imageTitle: "Shoes under $50",
      },
    ],
  },
  moreProductsBox4: {
    boxTitle: "Fashion trends you like",
    images: [
      { image: "moreproductsbox product image 13.jpg", imageTitle: "Dresses" },
      { image: "moreproductsbox product image 14.jpg", imageTitle: "Knits" },
      { image: "moreproductsbox product image 15.jpg", imageTitle: "Jackets" },
      { image: "moreproductsbox product image 16.jpg", imageTitle: "Jewelry" },
    ],
  },
};

const BoxesContainer = () => {
  return (
    <div className="boxes-slider">
      <div className="boxes-container-main">
        <MoreProductsBox content={boxesContent.moreProductsBox1} />
        <ProductBox content={boxesContent.singleProductBox1} />
        <ProductBox content={boxesContent.singleProductBox2} />
        <MoreProductsBox content={boxesContent.moreProductsBox2} />
        <MoreProductsBox content={boxesContent.moreProductsBox3} />
        <ProductBox content={boxesContent.singleProductBox3} />
        <ProductBox content={boxesContent.singleProductBox4} />
        <MoreProductsBox content={boxesContent.moreProductsBox4} />
      </div>
    </div>
  );
};

export default BoxesContainer;
