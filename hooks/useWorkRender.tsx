import { getPostsData } from "../lib/post";

async function getStaticProps() {
  const allPostsData = getPostsData(); //di, title, date, thumbnailが入ってる
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export const useWorkRender = ({ allPostsData }: any) => {
  return { allPostsData };
};
