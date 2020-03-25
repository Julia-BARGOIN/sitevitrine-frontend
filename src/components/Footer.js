import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "./admin/modal/actions/";
import Modal from "./admin/modal/";
import { logout } from "../components/session/actions";

const Footer = ({ dispatch, isLogeg }) => {
  return (
    <footer className="main-footer">
      <Modal />
      <div className="container main-footer-content">
        <div>
          <Link to="">
            <img
              src={require("../img/icon/fb-icon.svg")}
              className="icon-social"
              alt="facebook"
            />
          </Link>
          <Link to="">
            <img
              src={require("../img/icon/insta-icon.svg")}
              className="icon-social"
              alt="instagram"
            />
          </Link>
        </div>

        <p>
          <Link to="/">Accueil</Link>
        </p>
        <p>
          <Link to={{ pathname: "/", hash: "#consultations" }}>
            Consultations
          </Link>
        </p>
        <p>
          <Link to="/testimonials">Témoignages</Link>
        </p>
        <p>
          <Link to="/blog">Blog</Link>
        </p>
        <p>
          <Link to="/contact">Contact</Link>
        </p>
        <p>
          {!isLogeg ? (
            <button to="/admin" onClick={() => dispatch(openModal(true))}>
              Administrateur
            </button>
          ) : null}
        </p>
      </div>
    </footer>
  );
};

const mapToProps = state => {
  const { isLogeg } = state.session;
  return { isLogeg };
};

export default connect(mapToProps)(Footer);
