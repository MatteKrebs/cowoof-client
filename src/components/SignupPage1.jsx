//import { axiosInstance } from '../utilities/api';
import React, { useState } from 'react';


const SignupPage1 = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return;
    }
console.log(userName)

// axiosInstance.post('/auth/signup', {
//     userName,
//     userEmail,
//     password
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
// //change error 
//     console.log(error);
//     alert("Sorry, you have not been registered, try again!")
//   });

    setUserName('');
    setUserEmail('');
    setPassword('');
    setConfirmPassword('');
    setPasswordMatchError('');
  };

  return (

    <div className="flex justify-center items-center h-screen">
    <div className="signup-container bg-white rounded-lg p-6 border border-gray-300 shadow-lg w-1/2">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={userName}
            onChange={handleNameChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@email.com"
            value={userEmail}
            onChange={handleEmailChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-600"
          >
            Re-enter Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            required
          />
          {passwordMatchError && (
            <p className="text-red-600 text-sm mt-2">{passwordMatchError}</p>
          )}
        </div>
        <input
          value="Next"
          type="submit"
          className="w-full bg-green-300 text-black py-2 rounded-md hover:bg-opacity-80"
        />
      </form>
    </div>
    </div>
  );
};

export default SignupPage1;