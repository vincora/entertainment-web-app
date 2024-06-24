import React from "react";
import data from "../data.json";
import ContentList from "../widgets/content-list/ContentList";

const MoviesPage = () => {
  const filteredData = data.filter(item => item.category === 'Movie')
  return <ContentList data={filteredData} title="Movies" />;
};

export default MoviesPage;
