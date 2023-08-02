import React, { useEffect, useContext, useReducer } from "react";
import electricals_reducer from "../reducers/electricals_reducer";
import { electricals_url } from "../utils/constants";
import axios from "axios";
import {
  GET_ELECTRICALS_BEGIN,
  GET_ELECTRICALS_ERROR,
  GET_ELECTRICALS_SUCCESS,
  GET_SINGLE_ELECTRICALS_BEGIN,
  GET_SINGLE_ELECTRICALS_ERROR,
  GET_SINGLE_ELECTRICALS_SUCCESS,
} from "../actions";
const initialState = {
  electricals_loading: false,
  electricals_error: false,
  electricals: [],
  single_electricals_loading: false,
  single_electricals_error: false,
  single_electricals: {},
};
const ElectricalsContext = React.createContext({
  electricals_loading: "",
  electricals_error: "",
  electricals: [],
  single_electricals_loading: false,
  single_electricals_error: false,
  single_electricals: {},
  fetchSingleElectricals: "",
});

export const ElectricalsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(electricals_reducer, initialState);
  const fetchElectricals = async (url) => {
    dispatch({ type: GET_ELECTRICALS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_ELECTRICALS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_ELECTRICALS_ERROR });
    }
  };
  const fetchSingleElectricals = async function (url) {
    dispatch({ type: GET_SINGLE_ELECTRICALS_BEGIN });
    try {
      const response = await axios.get(url);
      const singleELECTRICALS = response.data;
      dispatch({
        type: GET_SINGLE_ELECTRICALS_SUCCESS,
        payload: singleELECTRICALS,
      });
    } catch (error) {
      dispatch({ type: GET_SINGLE_ELECTRICALS_ERROR });
    }
  };
  useEffect(() => {
    if (window.location.pathname.includes("/electricals")) {
      fetchElectricals(`${electricals_url}`);
    }
  }, []);

  const contextValue = {
    ...state,

    fetchSingleElectricals,
  };

  return (
    <ElectricalsContext.Provider value={contextValue}>
      {children}
    </ElectricalsContext.Provider>
  );
};
// make sure use
export const useElectricalsContext = () => {
  return useContext(ElectricalsContext);
};
