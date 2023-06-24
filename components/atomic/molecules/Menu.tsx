import Link from "next/link";
import styles from "../../style/menu.module.scss";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <nav>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/PageWork">WORK</Link>
          </li>
          <li>
            <Link href="/PageBusiness">BUSINESS</Link>
          </li>
          <li>
            <Link href="/PageDesign">DESIGN</Link>
          </li>
          <li>
            <Link href="/PageProfile">PROFILE</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
