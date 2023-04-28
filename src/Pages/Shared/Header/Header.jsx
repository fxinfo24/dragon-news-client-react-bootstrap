import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
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
        <Marquee>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      {/* Navbar from react-bootstrap */}
      <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
            <Button variant="secondary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </Container>
  );
};

export default Header;
