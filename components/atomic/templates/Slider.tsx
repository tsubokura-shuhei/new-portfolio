import { Swiper, SwiperSlide } from "swiper/react";
import style_design from "../../style/design.module.scss";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <Swiper
      // effect={"coverflow"}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      speed={2000}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className={style_design.image_container}
    >
      <SwiperSlide>
        <img src="/images/design/image1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/design/image2.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/design/image3.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/design/image4.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
