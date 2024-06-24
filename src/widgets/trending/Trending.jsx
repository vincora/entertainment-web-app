import React from "react";
import styles from "./Trending.module.scss";

const Trending = ({ data }) => {
  return (
    <div className={styles.trendingList}>
      {data.map(({ title, year, category, rating, thumbnail }) => {
        return (
          <ContentItem
            key={title}
            title={title}
            year={year}
            category={category}
            rating={rating}
            imgUrl={thumbnail.regular.small}
          />
        );
      })}
    </div>
  );
};

export default Trending;
