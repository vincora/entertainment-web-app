import React from "react";
import data from "../data.json";
import ContentList from "../components/content/ContentList";

const MoviesPage = () => {
  return <ContentList data={data} title="Movies" />;
};

export default MoviesPage;
