import React from "react";
import * as style from "./Style/AboutContainer.module.scss";

const AboutContainer = ({ title, desc, styles }) => {
  return (
    <div className={`${styles}`}>
      <h2 className={style.about-title}>{title}</h2>
      <div className="divider"></div>
      <p>{desc}</p>
    </div>
  );
};

export default AboutContainer;