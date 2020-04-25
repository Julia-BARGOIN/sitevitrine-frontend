import React, { Component } from "react";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ButtonToolbar } from "react-bootstrap";

const Article = ({ title, text, date, author }) => {
  return (
    <div className="container mt-6">
      <div className="row">
        <div className="col-12">
          <h1 className="display-4" style={{ marginTop: "60px" }}>
            {title}
          </h1>
        </div>
      </div>

      <p className="date">{date} </p>
      <p className="text">{text}</p>
      <p className="author">{author}</p>
    </div>
  );
};

class DetaileArticle extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      date: "",
      text: "",
      author: "",
      title: ""
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    axios.get(`http://localhost:8081/article/${id}`).then(response => {
      const { title, text, date, author, _id } = response.data;
      console.log(response.data);
      this.setState({ title, text, date, author, id: _id });
    });
  }

  render() {
    const { title, text, date, author, id } = this.state;

    return (
      <div>
        <Navbar />
        <Article
          key={id}
          date={date}
          text={text}
          author={author}
          title={title}
        />
        <Footer />
      </div>
    );
  }
}
export default DetaileArticle;
