import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import CheckOutItems from "./CheckOutItems";

const CheckOutMain = function () {
  const { total_mrp, total_amount, cart } = useCartContext();

  // State variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isValidForm = () => {
    // Add your form validation logic here
    if (
      !firstName.trim() ||
      !streetAddress.trim() ||
      !postalCode.trim() ||
      !phoneNumber.trim()
    ) {
      setErrorMessage("Please fill in all the required fields.");
      return false;
    }

    // Additional validations can be added here if needed

    return true;
  };

  const whatsApp = () => {
    if (isValidForm()) {
      const url =
        "https://wa.me/7406424242?text=" +
        "Name: " +
        firstName +
        "%0a" +
        "Address: " +
        streetAddress +
        "%0a" +
        "postal Code: " +
        postalCode +
        "%0a" +
        "phoneNumber: " +
        phoneNumber +
        "%0a" +
        "notes: " +
        orderNotes;
      window.open(url, "_blank").focus();
      setErrorMessage("");
    }
  };

  return (
    <div className="single-checkout">
      <div className="container">
        <div className="wrapper">
          <div className="checkout flexwrap">
            <div className="item left styled">
              <h1>Shipping Address</h1>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <form action="">
                <p>
                  <label htmlFor="fname">
                    First Name <span></span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </p>

                <p>
                  <label htmlFor="address">
                    Street Address <span></span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    required
                  />
                </p>

                <p>
                  <label htmlFor="postal">
                    Zip / Postal Code <span></span>
                  </label>
                  <input
                    type="number"
                    id="postal"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                  />
                </p>

                <p>
                  <label htmlFor="phone">
                    Phone Number <span></span>
                  </label>
                  <input
                    type="number"
                    id="phone"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </p>
                <p>
                  <label>Order Notes (optional)</label>
                  <textarea
                    cols="30"
                    rows="10"
                    id="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                  ></textarea>
                </p>
              </form>

              <div className="primary-checkout">
                <button
                  className="primary-button"
                  type="button"
                  onClick={whatsApp}
                >
                  Place Order
                </button>
              </div>
            </div>
            <div className="item right checkout-right">
              <h2>Order Summary</h2>
              <div className="summary-order is_sticky">
                <div className="summary-totals">
                  <ul>
                    <li>
                      <span>Subtotal</span>
                      <span>{formatPrice(total_mrp)}</span>
                    </li>
                    <li>
                      <span>Discount</span>
                      <span>-{formatPrice(total_mrp - total_amount)}</span>
                    </li>

                    <li>
                      <span>Total</span>
                      <span>{formatPrice(total_amount)}</span>
                    </li>
                  </ul>
                </div>
                <ul className="products mini">
                  {cart.map((cartItem) => {
                    return (
                      <CheckOutItems cartItem={cartItem} key={cartItem.id} />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutMain;
