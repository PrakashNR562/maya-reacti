import React from "react";
import Stars from "./Stars";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const TrendingSecondary = function ({ item }) {
  const {
    Name,
    images,
    mrp,
    price,
    quantitysold,
    quantityAvailable,
    reviews,
    stars,
    id,
  } = item;
  const numberMRP = Number(mrp);
  const numberPrice = Number(price);
  const numberQS = Number(quantitysold);
  const numberQA = Number(quantityAvailable);
  const discount = Math.ceil(((numberMRP - numberPrice) / numberMRP) * 100);
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <Link to={`/products/${id}`}>
            <img src={images[0].url} alt={Name} />
          </Link>
        </div>

        <div className="discount circle flexcenter">
          <span>{discount}%</span>
        </div>
      </div>
      <div className="content">
        {Stars({
          stars: stars,
          reviews: reviews,
        })}
        <h3 className="main-links">
          <a href="#">{Name}</a>
        </h3>
        <div className="price">
          <span className="current">{formatPrice(price)}</span>
          <span className="normal mini-text">{formatPrice(mrp)}</span>
        </div>
        <div className="mini-text">
          <p>{quantitysold} sold</p>
          <p>{quantityAvailable} available</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingSecondary;
