import {
  GET_ELECTRICALS_BEGIN,
  GET_ELECTRICALS_SUCCESS,
  GET_ELECTRICALS_ERROR,
  GET_SINGLE_ELECTRICALS_BEGIN,
  GET_SINGLE_ELECTRICALS_SUCCESS,
  GET_SINGLE_ELECTRICALS_ERROR,
} from "../actions";
import axios from "axios";
const electricals_reducer = (state, action) => {
  if (action.type === GET_ELECTRICALS_BEGIN) {
    return {
      ...state,
      electricals_loading: true,
      electricals_error: false,
    };
  }
  if (action.type === GET_ELECTRICALS_SUCCESS) {
    return {
      ...state,
      electricals: action.payload,
      electricals_loading: false,
      electricals_error: false,
    };
  }
  if (action.type === GET_ELECTRICALS_ERROR) {
    return {
      ...state,
      electricals_loading: false,
      electricals_error: true,
    };
  }
  if (action.type === GET_SINGLE_ELECTRICALS_BEGIN) {
    return {
      ...state,
      single_electricals_loading: true,
      single_electricals_error: false,
    };
  }
  if (action.type === GET_SINGLE_ELECTRICALS_ERROR) {
    return {
      ...state,
      single_electricals_loading: false,
      single_electricals_error: true,
    };
  }
  if (action.type === GET_SINGLE_ELECTRICALS_SUCCESS) {
    return {
      ...state,
      single_electricals_loading: false,
      single_electricals: action.payload,
      single_electricals_error: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default electricals_reducer;
