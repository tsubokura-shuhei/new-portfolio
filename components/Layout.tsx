import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "./style/layout.module.scss";
import Link from "next/link";
import Header_menu from "./atomic/templates/Header_menu";
import ToggleBtn from "./atomic/templates/ToggleBtn";
import herader from "../components/style/header.module.scss"; //アップセット

export const siteTitle = "Next.js Blog";

export type Props = {
  children: ReactNode;
  title: string;
};

export const Layout = (props: Props) => {
  const { children, title } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ minHeight: "calc(100vh - 0px)" }}>
        <header>
          {title === "Home" ? (
            <>
              <h1
                className={herader.main_title}
                style={
                  {
                    // transform: "translateY(-50%)",
                  }
                }
              >
                <div id={herader.title_container}>
                  <div className={herader.title}>
                    <div className={herader.brtag1}>
                      <span>T</span>
                      <span>s</span>
                      <span>u</span>
                      <span>b</span>
                      <span>o</span>
                      <span>k</span>
                      <span>u</span>
                      <span>r</span>
                      <span>a</span>
                    </div>
                    <div className={herader.brtag2}>
                      <span>S</span>
                      <span>h</span>
                      <span>u</span>
                      <span>h</span>
                      <span>e</span>
                      <span>i</span>
                    </div>
                    <div className={herader.brtag3}>
                      <span>W</span>
                      <span>E</span>
                      <span>B</span>
                    </div>
                    <div className={herader.brtag4}>
                      <span>D</span>
                      <span>E</span>
                      <span>S</span>
                      <span>I</span>
                      <span>G</span>
                      <span>N</span>
                      <span>E</span>
                      <span>R</span>
                    </div>
                  </div>
                </div>
              </h1>
              <ToggleBtn />
            </>
          ) : (
            <>
              <ToggleBtn />
              <div className={styles.header}>
                <Link href="/">
                  <h1>
                    Tsubokura Shuhei
                    <span>WEB DESIGNER</span>
                  </h1>
                </Link>
              </div>
            </>
          )}
        </header>

        <main>{children}</main>

        <footer className={styles.footer_layout}>
          <div
            style={{
              width: "100%",
              backgroundColor: "#f6f6f6",
              height: "auto",
              textAlign: "center",
              padding: "15px 0px",
            }}
          >
            ©︎SHUHEI TSUBOKURA DESIGN
          </div>
        </footer>
      </div>
    </>
  );
};
