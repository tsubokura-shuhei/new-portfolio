import Head from "next/head";
import Link from "next/link";
import Header from "../components/atomic/templates/ToggleBtn";
import styles from "../components/style/Business.module.scss";
import { Layout } from "../components/Layout";

export default function PageBusiness() {
  return (
    <Layout title="Business">
      <div className={styles.business}>
        <h2>
          BUSINESS<span>ビジネス</span>
        </h2>
        <div className={styles.wrapper}>
          <div className={styles.pr_container}>
            <h3>
              PRODUCTION <span>制作</span>
            </h3>
            <div className={styles.pr_inner}>
              <div className={styles.pr_contents}>
                <Link href="/">
                  <div className={styles.image_container}>
                    <img src="images/3825_color.png" alt="" />
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.title_inner}>サイト開発</div>
                    <div className={styles.text_inner}>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.pr_contents}>
                <Link href="/">
                  <div className={styles.image_container}>
                    <img src="images/3825_color.png" alt="" />
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.title_inner}>LPページ作成</div>
                    <div className={styles.text_inner}>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.pr_contents}>
                <Link href="/">
                  <div className={styles.image_container}>
                    <img src="images/3825_color.png" alt="" />
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.title_inner}>
                      コミュニティサークル作成
                    </div>
                    <div className={styles.text_inner}>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.op_container}>
            <h3>
              OPERATION <span>運用</span>
            </h3>
            <div className={styles.op_inner}>
              <div className={styles.op_contents}>
                <Link href="/">サイト更新</Link>
              </div>
              <div className={styles.op_contents}>
                <Link href="/">おすすめ記事更新</Link>
              </div>
              <div className={styles.op_contents}>
                <Link href="/">情報誌の作成</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
