import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Tooltip from "material-ui/Tooltip";

import config from "../../../content/meta/config";

import { ReactComponent as GentooIcon } from "../../images/svg-icons/gentoo.svg";
import { ReactComponent as XMonadIcon } from "../../images/svg-icons/xmonad.svg";
import { ReactComponent as VimIcon } from "../../images/svg-icons/vim.svg";

const styles = theme => ({
  stack: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "1em 2em"
    }
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "8px"
  },
  svg: {
    width: "22px",
    height: "22px",
    pointerEvents: "none"
  },
  header: {
    textAlign: "center",
    fontSize: ".85em",
    letterSpacing: ".3em",
    width: "100%",
    margin: "0 0 .8em 0",
    fontWeight: 300
  }
});

const StackIcons = props => {
  const { classes } = props;

  const items = config.builtWith;
  const icons = {
    gentoo: GentooIcon,
    xmonad: XMonadIcon,
    vim: VimIcon
  };

  return (
    <div className={classes.stack}>
      <h5 className={classes.header}>built with:</h5>
      <div className={classes.box}>
        {items.map(item => {
          const Icon = icons[item.name];
          return (
            <Tooltip title={item.title} key={item.name}>
              <a
                href={item.url}
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={classes.svg} />
              </a>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);
