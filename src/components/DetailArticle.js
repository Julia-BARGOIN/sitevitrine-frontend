import React, { Component } from "react";
import axios from "axios";

const Article = ({ title, text, date, author }) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
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
      <Article key={id} date={date} text={text} author={author} title={title} />
    );
  }
}
export default DetaileArticle;
