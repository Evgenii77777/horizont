import { Link } from "react-router-dom";

import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img
        className={styles.logo}
        src="https://img.freepik.com/premium-vector/car-logo-template_9298-22.jpg?w=2000"
        alt="icon-logo"
      />
      Автосалон
    </Link>
  </header>
);
