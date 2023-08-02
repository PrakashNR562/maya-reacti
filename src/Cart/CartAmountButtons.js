const CartAmountButtons = function ({ increase, decrease, amount }) {
  return (
    <div className="qty-control flexitem">
      <button type="button" className="minus" onClick={decrease}>
        -
      </button>
      <input type="text" value={amount} min="1" />
      <button type="button" className="plus" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default CartAmountButtons;
