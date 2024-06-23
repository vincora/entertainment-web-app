import React from "react";
import styles from "./Thumbnail.module.scss";
import IconPlay from "../../../public/assets/icon-play.svg?react";
import IconBookmark from "../../../public/assets/icon-bookmark-empty.svg?react";
import cn from "clsx";

const Thumbnail = ({ isBookmarked = false, imgUrl }) => {
  return (
    <div className={styles.thumbnail}>
      <img src={imgUrl} alt="" />
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
