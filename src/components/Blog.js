import React from "react";
import Article from "./Articles";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Blog = () => (
  <div>
    <Navbar />
    <div className="container">
      <h2>Mon blog</h2>
      <Article limit={10} />
    </div>
    <Footer />
  </div>
);

export default Blog;
