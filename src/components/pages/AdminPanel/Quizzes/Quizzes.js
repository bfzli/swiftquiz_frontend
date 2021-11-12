import React from "react";
import { quizzes } from "./testarrays/quizzes";
import QuizCard from "./Cards/QuizCard";
import * as styles from "./Styles/Quizzes.module.scss";

const Quizzes = () => {
  return (
    <div className={styles.quizzes}>
      <h2 className={styles.title_quizzes}>QUIZZES</h2>

      <div className={styles.quizzes_cards}>
        {quizzes.map((q, i) => {
          return (
            <QuizCard
              key={i}
              thumbnail={q.thumbnail}
              title={q.title}
              description={q.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Quizzes;
