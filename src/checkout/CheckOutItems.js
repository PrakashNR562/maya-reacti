import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";

const CheckOutItems = function ({ cartItem }) {
  console.log(cartItem);
  return (
    <li class="item">
      <div class="thumbnail object-cover">
        <img src={cartItem.image} class="checkout-image" alt="" />
      </div>

      <div class="item-content">
        <p>{cartItem.name}</p>
        <span class="price">
          <span>{formatPrice(cartItem.price)}</span>
          <span>x{cartItem.amount}</span>
        </span>
      </div>
    </li>
  );
};

export default CheckOutItems;
