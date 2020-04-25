import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
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

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Accueil
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/#consultations" className="nav-link">
                Consultations
              </Link>
            </li>

            {/* {!isLoged && ( */}
            <li className="nav-item">
              <Link to="/#testimonials" className="nav-link">
                Témoignages
              </Link>
            </li>
            {/* )} */}

            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/#contact" className="nav-link">
                Prendre contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                Ton avis
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
