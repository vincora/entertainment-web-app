import React, { useCallback, useEffect, useRef } from "react";
import styles from "./Horizontal.module.scss";
import ContentItem from "../../components/content/ContentItem";
import { Scrollbars } from "react-custom-scrollbars-2";

const Horizontal = ({ data, title, isTrending }) => {
  const listRef = useRef();
  const scrollBarRef = useRef();

  const handleScroll = useCallback(
    (event) => {
      event.preventDefault();
      const container = scrollBarRef.current;
      container.scrollLeft(container.getScrollLeft() - event.deltaY);
    },
    [scrollBarRef.current]
  );

  useEffect(() => {
    if (!listRef.current) {
      return;
    }

    listRef.current.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      listRef.current.removeEventListener("wheel", handleScroll);
    };
  }, [listRef.current, handleScroll]);

  return (
    <div className={styles.horizontal} ref={listRef}>
      <h1 className={styles.horizontal__title}>{title}</h1>
      <Scrollbars
        ref={scrollBarRef}
        style={{ width: "100%" }}
        autoHeightMax={400}
        autoHeight
        autoHide
        renderThumbHorizontal={props => <div {...props} className={styles.horizontal__scrollThumb}/>}
        renderTrackHorizontal={props => <div {...props} className={styles.horizontal__scrollTrack}/>}
      >
        <ul className={styles.horizontal__list} >
          {data.map(({ title, year, category, rating, thumbnail }) => {
            return (
              <li key={title} className={styles.horizontal__listItem}>
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
      </Scrollbars>
    </div>
  );
};

export default Horizontal;
