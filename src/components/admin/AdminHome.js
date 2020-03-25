import React, { Component } from "react";

import NavbarAdmin from "../admin/NavbarAdmin";
import Footer from "../Footer";
import Articles from "../Articles";
import ListPatient from "../ListPatient";

class AdminHome extends Component {
  render() {
    return (
      <div>
        <NavbarAdmin />
        <div className="container-fluid home-admin" id="conponent-body">
          <div className="row">
            <div className="home-admin-col col-6">
              <h4 className="text-center">A rappeler</h4>
              <ListPatient />
            </div>

            <div className="home-admin-col col-6">
              <h4 className="text-center">Liste articles</h4>
              <Articles limit={0} truncateSize={100} col={6} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AdminHome;
