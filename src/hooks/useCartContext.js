import React, { useContext } from "react";
import { CartContext } from "../context/Cart_Context";

const useCartContext = () => {
  return useContext(CartContext);
};

export default useCartContext;
