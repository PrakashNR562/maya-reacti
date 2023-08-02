import React from "react";
import "../all.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import slider0 from "../assets/main-header-1.jpg";
import slider1 from "../assets/main-header-2.jpg";
import slider2 from "../assets/main-header-3.jpg";
import slider3 from "../assets/main-header-4.jpg";
const Slider = function () {
  const array = [slider0, slider1, slider2, slider3];
  const effectCode = array.map((ele, i) => {
    return (
      <SwiperSlide key={i}>
        <div className="item">
          <div className="image object-cover">
            <img src={ele} alt={`ele${ele}`} />
          </div>
        </div>
      </SwiperSlide>
    );
  });
  return (
    <>
      <div className="slider">
        <div className="container">
          <div className="wrapper">
            <div className="myslider swiper">
              <div className="swiper-wrapper">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  autoplay={{ delay: 1500 }}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  {effectCode}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
