import React from "react";
import styles from "./Thumbnail.module.scss";
import IconPlay from "../../assets/icon-play.svg?react";
import IconBookmarkEmpty from "../../assets/icon-bookmark-empty.svg?react";
import IconBookmarkFull from "../../assets/icon-bookmark-full.svg?react";
import img from "../../assets/thumbnails/earths-untouched/regular/medium.jpg";

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
      <button className={styles.bookmark}>
            {isBookmarked ? <IconBookmarkFull/> : <IconBookmarkEmpty/>}
        </button>
    </div>
  );
};

export default Thumbnail;
