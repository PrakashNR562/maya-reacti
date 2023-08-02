import Stars from "../components/Stars";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const SanitarySingleItem = function ({ sanitary }) {
  const {
    category = "",
    color = "",
    company = "",
    discount = "",
    id,
    images = [[{ url: "" }]],
    information = "",
    mrp = "",
    name = "",
    reviews = [],
    size = "",
    sold = "",
    stars = "",
    price,
  } = sanitary;
  const discountPrice = Math.ceil(Number(mrp) * (1 - Number(discount) / 100));
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <Link to={`/sanitary/${id}`}>
            <img src={images[0].url} alt={name} />
          </Link>
        </div>

        <div className="discount circle flexcenter">
          <span>{discount}%</span>
        </div>
      </div>
      <div className="content">
        <h3 className="main-links">
          <Link to={`/sanitary/${id}`}>{name}</Link>
        </h3>
        <Stars stars={stars} reviews={reviews} />
        <div className="price">
          <span className="current">{formatPrice(discountPrice)}</span>
          <span className="normal mini-text">{formatPrice(mrp)}</span>
        </div>
      </div>
    </div>
  );
};

export default SanitarySingleItem;
