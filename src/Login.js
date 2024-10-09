import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import voltalogo from './images/voltalogo.jpeg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://172.16.16.25:8080/Login', {
      email: email,
      password: password
    })
    .then(response => {
      alert(response.data);
      setIsLoggedIn(true);
      // You can store the authentication token or handle redirect
      // localStorage.setItem('token', response.data.token);
      // axios.get('/api/protected', {
      //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      // });
    })
    .catch(error => {
      console.error(error);
      setErrorMessage("Invalid credentials. Please try again.");
    });
  };

  return (
    <div className='login-background'>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              placeholder='name'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {/* <p><Link to="/xyz">forgot password?</Link></p> */}
          <p>Are you a registered customer?
            <Link to="/registration">register</Link>
          </p>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      ) : (
        <div>
          <h1>welcome back</h1>
          <img src={voltalogo} alt="Success" />
        </div>
      )}
    </div>
  );
};

export default Login;
