import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Thumbs,
} from "swiper";

const SwiperSlideBig = function ({ images }) {
  images = [...images, ...images];

  const code = images.map((ele, i) => {
    return (
      <SwiperSlide key={i}>
        <div className="image-show swiper-slide">
          <a data-fslightbox href={ele.url}>
            <img src={ele.url} alt="" />
          </a>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      loop={true}
      autoHeight={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      {code}
    </Swiper>
  );
};

export default SwiperSlideBig;
