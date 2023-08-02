// import React, { useEffect, useContext, useReducer } from "react";
// import tiles_reducer from "../reducers/tiles_reducer";
// import { tiles_url } from "../utils/constants";
// import axios from "axios";
// import {
//   GET_TILES_BEGIN,
//   GET_TILES_ERROR,
//   GET_TILES_SUCCESS,
//   GET_SINGLE_TILE_BEGIN,
//   GET_SINGLE_TILE_ERROR,
//   GET_SINGLE_TILE_SUCCESS,
// } from "../actions";

// const initialState = {
//   tiles_loading: false,
//   tiles_error: false,
//   tiles: [],
//   single_tile_loading: false,
//   single_tile_error: false,
//   single_tile: {},
// };

// const TilesContext = React.createContext({
//   tiles_loading: "",
//   tiles_error: "",
//   tiles: [],
//   single_tile_loading: false,
//   single_tile_error: false,
//   single_tile: {},
//   fetchSingleTile: "",
// });

// export const TilesProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(tiles_reducer, initialState);
//   const fetchTiles = async (url) => {
//     dispatch({ type: GET_TILES_BEGIN });
//     try {
//       const response = await axios.get(url);
//       const products = response.data;
//       dispatch({ type: GET_TILES_SUCCESS, payload: products });
//     } catch (error) {
//       dispatch({ type: GET_TILES_ERROR });
//     }
//   };

//   const fetchSingleTile = async function (url) {
//     dispatch({ type: GET_SINGLE_TILE_BEGIN });
//     try {
//       const response = await axios.get(url);
//       const singleTile = response.data;
//       dispatch({ type: GET_SINGLE_TILE_SUCCESS, payload: singleTile });
//     } catch (error) {
//       dispatch({ type: GET_SINGLE_TILE_ERROR });
//     }
//   };

//   useEffect(() => {
//     // Check if the current URL contains "/tiles"

//     fetchTiles(`${tiles_url}`);
//   }, []);

//   const contextValue = {
//     ...state,
//     fetchSingleTile,
//   };

//   return (
//     <TilesContext.Provider value={contextValue}>
//       {children}
//     </TilesContext.Provider>
//   );
// };

// // make sure use
// export const useTilesContext = () => {
//   return useContext(TilesContext);
// };
// tiles_context.js
import React, { useEffect, useContext, useReducer } from "react";
import tiles_reducer from "../reducers/tiles_reducer";
import { tiles_url } from "../utils/constants";
import axios from "axios";
import {
  GET_TILES_BEGIN,
  GET_TILES_ERROR,
  GET_TILES_SUCCESS,
  GET_SINGLE_TILE_BEGIN,
  GET_SINGLE_TILE_ERROR,
  GET_SINGLE_TILE_SUCCESS,
} from "../actions";

const initialState = {
  tiles_loading: false,
  tiles_error: false,
  tiles: [], // Initialize with an empty array
  single_tile_loading: false,
  single_tile_error: false,
  single_tile: {},
};

const TilesContext = React.createContext({
  tiles_loading: "",
  tiles_error: "",
  tiles: [],
  single_tile_loading: false,
  single_tile_error: false,
  single_tile: {},
  fetchSingleTile: "",
});

export const TilesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tiles_reducer, initialState);
  const fetchTiles = async (url) => {
    dispatch({ type: GET_TILES_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_TILES_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_TILES_ERROR });
    }
  };

  const fetchSingleTile = async function (url) {
    dispatch({ type: GET_SINGLE_TILE_BEGIN });
    try {
      const response = await axios.get(url);
      const singleTile = response.data;
      dispatch({ type: GET_SINGLE_TILE_SUCCESS, payload: singleTile });
    } catch (error) {
      dispatch({ type: GET_SINGLE_TILE_ERROR });
    }
  };

  useEffect(() => {
    // Check if the current URL contains "/tiles"

    fetchTiles(`${tiles_url}`);
  }, []);

  const contextValue = {
    ...state,
    fetchSingleTile,
  };

  return (
    <TilesContext.Provider value={contextValue}>
      {state.tiles.length > 0 ? children : null}
    </TilesContext.Provider>
  );
};

// make sure use
export const useTilesContext = () => {
  return useContext(TilesContext);
};
