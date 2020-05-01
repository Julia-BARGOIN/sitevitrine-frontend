import React, { Component } from "react";
import axios from "axios";

const Test = ({ avis }) => {
  const { firstname, lastname, text } = avis;
  return (
    <div id={"testimonials"} className="contact">
      <h2 className="title mb-5">Témoignages</h2>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  {firstname} {lastname}
                </h3>
              </div>
              <div className="card-body">
                <p className="card-text">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
class Test extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    axios.post("http://localhost:8081/avis/show").then(response => {
      this.setState({ avis: response.data });
    });
  }

  render() {
    return (
      <div className="container">
        <Testimonial avis={avis} />
      </div>
    );
  }
}

export default Test;
