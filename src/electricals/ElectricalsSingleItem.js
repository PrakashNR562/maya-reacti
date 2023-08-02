import Stars from "../components/Stars";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const ElectricalsSingleItem = function ({ electricals }) {
  const {
    id,
    name,

    category,
    company,
    capacity,
    stars,
    reviews,
    mrp,
    price,

    typeWarranty,
    images = [
      [
        {
          url: "",
        },
      ],
    ],
    sold,

    colors,
  } = electricals;

  const discount = Math.floor(
    ((Number(mrp) - Number(price)) / Number(mrp)) * 100
  );

  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <Link to={`/electricals/${id}`}>
            <img src={images[0].url} alt={name} />
          </Link>
        </div>

        <div className="discount circle flexcenter">
          <span>{discount}%</span>
        </div>
      </div>
      <div className="content">
        <h3 className="main-links">
          <Link to={`/electricals/${id}`}>{name}</Link>
        </h3>
        <Stars stars={stars} reviews={reviews} />
        <div className="price">
          <span className="current">{formatPrice(price)}</span>
          <span className="normal mini-text">{formatPrice(mrp)}</span>
        </div>
      </div>
    </div>
  );
};

export default ElectricalsSingleItem;
