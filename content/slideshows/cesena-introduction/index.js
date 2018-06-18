import React from "react";
import {
  Appear,
  Fill,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Layout,
  Image,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = {
  dancingLeo: require("./dancingLeo.gif"),
  gatsbyMovie: require("./gatsbyMovie.jpg"),
  graphql: require("./graphql.png"),
  howGorgeous: require("./howGorgeous.gif"),
  pwa: require("./pwa.png"),
  react: require("./react.png"),
  thanks: require("./thanks.gif"),
  webpack: require("./webpack.png"),
  whoIsGatsby: require("./whoIsGatsby.gif")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck>
        <Slide>
          <Heading>The great Gatsby.js</Heading>
          <Text>changing the static-site generation game</Text>
        </Slide>
        <Slide>
          <Heading>Slide numero 2</Heading>
          <Text>This is the slide number 2</Text>
        </Slide>
      </Deck>
    );
  }
}
