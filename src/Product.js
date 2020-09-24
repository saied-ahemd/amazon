import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, rating, price, image }) {
  const [{ basket }, action] = useStateValue();
  const addToBasket = () => {
    //add item to basket
    action({
      type: "ADD_TO_BASKET",
      item: {
        //you can do this if you want to pass the same name with the same value bur in Es6 you can do this (this two is the same )
        // id: id,
        // title: title,
        // rating: rating,
        // image: image,
        // price: price,
        id,
        title,
        rating,
        image,
        price,
      },
    });
  };
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
            .fill()
            .map((_) => (
              <p>
                <i className="fa fa-star product__star" aria-hidden="true"></i>
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" className="product__image" />
      <button className="product__add" onClick={addToBasket}>
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
