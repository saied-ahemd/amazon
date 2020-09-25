export const initalState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((prevalue, item) => item.price + prevalue, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.id
      );
      if (index >= 0) {
        //item exist in the array\
        newBasket.splice(index, 1);
      } else {
        console.warn("fuck off?!!");
      }
      return { ...state, basket: newBasket };
    case "REMOVE_ALL":
      let rebasket = [...state.basket];
      rebasket = [];
      return {
        basket: rebasket,
      };

    default:
      return state;
  }
}
export default reducer;
