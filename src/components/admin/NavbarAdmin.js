import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavbarAdmin = props => {
  return (
    <div className="menu">
      <nav className="container navbar navbar-expand-md navbar-light">
        <Link to="/" className="navbar-brand">
          Pronfondément Essentielle
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/AdminHome" className="nav-link">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AdminBlog" className="nav-link">
                Articles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAdmin;
