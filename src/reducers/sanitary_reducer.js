import {
  GET_SANITARY_BEGIN,
  GET_SANITARY_SUCCESS,
  GET_SANITARY_ERROR,
  GET_SINGLE_SANITARY_BEGIN,
  GET_SINGLE_SANITARY_SUCCESS,
  GET_SINGLE_SANITARY_ERROR,
} from "../actions";
import axios from "axios";
const sanitary_reducer = (state, action) => {
  if (action.type === GET_SANITARY_BEGIN) {
    return {
      ...state,
      sanitary_loading: true,
      sanitary_error: false,
    };
  }
  if (action.type === GET_SANITARY_SUCCESS) {
    return {
      ...state,
      sanitary: action.payload,
      sanitary_loading: false,
      sanitary_error: false,
    };
  }
  if (action.type === GET_SANITARY_ERROR) {
    return {
      ...state,
      sanitary_loading: false,
      sanitary_error: true,
    };
  }
  if (action.type === GET_SINGLE_SANITARY_BEGIN) {
    return {
      ...state,
      single_sanitary_loading: true,
      single_sanitary_error: false,
    };
  }
  if (action.type === GET_SINGLE_SANITARY_ERROR) {
    return {
      ...state,
      single_sanitary_loading: false,
      single_sanitary_error: true,
    };
  }
  if (action.type === GET_SINGLE_SANITARY_SUCCESS) {
    return {
      ...state,
      single_sanitary_loading: false,
      single_sanitary: action.payload,
      single_sanitary_error: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default sanitary_reducer;
