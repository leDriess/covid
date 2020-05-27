import React from "react";

const NewsItem = ({ author, title, content, url, urlToImage }) => (
  <article className="media">
    <div className="columns">
      <div className="column is-two-fifths">
        <figure>
          <p className="image">
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="" />
            </a>
          </p>
        </figure>
      </div>
      <div className="column">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3 className="title is-4">{title}</h3>
        </a>
        <p className="subtitle is-6">{author}</p>
        <div className="container">
          <p>{content}</p>
        </div>
      </div>
    </div>
  </article>
);

export default NewsItem;
