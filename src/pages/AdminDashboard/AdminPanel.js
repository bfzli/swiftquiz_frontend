import React from "react";
import AdminMembers from "../../components/pages/AdminPanel/Admins/AdminMembers";
import Quizzes from "../../components/pages/AdminPanel/Quizzes/Quizzes";
import Blogs from "../../components/pages/AdminPanel/Blogs/Blogs";
import UserMembers from "../../components/pages/AdminPanel/Users/UserMembers";
import SidePanel from "../../components/pages/AdminPanel/SidePanel/SidePanel";

import * as styles from "../../components/pages/AdminPanel/AdminPanel.module.scss";

const AdminPanel = () => {
  return (
    <div className={styles.admin_panel}>
      <SidePanel />
      <h2 className={styles.panel_title}>Welcome back, admin</h2>

      <div className={styles.admin_content}>
        <div className={styles.left_content}>
          <AdminMembers />
          <UserMembers />
        </div>
        <div className={styles.right_content}>
          <Quizzes />
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
