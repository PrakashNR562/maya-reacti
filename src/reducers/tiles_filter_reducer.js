import { act } from "react-dom/test-utils";
import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  FILTER_SIDEBAR_CLOSE,
  FILTER_SIDEBAR_OPEN,
} from "../actions";

const tiles_filter_reducer = (state, action) => {
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
    // let maxPrice = action.payload.map((p) => p.price);
    // maxPrice = Math.max(...maxPrice);
    let maxPrice = 500;
    return {
      ...state,
      all_tiles: [...action.payload],
      filtered_tiles: [...action.payload],
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
    const { all_tiles } = state;
    const { category, company, color, price, type } = state.filters;
    let tempTiles = [...all_tiles];

    //category
    if (category !== "all") {
      tempTiles = tempTiles.filter((ele) => ele.category.includes(category));
    }
    if (company !== "all") {
      tempTiles = tempTiles.filter((ele) => ele.company === company);
    }
    if (type !== "all") {
      tempTiles = tempTiles.filter((ele) => ele.type.includes(type));
    }
    if (color != "all") {
      tempTiles = tempTiles.filter((ele) => ele.color.includes(color));
    }
    tempTiles = tempTiles.filter((ele) => ele.price <= price);

    return {
      ...state,
      filtered_tiles: tempTiles,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
      },
    };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_tiles } = state;
    let tempTiles = [...filtered_tiles];
    if (sort === "price-lowest") {
      tempTiles = tempTiles.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempTiles = tempTiles.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempTiles = tempTiles.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "name-z") {
      tempTiles = tempTiles.sort((a, b) => b.name.localeCompare(a.name));
    }
    return {
      ...state,
      filtered_tiles: tempTiles,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tiles_filter_reducer;
