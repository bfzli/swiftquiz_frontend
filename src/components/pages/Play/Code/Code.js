import { useState } from "react";
import * as styles from "./Code.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PurchaseModal from "../../../shared/Modal/PurchaseModal";

export default function Screen({ code, setCode, play_quiz }) {
  const [confirmation, setConfirmation] = useState(false);

  const handleConfirmation = () => {
    setConfirmation(true);
  };

  const closeModal = () => {
    setConfirmation(false);
  };

  const { t } = useTranslation();

  return (
    <>
      {confirmation === true ? (
        <PurchaseModal
          title={t("play_screen.modalTitle")}
          text={t("play_screen.modalText")}
          yes={"Yes"}
          no={"No"}
          onClick={() => play_quiz()}
          onClose={closeModal}
        />
      ) : null}
      <div data-aos="fade-top" className={styles.container}>
        <div data-aos="fade-right" className={styles.container_left}>
          <h1 className={styles.container_left_title}>
            {t("play_screen.title")}
          </h1>
          <p className={styles.container_left_description}>
            {t("play_screen.description")}
          </p>
          <div className={styles.container_left_inputs}>
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
            <button
              onClick={handleConfirmation}
              className={styles.container_left_inputs_cta}
            >
              {t("play_screen.enter")}
            </button>
            <Link
              to={"/dashboard/community"}
              className={styles.container_left_inputs_back}
            >
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
