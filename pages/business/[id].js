import { Layout } from "../../components/Layout";
import { getPostsData2 } from "../../lib/post";

export async function getStaticProps({ params }) {
  const postData = await getPostsData2(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  console.log(postData);
  return (
    <>
      <Layout>
        <div>{postData.title}</div>
      </Layout>
    </>
  );
}
