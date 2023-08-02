// import {
//   SIDEBAR_OPEN,
//   SIDEBAR_CLOSE,
//   GET_PRODUCTS_BEGIN,
//   GET_PRODUCTS_SUCCESS,
//   GET_PRODUCTS_ERROR,
//   GET_SINGLE_PRODUCT_BEGIN,
//   GET_SINGLE_PRODUCT_SUCCESS,
//   GET_SINGLE_PRODUCT_ERROR,
// } from "../actions";
// import axios from "axios";
// const products_reducer = (state, action) => {
//   if (action.type === GET_PRODUCTS_BEGIN) {
//     return {
//       ...state,
//       products_loading: true,
//       products_error: false,
//     };
//   }
//   if (action.type === GET_PRODUCTS_SUCCESS) {
//     action.payload =action.payload || []
//     const featuredProducts = action.payload.filter(
//       (ele) => ele.featured === true
//     );
//     const trendingProducts = action.payload && action.payload.filter(
//       (ele) => !ele.hasOwnProperty("featured")
//     );

//     return {
//       ...state,
//       products: trendingProducts,
//       products_loading: false,
//       featured_products: featuredProducts,
//       products_error: false,
//     };
//   }
//   if (action.type === GET_PRODUCTS_ERROR) {
//     return {
//       ...state,
//       products_loading: false,
//       products_error: true,
//     };
//   }
//   if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
//     return {
//       ...state,
//       single_product_loading: true,
//       single_product_error: false,
//     };
//   }
//   if (action.type === GET_SINGLE_PRODUCT_ERROR) {
//     return {
//       ...state,
//       single_product_loading: false,
//       single_product_error: true,
//     };
//   }
//   if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
//     return {
//       ...state,
//       single_product_loading: false,
//       single_product: action.payload,
//       single_product_error: false,
//     };
//   }
//   throw new Error(`No Matching "${action.type}" - action type`);
// };

// export default products_reducer;
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import axios from "axios";

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return {
      ...state,
      products_loading: true,
      products_error: false,
    };
  }

  if (action.type === GET_PRODUCTS_SUCCESS) {
    let featuredProducts = [];
    let trendingProducts = [];

    if (Array.isArray(action.payload)) {
      featuredProducts = action.payload.filter((ele) => ele.featured === true);
      trendingProducts = action.payload.filter(
        (ele) => !ele.hasOwnProperty("featured")
      );
    }
    console.log(trendingProducts);
    console.log(featuredProducts);
    return {
      ...state,
      products: trendingProducts,
      products_loading: false,
      featured_products: featuredProducts,
      products_error: false,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: true,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
      single_product_error: false,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
