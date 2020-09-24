import React from "react";
import "./Product.css";

function Product({ id, title, rating, price, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(5)
            .map((_) => (
              <p>
                <i className="fa fa-star product__star" aria-hidden="true"></i>
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button className="product__add">Add To Cart</button>
    </div>
  );
}

export default Product;
