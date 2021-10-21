import React from "react";
import "./Style/AboutContainer.scss";

const AboutContainer = ({ title, desc, styles }) => {
  return (
    <div className={`${styles}`}>
      <h2 className="about-title">{title}</h2>
      <div className="divider"></div>
      <p>{desc}</p>
    </div>
  );
};

export default AboutContainer;
