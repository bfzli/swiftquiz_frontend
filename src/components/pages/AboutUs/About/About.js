import React from "react";
import AboutContainer from "./AboutContainer";
import { about } from "./aboutUs";

const About = () => {
  return (
    <div>
      {about.map((a, i) => {
        return (
          <AboutContainer
            key={i}
            title={a.tittle}
            desc={a.paragraph}
          />
        );
      })}
    </div>
  );
};

export default About;