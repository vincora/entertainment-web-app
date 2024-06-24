import React from "react";
import styles from "./BookmarkedPage.module.scss";
import ContentList from "../widgets/content-list/ContentList";
import data from "../data.json";

const BookmarkedPage = () => {
  return (
    <div className={styles.bookmarked}>
      <ContentList data={data} title="Bookmarked Movies" />
      <ContentList data={data} title="Bookmarked TV Series" />
    </div>
  );
};

export default BookmarkedPage;
