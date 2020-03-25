import React, { Component } from "react";
class AdminHome extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {articles.map(article => {
              const date = new Date(article.date);
              return (
                <Article
                  key={article._id}
                  title={article.title}
                  text={article.text}
                  author={article.author}
                  date={date.toDateString()}
                  truncateSize={truncateSize}
                  col={col}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHome;
