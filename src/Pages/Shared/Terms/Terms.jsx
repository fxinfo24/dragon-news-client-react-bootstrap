import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h3>Terms and conditions of use</h3>
      <p>
        Welcome to our digital information network. These are our terms and
        conditions for use of the network, which you may access in several ways,
        including but not limited to the World Wide Web via dragon news,
        digital television, PDA, mobile phone and RSS feeds. In these terms and
        conditions, when we say the "Guardian Site" we mean the digital
        information network operated by or on behalf of Guardian News & Media
        Limited or its parent companies, subsidiaries and affiliates
        collectively "Guardian", regardless of how you access the network, as
        well as any Guardian apps whether you access those via a Guardian Site
        or a third party site. However you access the Guardian Site, you agree
        to be bound by these terms and conditions. If you have accessed the
        Guardian Site from the United States or Australia, you also agree to be
        bound by additional terms contained at the end of these terms and
        conditions.
      </p>
      <p>Go back to <Link to = '/register'>Register</Link></p>
    </Container>
  );
};

export default Terms;
