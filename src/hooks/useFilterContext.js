import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

const useFilterContext = () => {
  return useContext(FilterContext);
};

export default useFilterContext;
