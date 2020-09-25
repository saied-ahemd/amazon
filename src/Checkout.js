import React from "react";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, action] = useStateValue();
  const removeAll = () => {
    action({
      type: "REMOVE_ALL",
      basket,
    });
  };
  return (
    <div className="checkout">
      {/* <div className="">{getBasketTotal(basket)}</div> */}
      <h3 className="checkout__header">Shopping Cart</h3>
      {basket?.length > 0 && (
        <div>
          <button className="del" onClick={removeAll}>
            delete all item
          </button>
          <hr />
        </div>
      )}
      {basket?.length === 0 ? (
        <div className="">
          <p className="em">
            Your Shopping Cart is empty!! click on add to basket to add your
            item to you basket
          </p>
        </div>
      ) : (
        <div className="checkout__product">
          {basket?.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
