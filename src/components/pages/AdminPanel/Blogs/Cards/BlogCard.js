import React from "react";
import * as styles from "../Styles/BlogCard.module.scss";
import { ReactComponent as Eye } from "../../../../../assets/images/show.svg";
import { ReactComponent as Edit } from "../../../../../assets/images/edit.svg";
import { ReactComponent as Delete } from "../../../../../assets/images/delete.svg";

const BlogCard = ({ thumbnail, title, description }) => {
  return (
    <div className={styles.blog}>
      <div className={styles.blog_info}>
        <img src={thumbnail} />
        <div className={styles.blog_dscp}>
          <h2 className={styles.blog_title}>{title}</h2>
          <p className={styles.blog_description}>{description}</p>
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

export default BlogCard;
