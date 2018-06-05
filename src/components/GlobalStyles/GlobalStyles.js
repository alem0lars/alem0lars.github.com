import React from "react";
import { connect } from "react-redux";
import injectSheet from "react-jss";

import globalStyles from "../../styles/global-styles";

/**
 * XXX Hackish way to set global styles. I didn't find a way to set them inside
 *     the layout.
 */
class GlobalStyles extends React.Component {
  render() {
    return <div style={{ display: "none" }} />;
  }
}

GlobalStyles.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(globalStyles)(GlobalStyles));
