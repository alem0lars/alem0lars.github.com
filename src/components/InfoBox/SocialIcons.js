import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Tooltip from "material-ui/Tooltip";

import { authorSocialLinks } from "../../../config/meta";

import { ReactComponent as GithubIcon } from "../../images/svg-icons/github.svg";
import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/svg-icons/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../../images/svg-icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../images/svg-icons/instagram.svg";

const styles = theme => ({
  social: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "5px",
    "&:hover": {
      "& svg": {
        fill: theme.info.colors.socialIconsHover
      }
    }
  },
  svg: {
    width: "30px",
    height: "30px",
    fill: theme.info.colors.socialIcons,
    transition: "all .5s",
    pointerEvents: "none"
  }
});

const Socialcons = props => {
  const { classes } = props;
  const items = authorSocialLinks;
  const icons = {
    twitter: TwitterIcon,
    facebook: FacebookIcon,
    github: GithubIcon,
    linkedin: LinkedinIcon,
    instagram: InstagramIcon
  };

  return (
    <div className={classes.social}>
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
  );
};

Socialcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Socialcons);
