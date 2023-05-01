import { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/AuthProvider";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logInUser } = useContext(AuthContext)

//   Send user to specific route after successfully login
const Navigate = useNavigate();
  

  const handleLogin = (event) => {
    event.preventDefault();

    // Optional:
    // const form = event.target;
    // const email = form.email.value;
    // const password = form.password.value;
    console.log(email, password);

    // Handle form submission logic here
    logInUser(email, password)
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        Navigate('/category/1')
      })
      .catch(err => {
        console.log(err);
      });

  };

  return (
    <Container className="w-25 mx-auto">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <br />
        <Form.Text className="text-secondary">
          Don't Have an Account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
}

export default LoginForm;
