import React from "react";
import injectSheet from "react-jss";
import { forceCheck } from "react-lazyload";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import Tabs from "material-ui/Tabs/Tabs";
import Tab from "material-ui/Tabs/Tab";

import { setNavigatorActiveTabIndex } from "../../state/store";
import ListHeader from "./ListHeader";
import SpringScrollbars from "../SpringScrollbars";
import ListItem from "./ListItem";

const styles = theme => ({
  posts: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "100%"
  },
  inner: {
    padding: `calc(${theme.bars.sizes.infoBar}px + 1.3rem) 1.3rem calc(${
      theme.bars.sizes.actionsBar
    }px + 1.3rem) 1.3rem`,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(${theme.bars.sizes.infoBar}px + 2rem) 2rem calc(${
        theme.bars.sizes.actionsBar
      }px + 2rem) 2rem`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: `2rem  calc(1rem + 17px) calc(2rem + 17px) 2rem`,
      left: `${theme.info.sizes.width}px`,
      ".moving-featured &, .is-aside &": {
        padding: "1rem .5rem 1rem .5rem"
      }
    }
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    ".is-aside.closed &, .moving-featured.closed &": {
      display: "none"
    }
  }
});

class List extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryFilter !== this.props.categoryFilter) {
      setTimeout(forceCheck, 300);
    }
  }

  handleNavigatorActiveTabChange = (event, value) => {
    this.props.setNavigatorActiveTabIndex(value);
  };

  render() {
    const {
      posts,
      slideshows,
      linkOnClick,
      expandOnClick,
      categoryFilter,
      navigatorShape,
      removeFilter,

      classes,

      navigatorActiveTabIndex
    } = this.props;

    const elements =
      navigatorActiveTabIndex == 0
        ? posts.map(post => ({
            title: post.node.frontmatter.title,
            subTitle: post.node.frontmatter.subTitle,
            category: post.node.frontmatter.category,
            slug: post.node.fields.slug,
            coverSrc: post.node.frontmatter.cover.children[0].resolutions.src
          }))
        : navigatorActiveTabIndex == 1
          ? slideshows.map(slideshow => ({
              title: slideshow.node.title,
              subTitle: slideshow.node.subTitle,
              category: slideshow.node.category,
              slug: `/slideshows/${slideshow.node.name}`,
              coverSrc: `/slideshows/${slideshow.node.name}/cover.jpg`
            }))
          : [];

    return (
      <div className={classes.posts}>
        <SpringScrollbars forceCheckOnScroll={true} isNavigator={true}>
          <div className={classes.inner}>
            <ListHeader
              expandOnClick={expandOnClick}
              categoryFilter={categoryFilter}
              navigatorShape={navigatorShape}
              removeFilter={removeFilter}
            />

            <div className={classes.list}>
              <Tabs
                value={navigatorActiveTabIndex}
                onChange={this.handleNavigatorActiveTabChange}
              >
                <Tab label="Posts" />
                <Tab label="Slideshows" />
              </Tabs>

              <ul>
                {elements &&
                  elements.map((element, i) => (
                    <ListItem
                      key={i}
                      element={element}
                      linkOnClick={linkOnClick}
                      categoryFilter={categoryFilter}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </SpringScrollbars>
      </div>
    );
  }
}

List.propTypes = {
  posts: PropTypes.array.isRequired,
  slideshows: PropTypes.array.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  linkOnClick: PropTypes.func.isRequired,
  expandOnClick: PropTypes.func.isRequired,
  categoryFilter: PropTypes.string.isRequired,
  removeFilter: PropTypes.func.isRequired,

  classes: PropTypes.object.isRequired,

  navigatorActiveTabIndex: PropTypes.number.isRequired,

  setNavigatorActiveTabIndex: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  navigatorActiveTabIndex: state.navigatorActiveTabIndex
});

const mapDispatchToProps = {
  setNavigatorActiveTabIndex
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(List));
