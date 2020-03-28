import React, { Component } from "react";
import { connect } from "react-redux";

import { Modal } from "react-bootstrap";
import { openModal } from "./actions/";
import FormLogin from "./form-login";
class ModalAdmin extends Component {
  constructor() {
    super();

    this.onHandleClose = this.onHandleClose.bind(this);
    this.onHandleShow = this.onHandleShow.bind(this);
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

  render() {
    const { open } = this.props;

    return (
      <Modal show={open} onHide={this.onHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion administrateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLogin />
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
