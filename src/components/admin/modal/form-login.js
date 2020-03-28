import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { loged, logout } from "../../session/actions";

const RedirectLogin = isLoged =>
  isLoged ? <Redirect to="/adminhome" /> : null;

class FormLogin extends Component {
  constructor() {
    super();

    this.onHandleEmail = this.onHandleEmail.bind(this);
    this.onHandlePassword = this.onHandlePassword.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }
  /**
   * login
   */
  login(e) {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    e.preventDefault();

    axios
      .post("http://localhost:8081/oauth", {
        email,
        password
      })
      .then(response => {
        this.onHandleClose();
        dispatch(loged());
      })
      .catch(error => {
        dispatch(logout());
      });
  }

  onHandleEmail(e) {
    this.setState({ email: e.target.value });
  }

  onHandlePassword(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <form>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => this.onHandleEmail(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => this.onHandlePassword(e)}
              className="form-control"
            />
          </div>
          <button variant="primary" onClick={e => this.login(e)}>
            Singin
          </button>
        </form>
        <RedirectLogin />
      </>
    );
  }
}
export default FormLogin;
