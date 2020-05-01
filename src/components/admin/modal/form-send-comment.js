import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Cookies from "universal-cookie";
import { openModal } from "./actions";

class FormSendComment extends Component {
  constructor() {
    super();

    this.onHandleLastName = this.onHandleLastName.bind(this);
    this.onHandleFirstName = this.onHandleFirstName.bind(this);
    this.onHandleText = this.onHandleText.bind(this);
    this.onHandleScore = this.onHandleScore.bind(this);

    this.cookies = new Cookies();

    this.state = {
      firstname: "",
      lastname: "",
      text: "",
      score: ""
    };
  }

  sendComment(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    axios.post(`http://localhost:8081/avis/create`, this.state).then(res => {
      const { firstname, text, lastname, score } = res.data;
      this.setState({
        firstname,
        lastname,
        text,
        score
      });
      dispatch(openModal(false));
    });
  }

  onHandleLastName(e) {
    this.setState({ lastname: e.target.value });
  }

  onHandleFirstName(e) {
    this.setState({ firstname: e.target.value });
  }
  onHandleText(e) {
    this.setState({ text: e.target.value });
  }
  onHandleScore(e) {
    this.setState({ score: parseInt(e.target.value) });
  }

  render() {
    const { firstname, lastname, text, score } = this.state;
    return (
      <>
        <form>
          <div className="form-group">
            <label htmlFor="lastname">Prénom</label>
            <input
              type="lastname"
              id="lastname"
              value={lastname}
              onChange={e => this.onHandleLastName(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Nom</label>
            <input
              type="firstname"
              id="firstname"
              value={firstname}
              onChange={e => this.onHandleFirstName(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <textarea
              type="text"
              id="text"
              value={text}
              onChange={e => this.onHandleText(e)}
              className="form-control"
            ></textarea>
          </div>
          <div className="form-group">
            <label for="score">Note</label>
            <select
              className="form-control"
              id="score"
              onChange={e => this.onHandleScore(e)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <button variant="primary" onClick={e => this.sendComment(e)}>
            Envoyer commentaire
          </button>
        </form>
      </>
    );
  }
}
export default connect()(FormSendComment);
