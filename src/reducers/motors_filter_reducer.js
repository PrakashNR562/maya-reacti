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

const motor_filter_reducer = (state, action) => {
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
      all_motor: [...action.payload],
      filtered_motor: [...action.payload],
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
    const { all_motor } = state;
    const { category, company, price } = state.filters;
    let tempmotor = [...all_motor];

    if (category !== "all") {
      tempmotor = tempmotor.filter((ele) => ele.category.includes(category));
    }

    if (company !== "all") {
      tempmotor = tempmotor.filter((ele) => ele.company === company);
    }

    tempmotor = tempmotor.filter((ele) => ele.price <= price);
    return {
      ...state,
      filtered_motor: tempmotor,
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
    const { sort, filtered_motor } = state;
    let tempmotor = [];

    if (sort === "price-lowest") {
      tempmotor = filtered_motor.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sort === "price-highest") {
      tempmotor = filtered_motor.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempmotor = filtered_motor.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      tempmotor = filtered_motor.sort((a, b) => b.name.localeCompare(a.name));
    }

    return {
      ...state,
      // filtered_motor: tempmotor,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default motor_filter_reducer;
