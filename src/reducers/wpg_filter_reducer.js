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
import { all } from "axios";

const wpg_filter_reducer = (state, action) => {
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
    let maxPriceArray = action.payload.map((ele) => ele.priceArray);
    let maxPrice = Math.max(...maxPriceArray.flat().map((ele) => Number(ele)));

    return {
      ...state,
      all_wpg: [...action.payload],
      filtered_wpg: [...action.payload],
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
    const { all_wpg } = state;
    const { category, company, price } = state.filters;
    let tempwpg = [...all_wpg];

    if (category !== "all") {
      tempwpg = tempwpg.filter((ele) => ele.category.includes(category));
    }

    if (company !== "all") {
      tempwpg = tempwpg.filter((ele) => ele.company === company);
    }

    tempwpg = tempwpg.filter((ele) => Math.max(...ele.priceArray) <= price);
    return {
      ...state,
      filtered_wpg: tempwpg,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        company: "all",
        category: "all",

        price: state.filters.max_price,
      },
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_wpg } = state;
    let tempwpg = [];

    if (sort === "price-lowest") {
      tempwpg = filtered_wpg.sort((a, b) => {
        return a.priceArray[0] - b.priceArray[0];
      });
    }
    if (sort === "price-highest") {
      tempwpg = filtered_wpg.sort((a, b) => b.priceArray[0] - a.priceArray[0]);
    }
    if (sort === "name-a") {
      tempwpg = filtered_wpg.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      tempwpg = filtered_wpg.sort((a, b) => b.name.localeCompare(a.name));
    }

    return {
      ...state,
      filtered_wpg: tempwpg,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default wpg_filter_reducer;
