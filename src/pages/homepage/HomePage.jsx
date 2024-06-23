import React from "react";
import ContentItem from "../../components/contentItem/ContentItem";
import data from "../../data.json";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div>
      <div className={styles.list}>
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
    </div>
  );
};

export default HomePage;
