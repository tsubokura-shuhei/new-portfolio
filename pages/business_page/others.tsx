import React from "react";
import { Layout } from "../../components/Layout";
import styles from "../../components/style/business_layout.module.scss";

const others = () => {
  return (
    <Layout title="その他の制作">
      <div className={styles.others}>
        <div>
          <h2>新着ニュース記事の作成</h2>
        </div>
        <div>
          <h2>情報誌の作成</h2>
        </div>
      </div>
    </Layout>
  );
};

export default others;
