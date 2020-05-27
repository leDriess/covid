import React from "react";
import NewsItem from "./NewsItem";

const NewsPanel = ({ newsList }) => {
  return (
    <div className="container">
      {newsList.map((news) => (
        <NewsItem key={news.source.id + news.title} {...news} />
      ))}
    </div>
  );
};

export default NewsPanel;
