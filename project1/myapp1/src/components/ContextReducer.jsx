import React, { createContext, useContext, useReducer } from 'react';

const cartStateContext = createContext();
const cartDispatchContext = createContext();

const reducer = (state, action) => {
    switch(action.type){
      case "ADD":
        // Assuming action.payload contains the new item to be added
        return [...state, {
            id: action.cartData.id,
            img: action.cartData.img,
            name: action.cartData.FoodName, 
            quantity: action.cartData.Quantity, 
            option: action.cartData.Option, 
            prize: action.cartData.Prize
          }];
  
      default:
        console.log("Error in Reducer");
        return state; // Make sure to return the state for default case
    }
  };

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <cartStateContext.Provider value={state}>
      <cartDispatchContext.Provider value={dispatch}>
        {children}
      </cartDispatchContext.Provider>
    </cartStateContext.Provider>
  );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatchCart = () => useContext(cartDispatchContext);
