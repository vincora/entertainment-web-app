import React from "react";
import styles from "./ContentList.module.scss";
import ContentItem from "./ContentItem";

const ContentList = ({ data, title }) => {
  return (
    <div className={styles.content}>
      <div className={styles.content__title}>{title}</div>
      <ul className={styles.content__list}>
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
      </ul>
    </div>
  );
};

export default ContentList;
