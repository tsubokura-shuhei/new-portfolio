import { Layout } from "../../components/Layout.tsx";
import { getAllPostIds, getPostData } from "../../lib/post.js";
import styles from "../../components/style/workPage.module.scss";
import Link from "next/link.js";
import { Center } from "@react-three/drei";

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
            <img src={`${postData.spimage}`} style={{ width: "100%" }} />
          </div>
        </Layout>
      </div>
    </>
  );
}
