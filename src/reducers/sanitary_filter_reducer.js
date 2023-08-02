import { act } from "react-dom/test-utils";
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  FILTER_SIDEBAR_CLOSE,
  FILTER_SIDEBAR_OPEN,
} from "../actions";

const sanitary_filter_reducer = (state, action) => {
  if (action.type === FILTER_SIDEBAR_OPEN) {
    console.log("opening the sidebar");
    return {
      ...state,
      show_filter_sidebar: true,
    };
  }
  if (action.type === FILTER_SIDEBAR_CLOSE) {
    console.log("closing the sidebar");
    return {
      ...state,
      show_filter_sidebar: false,
    };
  }
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_sanitary: [...action.payload],
      filtered_sanitary: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }
  if (action.type === UPDATE_SORT) {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;

    return {
      ...state,
      filters: {
        ...state.filters,
        [name]: value,
      },
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    const { all_sanitary } = state;
    const { category, company, color, price } = state.filters;
    let tempSanitary = [...all_sanitary];

    if (category !== "all") {
      tempSanitary = tempSanitary.filter((ele) =>
        ele.category.includes(category)
      );
    }
    if (company !== "all") {
      tempSanitary = tempSanitary.filter((ele) => ele.company === company);
    }

    tempSanitary = tempSanitary.filter((ele) => ele.price <= price);

    return {
      ...state,
      filtered_sanitary: tempSanitary,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
      },
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_sanitary } = state;
    let tempSanitary = [];

    if (sort === "price-lowest") {
      tempSanitary = filtered_sanitary.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      tempSanitary = filtered_sanitary.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempSanitary = filtered_sanitary.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (sort === "name-z") {
      tempSanitary = filtered_sanitary.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return {
      ...state,
      filtered_sanitary: tempSanitary,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default sanitary_filter_reducer;
