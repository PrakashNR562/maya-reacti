import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context.js";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import styled from "styled-components";
import {
  NavBarCategories,
  Loading,
  Error,
  Details,
  Description,
  PageHero,
} from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import SwiperSlideBig from "../components/SwiperSlideBig.js";
import ThumbnailSwiper from "../components/ThumbnailSwiper.js";
import Stars from "../components/Stars.js";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import AddToCart from "../components/AddToCart.js";
const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleProduct,
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
  } = useProductsContext();
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  });
  const {
    Name,
    category,
    colors,
    description,
    id: Id,
    images,
    mrp,
    price,
    properties,
    quantityAvailable,
    quantitysold,
    reviews,
    stars,
  } = product;
  const numberMRP = Number(mrp);
  const numberPrice = Number(price);
  const discount = Math.ceil(((numberMRP - numberPrice) / numberMRP) * 100);

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
  console.log(product);
  return (
    <>
      <NavBarCategories toShow={false} />
      <div className="single-product">
        <div className="container">
          <div className="wrapper">
            <PageHero title={Name} product="paints" />
            <div className="column">
              <div class="products one">
                <div className="flexwrap">
                  <div className="row">
                    <div className="item is_sticky">
                      <div class="price">
                        <span class="discount">
                          {discount}%
                          <br />
                          OFF
                        </span>
                      </div>

                      <div class="big-image">
                        <div class="big-image-wrapper swiper-wrapper">
                          {product.images && <SwiperSlideBig images={images} />}
                        </div>
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                      </div>
                      <div thumbSlider="" class="small-image">
                        <ul class="small-image-wrapper flexitem swiper-wrapper">
                          {product.images && (
                            <ThumbnailSwiper images={images} />
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="item">
                      <h1>{product.Name}</h1>
                      <div class="content">
                        {Stars({
                          stars: stars,
                          reviews: reviews,
                        })}

                        <div class="stock-sku">
                          <span class="available">In stock</span>
                          <span class="sku mini-text">
                            SKU-{Id?.slice(0, 6).toUpperCase()}
                          </span>
                        </div>
                        <div class="price">
                          <span class="current">{formatPrice(price)}</span>
                          <span class="normal">{formatPrice(mrp)}</span>
                        </div>
                        {<AddToCart product={product} />}

                        <div class="description  collapse">
                          <ul>
                            <Details properties={properties} />
                            <Description description={description} />

                            <li class="has-child expand">
                              <div class="content">
                                <div class="reviews">
                                  <h4>Customer Reviews</h4>
                                  <div class="review-block">
                                    <div class="review-block-head">
                                      <div class="flexitem">
                                        <span class="rate-sum">{stars}</span>
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

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
