import { Button } from "../buttons/button";

import styles from "./commnet.module.css";

export const Comment = ({ comment, text, onChangeComment, onAddComment }) => (
  <div className={styles.wrapper}>
    {comment.length !== 0 && (
      <ul className={styles.list}>
        <li className={styles.item}>Комментарии:</li>
        {comment.map((com) => (
          <li className={styles.item}>{com}</li>
        ))}
      </ul>
    )}
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={onChangeComment}
      />
      <Button name="Оставить комментарий" func={onAddComment} com={true} />
    </div>
  </div>
);
