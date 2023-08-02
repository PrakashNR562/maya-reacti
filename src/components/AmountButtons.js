const AmountButtons = function ({ increase, decrease, amount }) {
  return (
    <div className="qty-control flexitem">
      <button className="minus circle" onClick={decrease}>
        -
      </button>
      <input type="text" value={amount} />
      <button className="plus circle" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default AmountButtons;
