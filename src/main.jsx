import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import "./index.css";
import App from "./App";
import AppProvider from "./context/ProductContax";
import FilterContextProvider from "./context/FilterContext";
import CartProvider from "./context/Cart_Context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </StrictMode>
);
