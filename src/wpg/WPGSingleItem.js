import Stars from "../components/Stars";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const WPGSingleItem = function ({ wpg }) {
  const {
    id,
    name,
    category = [],
    company = [],
    size,
    stars,
    reviews,
    color = [],
    mrp,
    discount,
    images = [
      [
        {
          url: "",
        },
      ],
    ],
    sold,
    information,
    priceArray = [],
  } = wpg;

  const price = Number(mrp) * (1 - Number(discount) / 100);
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <Link to={`/wpg/${id}`}>
            <img src={images[0].url} alt={name} />
          </Link>
        </div>

        <div className="discount circle flexcenter">
          <span>{discount}%</span>
        </div>
      </div>
      <div className="content">
        <h3 className="main-links">
          <Link to={`/wpg/${id}`}>{name}</Link>
        </h3>
        <Stars stars={stars} reviews={reviews} />
        <div className="price">
          <span className="current">{formatPrice(priceArray[0])}</span>
          <span className="normal mini-text">
            {formatPrice(mrp.split(",")[0])}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WPGSingleItem;
