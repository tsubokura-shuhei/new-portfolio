import { getPostsData } from "../lib/post";
import { useInView } from "react-intersection-observer";
import "animate.css";

const useUpset = () => {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "0px", // ref要素が現れてから50px過ぎたら
    triggerOnce: true, // 最初の一度だけ実行
  });
  return { ref, inView };
};

export default useUpset;
