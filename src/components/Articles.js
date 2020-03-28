import React, { Component } from "react";
import axios from "axios";
import "../scss/index.scss";
import { connect } from "react-redux";

const Article = ({
  article,
  date,
  truncateSize,
  col,
  handleDelete,
  isLoged
}) => {
  const truncate = (source, size) =>
    source.length > size ? source.slice(0, size - 1) + "…" : source;
  const { _id, title, text, author } = article;

  return (
    <div className={`col-${col} mb-1`}>
      <div className="card">
        {/* <img src="{ image }" alt="image article">
      {image}
    </img> */}
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">
            {truncateSize ? truncate(text, truncateSize) : text}
          </p>
          <p className="card-author">
            <small className="text-muted"> {author} </small>
          </p>
          <p className="card-date">
            <small className="text-muted"> {date} </small>
          </p>
          {isLoged && (
            <button
              onClick={e => {
                handleDelete(e, _id);
              }}
            >
              supprimer
            </button>
          )}
          {isLoged && <button>modifier</button>}
        </div>
      </div>
    </div>
  );
};

class Articles extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { limit } = this.props;
    axios
      .post("http://localhost:8081/articles/show", {
        limit
      })
      .then(response => {
        this.setState({ articles: response.data });
      });
  }

  handleDelete(e, id) {
    e.preventDefault();

    axios
      .delete(`http://localhost:8081/article/delete/${id}`)
      .then(Response => {
        this.setState = {
          articles: this.state.articles.filter(article => article._id !== id)
        };
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { articles } = this.state;
    const { truncateSize, col, isLoged } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {articles.map(article => {
              const date = new Date(article.date);
              return (
                <Article
                  isLoged={isLoged}
                  article={article}
                  key={article._id}
                  date={date.toDateString()}
                  truncateSize={truncateSize}
                  col={col}
                  handleDelete={this.handleDelete}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
const mapToProps = state => ({
  isLoged: state.session.isLoged
});
export default connect(mapToProps)(Articles);
