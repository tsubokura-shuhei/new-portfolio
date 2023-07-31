import { Layout } from "../../components/Layout.tsx";
import { getAllPostIds2, getPostData2 } from "../../lib/post.js";

export async function getStaticPaths() {
  const paths = getAllPostIds2();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData2(params.id);

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
        <div>{postData.title}</div>
      </Layout>
    </>
  );
}
