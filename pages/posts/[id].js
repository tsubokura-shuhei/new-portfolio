import { Layout } from "../../components/Layout.tsx";
import { getAllPostIds, getPostData } from "../../lib/post.js";
import styles from "../../components/style/workPage.module.scss";
import Link from "next/link.js";
import { Center } from "@react-three/drei";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { ExternalLink } from "react-feather";

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
      <Layout>
        <div className={styles.work}>
          <div className={styles.workContainer}>
            <h2>
              WORKS<span>実績</span>
            </h2>
            <img
              src={`${postData.thumbnail}`}
              alt=""
              style={{ maxWidth: "1024px", width: "100%" }}
              className={styles.work_image}
            />
            <h3>{postData.title}</h3>
            <div className={styles.text_area}>
              <p>{postData.date}</p>
              <p>{postData.text}</p>
              <p className={styles.text_data}>{postData.text2}</p>
            </div>
            <div className={styles.icon_container}>
              <Link href={`${postData.text3}`} target="_blank">
                {postData.text3}
                <ExternalLink className={styles.icon} />
              </Link>
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
        </div>
      </Layout>
    </>
  );
}
