import {
  GET_MOTOR_BEGIN,
  GET_MOTOR_SUCCESS,
  GET_MOTOR_ERROR,
  GET_SINGLE_MOTOR_BEGIN,
  GET_SINGLE_MOTOR_SUCCESS,
  GET_SINGLE_MOTOR_ERROR,
} from "../actions";
import axios from "axios";
const motors_reducer = (state, action) => {
  if (action.type === GET_MOTOR_BEGIN) {
    return {
      ...state,
      motor_loading: true,
      motor_error: false,
    };
  }
  if (action.type === GET_MOTOR_SUCCESS) {
    return {
      ...state,
      motor: action.payload,
      motor_loading: false,
      motor_error: false,
    };
  }
  if (action.type === GET_MOTOR_ERROR) {
    return {
      ...state,
      motor_loading: false,
      motor_error: true,
    };
  }
  if (action.type === GET_SINGLE_MOTOR_BEGIN) {
    return {
      ...state,
      single_motor_loading: true,
      single_motor_error: false,
    };
  }
  if (action.type === GET_SINGLE_MOTOR_ERROR) {
    return {
      ...state,
      single_motor_loading: false,
      single_motor_error: true,
    };
  }
  if (action.type === GET_SINGLE_MOTOR_SUCCESS) {
    return {
      ...state,
      single_motor_loading: false,
      single_motor: action.payload,
      single_motor_error: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default motors_reducer;
