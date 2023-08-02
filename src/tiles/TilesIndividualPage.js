import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTilesContext } from "../context/tiles_context";
import { single_tile_url as url } from "../utils/constants";
import { formatPrice, getUniqueValues } from "../utils/helpers";
import Stars from "../components/Stars";
import {
  NavBarCategories,
  Loading,
  Error,
  Details,
  Description,
  PageHero,
} from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperSlideBig from "../components/SwiperSlideBig.js";
import ThumbnailSwiper from "../components/ThumbnailSwiper.js";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import AddToCart from "../components/AddToCart.js";
import TilesDetails from "./TilesDetails";
import TilesDescription from "./TilesDescription";

const TilesIndividualPage = function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(0);

  const {
    fetchSingleTile,
    single_tile_loading: loading,
    single_tile_error: error,
    single_tile: tile,
  } = useTilesContext();

  useEffect(() => {
    fetchSingleTile(`${url}${id}`);
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });
  console.log(tile);
  const {
    area,
    boxQuantity,
    category,
    color,
    company,
    family,
    id: Id,
    images,
    material,
    mrp,
    name = "",
    price,
    reviews,
    size,
    sold,
    stars,
    stock,
    type,
    boxWeight,
    thickness,
  } = tile;

  const colorChangeHandler = function (e) {
    const currentColor = e.target.dataset.color;
    const index = color.indexOf(currentColor);

    setSelectedColor(index);
  };

  const colorsArray = images && [
    images.slice(0, images.length / 2),
    images.slice(images.length / 2),
  ];

  let nameArray = "";
  if (name.includes(",")) {
    nameArray = name.split(",");
  } else {
    nameArray = [name];
  }

  const numberMRP = Number(mrp);
  const numberPrice = Number(price);
  const discount = Math.ceil(((numberMRP - numberPrice) / numberMRP) * 100);

  const details = {
    area,
    boxQuantity,
    company,
    family,
    material,
    type,
    boxWeight,
    thickness,
  };

  if (loading) {
    return (
      <>
        <NavBarCategories toShow={false} />
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBarCategories toShow={false} />
        <Error />
      </>
    );
  }

  return (
    <>
      <NavBarCategories toShow={false} />
      <div className="single-product">
        <div className="container">
          <div className="wrapper">
            <PageHero title={nameArray[selectedColor]} product="tiles" />
            <div className="column">
              <div class="products one">
                <div className="flexwrap">
                  <div className="row">
                    <div className="item is_sticky">
                      <div className="price">
                        <span className="discount">
                          {discount}%
                          <br />
                          OFF
                        </span>
                      </div>

                      <div className="big-image">
                        <div className="big-image-wrapper swiper-wrapper">
                          {tile.images && (
                            <SwiperSlideBig
                              images={colorsArray[selectedColor]}
                            />
                          )}
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                      </div>
                      <div thumbSlider="" className="small-image">
                        <ul className="small-image-wrapper flexitem swiper-wrapper">
                          {tile.images && (
                            <ThumbnailSwiper
                              images={colorsArray[selectedColor]}
                            />
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="item">
                      <h1>{nameArray[selectedColor]}</h1>
                      <div className="content">
                        {Stars({
                          stars: stars,
                          reviews: reviews,
                        })}

                        <div className="stock-sku">
                          <span className="available">In stock</span>
                          <span className="sku mini-text">
                            SKU-{Id?.slice(0, 6).toUpperCase()}
                          </span>
                        </div>
                        <div className="price">
                          <span className="current">
                            {formatPrice(price)}
                            <span className="price-box">/box</span>
                          </span>
                          <span className="normal">{formatPrice(mrp)}</span>
                        </div>
                        <div className="colors">
                          <p>Color</p>
                          <div className="variant">
                            <form action="">
                              {color &&
                                color.map((ele, i) => {
                                  return (
                                    <p>
                                      <input
                                        type="radio"
                                        name="color"
                                        id={ele}
                                        style={{ background: ele }}
                                        data-color={ele}
                                        onChange={colorChangeHandler}
                                        checked={color[selectedColor] === ele}
                                      />
                                      <label
                                        htmlFor={ele}
                                        className="color-btn"
                                        style={{ background: ele }}
                                      ></label>
                                    </p>
                                  );
                                })}
                            </form>
                          </div>
                        </div>
                        <AddToCart
                          product={{
                            ...tile,
                            name: nameArray[selectedColor],
                            images:
                              colorsArray && colorsArray[selectedColor][0],
                          }}
                          selectedColor={colorsArray && color[selectedColor]}
                        />

                        <div className="description  collapse">
                          <ul>
                            <TilesDetails properties={details} />
                            <TilesDescription company={company} />

                            <li className="has-child expand">
                              <div className="content">
                                <div className="reviews">
                                  <h4>Customer Reviews</h4>
                                  <div className="review-block">
                                    <div className="review-block-head">
                                      <div className="flexitem">
                                        <span className="rate-sum">
                                          {stars}
                                        </span>
                                        <span>{reviews} Reviews</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TilesIndividualPage;
