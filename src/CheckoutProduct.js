import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, image, rating }) {
  const [{ basket }, action] = useStateValue();
  const remove = () => {
    action({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="checkoutproduct">
      <img src={image} alt="" className="che__image" />
      <div className="checkoutproduct__info">
        <h3>{title}</h3>
        <p className="check__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <i className="fa fa-star product__star" aria-hidden="true"></i>
              </p>
            ))}
        </div>
        <button onClick={remove}>delete</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
