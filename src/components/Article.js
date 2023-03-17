import React from 'react';
import moment from 'moment';
const Article = ({ title, date, length, snippet }) => {
  return (
    <article className="article">
      <h2>{title}</h2>
      <span>{moment(date).format('dddd  Do YYYY')}</span>
      <span>{length} min read</span>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
