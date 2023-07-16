import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../style/layout.module.scss";
import Header from "./ToggleBtn";

const Header_menu = () => {
  return (
    <>
      <div className={styles.header}>
        <Link href="/">
          <h1>
            Tsubokura Shuhei
            <span>WEB DESIGNER</span>
          </h1>
        </Link>
      </div>
      <Header />
    </>
  );
};

export default Header_menu;
