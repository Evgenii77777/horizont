import cn from "classnames";

import styles from "./button.module.css";

export const Button = ({ name, func, com }) => (
  <button className={cn(styles.base, com && styles.com)} onClick={func}>
    {name}
  </button>
);
