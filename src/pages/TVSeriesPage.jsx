import React from "react";
import ContentList from "../components/content/ContentList";
import data from "../data.json";

const TVSeriesPage = () => {
  return <ContentList data={data} title="TV Series" />;
};

export default TVSeriesPage;
