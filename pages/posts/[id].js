import { Layout } from "../../components/Layout.tsx";
import { getAllPostIds, getPostData } from "../../lib/post.js";
import styles from "../../components/style/workPage.module.scss";
import Link from "next/link.js";
import { Center } from "@react-three/drei";
import { Swiper, SwiperSlide } from "swiper/react";

import Header from "../../components/atomic/templates/Header";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Header />
      <div className={styles.work}>
        <Layout>
          <div className={styles.workContainer}>
            <h1>
              WORKS<span>実績</span>
            </h1>
            <img
              src={`${postData.thumbnail}`}
              alt=""
              style={{ maxWidth: "1024px", width: "100%" }}
            />
            <h2>{postData.title}</h2>
            <div>{postData.date}</div>
            <div>{postData.text}</div>
            <div>{postData.text2}</div>
            <div>
              <Link href={`${postData.text3}`}>{postData.text3}</Link>
            </div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              loop={true}
              centeredSlides={true}
              slidesPerView={1.5}
              speed={2000}
              autoplay={{
                delay: 6000,
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
              className={styles.mySwiper}
            >
              <SwiperSlide className={styles.swiperSliders}>
                <img src={`${postData.image1}`} />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSliders}>
                <img src={`${postData.image2}`} />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSliders}>
                <img src={`${postData.image3}`} />
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSliders}>
                <img src={`${postData.thumbnail}`} />
              </SwiperSlide>
            </Swiper>
            <img src={`${postData.spimage}`} style={{ width: "100%" }} />
          </div>
        </Layout>
      </div>
    </>
  );
}
