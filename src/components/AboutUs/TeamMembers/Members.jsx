import React, { useState } from "react";
import "./Style/Members.scss";

import { ReactComponent as MemberAvatar1 } from "../../../assets/images/member_avatar1.svg";
import { ReactComponent as MemberAvatar2 } from "../../../assets/images/member_avatar2.svg";

import { ReactComponent as MemberAvatar } from "../../../assets/images/member_avatar.svg";

const Members = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="our-team">
      <div className="our-team_container">
        <div className="our-team_container-header">
          <h2>OUR TEAM</h2>
          <div className="divider"></div>
        </div>
        <div className="our-team_container-members">
          <MemberAvatar
            className={toggleState === 1 ? "" : "inactive"}
            onMouseEnter={() => toggleTab(1)}
          />
          <MemberAvatar1
            className={toggleState === 2 ? "" : "inactive"}
            onMouseEnter={() => toggleTab(2)}
          />
          <MemberAvatar2
            className={toggleState === 3 ? "" : "inactive"}
            onMouseEnter={() => toggleTab(3)}
          />
          <MemberAvatar
            className={toggleState === 4 ? "" : "inactive"}
            onMouseEnter={() => toggleTab(4)}
          />
          <MemberAvatar1
            className={toggleState === 5 ? "" : "inactive"}
            onMouseEnter={() => toggleTab(5)}
          />
        </div>
      </div>
      <div className="our-team_container">
        <div className="our-team_container-header">
          <h2>MEMBER INFO</h2>
          <div className="divider"></div>
          <h4
            className={toggleState === 1 ? "tabs active-tabs" : "inactive1"}
            onClick={() => toggleTab(1)}
          >
            Mendrit Arifi
          </h4>
          <h4
            className={toggleState === 2 ? "tabs active-tabs" : "inactive1"}
            onClick={() => toggleTab(2)}
          >
            Adnan Kasumaj
          </h4>
          <h4
            className={toggleState === 3 ? "tabs active-tabs" : "inactive1"}
            onClick={() => toggleTab(3)}
          >
            Benjamin Fazliu
          </h4>
          <h4
            className={toggleState === 4 ? "tabs active-tabs" : "inactive1"}
            onClick={() => toggleTab(4)}
          >
            Fitim Hoti
          </h4>
          <h4
            className={toggleState === 5 ? "tabs active-tabs" : "inactive1"}
            onClick={() => toggleTab(5)}
          >
            Laurat Hajrullaaga
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Members;
