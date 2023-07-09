import type { NextPage } from "next";
import Link from "next/link";
import styles from "../components/style/work.module.scss";
import { Main } from "../components/Main";

import { getPostsData } from "../lib/post";
import Profile from "../components/atomic/templates/Profile";
import Header from "../components/atomic/templates/Header";
import React, { useCallback, useEffect, useState } from "react";
import Loading from "../components/atomic/molecules/Loading";
import herader from "../components/style/header.module.scss"; //アップセット
import "animate.css"; //アップセット

import useUpset from "../hooks/useUpset";

export type Props = {
  id: number | undefined;
  title: string;
  date: string;
  thumbnail: string;
  text?: string;
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

  return (
    <div>
      <Main />
      {/* {timer ? (
        <Loading />
      ) : (
        <> */}
      <div style={{ display: "block", width: "100vw", height: "100vh" }}>
        <Header />
        <h1
          className={herader.main_title}
          style={
            {
              // transform: "translateY(-50%)",
            }
          }
        >
          <div id={herader.title_container}>
            <div className={herader.title}>
              <div className={herader.brtag1}>
                <span>T</span>
                <span>s</span>
                <span>u</span>
                <span>b</span>
                <span>o</span>
                <span>k</span>
                <span>u</span>
                <span>r</span>
                <span>a</span>
              </div>
              <div className={herader.brtag2}>
                <span>S</span>
                <span>h</span>
                <span>u</span>
                <span>h</span>
                <span>e</span>
                <span>i</span>
              </div>
              <div className={herader.brtag3}>
                <span>W</span>
                <span>E</span>
                <span>B</span>
              </div>
              <div className={herader.brtag4}>
                <span>D</span>
                <span>E</span>
                <span>S</span>
                <span>I</span>
                <span>G</span>
                <span>N</span>
                <span>E</span>
                <span>R</span>
              </div>
            </div>
          </div>
        </h1>
        <div className={herader.type01}>
          <div className={herader.type}>
            <a href="#type02">Scroll</a>
          </div>
        </div>
      </div>

      <div
        className={styles.work}
        style={{ backgroundColor: "#f6f6f6" }}
        ref={ref}
      >
        {inView && (
          <>
            <h2 className="animate__animated animate__fadeInUp">
              WORKS<span>実績</span>
            </h2>
            <div>
              <div className={styles.container}>
                <ul>
                  {allPostsData.map(({ id, title, date, thumbnail }: Props) => (
                    <li key={id}>
                      <Link
                        href={`/posts/${id}`}
                        className="animate__animated animate__fadeIn"
                        style={{ animationDuration: "2s" }}
                      >
                        <div className={styles.img_inner}>
                          <img src={`${thumbnail}`} alt="" />
                          <div className={styles.link_contents}>
                            <p>ViewMore</p>
                          </div>
                        </div>
                        <p>{title}</p>
                        <p>{date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <div style={{ position: "relative", display: "block" }}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "block",
            backgroundColor: "#FFF",
            opacity: "0.8",
            zIndex: "-1",
            padding: "30px 0px",
          }}
        ></div>
        <Profile />
      </div>
      {/* </>
      )} */}
    </div>
  );
};

export default Home;
