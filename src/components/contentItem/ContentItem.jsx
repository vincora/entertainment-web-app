import React from "react";
import styles from "./ContentItem.module.scss";
import Thumbnail from "../thumbnail/Thumbnail";
import Info from "../info/Info";

const Item = ({ title, year, category, rating, imgUrl }) => {

  return (
    <div className={styles.item}>
      <Thumbnail imgUrl={imgUrl}/>
      <Info title={title} year={year} category={category} rating={rating} />
    </div>
  );
};

export default Item;
