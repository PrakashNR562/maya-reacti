import Stars from "../components/Stars";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const TilesSingleItem = function ({ tile }) {
  const {
    category = [],
    color = [],
    company,
    family,
    id,
    images = [
      [
        {
          url: "",
        },
      ],
    ],
    material = [],
    mrp,
    name = "",
    price,
    reviews,
    size,
    sold,
    stars,
    stock,
    type = [],
  } = tile;
  let nameParts = "";
  if (name.includes(",")) {
    nameParts = name.split(",");
  } else {
    nameParts = [name];
  }
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <Link to={`/tiles/${id}`}>
            <img src={images[0].url} alt={name} />
          </Link>
        </div>

        <div className="discount circle flexcenter">
          <span>25%</span>
        </div>
      </div>
      <div className="content">
        <h3 className="main-links">
          <Link to={`/tiles/${id}`}>{nameParts[0]}</Link>
        </h3>
        <Stars stars={stars} reviews={reviews} />
        <div className="price">
          <span className="current">{formatPrice(mrp)}</span>
          <span className="normal mini-text">{formatPrice(price)}</span>
        </div>
      </div>
    </div>
  );
};

export default TilesSingleItem;
