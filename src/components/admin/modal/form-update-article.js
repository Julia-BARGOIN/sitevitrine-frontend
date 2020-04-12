import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Cookies from "universal-cookie";

class FormUpdateArticle extends Component {
  constructor() {
    super();

    this.onHandleTitle = this.onHandleTitle.bind(this);
    this.onHandleText = this.onHandleText.bind(this);
    this.onHandleAuthor = this.onHandleAuthor.bind(this);

    this.cookies = new Cookies();

    this.state = {
      title: "",
      text: "",
      author: ""
    };
  }
  componentDidMount() {
    this.getArticle();
  }
  getArticle() {
    const { id } = this.props;
    axios
      .get(`http://localhost:8081/article/${id}`)
      .then(res => {
        const { title, text, author, date } = res.data;
        this.setState({
          title,
          text,
          author,
          date
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateArticle(e) {
    const { id } = this.props;
    e.preventDefault();

    axios
      .put(`http://localhost:8081/article/update/${id}`, this.state, {
        headers: {
          token: this.cookies.get("token") || this.cookies.get("access-token")
        }
      })
      .then(res => {
        const { title, text, author, date } = res.data;
        this.setState({
          title,
          text,
          author,
          date
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onHandleTitle(e) {
    this.setState({ title: e.target.value });
  }

  onHandleText(e) {
    this.setState({ text: e.target.value });
  }
  onHandleAuthor(e) {
    this.setState({ author: e.target.value });
  }

  render() {
    const { title, text, author } = this.state;
    return (
      <>
        <form>
          <div className="form-group">
            <label htmlFor="title">Titre</label>
            <input
              type="title"
              id="title"
              value={title}
              onChange={e => this.onHandleTitle(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={e => this.onHandleText(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">author</label>
            <input
              type="author"
              id="author"
              value={author}
              onChange={e => this.onHandleAuthor(e)}
              className="form-control"
            />
          </div>
          <button variant="primary" onClick={e => this.updateArticle(e)}>
            Mettre à jour
          </button>
        </form>
      </>
    );
  }
}
export default connect()(FormUpdateArticle);
