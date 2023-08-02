import React from "react";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
const CartTotals = function () {
  const { total_mrp, total_amount } = useCartContext();
  return (
    <div class="cart-summary styled">
      <div class="item">
        <div class="cart-total">
          <table>
            <tbody>
              <tr>
                <th>Subtotal</th>
                <td>{formatPrice(total_mrp)}</td>
              </tr>
              <tr>
                <th>Discount</th>
                <td>-{formatPrice(total_mrp - total_amount)}</td>
              </tr>

              <tr class="grand-total">
                <th>TOTAL</th>
                <td>
                  <strong>{formatPrice(total_amount)}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <a href="/checkout" class="secondary-button">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
