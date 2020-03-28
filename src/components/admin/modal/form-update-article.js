import React, { Component } from "react";
import axios from "axios";

class FormUpdateArticle extends Component {
  constructor() {
    super();

    this.onHandleTitle = this.onHandleTitle.bind(this);
    this.onHandleText = this.onHandleText.bind(this);
    this.onHandleAuthor = this.onHandleAuthor.bind(this);

    this.state = {
      title: "",
      text: "",
      author: ""
    };
  }
  /**
   * login
   */
  // login(e) {
  //   const { dispatch } = this.props;
  //   const { title, text, author } = this.state;

  //   e.preventDefault();

  //   axios
  //     .post("http://localhost:8081/oauth", {
  //       email,
  //       password
  //     })
  //     .then(response => {
  //       this.onHandleClose();
  //       dispatch(loged());
  //     })
  //     .catch(error => {
  //       dispatch(logout());
  //     });
  //   }
  updateArticle(e) {
    e.preventDefault();

    axios
      .put("http://localhost:8081/article/update/${_id}", this.state)
      .then(Response => {
        this.setState({
          title: "",
          text: "",
          author: ""
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
            Singin
          </button>
        </form>
        <RedirectLogin />
      </>
    );
  }
}
export default FormUpdateArticle;
