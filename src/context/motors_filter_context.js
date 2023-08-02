import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/motors_filter_reducer";
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
import { useMotorContext } from "./motors_context";
const initialState = {
  filtered_motor: [],
  all_motor: [],
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

const MotorFilterContext = React.createContext({
  filtered_motor: [],
  all_motor: [],
  sort: "",
});

export const MotorFilterProvider = ({ children }) => {
  const { motor } = useMotorContext();

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: motor });
  }, [motor]);
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
    <MotorFilterContext.Provider value={contextValue}>
      {children}
    </MotorFilterContext.Provider>
  );
};
// make sure use
export const useMotorFilterContext = () => {
  return useContext(MotorFilterContext);
};
