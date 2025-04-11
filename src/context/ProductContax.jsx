import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

export const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const AppProvider = ({ children }) => {
  // useReducer complex data manage karva mate use thay aetle same usestate jevu kam kare che

  const [state, dispatch] = useReducer(state, initialState);

  const getProducts = async (url) => {
    const response = await axios.get(url);
    const products = await response?.data;
    dispatch({ type: "MY_API_DATA", payload: products });
  };

  useEffect(() => {
    getProducts(API);
  }, []); // ✅ run only once when component mounts

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// ✅ custom hook for using context easily
// export const useProductContext = () => {
//   return useContext(AppContext);
// };

export default AppProvider;
