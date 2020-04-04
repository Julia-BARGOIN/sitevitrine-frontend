import React, { Component } from "react";
import axios from "axios";

import NavbarAdmin from "./NavbarAdmin";
import Footer from "../Footer";

class AdminBlog extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      text: "",
      author: "",
      date: "",
      id: ""
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onClick(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8081/article/create", this.state)
      .then(Response => {
        this.setState({
          title: "",
          text: "",
          author: "",
          date: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { title, text, date, author, id } = this.state;

    return (
      <div>
        <NavbarAdmin />
        <div id="conponent-body" className="container">
          <div className="form-group">
            <label for="exampleInputPassword1">Titre</label>
            <input
              type="text"
              className="form-control"
              name="title"
              defaultValue={title}
              onChange={e => this.onChange(e)}
            />
          </div>
          {/* <div>
          <h4>Insert une image</h4>
          <img src="..." alt="..." className="img-thumbnail" />
        </div> */}
          <div>
            <label htmlFor="text">Text</label>
            <textarea
              type="text"
              name="text"
              rows="17"
              className="form-control"
              defaultValue={text}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date-creation">Date</label>
            <input
              type="date"
              name="date"
              className="form-control"
              defaultValue={date}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="author">Auteur</label>
            <input
              type="text"
              className="form-control"
              name="author"
              defaultValue={author}
              onChange={e => this.onChange(e)}
            />
          </div>
          <div className="d-flex bd-highlight mb-3">
            <button
              type="submit"
              className="btn btn-primary p-2 ml-5 pr-3 pl-3 bd-highlight"
              onClick={e => this.onClick(e)}
            >
              Enregistrer
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminBlog;
