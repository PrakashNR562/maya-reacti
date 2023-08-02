import React from "react";
import "../all.css";
import TrendingMain from "./TrendingMain";
import { useProductsContext } from "../context/products_context";
import Loading from "./Loading";
import Error from "./Error";
import TrendingSecondary from "./TrendingSecondary";
const Trending = function () {
  const { products, products_loading, products_error } = useProductsContext();
  if (products_loading) {
    return <Loading />;
  }
  if (products_error) {
    return <Error />;
  }
  if (!products_loading && !products_error) {
    return (
      <div className="trending">
        <div className="container">
          <div className="wrapper">
            <div className="sectop flexitem">
              <h2>
                <span className="circle"></span>
                <span>Trending Products</span>
              </h2>
            </div>
            <div className="column">
              <div className="flexwrap">
                {<TrendingMain mainProduct={products[2]} />}
                <div className="row products mini">
                  {products
                    .filter((ele, i) => i < 4)
                    .map((ele, i) => {
                      return <TrendingSecondary item={ele} key={i} />;
                    })}
                </div>
                <div className="row products mini">
                  {products
                    .filter((ele, i) => i > 3 && i < 8)
                    .map((ele, i) => {
                      return <TrendingSecondary item={ele} key={i} />;
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Trending;
