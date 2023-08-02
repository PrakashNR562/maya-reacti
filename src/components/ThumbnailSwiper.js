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

const ThumbnailSwiper = function ({ images }) {
  images = [...images, ...images, ...images];

  const code = images.map((ele, i) => {
    return (
      <SwiperSlide key={i}>
        <div className="image-show swiper-slide" style={{ height: "auto" }}>
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
      spaceBetween={10}
      slidesPerView={3}
      freeMode={true}
      watchSlidesProgress={true}
      // breakpoints={{
      //   481: {
      //     spaceBetween: 32,
      //   },
      // }}
    >
      {code}
    </Swiper>
  );
};

export default ThumbnailSwiper;
