import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import createStore from "./src/state/store";

// Remove the JSS style tag generated on the server to avoid conflicts with the
// one added on the client
exports.onInitialClientRender = function() {
  // eslint-disable-next-line no-undef
  const serverSideStyle = window.document.getElementById("server-side-jss");
  if (serverSideStyle) {
    serverSideStyle.parentNode.removeChild(serverSideStyle);
  }
};

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore();

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  ConnectedRouterWrapper.propTypes = {
    children: PropTypes.object.isRequired
  };

  return ConnectedRouterWrapper;
};
