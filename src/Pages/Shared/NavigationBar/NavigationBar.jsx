import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      {/* Navbar from react-bootstrap */}
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Link className="text-decoration-none mt-2" to="/category/0">
                  Home
                </Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#career">Career</Nav.Link>
              </Nav>

              {/* Conditional: If user logged in, show profile */}
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "41px" }}></FaUserCircle>
                )}

                {/* Conditional: If logged in; Show log Out and so */}
                {user ? (
                  <Button variant="secondary">Log Out</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default NavigationBar;
