import React from "react";
import * as styles from "../Styles/UserCard.module.scss";
import { ReactComponent as Eye } from "../../../../../assets/images/show.svg";
import { ReactComponent as Edit } from "../../../../../assets/images/edit.svg";
import { ReactComponent as Delete } from "../../../../../assets/images/delete.svg";

const UserCard = ({ profile, name, activity }) => {
  return (
    <div className={styles.admin_member}>
      <div className={styles.admin_info}>
        <img src={profile} />
        <div className={styles.member_dscp}>
          <h2 className={styles.member_name}>{name}</h2>
          <p className={styles.member_activity}>{activity}</p>
        </div>
      </div>
      <div className={styles.member_config}>
        <Eye />
        <Edit />
        <Delete />
      </div>
    </div>
  );
};

export default UserCard;
