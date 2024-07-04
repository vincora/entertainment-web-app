import React, { useEffect, useRef } from "react";
import styles from "./Horizontal.module.scss";
import ContentItem from "../../components/content/ContentItem";

const handleScroll = (event) => {
  event.preventDefault();
  const container = event.currentTarget;
  const scrollAmount = event.deltaY;
  container.scrollTo({
    top: 0,
    left: container.scrollLeft - scrollAmount,
    behavior: "smooth",
  });
};

const Horizontal = ({ data, title, isTrending }) => {
  const listRef = useRef();

  useEffect(() => {
    if (!listRef.current) {
      return;
    }

    listRef.current.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      listRef.current.removeEventListener("wheel", handleScroll);
    };
  }, [listRef.current]);

  return (
    <div className={styles.horizontal} >
      <h1 className={styles.horizontal__title}>{title}</h1>
      <ul className={styles.horizontal__list} ref={listRef} >
        {data.map(({ title, year, category, rating, thumbnail }) => {
          return (
            <li key={title}>
              <ContentItem
                title={title}
                year={year}
                category={category}
                rating={rating}
                imgUrl={thumbnail.trending.large}
                isTrending={isTrending}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Horizontal;
