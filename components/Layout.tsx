import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "./style/layout.module.scss";
import Link from "next/link";

export const siteTitle = "Next.js Blog";
const name = "Tsubokura Shuhei";
const title = "WEB DESIGNER";

export type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <h1>
            {name}
            <span>{title}</span>
          </h1>
        </Link>
        {/* <Menu /> */}
      </header>

      <main>{children}</main>
    </div>
  );
};
