import React, { useState } from "react";
import AmountButtons from "./AmountButtons";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
const AddToCart = function ({ product, selectedColor }) {
  const { id, mrp, price } = product;
  console.log(typeof price);
  const { addToCart } = useCartContext();
  const [mainColor, setMainColor] = useState("");
  const [amount, setAmount] = useState(1);
  const increase = () => {
    let quantityAvailable = 50;
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > quantityAvailable) {
        tempAmount = quantityAvailable;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };
  if (!product) {
    return;
  }
  return (
    <>
      <div className="actions">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <div className="button-cart">
          <Link
            to="/cart"
            className="primary-button"
            onClick={() => {
              addToCart(id, selectedColor, price, mrp, product, amount);
            }}
          >
            Add to cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
