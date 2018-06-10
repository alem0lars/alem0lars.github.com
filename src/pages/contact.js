import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import { contactEmail } from "../../config/meta";

const styles = theme => ({});

const Contact = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="Contact" />
        <Content>
          Feel free to contact me by email: <Obfuscate email={contactEmail} />{" "}
          or use the form below.
        </Content>
        <Form />
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
