import { Swiper, SwiperSlide } from "swiper/react";
import style_design from "../../style/design.module.scss";
import { useSwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useRef } from "react";

const Slider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperSlide = useSwiperSlide();
  return (
    <Swiper
      // effect={"creative"}
      grabCursor={true}
      loop={true}
      centeredSlides={true}
      slidesPerView={1}
      speed={2000}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      navigation={{ prevEl: "#button_prev", nextEl: "#button_next" }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      className={style_design.image_container}
    >
      <SwiperSlide className={style_design.swiperSlide}>
        {({ isActive }) => (
          <>
            <img src="/images/design/image1.jpg" alt="" />
            <div
              className={`${style_design.swiperSlide} ${
                isActive ? `${style_design.active}` : ""
              }`}
            >
              <p>テキスト</p>
              <p className={style_design.small}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </>
        )}
      </SwiperSlide>
      <SwiperSlide className={style_design.swiperSlide}>
        {({ isActive }) => (
          <>
            <img src="/images/design/image2.jpg" alt="" />
            <div
              className={`${style_design.swiperSlide} ${
                isActive ? `${style_design.active}` : ""
              }`}
            >
              <p>テキスト</p>
              <p className={style_design.small}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </>
        )}
      </SwiperSlide>
      <SwiperSlide className={style_design.swiperSlide}>
        {({ isActive }) => (
          <>
            <img src="/images/design/image10.jpg" alt="" />
            <div
              className={`${style_design.swiperSlide} ${
                isActive ? `${style_design.active}` : ""
              }`}
            >
              <p>テキスト</p>
              <p className={style_design.small}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </>
        )}
      </SwiperSlide>
      <SwiperSlide className={style_design.swiperSlide}>
        {({ isActive }) => (
          <>
            <img src="/images/design/image11.jpg" alt="" />
            <div
              className={`${style_design.swiperSlide} ${
                isActive ? `${style_design.active}` : ""
              }`}
            >
              <p>テキスト</p>
              <p className={style_design.small}>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
            </div>
          </>
        )}
      </SwiperSlide>
      <div
        id="button_prev"
        className={`${style_design.slider_btn} ${style_design.btn_prev}`}
      ></div>
      <div
        id="button_next"
        className={`${style_design.slider_btn} ${style_design.btn_next}`}
      ></div>
    </Swiper>
  );
};

export default Slider;
