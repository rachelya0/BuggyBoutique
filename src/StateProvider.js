import React, {createContext, useContext, useReducer} from "react";

// creates data layer for product details to be sent to
export const StateContext = createContext();

// wraps app and provides data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull information from data layer to use in components
export const useStateValue = () => useContext(StateContext);
