import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useElectricalsContext } from "../context/electricals_context";
import { single_electricals_url as url } from "../utils/constants";
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
import ElectricalsDescription from "./ElectricalsDescription";
import ElectricalsDetails from "./ElectricalsDetails";

const ElectricalsIndividualPage = function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleElectricals,
    single_electricals_loading: loading,
    single_electricals_error: error,
    single_electricals: electricals,
  } = useElectricalsContext();

  useEffect(() => {
    fetchSingleElectricals(`${url}${id}`);
  }, []);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });
  let {
    name,
    information,
    category,
    company,
    colors,
    stars,
    reviews,
    mrp,
    price,
    sold,
    typeWarranty,
    id: ID,
    images = [
      [
        {
          url: "",
        },
      ],
    ],
  } = electricals;
  const [colorArray, setColorArray] = useState([]);
  useEffect(() => {
    if (colors) {
      setColorArray(colors.split(","));
    }
  }, [colors]);

  const [colorState, setColorState] = useState(0);
  const colorChangeHandler = function (e) {
    const val = e.target.value;
    const index = colorArray.findIndex((ele) => ele === val);
    setColorState(index);
  };
  const discount = Math.round(
    ((Number(mrp) - Number(price)) / Number(mrp)) * 100
  );
  const length = colorArray && colorArray.length;

  const elementsToShow =
    colorState === 0
      ? images.slice(0, 3)
      : colorState === 1
      ? images.slice(3, 6)
      : images.slice(6);
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
            <PageHero title={name} product="Electricals" />
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
                          {electricals.images && (
                            <SwiperSlideBig images={elementsToShow} />
                          )}
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                      </div>
                      <div thumbSlider="" className="small-image">
                        <ul className="small-image-wrapper flexitem swiper-wrapper">
                          {electricals.images && (
                            <ThumbnailSwiper images={elementsToShow} />
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="item">
                      <h1>{name}</h1>
                      <div className="content">
                        {Stars({
                          stars: stars,
                          reviews: reviews,
                        })}

                        <div className="stock-sku">
                          <span className="available">In stock</span>
                          <span className="sku mini-text">
                            SKU-{ID?.slice(0, 6).toUpperCase()}
                          </span>
                        </div>
                        <div className="price">
                          <span className="current">{formatPrice(price)}</span>
                          <span className="normal">{formatPrice(mrp)}</span>
                        </div>
                        <div className="colors">
                          <p>Colors</p>
                          <div className="variant">
                            <form>
                              {colorArray &&
                                colorArray.map((ele, i) => {
                                  return (
                                    <label key={i}>
                                      <input
                                        type="checkbox"
                                        name="size"
                                        value={ele}
                                        onChange={colorChangeHandler}
                                        checked={ele === colorArray[colorState]}
                                      />
                                      <span class="size-btn">{ele}</span>
                                    </label>
                                  );
                                })}
                            </form>
                          </div>
                        </div>
                        {colorArray.length > 0 && (
                          <AddToCart
                            product={{
                              ...electricals,
                              images: electricals.images[0],
                            }}
                            selectedColor={colorArray[colorState]}
                          />
                        )}
                        <div className="description  collapse">
                          <ul>
                            <ElectricalsDetails
                              properties={information}
                              warranty={typeWarranty}
                            />
                            <ElectricalsDescription company={company} />

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

export default ElectricalsIndividualPage;
