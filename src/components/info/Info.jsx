import React from "react";
import styles from "./Info.module.scss";
import IconMovie from "../../assets/icon-category-movie.svg?react";
import IconTV from "../../assets/icon-category-tv.svg?react";
import cn from "clsx";

const Info = ({ title, year, category, rating, isTrending }) => {
  return (
    <div className={cn(styles.info, {[styles.info_big]: isTrending})}>
      <ul className={styles.info__data}>
        <li>{year}</li>
        <li>
          {category === "Movie" ? <IconMovie /> : <IconTV />}
          {category}
        </li>
        <li>{rating}</li>
      </ul>
      <a href="" className={styles.info__title}>
        {title}
      </a>
    </div>
  );
};

export default Info;
