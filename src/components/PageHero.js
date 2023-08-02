import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <div className="breadcrumb">
      <ul className="flexitem">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {product === "tiles" && <Link to="/tiles">Tiles</Link>}
          {product === "paints" && <Link to="/paints">Paints</Link>}
          {product === "WaterProofing/Grout" && (
            <Link to="/wpg">WaterProofing-Grout</Link>
          )}
          {product === "Motors/Stabilizers" && (
            <Link to="/motor">Motors & Stabilizers</Link>
          )}
          {product === "WaterProofing/Grout" && (
            <Link to="/wpg">WaterProofing-Grout</Link>
          )}
          {product === "Electricals" && (
            <Link to="/electricals">Electricals</Link>
          )}
        </li>
        {title && <li>{title}</li>}
      </ul>
    </div>
  );
};
export default PageHero;
