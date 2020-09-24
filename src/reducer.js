export const initalState = {
  basket: ["saied", "amira"],
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //THE logic for adding data to the basket
      break;
    case "REMOVE_FROM_BASKET":
      //the logic for remove from the basket
      break;
    default:
      return state;
  }
}
export default reducer;
