import { useState } from "react";
import ToggleButton from "../atoms/button/ToggleButton";
import Navigation from "../molecules/Navigation";
import styles from "../../style/header.module.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleFunction = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <header className={styles.header}>
      <ToggleButton
        open={open}
        controls="navigation"
        label="メニューを開きます"
        onClick={toggleFunction}
      />
      <Navigation id="navigation" open={open} />
    </header>
  );
};

export default Header;
