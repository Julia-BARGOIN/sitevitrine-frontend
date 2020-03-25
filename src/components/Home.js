import React from "react";

import Prix from "./Prix";
import Articles from "./Articles";
import Presentation from "./Presentation";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-top">
        <div className="home-top-text container">
          <h1 className="display-5 title-home-top">
            L'aromathérapie au service de votre santé
          </h1>
          <p className="lead">
            Réservez votre première consultation dès aujourd'hui
          </p>
          <button className="btn btn-primary btn-lg px-4 py-3 mt-3">
            Pendre RDV
          </button>
        </div>
      </div>
      <Presentation />
      <Prix />
      <Testimonials />
      <h1 className="text-center mt-4 mb-5">Articles</h1>
      <Articles limit={3} truncateSize={50} col={4} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
