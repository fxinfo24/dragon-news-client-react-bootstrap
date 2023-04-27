import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";

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
    </div>
  );
};

export default RightNav;
