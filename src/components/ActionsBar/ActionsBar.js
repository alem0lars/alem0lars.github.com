import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import IconButton from "material-ui/IconButton";
import Tooltip from "material-ui/Tooltip";

import Link from "gatsby-link";
import { connect } from "react-redux";
import screenfull from "screenfull";

import HomeIcon from "material-ui-icons/Home";
import SearchIcon from "material-ui-icons/Search";
import ArrowUpwardIcon from "material-ui-icons/ArrowUpward";
import FullscreenIcon from "material-ui-icons/Fullscreen";
import FullscreenExitIcon from "material-ui-icons/FullscreenExit";
import BrightnessLowIcon from "material-ui-icons/BrightnessLow";

import { getNextThemeName } from "../../styles/themes";

import {
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop,
  setFontSizeIncrease,
  setCategoryFilter,
  setTheme
} from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";
import FontSetter from "./FontSetter";
import CategoryFilter from "./CategoryFilter";

const styles = theme => ({
  actionsBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    left: 0,
    //top: `calc(100vh - ${theme.bars.sizes.actionsBar}px)`,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    padding: `0 ${theme.base.sizes.linesMargin}`,
    justifyContent: "space-between",
    height: `${theme.bars.sizes.actionsBar}px`,
    width: "100%",
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.base.sizes.linesMargin,
      right: theme.base.sizes.linesMargin,
      height: 0,
      top: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `0 calc(${theme.base.sizes.linesMargin} * 1.5)`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column",
      top: 0,
      right: 0,
      left: "auto",
      height: "100%",
      padding: `${theme.base.sizes.linesMargin} 0`,
      width: `${theme.bars.sizes.actionsBar}px`,
      "&::before": {
        top: theme.base.sizes.linesMargin,
        bottom: theme.base.sizes.linesMargin,
        left: 0,
        right: "auto",
        width: 0,
        height: "auto",
        borderLeft: `1px solid ${theme.base.colors.lines}`
      }
    }
  },
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column"
    }
  },
  button: {
    color: theme.bars.colors.icon
  }
});

class ActionsBar extends React.Component {
  state = {
    fullscreen: false
  };

  componentDidMount() {
    if (screenfull.enabled) {
      screenfull.on("change", () => {
        this.setState({
          fullscreen: screenfull.isFullscreen
        });
      });
    }
  }

  homeOnClick = featureNavigator.bind(this);
  searchOnClick = moveNavigatorAside.bind(this);

  fullscreenOnClick = () => {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  };

  arrowUpOnClick = () => {
    this.props.setScrollToTop(true);
  };

  fontSetterOnClick = val => {
    this.props.setFontSizeIncrease(val);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("font-size-increase", val);
    }
  };

  categoryFilterOnClick = val => {
    this.props.setCategoryFilter(val);
  };

  changeThemeOnClick = val => {
    this.props.setTheme(getNextThemeName(this.props.themeName));
  };

  render() {
    const {
      classes,
      navigatorPosition,
      navigatorShape,
      isWideScreen,
      categories
    } = this.props;

    return (
      <div className={classes.actionsBar}>
        <div className={classes.group}>
          <Tooltip title="Back to Home" placement="left">
            <IconButton
              aria-label="Back to Home"
              onClick={this.homeOnClick}
              className={classes.button}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>

          {((isWideScreen && navigatorShape === "open") ||
            navigatorPosition !== "is-aside") && (
            <Tooltip title="Filter Categories" placement="left">
              <CategoryFilter
                categories={categories}
                filterCategory={this.categoryFilterOnClick}
              />
            </Tooltip>
          )}

          <Tooltip title="Search" placement="left">
            <IconButton
              aria-label="Search"
              onClick={this.searchOnClick}
              component={Link}
              data-shape="closed"
              to="/search/"
              className={classes.button}
            >
              <SearchIcon className={classes.button} />
            </IconButton>
          </Tooltip>
        </div>

        <div className={classes.group}>
          {navigatorPosition === "is-aside" && (
            <FontSetter increaseFont={this.fontSetterOnClick} />
          )}

          <Tooltip title="Change Theme" placement="left">
            <IconButton
              aria-label="Change Theme"
              onClick={this.changeThemeOnClick}
            >
              <BrightnessLowIcon className={classes.button} />
            </IconButton>
          </Tooltip>

          {screenfull.enabled && (
            <Tooltip title="Fullscreen Mode" placement="left">
              <IconButton
                aria-label="Fullscreen"
                onClick={this.fullscreenOnClick}
                className={classes.button}
              >
                {this.state.fullscreen ? (
                  <FullscreenExitIcon />
                ) : (
                  <FullscreenIcon />
                )}
              </IconButton>
            </Tooltip>
          )}

          <Tooltip title="Scroll to Top" placement="left">
            <IconButton aria-label="Back to Top" onClick={this.arrowUpOnClick}>
              <ArrowUpwardIcon className={classes.button} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  }
}

ActionsBar.propTypes = {
  classes: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
  setScrollToTop: PropTypes.func.isRequired,
  setFontSizeIncrease: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  setCategoryFilter: PropTypes.func.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    isWideScreen: state.isWideScreen,
    categoryFilter: state.categoryFilter,
    themeName: state.themeName
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop,
  setFontSizeIncrease,
  setCategoryFilter,
  setTheme
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(ActionsBar));
