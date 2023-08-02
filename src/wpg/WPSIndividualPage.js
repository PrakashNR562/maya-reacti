import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useWPGContext } from "../context/wpg_context";
import { single_wpg_url as url } from "../utils/constants";
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
import WPGDescription from "./WPGDescription";
import WPGDetails from "./WPGDetails";

const WPGIndividualPage = function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleWPG,
    single_wpg_loading: loading,
    single_wpg_error: error,
    single_wpg: wpg,
  } = useWPGContext();

  useEffect(() => {
    fetchSingleWPG(`${url}${id}`);
  }, []);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });
  const {
    id: Id,
    name,
    category = [],
    company = [],
    size,
    stars,
    reviews,
    color = [],
    mrp,
    discount,
    images = [
      [
        {
          url: "",
        },
      ],
    ],
    sold,
    information,
  } = wpg;

  let price = 5;

  const mrpArray = mrp && mrp.split(",");
  const mrpDiscountArray =
    mrp &&
    mrp.split(",").map((ele) => {
      return ele * (1 - discount / 100);
    });
  const sizeArray = size && size.split(",");

  const [sizeState, setSizeState] = useState(0);
  const sizeChangeHandler = function (e) {
    const val = e.target.value;
    const index = sizeArray.findIndex((ele) => ele === val);
    setSizeState(index);
  };
  const length = sizeArray && sizeArray.length;
  const elementsToShow =
    sizeState === 0
      ? images.slice(0, length)
      : sizeState === 1
      ? images.slice(3, length * 2)
      : images.slice(length * 2);
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
            <PageHero title={name} product="WaterProofing/Grout" />
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
                          {wpg.images && (
                            <SwiperSlideBig images={elementsToShow} />
                          )}
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                      </div>
                      <div thumbSlider="" className="small-image">
                        <ul className="small-image-wrapper flexitem swiper-wrapper">
                          {wpg.images && (
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
                            SKU-{Id?.slice(0, 6).toUpperCase()}
                          </span>
                        </div>
                        <div className="price">
                          <span className="current">
                            {mrpDiscountArray &&
                              formatPrice(mrpDiscountArray[sizeState])}
                          </span>
                          <span className="normal">
                            {mrpArray && formatPrice(mrpArray[sizeState])}
                          </span>
                        </div>
                        <div className="colors">
                          <p>Size</p>
                          <div className="variant">
                            <form>
                              {sizeArray &&
                                sizeArray.map((ele, i) => {
                                  return (
                                    <label key={i}>
                                      <input
                                        type="checkbox"
                                        name="size"
                                        value={ele}
                                        onChange={sizeChangeHandler}
                                        checked={ele === sizeArray[sizeState]}
                                      />
                                      <span class="size-btn">{ele}</span>
                                    </label>
                                  );
                                })}
                            </form>
                          </div>
                        </div>
                        {wpg.images && (
                          <AddToCart
                            product={{
                              ...wpg,
                              id: Id,
                              price:
                                mrpDiscountArray && mrpDiscountArray[sizeState],
                              size: sizeArray && sizeArray[sizeState],
                              mrp: mrpArray && mrpArray[sizeState],
                              images: wpg.images[0],
                            }}
                            selectedColor={"neutral"}
                          />
                        )}

                        <div className="description  collapse">
                          <ul>
                            <WPGDetails properties={information} />
                            <WPGDescription company={company} />

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

export default WPGIndividualPage;
