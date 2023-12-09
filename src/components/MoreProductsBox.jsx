import "../styles/MoreProductsBox.css";

const MoreProductsBox = ({ content }) => {
  return (
    <div className="more-products-box-main">
      <h2 className="text-2xl font-bold">{ content.boxTitle }</h2>
      <div className="more-products-box-images">
        { content.images.map(imageObj => (
        <div>
        <img src={`../src/assets/images/${imageObj.image}`} alt="" />
        <span className="text-sm">{ imageObj.imageTitle }</span>
      </div>
        )) }
      </div>
      <a href="#">See more</a>
    </div>
  );
};

export default MoreProductsBox;
