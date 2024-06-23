import React from "react";
import styles from "./Thumbnail.module.scss";
import IconPlay from "../../assets/icon-play.svg?react";
import IconBookmark from "../../assets/icon-bookmark-empty.svg?react";
import img from "../../assets/thumbnails/earths-untouched/regular/medium.jpg";
import cn from "clsx";

const Thumbnail = ({ isBookmarked = false }) => {
  return (
    <div className={styles.thumbnail}>
      <img src={img} alt="" />
      <div className={styles.thumbnail__container}>
        <button className={styles.btnPlay}>
          <IconPlay />
          <span className={styles.btnPlay__text}>Play</span>
        </button>
      </div>
      <button
        className={cn(styles.bookmark, {
          [styles.bookmark_selected]: isBookmarked,
        })}
      >
        <IconBookmark />
      </button>
    </div>
  );
};

export default Thumbnail;
