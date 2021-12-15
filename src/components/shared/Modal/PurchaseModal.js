import ReactDOM from "react-dom";
import * as styles from "./PurchaseModal.module.scss";
import { Link } from "react-router-dom";

export default function Modal(props) {
  return ReactDOM.createPortal(
    <section className={styles.container}>
      <div class={styles.container_pruchasem}>
        <div className={styles.container_pruchasem_header}>
          <h2 className={styles.container_pruchasem_title}>{props.title}</h2>
          <svg
            onClick={props.onClose}
            className={styles.closemodal}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z"
              fill="var(--icon-border)"
            />
          </svg>
        </div>
        <div className={styles.container_pruchasem_body}>
          <p>{props.text}</p>
          <Link
            to={`/invite/${props.redeem}`}
            className={styles.container_pruchasem_confirmation}
            onClick={() => props.dispatch(props.purchaseQuiz(props.quiz))}
          >
            {props.link1}
          </Link>
          <Link to={""} className={styles.container_pruchasem_deny}>
            {props.link2}
          </Link>
        </div>
      </div>
    </section>,
    document.getElementById("purchase")
  );
}
