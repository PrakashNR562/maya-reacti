import {
  GET_TILES_BEGIN,
  GET_TILES_SUCCESS,
  GET_TILES_ERROR,
  GET_SINGLE_TILE_BEGIN,
  GET_SINGLE_TILE_SUCCESS,
  GET_SINGLE_TILE_ERROR,
} from "../actions";
import axios from "axios";
const tiles_reducer = (state, action) => {
  if (action.type === GET_TILES_BEGIN) {
    return {
      ...state,
      tiles_loading: true,
      tiles_error: false,
    };
  }
  if (action.type === GET_TILES_SUCCESS) {
    return {
      ...state,
      tiles: action.payload,
      tiles_loading: false,
      tiles_error: false,
    };
  }
  if (action.type === GET_TILES_ERROR) {
    return {
      ...state,
      tiles_loading: false,
      tiles_error: true,
    };
  }
  if (action.type === GET_SINGLE_TILE_BEGIN) {
    return {
      ...state,
      single_tile_loading: true,
      single_tile_error: false,
    };
  }
  if (action.type === GET_SINGLE_TILE_ERROR) {
    return {
      ...state,
      single_tile_loading: false,
      single_tile_error: true,
    };
  }
  if (action.type === GET_SINGLE_TILE_SUCCESS) {
    return {
      ...state,
      single_tile_loading: false,
      single_tile: action.payload,
      single_tile_error: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tiles_reducer;
