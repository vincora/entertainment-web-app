import React from "react";
import ContentList from "../widgets/content-list/ContentList";
import data from "../data.json";

const TVSeriesPage = () => {
  const filteredData = data.filter(item => item.category === 'TV Series')
  return <ContentList data={filteredData} title="TV Series" />;
};

export default TVSeriesPage;
