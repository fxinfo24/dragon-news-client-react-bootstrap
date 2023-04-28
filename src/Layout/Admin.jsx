import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Header></Header>
      {/* Layout responsive grid from React-Bootstrap */}
      <Container>
        <Row>
          <Col lg={3}>
          <LeftNav></LeftNav>
          </Col>
          {/* <Col lg={6}>Main Content</Col> */}
          <Col lg={6}><Outlet></Outlet></Col>
          <Col lg={3}>
          <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Admin;
