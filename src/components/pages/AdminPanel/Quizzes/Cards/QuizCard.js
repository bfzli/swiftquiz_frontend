import React from "react";
import * as styles from "../Styles/QuizCard.module.scss";
import { ReactComponent as Eye } from "../../../../../assets/images/show.svg";
import { ReactComponent as Edit } from "../../../../../assets/images/edit.svg";
import { ReactComponent as Delete } from "../../../../../assets/images/delete.svg";

const QuizCard = ({ thumbnail, title, description }) => {
  return (
    <div className={styles.quiz}>
      <img src={thumbnail} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.quiz_config}>
        <Eye />
        <Edit />
        <Delete />
      </div>
    </div>
  );
};

export default QuizCard;
