import Head from "next/head";
import Link from "next/link";

import type { NextPage } from "next";
import styles from "../components/style/work.module.scss";

import { getPostsData } from "../lib/post";
import Header from "../components/atomic/templates/ToggleBtn";
import { Layout } from "../components/Layout";
import { useState } from "react";
import { motion } from "framer-motion";

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

  return {
    props: {
      allPostsData,
    },
  };
}

const PageWork: NextPage = ({ allPostsData }: any) => {
  const [textUp, setTextUp] = useState(false);

  return (
    <Layout title="Works">
      <div className={`${styles.work_main} ${styles.work_page}`}>
        <h2>
          WORKS<span>実績</span>
        </h2>
        <div className={styles.bg_container}>
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
                  <Link
                    href={`/posts/${id}`}
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
    </Layout>
  );
};

export default PageWork;
