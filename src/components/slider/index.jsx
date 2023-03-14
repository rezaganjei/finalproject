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
        <div className="w-1/3 mx-auto py-8 ">
          <img src="./images/main.jpeg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-[30%] mx-auto py-12 ">
          <img src="./images/main2.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-1/4 mx-auto py-4">
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
