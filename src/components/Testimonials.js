import React, { Component } from "react";
import axios from "axios";

class Avis extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }
  componentDidMount() {
    axios
      .post("http://localhost:8081/avis/show", { limit: 3 })
      .then(response => {
        this.setState({ items: response.data });
      });
  }

  render() {
    const { items } = this.state;

    return (
      <div id={"testimonials"} className="contact">
        <h2 className="title mb-5">Témoignages</h2>
        <div className="container">
          <div className="row mb-4">
            {items.map(avis => {
              const { firtname, lastname, text } = avis;

              return (
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        {firtname} {lastname}
                      </h3>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Avis;
