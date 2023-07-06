import { useState } from "react";

import { DataImages } from "./data-images";
import { CarItem } from "../../components/car-item";

import styles from "./main-pages.module.css";
import { Button } from "../../components/buttons/button";
import { Filter } from "../../components/filter";

export const MainPages = () => {
  const [sorted, setSorted] = useState(false);
  const [value, selValue] = useState("");
  const maxSorted = [...DataImages]
    .sort((a, b) => b.rating - a.rating)
    .filter((el) => el.category.toLowerCase().includes(value.toLowerCase()));
  const minSorted = [...DataImages]
    .sort((a, b) => a.rating - b.rating)
    .filter((el) => el.category.toLowerCase().includes(value.toLowerCase()));
  const setCar = new Set(DataImages.map((car) => car.category));

  const onChangeSorted = () => {
    setSorted(!sorted);
  };

  const onChangeCategories = (e) => {
    selValue(e.target.value);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Коллекция автомобилей</h1>
      <div className={styles.wrap}>
        <Filter
          onChangeCategories={onChangeCategories}
          selValue={selValue}
          setCar={setCar}
        />
        <Button
          name={sorted ? "По убыванию" : "По возрастанию"}
          func={onChangeSorted}
        />
      </div>
      <ul className={styles.list}>
        {sorted
          ? maxSorted.map((car) => <CarItem car={car} />)
          : minSorted.map((car) => <CarItem car={car} />)}
      </ul>
    </section>
  );
};
