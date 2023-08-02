import React from "react";

import {
  Brands,
  FeaturedProductsMain,
  Slider,
  Trending,
  Footer,
  NavBarCategories,
} from "../components";
const HomePage = () => {
  return (
    <main>
      <NavBarCategories toShow={true} />
      <Slider />
      <Brands />
      <Trending />
      <FeaturedProductsMain />
    </main>
  );
};

export default HomePage;
