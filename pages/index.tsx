import type { NextPage } from "next";
import Link from "next/link";
import main_styles from "../components/style/main.module.scss";
import styles from "../components/style/work.module.scss";
import { Main } from "../components/Main";
import { motion } from "framer-motion";

import { getPostsData } from "../lib/post";
import Profile from "../components/atomic/templates/Profile";
import Header from "../components/atomic/templates/ToggleBtn";
import React, { memo, useCallback, useEffect, useState } from "react";
import Loading from "../components/atomic/molecules/Loading";
import herader from "../components/style/header.module.scss"; //アップセット
import "animate.css"; //アップセット

import useUpset from "../hooks/useUpset";
import { Layout } from "../components/Layout";
import { Translate } from "@mui/icons-material";
import Slider from "../components/atomic/templates/Slider";

export type Props = {
  id: number | undefined;
  title: string;
  date: string;
  thumbnail: string;
  text?: string;
  image4: string;
};

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); //di, title, date, thumbnailが入ってる
  // console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

const Home: NextPage = ({ allPostsData }: any) => {
  const [textUp, setTextUp] = useState(false);

  const [numberBtn, setNumberBtn] = useState<boolean>(true);

  useEffect(() => {
    setNumberBtn(true);
  }, []);

  const handleMoseEnter = useCallback(() => {
    setTextUp(true);
  }, []);

  const handleMoseLeave = useCallback(() => {
    setTextUp(false);
  }, []);

  return (
    <Layout title="Home">
      <div className={main_styles.home_container}>
        <section className={main_styles.cont}>
          <Main />

          <div
            style={{
              display: "block",
              width: "100vw",
              height: "100vh",
              position: "relative",
            }}
          >
            <div className={herader.type01}>
              <div className={herader.type}>
                <a href="#type02">Scroll</a>
              </div>
            </div>
          </div>
        </section>
        <section className={main_styles.cont}>
          <div className={styles.work_main}>
            <h2>
              WORKS<span>実績</span>
            </h2>
            <div>
              <div className={styles.container}>
                <ul>
                  {allPostsData.map(({ id, title, date, image4 }: Props) => (
                    <motion.li
                      key={id}
                      variants={{
                        offscreen: {
                          // 画面外の場合のスタイル
                          y: 50,
                          opacity: 0,
                        },
                        onscreen: {
                          // 画面内の場合のスタイル
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 1,
                          },
                        },
                      }}
                      initial="offscreen" // 初期表示はoffscreen
                      whileInView="onscreen" // 画面内に入ったらonscreen
                      viewport={{ once: true, amount: 0 }}
                    >
                      <Link href={`/posts/${id}`}>
                        <div className={styles.img_inner}>
                          <div className={styles.img_box}>
                            <img src={`${image4}`} alt="" />
                          </div>
                          <div
                            className={styles.link_contents}
                            onMouseEnter={handleMoseEnter} //true
                            onMouseLeave={handleMoseLeave} //false
                          >
                            <p className={textUp ? "" : `${styles.active}`}>
                              ViewMore
                            </p>
                          </div>
                        </div>
                        <p>{title}</p>
                        <p className={styles.small}>{date}</p>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={main_styles.cont}>
          <div style={{ maxWidth: "1280px", margin: "0px auto" }}>
            <h2>
              Design<span>デザイン</span>
            </h2>
            <Slider setBtn={numberBtn} />
          </div>
        </section>
        <section className={main_styles.cont}>
          <div className={main_styles.profile_container}>
            <Profile />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default memo(Home);
