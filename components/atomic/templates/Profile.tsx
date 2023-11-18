import Head from "next/head";
import Link from "next/link";
import styles from "../../style/profile.module.scss";
import { motion } from "framer-motion";

import herader from "../components/style/header.module.scss"; //アップセット
import "animate.css"; //アップセット
import useUpset from "../../../hooks/useUpset"; //アップセット

const Profile = () => {
  const { ref, inView } = useUpset(); //アップセット

  return (
    <div
      className={styles.prosile}
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {inView && (
        <>
          <div className={styles.wrapper}>
            <div>
              <h2>
                Profile<span>プロフィール</span>
              </h2>

              <motion.div
                variants={{
                  offscreen: {
                    // 画面外の場合のスタイル
                    y: 50,
                    opacity: 0,
                  },
                  onscreen: {
                    // 画面内の場合のスタイル
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 1,
                    },
                  },
                }}
                initial="offscreen" // 初期表示はoffscreen
                whileInView="onscreen" // 画面内に入ったらonscreen
                viewport={{ once: true, amount: 0 }}
              >
                <div style={{ animationDuration: "2s" }}>
                  <div className={styles.container}>
                    <div className={styles.image_inner}>
                      <img src="/images/profile/profile.jpeg" alt="" />
                      <p>
                        坪倉 修平<span>Shuhei Tsubokura</span>
                      </p>
                    </div>
                    <div className={styles.text_inner}>
                      <p>
                        2018年10月よりInternetAcademyスクールに通学
                        <br />
                        2019年7月にInternetAcademyスクールを卒業
                        <br />
                        2019年8月にNHK(日本放送協会)にてWeb制作の現場にてLINEニュースのデザイン担当を行う
                        <br />
                        2019年11月から東武ビジネスソリューションにて東武鉄道、東武グループのWeb運用、Web制作に携わる
                        <br />
                        2022年12月からクオン株式会社にてファンコミュニティサイトの構築、運営に携わる
                      </p>
                      <p className={styles.en}>
                        Attended InternetAcademy School since October 2018.
                        <br />
                        Graduation from InternetAcademy School in July 2019.
                        <br />
                        In charge of LINE News design at NHK (Japan Broadcasting
                        Corporation) in August 2019 in the field of web
                        production.
                        <br />
                        Engaged in web operations and web production for Tobu
                        Railway and Tobu Group at Tobu Business Solution from
                        November 2019.
                        <br />
                        Engaged in building and operating a fan community site
                        at Quon Corporation from December 2022.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
