import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";

import type { NextPage } from "next";
import styles from "../components/style/work.module.scss";

import { getPostsData } from "../lib/post";
import Header from "../components/atomic/templates/Header";

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
  const mouHover = () => {};
  return (
    <div>
      <Header />
      <Layout>
        <div className={styles.work}>
          <h2>
            WORKS<span>実績</span>
          </h2>
          <div className={styles.container}>
            <ul>
              {allPostsData.map(({ id, title, date, image4 }: Props) => (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <div className={styles.img_inner}>
                      <img src={`${image4}`} alt="" />
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
      </Layout>
    </div>
  );
};

export default PageWork;
