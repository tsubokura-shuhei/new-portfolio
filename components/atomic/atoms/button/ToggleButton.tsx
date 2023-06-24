import React, { MouseEventHandler } from "react";
import styles from "../../../style/header.module.scss";

export type Props = {
  controls: string;
  open: boolean;
  onClick: MouseEventHandler;
  label: string;
};

const ToggleButton = (props: Props) => {
  const { controls, open, label, onClick } = props;
  return (
    <button
      className={styles.toggleBtn}
      type="button"
      aria-controls={controls}
      aria-expanded={open}
      aria-label={label}
      onClick={onClick}
    >
      <span className={styles.line1}>MENU</span>
      <span className={styles.line2}>CLOSE</span>
    </button>
  );
};

export default ToggleButton;
