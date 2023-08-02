import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { CartElement } from "@stripe/react-stripe-js";
import CartIndividualItem from "./CartIndividualItem";
import CartTotals from "./CartTotals";

const CartPage = () => {
  const { cart, clearCart } = useCartContext();

  if (cart.length < 1) {
    return (
      <div className="single-cart">
        <div className="container">
          <div className="wrapper">
            <div className="breadcrumb">
              <ul className="flexitem">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>Cart</li>
              </ul>
            </div>
            <div className="page-title">
              <h1>Shopping Cart</h1>
            </div>
            <h1>Your Cart is Empty</h1>
            <Link to="/" className="link-button">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="single-cart">
      <div className="container">
        <div className="wrapper">
          <div className="breadcrumb">
            <ul className="flexitem">
              <li>
                <a href="#">Home</a>
              </li>
              <li>Cart</li>
            </ul>
          </div>
          <div className="page-title">
            <h1>Shopping Cart</h1>
          </div>
          <div className="products one cart">
            <div className="flexwrap">
              <form action="" className="form-cart">
                <div className="item">
                  <table id="cart-table">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((cartItem) => {
                        console.log(cartItem.color);
                        return <CartIndividualItem cartItem={cartItem} />;
                      })}
                    </tbody>
                  </table>
                  <div className="link-container">
                    <Link to="/tiles" className="primary-button">
                      Continue Shopping
                    </Link>
                    <button
                      type="button"
                      className="primary-button clear-btn"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </form>
              <CartTotals />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
