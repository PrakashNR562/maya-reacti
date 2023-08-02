import { type } from "@testing-library/user-event/dist/type";
import { formatPrice } from "../utils/helpers";
import Stars from "./Stars";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";
const initalise = {
  Name: "",
  category: "",
  color: "",
  description: "",
  images: [""],
  mrp: "",
  price: "",
  properties: "",
  quantitysold: "",
  quantityAvailable: "",
};
const TrendingMain = function ({
  mainProduct = {
    ...initalise,
  },
}) {
  const {
    Name,
    category,
    color,
    description,
    images,
    mrp,
    price,
    properties,
    quantitysold,
    quantityAvailable,
    id,
  } = mainProduct;
  const numberMRP = Number(mrp);
  const numberPrice = Number(price);
  const numberQS = Number(quantitysold);
  const numberQA = Number(quantityAvailable);
  const discount = Math.ceil(((numberMRP - numberPrice) / numberMRP) * 100);
  const barPercentage = Math.ceil(((numberQA - numberQS) / numberQA) * 100);
  return (
    <div className="row products big">
      <div className="item">
        <div className="offer">
          <p>Offer Ends at</p>

          <CountdownTimer />
        </div>
        <div className="media">
          <div className="image">
            <Link to={`/products/${id}`}>
              <img src={images[0].url} alt={Name} />
            </Link>
          </div>
          <div className="hoverable"></div>
          <div className="discount circle flexcenter">
            <span>{discount}%</span>
          </div>
        </div>
        <div className="content">
          {Stars({
            stars: 5,
            reviews: 100,
          })}
          <h3 className="main-links">
            <a href="#" className="center">
              {Name}
            </a>
          </h3>
          <div className="price">
            <span className="current">{formatPrice(price)}</span>
            <span className="normal mini-text">{formatPrice(mrp)}</span>
          </div>
          <div className="stock mini-text">
            <div className="qty">
              <span>
                Stock:{" "}
                <strong className="qty-available">{quantityAvailable}</strong>
              </span>
              <span>
                Sold: <strong className="qty-sold">{quantitysold}</strong>
              </span>
            </div>
            <div className="bar">
              <div
                className="available"
                style={{ width: `${barPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingMain;
