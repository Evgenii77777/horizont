import styles from "./filter.module.css";

export const Filter = ({ onChangeCategories, selValue, setCar }) => (
  <select
    className={styles.select}
    onChange={(e) => onChangeCategories(e)}
    value={selValue}
  >
    <option value="" hidden disabled selected>
      Выберете марку
    </option>
    <option value="">Все марки</option>
    {[...setCar].map((el) => (
      <option key={el} value={el}>
        {el}
      </option>
    ))}
  </select>
);
