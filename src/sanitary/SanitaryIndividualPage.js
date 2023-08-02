import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSanitaryContext } from "../context/sanitary_context";
import { single_sanitary_url as url } from "../utils/constants";
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
import SanitaryDescription from "./SanitaryDescription";
import SanitaryDetails from "./SanitaryDetails";
// import TilesDetails from "./TilesDetails";
// import TilesDescription from "./TilesDescription";
const SanitaryIndividualPage = function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleSanitary,
    single_sanitary_loading: loading,
    single_sanitary_error: error,
    single_sanitary: sanitary,
  } = useSanitaryContext();

  useEffect(() => {
    fetchSingleSanitary(`${url}${id}`);
  }, []);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });
  console.log(sanitary);
  const {
    category,
    color,
    company,
    discount,
    id: Id,
    images = [{ url: "" }],
    information = "",
    mrp,
    name,
    reviews,
    size,
    sold,
    stars,
  } = sanitary;
  const price = mrp * (1 - discount / 100);
  console.log(price);
  const infoObject = information && JSON.parse(information);
  const details = {
    name,
    color,
    company,
    Pieces: 1,
    size,
    ...infoObject,
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
            <PageHero title={name} product="sanitary" />
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
                          {sanitary.images && (
                            <SwiperSlideBig images={images} />
                          )}
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                      </div>
                      <div thumbSlider="" className="small-image">
                        <ul className="small-image-wrapper flexitem swiper-wrapper">
                          {sanitary.images && (
                            <ThumbnailSwiper images={images} />
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
                          <span className="current">{formatPrice(price)}</span>
                          <span className="normal">{formatPrice(mrp)}</span>
                        </div>
                        {sanitary.images && (
                          <AddToCart
                            product={{
                              ...sanitary,
                              images: sanitary.images[0],
                              price: price,
                            }}
                            selectedColor={"neutral"}
                          />
                        )}

                        <div className="description  collapse">
                          <ul>
                            <SanitaryDetails properties={details} />
                            <SanitaryDescription company={company} />

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

export default SanitaryIndividualPage;
