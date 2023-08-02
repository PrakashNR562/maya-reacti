import React from "react";
import { useEffect, useState } from "react";
import NavBarInner from "./NavBarInner";
import "../all.css";

const NavBarCategories = function ({ toShow }) {
  useEffect(() => {
    function copyMenu() {
      let dptCategory = document.querySelector(".dpt-cat");
      let dptPlace = document.querySelector(".departments");
      dptPlace.innerHTML = dptCategory.innerHTML;

      let mainNav = document.querySelector(".header-nav nav");
      let navPlace = document.querySelector(".off-canvas nav");
      navPlace.innerHTML = mainNav.innerHTML;

      let topNav = document.querySelector(".header-top .wrapper");
      let topPlace = document.querySelector(".thetop-nav");

      if (topPlace.innerHTML) topPlace.innerHTML = topNav.innerHTML;
    }
    copyMenu();
    //show mobile menu
    const menuButton = document.querySelector(".trigger");
    const closeButton = document.querySelector(".t-close");
    const addClass = document.querySelector(".site");
    menuButton.addEventListener("click", function () {
      addClass.classList.toggle("showmenu");
    });
    closeButton.addEventListener("click", function () {
      addClass.classList.remove("showmenu");
    });
    // Show submenu on mobile

    const submenu = document.querySelectorAll(".has-child .icon-small");
    submenu.forEach((menu) => menu.addEventListener("click", toggle));
    function toggle(e) {
      e.preventDefault();
      submenu.forEach((item) =>
        item != this
          ? item.closest(".has-child").classList.remove("expand")
          : null
      );
      if (this.closest(".has-child").classList != "expand");
      this.closest(".has-child").classList.toggle("expand");
    }
  }, []);
  const [showCategories, setShowCategories] = useState(toShow);
  const toggleShowCategories = function () {
    setShowCategories((prev) => !prev);
  };
  return (
    <div className="header-main mobile-hide">
      <div className="container">
        <div className="wrapper flexitem">
          <div className="left">
            <div className="dpt-cat">
              <div className="dpt-head">
                <div className="main-text">All Departments</div>
                <div className="mini-text mobile-hide">Total 1059 products</div>
                <a href="#" className="dpt-trigger mobile-hide">
                  <i
                    className="ri-menu-3-line ri-xl"
                    onClick={toggleShowCategories}
                  ></i>
                </a>
              </div>
              {showCategories && <NavBarInner />}
            </div>
          </div>
          <div className="right">
            <div className="search-box">
              <form action="" className="search">
                <span className="icon-large"></span>
                <i className="ri-search-line"></i>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search for products"
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarCategories;
