import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Cookies from "universal-cookie";

import Home from "../components/Home";
import AdminHome from "../components/admin/AdminHome";
import Blog from "../components/Blog";
import NotFound from "./NotFound";
import AdminBlog from "../components/admin/AdminBlog";
import { loged } from "./session/actions";

const PrivateAdmin = ({ isLoged, path, ReactComponent }) => (
  <Route
    path={path}
    render={() => {
      if (isLoged) {
        return <ReactComponent />;
      }

      return <Home />;
    }}
  />
);

const IsLoged = ({ dispatch }) => {
  const cookies = new Cookies();
  const isLoged = cookies.get("isLoged");
  const token = cookies.get("token");

  if (isLoged && token) {
    dispatch(loged(token));
  }
  return null;
};

const App = ({ isLoged, dispatch }) => {
  return (
    <div>
      <IsLoged dispatch={dispatch} />
      <Switch>
        <PrivateAdmin
          isLoged={isLoged}
          path="/adminhome"
          ReactComponent={AdminHome}
        />
        <PrivateAdmin
          isLoged={isLoged}
          path="/adminblog"
          ReactComponent={AdminBlog}
        />
        <Route path="/blog" component={Blog} />
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

const mapToProps = state => {
  const { isLoged } = state.session;

  return { isLoged };
};

export default connect(mapToProps)(App);
