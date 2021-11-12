import React from "react";
import { admins } from "./testarrays/admins";
import UserCard from "./Cards/UserCard";
import * as styles from "./Styles/UserMembers.module.scss";

const UserMembers = () => {
  return (
    <div className={styles.admin_members}>
      <h2 className={styles.title_admin}>USERS</h2>
      {admins.map((a, i) => {
        return (
          <UserCard profile={a.profile} name={a.name} activity={a.activity} />
        );
      })}
    </div>
  );
};

export default UserMembers;
