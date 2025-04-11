import { useContext } from "react";
import AppContext from "../context/ProductContax";

const useProductContext = () => {
  return useContext(AppContext);
};

export default useProductContext;
