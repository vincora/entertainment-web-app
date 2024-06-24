import React from "react";
import data from "../data.json";
import ContentList from "../widgets/content-list/ContentList";
import Horizontal from "../widgets/horizontal-list/Horizontal";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const filteredData = data.filter((item) => item.isTrending === true);
  return (
    <div className={styles.home}>
      <Horizontal data={filteredData} isTrending={true} />
      <ContentList data={data} title="Recommended for you" />;
    </div>
  );
};

export default HomePage;
