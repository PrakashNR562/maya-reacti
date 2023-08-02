import React, { useEffect, useContext, useReducer } from "react";
import wpg_reducer from "../reducers/wpg_reducer";
import { wpg_url } from "../utils/constants";
import axios from "axios";
import {
  GET_WPG_BEGIN,
  GET_WPG_ERROR,
  GET_WPG_SUCCESS,
  GET_SINGLE_WPG_BEGIN,
  GET_SINGLE_WPG_ERROR,
  GET_SINGLE_WPG_SUCCESS,
} from "../actions";
const initialState = {
  wpg_loading: false,
  wpg_error: false,
  wpg: [],
  single_wpg_loading: false,
  single_wpg_error: false,
  single_wpg: {},
};
const WPGContext = React.createContext({
  wpg_loading: "",
  wpg_error: "",
  wpg: [],
  single_wpg_loading: false,
  single_wpg_error: false,
  single_wpg: {},
  fetchSingleWPG: "",
});

export const WPGProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wpg_reducer, initialState);
  const fetchWPG = async (url) => {
    dispatch({ type: GET_WPG_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_WPG_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_WPG_ERROR });
    }
  };
  const fetchSingleWPG = async function (url) {
    dispatch({ type: GET_SINGLE_WPG_BEGIN });
    try {
      const response = await axios.get(url);
      const singleWPG = response.data;
      dispatch({ type: GET_SINGLE_WPG_SUCCESS, payload: singleWPG });
    } catch (error) {
      dispatch({ type: GET_SINGLE_WPG_ERROR });
    }
  };
  useEffect(() => {
    if (window.location.pathname.includes("/wpg")) {
      fetchWPG(`${wpg_url}`);
    }
  }, []);

  const contextValue = {
    ...state,

    fetchSingleWPG,
  };

  return (
    <WPGContext.Provider value={contextValue}>{children}</WPGContext.Provider>
  );
};
// make sure use
export const useWPGContext = () => {
  return useContext(WPGContext);
};
