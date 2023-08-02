import React from "react";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
const initialState = {
  stars: "",
  reviews: "",
  mrp: "",
  price: "",
  Name: "",
  images: [""],
  id: "",
};
const FeaturedProductsItem = function ({ item = initialState }) {
  const { stars, reviews, mrp, price, Name, images, id } = item;
  const numberMRP = Number(mrp);
  const numberPrice = Number(price);
  const discount = Math.ceil(((numberMRP - numberPrice) / numberMRP) * 100);
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <Link to={`/products/${id}`}>
            <img src={images[0].url} alt={Name} />
          </Link>
        </div>

        <div class="discount circle flexcenter">
          <span>{discount}%</span>
        </div>
      </div>
      <div className="content">
        <h3 className="main-links">
          <a href="#">{Name}</a>
        </h3>
        {Stars({
          stars: 5,
          reviews: 100,
        })}
        <div className="price">
          <span className="current">{formatPrice(price)}</span>
          <span className="normal mini-text">{formatPrice(mrp)}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsItem;
