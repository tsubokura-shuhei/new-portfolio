import { Swiper, SwiperSlide } from "swiper/react";
import style_design from "../../style/design.module.scss";
import { useSwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

import "swiper/css";
// import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";

import "swiper/css/navigation"; // スタイルをインポート
import "swiper/css/pagination"; // スタイルをインポート

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Props = {
  setBtn: boolean;
};

import SwiperCore, { EffectCreative } from "swiper";

const Slider = (props: Props) => {
  const { setBtn } = props;

  SwiperCore.use([EffectCreative]);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperSlide = useEffect;

  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      pagination={{ el: "#swiper_pagination_btn ", clickable: true }}
      navigation={{ prevEl: "#button_prev", nextEl: "#button_next" }}
      centeredSlides={true}
      effect={"creative"}
      creativeEffect={{
        limitProgress: 1,
        prev: {
          translate: ["100%", -100, -900],
          rotate: [0, 0, 0],
          // shadow: true,
        },
        next: {
          translate: ["-100%", -100, -900],
          rotate: [0, 0, 0],
          // shadow: true,
        },
      }}
      breakpoints={{
        0: {
          slidesPerView: 1.1, //スライドを2枚表示
        },
        // 599px以上の場合
        599: {
          slidesPerView: 2, //スライドを2枚表示
        },
        // 1024px以上の場合
        1024: {
          slidesPerView: 2, //スライドを3枚表示
        },
      }}
      grabCursor={true}
      speed={2000}
      modules={[Pagination, Autoplay, Navigation]}
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
              <p>
                通勤もお出かけもとーってもお得！
                <br />
                東武線の特急券が50%OFFキャンペーン
              </p>
              <p className={style_design.small}>キャンペーンバナー</p>
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
              <p>
                2020Winter 東武鉄道で行こう！
                <br />
                冬のイルミネーション特集
              </p>
              <p className={style_design.small}>イベントバナー</p>
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
              <p>
                栃木県民限定！
                <br />
                割引キャンペーン
              </p>
              <p className={style_design.small}>キャンペーンバナー</p>
            </div>
          </>
        )}
      </SwiperSlide>
      <SwiperSlide className={style_design.swiperSlide}>
        {({ isActive }) => (
          <>
            <img src="/images/design/image26.jpg" alt="" />
            <div
              className={`${style_design.swiperSlide} ${
                isActive ? `${style_design.active}` : ""
              }`}
            >
              <p>
                あしかがフラワーパーク
                <br />
                イルミネーションきっぷ
              </p>
              <p className={style_design.small}>キャンペーンバナー</p>
            </div>
          </>
        )}
      </SwiperSlide>
      <SwiperSlide className={style_design.swiperSlide}>
        {({ isActive }) => (
          <>
            <img src="/images/design/image3.jpg" alt="" />
            <div
              className={`${style_design.swiperSlide} ${
                isActive ? `${style_design.active}` : ""
              }`}
            >
              <p>川越春暖簾</p>
              <p className={style_design.small}>キャンペーンバナー</p>
            </div>
          </>
        )}
      </SwiperSlide>
      <div className={style_design.container_btn}>
        <div
          id="button_prev"
          className={`${style_design.slider_btn} ${style_design.btn_next}`}
        ></div>
        <div
          id="button_next"
          className={`${style_design.slider_btn} ${style_design.btn_prev}`}
        ></div>
      </div>

      <div
        id="swiper_pagination_btn"
        className={style_design.swiper_pagination}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {setBtn ? (
        <>
          <Link href={"/PageDesign"} className={style_design.banar_more_btn}>
            View More
          </Link>
        </>
      ) : (
        <></>
      )}
    </Swiper>
  );
};

export default Slider;
