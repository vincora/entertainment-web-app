import React from "react";
import data from "../data.json";
import ContentList from "../components/content/ContentList";

const HomePage = () => {
  return <ContentList data={data} title="Recommended for you" />;
};

export default HomePage;
