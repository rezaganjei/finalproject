// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="w-1/4 mx-auto ">
          <img src="./images/products/1.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-1/4 mx-auto">
          <img src="./images/products/12.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-1/4 mx-auto">
          <img src="./images/products/6.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-1/4 mx-auto">
          <img src="./images/products/19.jpg" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
