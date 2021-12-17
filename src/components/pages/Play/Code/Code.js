import * as styles from "./Code.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { purchaseQuiz } from "../../../../reduxComponents/actions/Questions";

export default function Screen({ code, setCode, play_quiz }) {
  const purchaseConfirmation = useSelector(
    (state) => state.user.purchaseMessage
  );

  const dispatch = useDispatch();

  const accessQuiz = () => {
    dispatch(purchaseQuiz(code));
    if (purchaseConfirmation) {
      setTimeout(() => play_quiz(), 2000);
    }
  };

  const { t } = useTranslation();
  return (
    <>
      <div data-aos="fade-top" className={styles.container}>
        <div data-aos="fade-right" className={styles.left}>
          <h1 className={styles.title}>{t("play_screen.title")}</h1>
          <p className={styles.description}>{t("play_screen.description")}</p>
          <div style={{ display: "flex" }}>
            <input
              value={code}
              onChange={(e) => {
                e.preventDefault();
                setCode(e.target.value);
              }}
              className={styles.codebox}
              placeholder="Type redeem code"
              type="text"
            />
            <button onClick={accessQuiz} className={styles.cta}>
              {t("play_screen.enter")}
            </button>
            <Link to={"/dashboard/community"} className={styles.back}>
              {t("play_screen.backto")}
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className={styles.right}>
          <lottie-player
            style={{ width: "90%", height: "90%" }}
            src="https://assets2.lottiefiles.com/packages/lf20_DMgKk1.json"
            background="transparent"
            speed="1"
            autoplay
            loop
          ></lottie-player>
        </div>
      </div>
    </>
  );
}
