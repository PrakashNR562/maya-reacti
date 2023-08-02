import React, { useEffect, useState } from "react";
import "../all.css";
import { FaAlignLeft } from "react-icons/fa";
import NavBarInner from "./NavBarInner";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { useUserContext } from "../context/user_context";

const NavBarNew = function () {
  //copy menu  for mobile
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const { total_items, total_amount } = useCartContext();

  const [showCategories, setShowCategories] = useState(false);
  const toggleShowCategories = function () {
    setShowCategories((prev) => !prev);
  };
  return (
    <div id="page" className="site">
      <aside className="site-off desktop-hide">
        <div className="off-canvas">
          <div className="canvas-head">
            <div className="logo">
              <a href="/">
                <span className="circle"></span>.Maya
              </a>
            </div>
            <a href="#" className="t-close flexcenter">
              <i className="ri-close-line"></i>
            </a>
          </div>
          <div className="departments"></div>
          <nav></nav>
          <div className="thetop-nav"></div>
        </div>
      </aside>
      <header>
        <div className="header-nav">
          <div className="container">
            <div className="wrapper flexitem">
              <a href="#" className="desktop-hide hidden trigger ">
                <span className="icon-small">
                  <i className="ri-menu-2-line"></i>
                </span>
              </a>
              <div className="left flexitem">
                <div className="logo">
                  <a href="/">
                    <span className="circle"></span>Maya
                  </a>
                </div>
                <nav className="mobile-hide">
                  <ul className="flexitem second-links">
                    <li>
                      <a href="#" className="flexitem second-links">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flexitem second-links">
                        Shop
                      </a>
                    </li>
                    <li className="has-child">
                      <a href="#" className="flexitem second-links">
                        Hardware
                        <div className="icon-small">
                          <i className="ri-arrow-down-s-line"></i>
                        </div>
                      </a>
                      <div className="mega">
                        <div className="container">
                          <div className="wrapper">
                            <div className="flexcol">
                              <div className="row">
                                <h4>Paints</h4>
                                <ul className="reduce-gap">
                                  <li>
                                    <a href="#">Interior Paints</a>
                                  </li>
                                  <li>
                                    <a href="#">Exterior Paints</a>
                                  </li>
                                  <li>
                                    <a href="#">Royale Play Designs</a>
                                  </li>
                                  <li>
                                    <a href="#">Waterproofing</a>
                                  </li>
                                  <li>
                                    <a href="#">Stencil Kits</a>
                                  </li>
                                  <li>
                                    <a href="#">Nilaya Wallpapers</a>
                                  </li>
                                  <li>
                                    <a href="#">Tiles Grouting</a>
                                  </li>
                                  <li>
                                    <a href="#">Floor/Tile paints</a>
                                  </li>
                                  <li>
                                    <a href="#">Tools & Accessories</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>Electricals</h4>
                                <ul className="reduce-gap">
                                  <li>
                                    <a href="#">Electric Wires</a>
                                  </li>
                                  <li>
                                    <a href="#">Celing Fans</a>
                                  </li>
                                  <li>
                                    <a href="#">Geysers</a>
                                  </li>
                                  <li>
                                    <a href="#">Exhaust Fans</a>
                                  </li>
                                  <li>
                                    <a href="#">Lights and Bulbs</a>
                                  </li>
                                  <li>
                                    <a href="#">Switches</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <Link to="/tiles">Tiles</Link>
                                <ul className="reduce-gap">
                                  <li>
                                    <a href="#">Floor Tiles</a>
                                  </li>
                                  <li>
                                    <a href="#">Wall Tiles</a>
                                  </li>
                                  <li>
                                    <a href="#">Parking Tiles</a>
                                  </li>
                                  <li>
                                    <a href="#">Elevation Tiles</a>
                                  </li>
                                  <li>
                                    <a href="#">Kitchen Tiles</a>
                                  </li>
                                  <li>
                                    <a href="#">Bathroom Tiles</a>
                                  </li>
                                  <li>
                                    <a href="#">Balcony Tiles</a>
                                  </li>
                                  <li>
                                    <a href="#">Special Anti-skid Tiles</a>
                                  </li>
                                  <li>
                                    <a href="#">Epoxy & Grouting</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="flexcol">
                              <div className="row">
                                <h4>Top Brands</h4>
                                <ul className="women-brands reduce-gap">
                                  <li>
                                    <a href="#">Asian Paints</a>
                                  </li>
                                  <li>
                                    <a href="#">Jaquar</a>
                                  </li>
                                  <li>
                                    <a href="#">Cera</a>
                                  </li>
                                  <li>
                                    <a href="#">Parryware</a>
                                  </li>
                                  <li>
                                    <a href="#">Anchor</a>
                                  </li>
                                  <li>
                                    <a href="#">Havells</a>
                                  </li>
                                  <li>
                                    <a href="#">Anchor</a>
                                  </li>
                                  <li>
                                    <a href="#">Supreme</a>
                                  </li>
                                  <li>
                                    <a href="#">Ashirvad</a>
                                  </li>
                                  <li>
                                    <a href="#">Finolex</a>
                                  </li>
                                  <li>
                                    <a href="#">Sonex</a>
                                  </li>
                                </ul>
                                <a href="#" className="view-all">
                                  View All Brands{" "}
                                  <i className="ri-arrow-right-line"></i>
                                </a>
                              </div>
                            </div>
                            <div className="flexcol products">
                              <div className="row">
                                <div className="media">
                                  <div className="thumbnail object-cover">
                                    <a href="#">IMAGE</a>
                                  </div>
                                </div>
                                <div className="text-content">
                                  <h4>Most wanted !</h4>
                                  <a href="#" className="primary-button">
                                    Order Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="has-child">
                      <Link to="/sanitary" className="flexitem second-links">
                        Sanitary
                      </Link>
                    </li>
                    <li>
                      <Link to="/tiles" className="flexitem second-links">
                        Tiles
                        <div className="fly-item">
                          <span>New!</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="right ">
                <ul className="flexitem second-links">
                  {!myUser ? (
                    <li className="mobile-hide right-container">
                      <button type="button" onClick={loginWithRedirect}>
                        <div className="icon-large">
                          <i className="ri-login-circle-line"></i>
                        </div>
                      </button>
                    </li>
                  ) : (
                    <li className="mobile-hide right-container">
                      <button
                        type="button"
                        onClick={() => {
                          logout({
                            returnTo: window.location.origin,
                          });
                        }}
                      >
                        <div className="icon-large">
                          <i className="ri-logout-circle-line"></i>
                        </div>
                      </button>
                    </li>
                  )}

                  <li className="mobile-hide right-container">
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-heart-line"></i>
                      </div>
                      <div className="fly-item ">
                        <span className="item-number">0</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-shopping-cart-line"></i>
                      </div>
                      <div className="fly-item">
                        <span className="item-number">{total_items}</span>
                      </div>
                    </a>
                  </li>
                  <div className="icon-text">
                    <div className="mini-text">Total</div>
                    <div className="cart-total">
                      {formatPrice(total_amount)}
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBarNew;
