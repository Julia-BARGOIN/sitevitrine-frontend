import React, { Component } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const Patient = ({ firstname, lastname, email, phone, subject }) => {
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{subject}</td>
    </tr>
  );
};

class ListPatient extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };

    this.cookies = new Cookies();
  }

  componentDidMount() {
    axios
      .get("http://localhost:8081/patient/show", {
        headers: {
          token: this.cookies.get("token") || this.cookies.get("access-token")
        }
      })
      .then(res => {
        const items = res.data;

        this.setState({ items });
      });
  }

  render() {
    const { items } = this.state;

    return (
      <table className="table table-sm">
        <thead className="table-primary">
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Email</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Sujet</th>
          </tr>
        </thead>
        <tbody>
          {items.map(patient => (
            <Patient
              key={patient._id}
              firstname={patient.firstname}
              lastname={patient.lastname}
              email={patient.email}
              phone={patient.phone}
              subject={patient.subject}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default ListPatient;
