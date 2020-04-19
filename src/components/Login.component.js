import React, { useState } from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../actions/userAction';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // let history = useHistory();
  // let location = useLocation();
  const dispatch = useDispatch();
  // let { from } = location.state || { from: { pathname: '/' } };

  const loginUser = async () => {
    dispatch(fetchUser({ username: username, password: password }));
    // const url = `${process.env.REACT_APP_APP_DOMAIN}/users/login`;
    // try {
    //   const response = await axios.post(url, {
    //     username: username,
    //     password: password,
    //   });
    //   console.log('response: ' + JSON.stringify(response.data));
    //   history.push(from);
    //   return <Redirect to="/" />;
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <Form onSubmit={loginUser}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default Login;
