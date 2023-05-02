import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { AuthContext } from '../../../ContextProvider/AuthProvider';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const { createUser } = useContext(AuthContext);


  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Optional
    // const form = event.target;
    // const name = form.userName.value;
    // const email = form.email.value;
    // const photo = form.photoURL.value;
    // const password = form.pass.value;
    // const confirmPass = form.confirmPass.value;
    console.log(name, email, password, /*confirmPass*/);


    // Regex for password validation
    const passwordRegex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
    if (!passwordRegex.test(password)) {
      alert('Password is not valid!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle form submission logic here
    createUser(email, password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
    })
    .catch(err => {
        console.log(err);
    });
    console.log('Form submitted successfully!');
  };

  // Handle terms of service check box
  const [accept, setAccept] = useState(false)
  const handleCheckTerms = (event) =>{
    console.log(event.target.checked);
    setAccept(event.target.checked);
  }

  return (
    <Container className='w-25 mx-auto'>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name='userName'
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPhotoURL">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          type="text"
          name='photoURL'
          placeholder="Enter photo URL"
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name='email'
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name='pass'
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name='confirmPass'
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="acceptTerms">
        <Form.Check
          onClick={handleCheckTerms}
          type="checkbox"
          name='acceptTerms'
          label= {<>Accept <Link to = '/terms'>Terms & Conditions</Link></>}
          checked={acceptTerms}
          onChange={(event) => setAcceptTerms(event.target.checked)}
          required
        />
      </Form.Group>

      <Button 
      disabled = {!accept}
      variant="primary" 
      type="submit">
        Register
      </Button>

      <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
    </Form>
    </Container>
  );
};

export default RegistrationForm;
