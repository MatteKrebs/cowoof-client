import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authMethods from '../services/auth.services';

function LoginPage() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userEmail || !password) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');

    authMethods
      .logIn({ username: userEmail, password })
      .then((data) => {
        console.log('Logged in:', data);
        navigate('/profile');
      })
      .catch((err) => {
        setError('Invalid credentials. Please try again.');
        console.error(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-1/2 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userEmail}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <button
              type="submit"
              className="w-1/2 bg-green-300 text-white py-2 rounded-lg hover:bg-green-400"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;