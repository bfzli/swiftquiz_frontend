import React from "react";
import { admins } from "./testarrays/admins";
import AdminCard from "./Cards/AdminCard";
import * as styles from "./Styles/AdminMembers.module.scss";

const AdminMembers = () => {
  return (
    <div className={styles.admin_members}>
      <h2 className={styles.title_admin}>ADMINS</h2>
      {admins.map((a, i) => {
        return (
          <AdminCard profile={a.profile} name={a.name} activity={a.activity} />
        );
      })}
    </div>
  );
};

export default AdminMembers;
