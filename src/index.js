import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducers";

import App from "./components/App";

import "./css/index.css";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk)
    // window.devToolsExtension && window.devToolsExtension()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
