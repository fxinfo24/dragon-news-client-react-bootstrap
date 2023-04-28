import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import BG from '../../../assets/bg.png'

const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      {/* Button React-bootstrap and install React Icon from react.icons for google, github icon */}
      <Button className="mb-2" variant="outline-secondary">
        <FaGoogle /> Login With Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login With Github
      </Button>
      <h4>Find Us On</h4>
      <ListGroup>
      <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
    </ListGroup>
    <QZone></QZone>
    <div className='mt-4'>
                <img src={BG} alt="" />
            </div>
    </div>
  );
};

export default RightNav;
