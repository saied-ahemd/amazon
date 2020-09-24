import React, { useContext, createContext, useReducer } from "react";

//frist thing creat the layer (context)

//this is the data layer
export const StateContext = createContext();

//build the provuder
export const StateProvider = ({ reducer, initalState, childern }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {childern}
  </StateContext.Provider>
);
//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
