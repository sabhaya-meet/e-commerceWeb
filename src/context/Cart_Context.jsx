import React, { createContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";
import { useEffect } from "react";

export const CartContext = createContext();

const getLocalCartData = () => {
  let newCartData = localStorage.getItem("cartData");

  if (newCartData == []) {
    return [];
  } else {
    return JSON.parse(newCartData);
  }
};

const intialState = {
  //   cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  //   increment and decrement the product

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //   to the clear cart

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //   to add the data in localstorage

  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_PRICE" });
    // dispatch({ type: "CART_TOTAL_ITEM" });

    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("cartData", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
