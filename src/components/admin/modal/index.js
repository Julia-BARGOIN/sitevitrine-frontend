import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

import { Modal } from "react-bootstrap";
import { openModal } from "./actions/";
import { loged, logout } from "../../session/actions";

const RedirectLogin = isLoged =>
  isLoged ? <Redirect to="/adminhome" /> : null;

class ModalAdmin extends Component {
  constructor() {
    super();

    this.onHandleEmail = this.onHandleEmail.bind(this);
    this.onHandlePassword = this.onHandlePassword.bind(this);
    this.onHandleClose = this.onHandleClose.bind(this);
    this.onHandleShow = this.onHandleShow.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  /**
   * on handle close
   */
  onHandleClose() {
    const { dispatch } = this.props;

    dispatch(openModal(false));

    return;
  }

  /**
   * on handle show
   */
  onHandleShow() {
    const { dispatch } = this.props;

    dispatch(openModal(true));

    return;
  }

  onHandleEmail(e) {
    console.log(this.state);
    this.setState({ email: e.target.value });
  }

  onHandlePassword(e) {
    console.log(this.state);
    this.setState({ password: e.target.value });
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

  render() {
    const { email, password } = this.state;
    const { open } = this.props;

    return (
      <Modal show={open} onHide={this.onHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion administrateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={this.onHandleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapToProps = state => {
  const { open } = state.modal;

  return { open };
};

export default connect(mapToProps)(ModalAdmin);
