export const initalState = {
  basket: [],
  user: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //the logic for remove from the basket
      return state;
      break;
    default:
      return state;
  }
}
export default reducer;
