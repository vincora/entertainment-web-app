import React from "react";
import styles from "./ContentItem.module.scss";
import Thumbnail from "../thumbnail/Thumbnail";
import Info from "../info/Info";
import cn from "clsx";

const ContentItem = ({ title, year, category, rating, imgUrl, isTrending }) => {
  return (
    <div className={cn(styles.item, { [styles.item_big]: isTrending })}>
      <Thumbnail className={styles.item__thumbnail} imgUrl={imgUrl} />
      <div className={styles.item__info}>
        <Info title={title} year={year} category={category} rating={rating} isTrending={isTrending} />
      </div>
    </div>
  );
};

export default ContentItem;
