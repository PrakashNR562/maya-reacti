import {
  GET_WPG_BEGIN,
  GET_WPG_SUCCESS,
  GET_WPG_ERROR,
  GET_SINGLE_WPG_BEGIN,
  GET_SINGLE_WPG_SUCCESS,
  GET_SINGLE_WPG_ERROR,
} from "../actions";
import axios from "axios";
const wpg_reducer = (state, action) => {
  if (action.type === GET_WPG_BEGIN) {
    return {
      ...state,
      wpg_loading: true,
      wpg_error: false,
    };
  }
  if (action.type === GET_WPG_SUCCESS) {
    return {
      ...state,
      wpg: action.payload,
      wpg_loading: false,
      wpg_error: false,
    };
  }
  if (action.type === GET_WPG_ERROR) {
    return {
      ...state,
      wpg_loading: false,
      wpg_error: true,
    };
  }
  if (action.type === GET_SINGLE_WPG_BEGIN) {
    return {
      ...state,
      single_wpg_loading: true,
      single_wpg_error: false,
    };
  }
  if (action.type === GET_SINGLE_WPG_ERROR) {
    return {
      ...state,
      single_wpg_loading: false,
      single_wpg_error: true,
    };
  }
  if (action.type === GET_SINGLE_WPG_SUCCESS) {
    return {
      ...state,
      single_wpg_loading: false,
      single_wpg: action.payload,
      single_wpg_error: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default wpg_reducer;
