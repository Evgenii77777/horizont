import { useState } from "react";
import { useParams } from "react-router-dom";

import { DataImages } from "../main/data-images";
import { Comment } from "../../components/comment";

import styles from "./images-page.module.css";

export const ImagesPages = () => {
  const par = useParams();
  const [text, setText] = useState("");
  const car = DataImages.find((car) => car.id === Number(par.imagesId));
  const [comment, setComment] = useState(car.comment);

  const onChangeComment = (e) => {
    setText(e.target.value);
  };

  const onAddComment = () => {
    setComment([...comment, text]);
    setText("");
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{car.name}</h1>
      <div className={styles.wrapper}>
        <img src={car.url} alt={car.name} className={styles.photo} />
        <div className={styles.box}>
          <p className={styles.description}>{car.description}</p>
          <span className={styles.rating}>Рейтинг: {car.rating}</span>
        </div>
      </div>
      <Comment
        comment={comment}
        text={text}
        onChangeComment={onChangeComment}
        onAddComment={onAddComment}
      />
    </section>
  );
};
