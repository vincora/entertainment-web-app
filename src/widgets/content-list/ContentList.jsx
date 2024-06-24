import React from "react";
import styles from "./ContentList.module.scss";
import ContentItem from "../../components/content/ContentItem";

const ContentList = ({ data, title }) => {
  return (
    <div className={styles.content}>
      <div className={styles.content__title}>{title}</div>
      <ul className={styles.content__list}>
        {data.map(({ title, year, category, rating, thumbnail }) => {
          return (
            <li>
              <ContentItem
                key={title}
                title={title}
                year={year}
                category={category}
                rating={rating}
                imgUrl={thumbnail.regular.small}
                isTrending={false}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentList;
