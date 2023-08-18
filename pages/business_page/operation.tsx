import React from "react";
import { Layout } from "../../components/Layout";
import styles from "../../components/style/business_layout.module.scss";

const operation = () => {
  return (
    <Layout title="WEBサイト運用">
      <div className={styles.operation}>
        <h2>WEBサイトの更新対応</h2>
      </div>
    </Layout>
  );
};

export default operation;
