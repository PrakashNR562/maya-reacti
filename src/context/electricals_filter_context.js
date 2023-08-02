import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/electricals_filter_reducer";
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
import { useElectricalsContext } from "./electricals_context";
const initialState = {
  filtered_electricals: [],
  all_electricals: [],
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

const ElectricalsFilterContext = React.createContext({
  filtered_electricals: [],
  all_electricals: [],
  sort: "",
});

export const ElectricalsFilterProvider = ({ children }) => {
  const { electricals } = useElectricalsContext();

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: electricals });
  }, [electricals]);
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
    console.log(value);
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
    <ElectricalsFilterContext.Provider value={contextValue}>
      {children}
    </ElectricalsFilterContext.Provider>
  );
};
// make sure use
export const useElectricalsFilterContext = () => {
  return useContext(ElectricalsFilterContext);
};
