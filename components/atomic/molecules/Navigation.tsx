import Link from "next/link";
import styles from "../../style/header.module.scss";

export type Props = {
  id: string;
  open: boolean;
};

const Navigation = (props: Props) => {
  const { id, open } = props;
  return (
    <>
      <nav
        id={id}
        aria-hidden={!open}
        className={`${styles.navigation} ${open! ? styles.list : ""}`}
      >
        <ul>
          <li className={styles.list_1}>
            <Link href="/">HOME</Link>
          </li>
          <li className={styles.list_2}>
            <Link href="/PageWork">WORK</Link>
          </li>
          <li className={styles.list_3}>
            <Link href="/PageBusiness">BUSINESS</Link>
          </li>
          <li className={styles.list_4}>
            <Link href="/PageDesign">DESIGN</Link>
          </li>
          <li className={styles.list_5}>
            <Link href="/PageProfile">PROFILE</Link>
          </li>
        </ul>
        <div className={styles.credit}>©︎SHUHEI TSUBOKURA DESIGN</div>
      </nav>
    </>
  );
};

export default Navigation;
