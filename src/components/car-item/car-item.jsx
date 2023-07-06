import { NavLink } from "react-router-dom";

import styles from "./car-item.module.css";

export const CarItem = ({ car: { url, name, id, rating } }) => (
  <li className={styles.item}>
    <NavLink to={`/${id}`}>
      <img src={url} alt={name} className={styles.photo} />
      <div className={styles.wrapper}>
        <span>{name}</span>
        <span className={styles.rating}>{rating}</span>
      </div>
    </NavLink>
  </li>
);
