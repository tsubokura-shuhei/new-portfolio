import type { NextPage } from "next";
import Link from "next/link";
import styles from "../components/style/work.module.scss";
import { Main } from "../components/Main";

import { getPostsData } from "../lib/post";
import Profile from "../components/atomic/templates/Profile";
import Header from "../components/atomic/templates/Header";
import React, { useCallback, useEffect, useState } from "react";
import Loading from "../components/atomic/molecules/Loading";

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
  return (
    <div>
      {/* {timer ? (
        <Loading />
      ) : (
        <> */}
      <Header />
      <h1
        style={{
          width: "500px",
          fontSize: "100px",
          position: "absolute",
          display: "grid",
          left: "10%",
          top: "0",
          // transform: "translateY(-50%)",
        }}
      >
        <span>Tsubokura Shuhei</span>
        <span style={{ width: "100%" }}>WEB DESIGNER</span>
      </h1>
      <Main />
      <div className={styles.work} style={{ backgroundColor: "#F6F6F6" }}>
        <h2>
          WORKS<span>実績</span>
        </h2>
        <div className={styles.container}>
          <ul>
            {allPostsData.map(({ id, title, date, thumbnail }: Props) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
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
      <Profile />
      {/* </>
      )} */}
    </div>
  );
};

export default Home;
