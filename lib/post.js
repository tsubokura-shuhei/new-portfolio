import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

//mdファイルのデータを取り出す
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //ファイル名（id）

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    //idとデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
}

//動的ルーティング時に設定
//postsディレクトリの中の全てのファイル名をリストで返す
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      //あとで、これら(id)がルーティングのパスになる。
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

//idに基づいてブログの投稿データを返す
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContent);
  // console.log(matterResult);

  // マークダウンをHTML文字列に変換するためにremarkを使う
  const blogContent = await remark().use(html).process(matterResult.content);

  const blogContentHTML = blogContent.toString();
  // console.log(contentHTML);

  //データをidと組み合わせる。
  return {
    id,
    blogContentHTML, //あとで追加
    ...matterResult.data,
  };
}

//ビジネスページ

const posts_business_Directory = path.join(process.cwd(), "business");

export function getPostsData2() {
  const fileNames = fs.readdirSync(posts_business_Directory);
  const allPostsData2 = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); //ファイル名（id）

    //マークダウンファイルを文字列として読み取る
    const fullPath = path.join(posts_business_Directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    //idとデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData2;
}
