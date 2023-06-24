import React, { ReactNode } from "react";
import styles from "../../style/menu.module.scss";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner_wrapper}>
        <span className={styles.spinner_text}>Loading</span>
        <span className={styles.spinner}></span>
      </div>
    </div>
  );
};

export default Loading;
