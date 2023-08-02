import React from "react";
import { useProductsContext } from "../context/products_context";
import FeaturedProductsItem from "./FeaturedProductsItem";
import Loading from "./Loading";
import Error from "./Error";
const FeaturedProductsMain = function () {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="features">
      <div className="container">
        <div className="wrappers">
          <div className="column">
            <div className="sectop flexitem">
              <h2>
                <span className="circle"></span>
                <span>Featured Products</span>
              </h2>
              <div className="second-links">
                <a href="#" className="view-all">
                  View all<i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="products main flexwrap">
              {featured.map((ele, i) => {
                return <FeaturedProductsItem item={ele} key={ele.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsMain;
