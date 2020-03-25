import React from "react";

const FooterAdmin = () => {
  return (
    <footer className="main-footer">
      <div className="container main-footer-content">
        <div>
          <Link to="">
            <img
              src={require("../img/icon/fb-icon.svg")}
              className="icon-social"
            />
          </Link>
          <Link to="">
            <img
              src={require("../img/icon/insta-icon.svg")}
              className="icon-social"
            />
          </Link>
        </div>
        <p>
          <Link to="">Accueil</Link>
        </p>
        <p>
          <Link to="">Rendez-vous</Link>
        </p>
        <p>
          <Link to="">Article</Link>
        </p>
        <p>
          <Link to="">Avis</Link>
        </p>
        <button>
          <Link to="/">Site public</Link>
        </button>
      </div>
    </footer>
  );
};

export default FooterAdmin;
