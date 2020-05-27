import React, { useState, useEffect } from "react";
import NewsPanel from "../../components/NewsPanel/NewsPanel";
import { getData, getNewsLink } from "../../utils";
import SpinningLoader from "../../components/SpinningLoader/SpinningLoader";

const NewsView = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getData(
      getNewsLink(),
      (res) => {
        const { articles } = res;
        setNews(articles);
      },
      null,
      true
    );
  }, []);

  return (
    <section className="section">
      <div className="column is-three-fifths is-offset-one-fifth">
        <h2 className="title is-2">News</h2>
        <p className="subtitle is-5">
          powered by <a href="https://newsapi.org/">NewsAPI.org</a>
        </p>
        <div className="container">
          {news.length !== 0 ? (
            <NewsPanel newsList={news} />
          ) : (
            <div className="level">
              <div className="level-item">
                <SpinningLoader size="4" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsView;
