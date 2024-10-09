import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://172.16.16.25:8080/Register', {
      name: name,
      email: email,
      password: password
    })
    .then(response => {
      setMessage(response.data);
      alert(response.data);
      navigate('/');
    })
    .catch(error => {
      console.log(error.response?.data)
      setMessage("Error registering user. Please try again."); // Capture the error message from the API
    });
  };

  return (
    <div className='login-background'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
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
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ color: message.startsWith("Error") ? 'red' : 'green' }}>{message}</p>} {/* Display message */}
    </div>
  );
};

export default Register;
