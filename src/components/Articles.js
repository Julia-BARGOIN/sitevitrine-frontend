import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "../scss/index.scss";
import { connect } from "react-redux";
import { openModal } from "./admin/modal/actions/";
import { fromJS } from "immutable";

const Article = ({
  article,
  date,
  truncateSize,
  col,
  handleDelete,
  isLoged,
  dispatch
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
              className="btn btn-danger mr-auto p-2 pr-3 pl-3 bd-highlight"
            >
              supprimer
            </button>
          )}
          {isLoged && (
            <button
              onClick={() => dispatch(openModal(true, "article-update", _id))}
              className="btn btn-info p-2 pr-3 pl-3 bd-highlight"
            >
              modifier
            </button>
          )}
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
    this.cookies = new Cookies();
  }

  componentDidMount() {
    const { limit } = this.props;
    axios
      .post(
        "http://localhost:8081/articles/show",
        {
          limit
        },
        {
          headers: {
            token:
              "eyJ3b3JkcyI6Wzc0NjQ2MzM0MywyMDU2NTkwMzQxLDcxNTA5NzY2MiwtMzQyODcyMTM3LDczNzY3NDg2LDk4OTkyNjQxOCw2NTQwMjUyNTEsLTgwMzE2MTMzNF0sInNpZ0J5dGVzIjozMn0"
          }
        }
      )
      .then(response => {
        this.setState({ articles: response.data });
      });
  }

  handleDelete(e, id) {
    e.preventDefault();

    axios
      .delete(`http://localhost:8081/article/delete/${id}`, {
        headers: {
          token: this.cookies.get("token") || this.cookies.get("access-token")
        }
      })
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
    const { truncateSize, col, isLoged, dispatch } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="card-deck">
            {articles.map(article => {
              const date = new Date(article.date);
              return (
                <Article
                  dispatch={dispatch}
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
