import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMotorContext } from "../context/motors_context";
import { single_motor_url as url } from "../utils/constants";
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
import MotorDescription from "./MotorDescription";
import MotorDetails from "./MotorDetails";

const MotorIndividualPage = function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleMotor,
    single_motor_loading: loading,
    single_motor_error: error,
    single_motor: motor,
  } = useMotorContext();

  useEffect(() => {
    fetchSingleMotor(`${url}${id}`);
  }, []);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });
  const {
    id: ID,
    name,

    category,
    company,
    capacity,
    stars,
    reviews,
    mrp,
    price,

    typeWarranty,
    images = [
      [
        {
          url: "",
        },
      ],
    ],
    sold,
    information,
  } = motor;

  const discount = Math.round(
    ((Number(mrp) - Number(price)) / Number(mrp)) * 100
  );
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
            <PageHero title={name} product="Motors/Stabilizers" />
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
                          {motor.images && <SwiperSlideBig images={images} />}
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                      </div>
                      <div thumbSlider="" className="small-image">
                        <ul className="small-image-wrapper flexitem swiper-wrapper">
                          {motor.images && <ThumbnailSwiper images={images} />}
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
                        {
                          <AddToCart
                            product={{ ...motor, images: motor.images[0] }}
                            selectedColor={"neutral"}
                          />
                        }

                        <div className="description  collapse">
                          <ul>
                            <MotorDetails
                              properties={information}
                              name={name}
                              category={category}
                              capacity={capacity}
                              company={company}
                              warranty={typeWarranty}
                            />
                            <MotorDescription company={company} />

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

export default MotorIndividualPage;
