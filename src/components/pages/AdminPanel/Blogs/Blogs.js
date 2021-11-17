import React from "react";
import { blogs } from "./testarrays/blogs";
import BlogCard from "./Cards/BlogCard";
import * as styles from "./Styles/Blogs.module.scss";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <h2 className={styles.blogs_title}>BLOGS</h2>
      {blogs.map((b, i) => {
        return (
          <BlogCard
            key={i}
            thumbnail={b.thumbnail}
            title={b.title}
            description={b.description}
          />
        );
      })}
    </div>
  );
};

export default Blogs;
