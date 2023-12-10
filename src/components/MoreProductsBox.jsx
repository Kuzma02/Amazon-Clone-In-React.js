import "../styles/MoreProductsBox.css";
import { nanoid } from "nanoid";

const MoreProductsBox = ({ content }) => {
  return (
    <div className="more-products-box-main">
      <h2 className="text-2xl font-bold max-sm:text-lg">{ content.boxTitle }</h2>
      <div className="more-products-box-images">
        { content.images.map(imageObj => (
        <div key={nanoid()}>
        <img src={`../src/assets/images/${imageObj.image}`} alt="" />
        <span className="more-products-box-images-title">{ imageObj.imageTitle }</span>
      </div>
        )) }
      </div>
      <a href="#">See more</a>
    </div>
  );
};

export default MoreProductsBox;
