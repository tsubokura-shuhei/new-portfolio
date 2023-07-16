import type { NextPage } from "next";
import Link from "next/link";
import main_styles from "../components/style/main.module.scss";
import styles from "../components/style/work.module.scss";
import { Main } from "../components/Main";

import { getPostsData } from "../lib/post";
import Profile from "../components/atomic/templates/Profile";
import Header from "../components/atomic/templates/ToggleBtn";
import React, { useCallback, useEffect, useState } from "react";
import Loading from "../components/atomic/molecules/Loading";
import herader from "../components/style/header.module.scss"; //アップセット
import "animate.css"; //アップセット

import useUpset from "../hooks/useUpset";
import { Layout } from "../components/Layout";
import { Translate } from "@mui/icons-material";

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
  const { ref, inView } = useUpset(); //アップセット
  const [textUp, setTextUp] = useState(false);

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
          <div className={styles.work_main} ref={ref}>
            {inView && (
              <>
                <h2 className="animate__animated animate__fadeInUp">
                  WORKS<span>実績</span>
                </h2>
                <div>
                  <div className={styles.container}>
                    <ul>
                      {allPostsData.map(
                        ({ id, title, date, image4 }: Props) => (
                          <li key={id}>
                            <Link
                              href={`/posts/${id}`}
                              className="animate__animated animate__fadeIn"
                              style={{ animationDuration: "2s" }}
                            >
                              <div className={styles.img_inner}>
                                <div className={styles.img_box}>
                                  <img src={`${image4}`} alt="" />
                                </div>
                                <div
                                  className={styles.link_contents}
                                  onMouseEnter={() => setTextUp(true)}
                                  onMouseLeave={() => setTextUp(false)}
                                >
                                  <p
                                    className={textUp ? "" : `${styles.active}`}
                                  >
                                    ViewMore
                                  </p>
                                </div>
                              </div>
                              <p>{title}</p>
                              <p className={styles.small}>{date}</p>
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
        {/* <section className={main_styles.cont}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100vh",
              padding: "30px 0px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "#FFF",
                opacity: "0.8",
                zIndex: "-1",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            ></div>
            <Profile />
          </div>
        </section> */}
      </div>
    </Layout>
  );
};

export default Home;
