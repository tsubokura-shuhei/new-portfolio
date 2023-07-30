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
                  <div className={styles.image_container_bg}></div>
                  <div className={styles.image_container}>
                    <img src="images/icons/image01.png" alt="" />
                    <div className={styles.title_inner}>
                      <h4>
                        <span>project</span>
                        <span>サイト開発</span>
                      </h4>
                    </div>
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.text_inner}>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.pr_contents}>
                <Link href="/">
                  <div className={styles.image_container}>
                    <img src="images/icons/image02.png" alt="" />
                    <div className={styles.title_inner}>
                      <h4>
                        <span>project</span>
                        <span>LPページ作成</span>
                      </h4>
                    </div>
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.text_inner}>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.pr_contents}>
                <Link href="/">
                  <div className={styles.image_container}>
                    <img src="images/icons/image03.png" alt="" />
                    <div className={styles.title_inner}>
                      <h4>
                        <span>project</span>
                        <span>コミュニティサークル作成</span>
                      </h4>
                    </div>
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.text_inner}>
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.op_container_bg}>
            <div className={styles.op_container}>
              <h3 className={styles.op}>
                OPERATION <span>運用</span>
              </h3>
              <div className={styles.op_inner}>
                <div className={styles.op_contents}>
                  <Link href="/">
                    <div className={styles.image_container_bg}></div>
                    <div className={styles.image_container}>
                      <img src="images/icons/image04.png" alt="" />
                      <div className={styles.title_inner}>
                        <h4>
                          <span>project</span>
                          <span>サイト運用更新</span>
                        </h4>
                      </div>
                    </div>
                    <div className={styles.text_container}>
                      <div className={styles.text_inner}>
                        東武グループや各社コミュニティサイトのWEBサイトの更新対応に携わりました。
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={styles.op_contents}>
                  <Link href="/">
                    <div className={styles.image_container_bg}></div>
                    <div className={styles.image_container}>
                      <img src="images/icons/image05.png" alt="" />
                      <div className={styles.title_inner}>
                        <h4>
                          <span>project</span>
                          <span>おすすめ記事作成</span>
                        </h4>
                      </div>
                    </div>
                    <div className={styles.text_container}>
                      <div className={styles.text_inner}>
                        東武グループの魅力や情報を発信する新着ニュースの記事を作成させていただきました。
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={styles.op_contents}>
                  <Link href="/">
                    <div className={styles.image_container_bg}></div>
                    <div className={styles.image_container}>
                      <img src="images/icons/image06.png" alt="" />
                      <div className={styles.title_inner}>
                        <h4>
                          <span>project</span>
                          <span>情報誌の作成</span>
                        </h4>
                      </div>
                    </div>
                    <div className={styles.text_container}>
                      <div className={styles.text_inner}>
                        毎月発行となる情報誌のサイト作成、デザインを担当させていただきました。
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
