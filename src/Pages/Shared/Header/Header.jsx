import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../ContextProvider/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  // Access Context
  const { user } = useContext(AuthContext);

  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        {/* Install moment for Date-time from momentjs */}
        <p>{moment().format("dddd MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex bg-secondary">
        {/* Button from React-bootstrap */}
        <Button variant="danger">Latest</Button>{" "}
        {/* Install Marquee from 'react-fast-marquee' */}
        <Marquee className="text-white" speed = {150}>
          I can be a React component, multiple React components, or just some
          {/* text. : {user.displayName} */}
        </Marquee>
      </div>
      {/* Navbar from react-bootstrap */}
      {/* Moved to NavigationBar component */}
      
    </Container>
  );
};

export default Header;
