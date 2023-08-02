import React, { useEffect, useContext, useReducer } from "react";
import sanitary_reducer from "../reducers/sanitary_reducer";
import { sanitary_url } from "../utils/constants";
import axios from "axios";
import {
  GET_SANITARY_BEGIN,
  GET_SANITARY_ERROR,
  GET_SANITARY_SUCCESS,
  GET_SINGLE_SANITARY_BEGIN,
  GET_SINGLE_SANITARY_ERROR,
  GET_SINGLE_SANITARY_SUCCESS,
} from "../actions";
const initialState = {
  sanitary_loading: false,
  sanitary_error: false,
  sanitary: [],
  // featured_products: [],
  single_sanitary_loading: false,
  single_sanitary_error: false,
  single_sanitary: {},
};
const SanitaryContext = React.createContext({
  sanitary_loading: "",
  sanitary_error: "",
  sanitary: [],
  single_sanitary_loading: false,
  single_sanitary_error: false,
  single_sanitary: {},
  fetchSingleSanitary: "",
});

export const SanitaryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sanitary_reducer, initialState);
  const fetchSanitary = async (url) => {
    dispatch({ type: GET_SANITARY_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_SANITARY_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_SANITARY_ERROR });
    }
  };
  const fetchSingleSanitary = async function (url) {
    dispatch({ type: GET_SINGLE_SANITARY_BEGIN });
    try {
      const response = await axios.get(url);
      const singleSanitary = response.data;
      dispatch({ type: GET_SINGLE_SANITARY_SUCCESS, payload: singleSanitary });
    } catch (error) {
      dispatch({ type: GET_SINGLE_SANITARY_ERROR });
    }
  };
  useEffect(() => {
    if (window.location.pathname.includes("/sanitary")) {
      fetchSanitary(`${sanitary_url}`);
    }
  }, []);

  const contextValue = {
    ...state,

    fetchSingleSanitary,
  };
  return (
    <SanitaryContext.Provider value={contextValue}>
      {children}
    </SanitaryContext.Provider>
  );
};
// make sure use
export const useSanitaryContext = () => {
  return useContext(SanitaryContext);
};
