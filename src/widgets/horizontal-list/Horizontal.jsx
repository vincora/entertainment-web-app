import React, { useRef } from "react";
import styles from "./Horizontal.module.scss";
import ContentItem from "../../components/content/ContentItem";

const Horizontal = ({ data }) => {

  // const scrollRef = useRef(null);
  // const handleWheel = (e) => {
  //   if (e.deltaY !== 0) {
  //     e.preventDefault();
  //     scrollRef.current.scrollLeft += e.deltaY;
  //   }
  // };

  return (
    <div className={styles.horizontal}>
      <h1 className={styles.horizontal__title}>Trending</h1>
      <ul
        className={styles.horizontal__list}
        // ref={scrollRef}
        // onWheel={handleWheel}
      >
        {data.map(
          ({ title, year, category, rating, thumbnail, isTrending }) => {
            return (
              <li>
                <ContentItem
                  key={title}
                  title={title}
                  year={year}
                  category={category}
                  rating={rating}
                  imgUrl={thumbnail.trending.large}
                  isTrending={isTrending}
                />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Horizontal;
