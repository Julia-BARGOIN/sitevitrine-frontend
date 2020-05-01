import React, { Component } from "react";
import { connect } from "react-redux";

import { Modal } from "react-bootstrap";
import { openModal } from "./actions/";
import FormLogin from "./form-login";
import FormUpdateArticle from "./form-update-article";
import FormSendComment from "./form-send-comment";

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

  switchFrom(form, id) {
    switch (form) {
      case "article-update":
        return <FormUpdateArticle id={id} />;
      case "send-comment":
        return <FormSendComment />;
      default:
        return <FormLogin />;
    }
  }

  render() {
    const { open, form, id } = this.props;

    return (
      <Modal show={open} onHide={this.onHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion administrateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.switchFrom(form, id)}</Modal.Body>
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
  const { open, form, id } = state.modal;

  return { open, form, id };
};

export default connect(mapToProps)(ModalAdmin);
