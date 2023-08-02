// // tiles_filter_context.js
import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/tiles_filter_reducer";
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  FILTER_SIDEBAR_OPEN,
  FILTER_SIDEBAR_CLOSE,
} from "../actions";
import { useTilesContext } from "./tiles_context";

const initialState = {
  filtered_tiles: [],
  all_tiles: [],
  show_filter_sidebar: false,
  sort: "name-a",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    type: "all",
  },
};

const TilesFilterContext = React.createContext({
  filtered_tiles: [],
  all_tiles: [],
  sort: "",
});

export const TilesFilterProvider = ({ children }) => {
  const { tiles } = useTilesContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: tiles });
  }, [tiles]);
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters]);
  const showFilterSideBarFunction = function () {
    dispatch({ type: FILTER_SIDEBAR_OPEN });
  };
  const hideFilterSideBarFunction = function () {
    dispatch({ type: FILTER_SIDEBAR_CLOSE });
  };
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = ({ name, value }) => {
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = function () {
    dispatch({ type: CLEAR_FILTERS });
  };

  const contextValue = {
    showFilterSideBarFunction,
    hideFilterSideBarFunction,
    updateSort,
    updateFilters,
    clearFilters,
    ...state,
  };
  return (
    <TilesFilterContext.Provider value={contextValue}>
      {children}
    </TilesFilterContext.Provider>
  );
};

// make sure use
export const useTilesFilterContext = () => {
  return useContext(TilesFilterContext);
};
