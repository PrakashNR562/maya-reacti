import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/sanitary_filter_reducer";
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
import { useSanitaryContext } from "./sanitary_context";
const initialState = {
  filtered_sanitary: [],
  all_sanitary: [],
  show_filter_sidebar: false,
  sort: "name-a",
  filters: {
    company: "all",
    category: "all",

    min_price: 0,
    max_price: 0,
    price: 0,
  },
};

const SanitaryFilterContext = React.createContext({});

export const SanitaryFilterProvider = ({ children }) => {
  const { sanitary } = useSanitaryContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: sanitary });
  }, [sanitary]);
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
    <SanitaryFilterContext.Provider value={contextValue}>
      {children}
    </SanitaryFilterContext.Provider>
  );
};
// make sure use
export const useSanitaryFilterContext = () => {
  return useContext(SanitaryFilterContext);
};
