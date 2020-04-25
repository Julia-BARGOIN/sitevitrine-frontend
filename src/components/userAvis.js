import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class userAvis extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      text: ""
    };
  }
  onClick(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8081/avis/create", this.state, {})
      .then(Response => {
        this.setState({
          firstname: "",
          lastname: "",
          text: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { firstname, text, lastname } = this.state;

    return (
      <form>
        <div className="form-group">
          <label htmlFor="firstname">Nom</label>
          <input
            type="firstname"
            id="firstname"
            value={firstname}
            onChange={e => this.onHandleTitle(e)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Prénom</label>
          <input
            type="lastname"
            id="lastname"
            value={lastname}
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

        <button
          type="submit"
          className="btn btn-primary p-2 ml-5 pr-3 pl-3 bd-highlight"
          onClick={e => this.onClick(e)}
        >
          Enregistrer
        </button>
      </form>
    );
  }
}

export default connect()(userAvis);
