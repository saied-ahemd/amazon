import React, { useContext, createContext, useReducer } from "react";

//frist thing creat the layer (context)

//this is the data layer
export const StateContext = createContext();

//build the provuder
export const StateProvider = ({ reducer, initalState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initalState)}>
    {children}
  </StateContext.Provider>
);
//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
