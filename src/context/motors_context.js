import React, { useEffect, useContext, useReducer } from "react";
import motors_reducer from "../reducers/motors_reducer";
import { motor_url } from "../utils/constants";
import axios from "axios";
import {
  GET_MOTOR_BEGIN,
  GET_MOTOR_ERROR,
  GET_MOTOR_SUCCESS,
  GET_SINGLE_MOTOR_BEGIN,
  GET_SINGLE_MOTOR_ERROR,
  GET_SINGLE_MOTOR_SUCCESS,
} from "../actions";
const initialState = {
  motor_loading: false,
  motor_error: false,
  motor: [],
  single_motor_loading: false,
  single_motor_error: false,
  single_motor: {},
};
const MotorContext = React.createContext({
  motor_loading: "",
  motor_error: "",
  motor: [],
  single_motor_loading: false,
  single_motor_error: false,
  single_motor: {},
  fetchSingleMotor: "",
});

export const MotorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(motors_reducer, initialState);
  const fetchMotor = async (url) => {
    dispatch({ type: GET_MOTOR_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_MOTOR_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_MOTOR_ERROR });
    }
  };
  const fetchSingleMotor = async function (url) {
    dispatch({ type: GET_SINGLE_MOTOR_BEGIN });
    try {
      const response = await axios.get(url);
      const singleMOTOR = response.data;
      dispatch({ type: GET_SINGLE_MOTOR_SUCCESS, payload: singleMOTOR });
    } catch (error) {
      dispatch({ type: GET_SINGLE_MOTOR_ERROR });
    }
  };
  useEffect(() => {
    if (window.location.pathname.includes("/motor")) {
      fetchMotor(`${motor_url}`);
    }
  }, []);

  const contextValue = {
    ...state,

    fetchSingleMotor,
  };

  return (
    <MotorContext.Provider value={contextValue}>
      {children}
    </MotorContext.Provider>
  );
};
// make sure use
export const useMotorContext = () => {
  return useContext(MotorContext);
};
