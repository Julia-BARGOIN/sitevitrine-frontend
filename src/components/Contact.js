import React, { Component } from "react";
import axios from "axios";

// import Alert from "../components/admin/alert/Alert";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      from: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        subject: ""
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      form: {
        [e.target.name]: e.target.value
      }
    });
  }

  onClick(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8081/patient/create", this.state.form)
      .then(response => {
        this.setState({
          // send: true,
          from: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            subject: ""
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { firstname, lastname, email, phone, subject } = this.state;
    const { send } = this.state;

    return (
      <div id={"contact"}>
        {/* {send ? <Alert /> : null} */}
        <div className="container mt-4">
          <form>
            <h2>Prendre contact</h2>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="firstname">Nom</label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  className="form-control"
                  defaultValue={firstname}
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="col">
                <label htmlFor="lastname">Prénom</label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  className="form-control"
                  defaultValue={lastname}
                  onChange={e => this.onChange(e)}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  defaultValue={email}
                  onChange={e => this.onChange(e)}
                />
              </div>
              <div className="col">
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  className="form-control"
                  defaultValue={phone}
                  onChange={e => this.onChange(e)}
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <label htmlFor="text">Subject</label>
                <textarea
                  type="text"
                  name="subject"
                  value={subject}
                  className="form-control"
                  defaultValue={subject}
                  onChange={e => this.onChange(e)}
                />
              </div>
            </div>

            <div className="row mt-3 mb-3">
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={e => this.onClick(e)}
              >
                Envoyer ma demande
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
