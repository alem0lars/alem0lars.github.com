import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

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
    height: "22px"
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

  const items = [
    { name: "gentoo", url: "https://gentoo.org", comp: GentooIcon },
    { name: "xmonad", url: "https://xmonad.org", comp: XMonadIcon },
    { name: "vim", url: "https://vim.org", comp: VimIcon }
  ];

  return (
    <div className={classes.stack}>
      <h5 className={classes.header}>built with:</h5>
      <div className={classes.box}>
        {items.map(item => {
          const Icon = item.comp;
          return (
            <a
              href={item.url}
              key={item.name}
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              <Icon className={classes.svg} />
            </a>
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
