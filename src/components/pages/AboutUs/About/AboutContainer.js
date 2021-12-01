import React from "react";
import * as styles from "./Style/AboutContainer.module.scss";

const AboutContainer = ({ title, desc }) => {
  return (
    <div className={styles.aboutcontainer} data-aos="fade-down">
      <h2 className={styles.about_title}>{title}</h2>
      <div className={styles.divider}></div>
      <p>{desc}</p>
    </div>
  );
};

export default AboutContainer;