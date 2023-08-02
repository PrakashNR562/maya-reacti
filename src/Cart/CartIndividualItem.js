import AmountButtons from "../components/AmountButtons";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import CartAmountButtons from "./CartAmountButtons";

const CartIndividualItem = function ({ cartItem }) {
  const { cart, removeItem, toggleAmount } = useCartContext();
  console.log(cartItem.price);
  const increase = () => {
    toggleAmount(cartItem.id, "inc");
  };
  const decrease = () => {
    toggleAmount(cartItem.id, "dec");
  };
  return (
    <>
      <tr key={cartItem.id}>
        <td className="flexitem">
          <div className="thumbnail object-cover">
            <img src={cartItem.image} alt={cartItem.name} />
          </div>
          <div className="content">
            <strong>
              <a href="#">{cartItem.name}</a>
            </strong>
            {cartItem.color && (
              <p className="color">
                Color:
                {cartItem.color === "neutral" ? (
                  <span style={{ background: "#eff1ff" }}></span>
                ) : (
                  <span style={{ background: cartItem.color }}></span>
                )}
              </p>
            )}
          </div>
        </td>
        <td>{formatPrice(cartItem.price)}</td>
        <td>
          <CartAmountButtons
            amount={cartItem.amount}
            increase={increase}
            decrease={decrease}
          />
        </td>
        <td>{formatPrice(Number(cartItem.price) * Number(cartItem.amount))}</td>
        <td>
          <button
            type="button"
            className="item-remove"
            onClick={() => {
              removeItem(cartItem.id);
            }}
          >
            <i className="ri-close-line"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartIndividualItem;
