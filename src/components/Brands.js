import React from "react";
import "../all.css";
import logo1 from "../assets/brands/asian-paints-logo.png";
import logo2 from "../assets/brands/ashirvad logo.png";
import logo3 from "../assets/brands/gm logo.png";
import logo4 from "../assets/brands/orient logo.png";
import logo5 from "../assets/brands/havells logo.png";
import logo6 from "../assets/brands/pidilite logo.png";

const Brands = function () {
  const logosArray = [logo1, logo2, logo3, logo4, logo5, logo6];
  const jsxContent = logosArray.map((ele, i) => {
    return (
      <div className="item" key={i}>
        <a href="#">
          <img src={ele} alt="" />
        </a>
      </div>
    );
  });
  return (
    <div className="brands">
      <div className="container">
        <div className="wrapper flexitem">{jsxContent}</div>
      </div>
    </div>
  );
};

export default Brands;
