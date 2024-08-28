import React from "react";
import styles from "./styles/Header.module.css";
function Header() {
  console.log(styles);
  return (
    <div className={styles.title}>
      <h1>Contact App</h1>
      <h4>React js</h4>
    </div>
  );
}

export default Header;
