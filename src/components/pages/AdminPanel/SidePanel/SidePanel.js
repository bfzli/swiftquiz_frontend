import React from "react";
import { ReactComponent as Home } from "../../../../assets/images/Home.svg";
import { ReactComponent as Bookmark } from "../../../../assets/images/Bookmark.svg";
import { ReactComponent as Search } from "../../../../assets/images/Search.svg";
import { ReactComponent as Folder } from "../../../../assets/images/Folder.svg";
import { ReactComponent as Activity } from "../../../../assets/images/Activity.svg";

import * as styles from "./Styles/SidePanel.module.scss";

const SidePanel = () => {
  return (
    <div className={styles.side_panel}>
      <div className={styles.side_buttons}>
        <Home />
        <Folder />
        <Search />
        <Bookmark />
        <Activity />
      </div>
    </div>
  );
};

export default SidePanel;
