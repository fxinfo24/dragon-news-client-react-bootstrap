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
        <Marquee>
          I can be a React component, multiple React components, or just some
          text. : {user.displayName}
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
                <Nav.Link href="/">Home</Nav.Link>
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


                {/* Conditional: If user logged in, show profile */}
              <Nav>
                {user && 
                  <Nav.Link href="#profile">
                    <FaUserCircle style={{ fontSize: "41px" }}></FaUserCircle>
                  </Nav.Link>
                }

               
                {/* Conditional: If logged in; Show log Out and so */}
                  {user ?<Button variant="secondary">Log Out</Button> :
                  <Link to = '/login'><Button variant="secondary">Login</Button></Link>}
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
