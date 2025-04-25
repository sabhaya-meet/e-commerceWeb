import React from "react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // const userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS": {
      // sort syntax
      const tempSortProduct = [...action.payload];
      const sortType = state.sorting_value;

      const sortedData = tempSortProduct.sort((a, b) => {
        switch (sortType) {
          case "lowest":
            return a.price - b.price;
          case "highest":
            return b.price - a.price;
          case "a-z":
            return a.name.localeCompare(b.name);
          case "z-a":
            return b.name.localeCompare(a.name);
          default:
            return state;
        }
      });
      return {
        ...state,
        filter_products: sortedData,
      };

      // long syntex

      //   let newSortData;
      //   let tempSortProduct = [...action.payload];

      //   if (state.sorting_value === "lowest") {
      //     const sortingProducts = (a, b) => {
      //       return a.price - b.price;
      //     };
      //     newSortData = tempSortProduct.sort(sortingProducts);
      //   }
      //   if (state.sorting_value === "highest") {
      //     const sortingProducts = (a, b) => {
      //       return b.price - a.price;
      //     };
      //     newSortData = tempSortProduct.sort(sortingProducts);
      //   }

      //   if (state.sorting_value === "a-z") {
      //     newSortData = tempSortProduct.sort((a, b) =>
      //       a.name.localeCompare(b.name)
      //     );
      //   }
      //   if (state.sorting_value === "z-a") {
      //     newSortData = tempSortProduct.sort((a, b) =>
      //       b.name.localeCompare(a.name)
      //     );
      //   }

      //   if (state.sorting_value)
      //     return {
      //       ...state,
      //       filter_products: newSortData,
      //     };
    }

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // case "FILTER_PRODUCTS":
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, color } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>
          curElem.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (category.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.category.toLowerCase() === category.toLowerCase();
        });
      }
      if (company.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color) {
        tempFilterProduct = tempFilterProduct.filter((curElem) => {
          return curElem.colors.includes(color);
        });
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
    default:
      return state;
  }
};

export default FilterReducer;
