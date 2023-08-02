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
import { max } from "moment";

const electricals_filter_reducer = (state, action) => {
  if (action.type === FILTER_SIDEBAR_OPEN) {
    return {
      ...state,
      show_filter_sidebar: true,
    };
  }
  if (action.type === FILTER_SIDEBAR_CLOSE) {
    return {
      ...state,
      show_filter_sidebar: false,
    };
  }
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((ele) => ele.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_electricals: [...action.payload],
      filtered_electricals: [...action.payload],
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
    const { all_electricals } = state;
    const { category, company, price } = state.filters;
    let tempelectricals = [...all_electricals];

    if (category !== "all") {
      tempelectricals = tempelectricals.filter((ele) =>
        ele.category.includes(category)
      );
    }

    if (company !== "all") {
      tempelectricals = tempelectricals.filter(
        (ele) => ele.company === company
      );
    }

    tempelectricals = tempelectricals.filter((ele) => ele.price <= price);
    return {
      ...state,
      filtered_electricals: tempelectricals,
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
    const { sort, filtered_electricals, all_electricals } = state;
    let tempelectricals = [];

    if (sort === "price-lowest") {
      tempelectricals = filtered_electricals.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      tempelectricals = filtered_electricals.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempelectricals = filtered_electricals.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (sort === "name-z") {
      tempelectricals = filtered_electricals.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return {
      ...state,
      filtered_electricals: tempelectricals,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default electricals_filter_reducer;
