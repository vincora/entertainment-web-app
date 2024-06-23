import React from "react";
import styles from "./Info.module.scss";
import IconMovie from "../../../public/assets/icon-category-movie.svg?react";
import IconTV from "../../../public/assets/icon-category-tv.svg?react";

const Info = ({ title, year, category, rating }) => {
  return (
    <div className={styles.info}>
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
