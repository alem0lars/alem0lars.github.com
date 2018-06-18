import React from "react";
import injectSheet from "react-jss";
import { MuiThemeProvider } from "material-ui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getTheme } from "../styles/themes";

import { setFontSizeIncrease, setIsWideScreen } from "../state/store";

import asyncComponent from "../components/common/AsyncComponent/";
import Loading from "../components/common/Loading/";
import Navigator from "../components/Navigator/";
import ActionsBar from "../components/ActionsBar/";
import InfoBar from "../components/InfoBar/";
import GlobalStyles from "../components/GlobalStyles/";

import { isWideScreen, timeoutThrottlerHandler } from "../utils/helpers";

const InfoBox = asyncComponent(
  () =>
    import("../components/InfoBox/")
      .then(module => module)
      .catch(error => {}),
  props => {
    const theme = getTheme(props.themeName);
    return (
      <Loading
        overrides={{
          width: `${theme.info.sizes.width}px`,
          height: "100vh",
          right: "auto"
        }}
        afterRight={true}
      />
    );
  }
);

class Layout extends React.Component {
  timeouts = {};
  categories = [];

  componentDidMount() {
    const theme = getTheme(this.props.themeName);
    this.props.setIsWideScreen(isWideScreen(theme));
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  componentWillMount() {
    if (typeof localStorage !== "undefined") {
      const inLocal = +localStorage.getItem("font-size-increase");

      const inStore = this.props.fontSizeIncrease;

      if (inLocal && inLocal !== inStore && inLocal >= 1 && inLocal <= 1.5) {
        this.props.setFontSizeIncrease(inLocal);
      }
    }

    this.getCategories();
  }

  getCategories = () => {
    this.categories = this.props.data.posts.edges.reduce((list, edge, i) => {
      const category = edge.node.frontmatter.category;
      if (category && !~list.indexOf(category)) {
        return list.concat(edge.node.frontmatter.category);
      } else {
        return list;
      }
    }, []);
  };

  resizeThrottler = () => {
    return timeoutThrottlerHandler(
      this.timeouts,
      "resize",
      500,
      this.resizeHandler
    );
  };

  resizeHandler = () => {
    this.props.setIsWideScreen(isWideScreen(getTheme(this.props.themeName)));
  };

  render() {
    const { children, data, themeName } = this.props;
    const theme = getTheme(themeName);

    return (
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <div
          style={{
            padding: "1px",
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden"
          }}
        >
          {children()}
          <GlobalStyles />
          <Navigator
            posts={data.posts.edges}
            slideshows={data.slideshows.edges}
          />
          <ActionsBar categories={this.categories} />
          <InfoBar pages={data.pages.edges} parts={data.parts.edges} />
          {this.props.isWideScreen && (
            <InfoBox pages={data.pages.edges} parts={data.parts.edges} />
          )}

          <script
            key={`webfontsloader-setup`}
            dangerouslySetInnerHTML={{
              __html: `
              WebFontConfig = {
                google: {
                  families: ["${theme.base.fonts.styledFamily}:${
                theme.base.fonts.styledFonts
              }"]
                }
              };

              (function(d) {
                  var wf = d.createElement('script'), s = d.scripts[0];
                  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
                  wf.async = true;
                  s.parentNode.insertBefore(wf, s);
              })(document);`
            }}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout.propTypes = {
  data: PropTypes.object.isRequired,

  children: PropTypes.func.isRequired,

  isWideScreen: PropTypes.bool.isRequired,
  fontSizeIncrease: PropTypes.number.isRequired,
  themeName: PropTypes.string.isRequired,

  setIsWideScreen: PropTypes.func.isRequired,
  setFontSizeIncrease: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    isWideScreen: state.isWideScreen,
    fontSizeIncrease: state.fontSizeIncrease,
    themeName: state.themeName
  };
};

const mapDispatchToProps = {
  setIsWideScreen,
  setFontSizeIncrease
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet({})(Layout));

// TODO slideshows (sort)
//eslint-disable-next-line no-undef
export const query = graphql`
  query LayoutQuery {
    slideshows: allSlideshowsJson {
      edges {
        node {
          name
          title
          subTitle
          category
        }
      }
    }
    posts: allMarkdownRemark(
      filter: { id: { regex: "//posts//" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            subTitle
            category
            status
            revision
            confidence
            importance
            cover {
              children {
                ... on ImageSharp {
                  resolutions(width: 90, height: 90) {
                    ...GatsbyImageSharpResolutions_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
    pages: allMarkdownRemark(
      filter: { id: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
    parts: allMarkdownRemark(filter: { id: { regex: "//parts//" } }) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
