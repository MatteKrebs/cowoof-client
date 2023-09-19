import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosInstance } from "../utilities/api";
import { AuthContext } from '../context/auth.context';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic input validation
    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');

    // Send login request to your API
    // Assuming successful login redirects to '/profile'
    // Replace with your actual login logic
    axiosInstance.post('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = '/profile'; // Programmatically navigate to the profile page
        } else {
          // Handle invalid login credentials
          setError('Invalid email or password. Please try again.');
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error);
        setError('An error occurred while logging in. Please try again later.');
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;