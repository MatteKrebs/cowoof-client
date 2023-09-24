import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authMethods from '../services/auth.services';
import { useAuth } from '../hooks/useAuth';

const SignupCombined = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [locationCountry, setLocationCountry] = useState('');
  const [locationCity, setLocationCity] = useState('');
  const [locationPostalCode, setLocationPostalCode] = useState('');
  const [availabilityNeeded, setAvailabilityNeeded] = useState([]);
  const [availabilityToHelp, setAvailabilityToHelp] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

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

  const handleLocationCountryChange = (e) => {
    setLocationCountry(e.target.value);
  };

  const handleLocationCityChange = (e) => {
    setLocationCity(e.target.value);
  };

  const handleLocationPostalCodeChange = (e) => {
    setLocationPostalCode(e.target.value);
  };

  const handleAvailabilityNeededChange = (e) => {
    const option = e.target.value;
    if (e.target.checked) {
      setAvailabilityNeeded((prevForm) => [...prevForm, option]);
    } else {
      setAvailabilityNeeded(availabilityNeeded.filter((time) => time !== option));
    }
  };

  const handleAvailabilityToHelpChange = (e) => {
    const option = e.target.value;
    if (e.target.checked) {
      setAvailabilityToHelp((prevForm) => [...prevForm, option]);
    } else {
      setAvailabilityToHelp(availabilityToHelp.filter((time) => time !== option));
    }
  };

  const clearUser = () => {
    setUserName('');
    setUserEmail('');
    setPassword('');
    setConfirmPassword('');
    setLocationCountry('');
    setLocationCity('');
    setLocationPostalCode('');
    setAvailabilityNeeded([]);
    setAvailabilityToHelp([]);
    setToggleForm(false);
  };

  const handleFirstForm = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError('Passwords do not match');
      return;
    }

    setToggleForm(true);
  };

  const handleCompletedForm = (e) => {
    e.preventDefault();

    const userData = {
      userName,
      userEmail,
      password,
      locationCountry,
      locationCity,
      locationPostalCode,
      availabilityNeeded,
      availabilityToHelp,
    };

    authMethods
      .signUp(userData)
      .then((createdUser) => {
        const { user } = createdUser;
        login(user)
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert('Error creating user, try again!');
        clearUser();
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="signup-container bg-white rounded-lg p-6 border border-gray-300 shadow-lg w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Signup</h2>
        <form onSubmit={toggleForm ? handleCompletedForm : handleFirstForm}>
        {!toggleForm && (
          <>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
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
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
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
          </>
          )}
          {toggleForm && (
            <div>
              <div className="mb-4">
                <label htmlFor="country" className="block mb-1">
                  Country:
                </label>
                <input
                  type="text"
                  id="country"
                  name="location.country"
                  placeholder="Spain"
                  value={locationCountry}
                  onChange={handleLocationCountryChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="city" className="block mb-1">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="location.city"
                  placeholder="Barcelona"
                  value={locationCity}
                  onChange={handleLocationCityChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="postalCode" className="block mb-1">
                  Postal Code:
                </label>
                <input
                  type="number"
                  id="postalCode"
                  name="location.postalCode"
                  placeholder="08001"
                  value={locationPostalCode}
                  onChange={handleLocationPostalCodeChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label className="block mb-2">Availability Needed:</label>
                {["Morning", "Afternoon", "Evening", "Night", "All Day", "Overnight"].map(
                  (option) => (
                    <div key={option} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        name="availabilityNeeded"
                        value={option}
                        onChange={handleAvailabilityNeededChange}
                        className="mr-2"
                      />
                      <label>{option}</label>
                    </div>
                  )
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-2">Availability to Help:</label>
                {["Morning", "Afternoon", "Evening", "Night", "All Day", "Overnight"].map(
                  (option) => (
                    <div key={option} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        name="availabilityToHelp"
                        value={option}
                        checked={availabilityToHelp.includes(option)}
                        onChange={handleAvailabilityToHelpChange}
                        className="mr-2"
                      />
                      <label>{option}</label>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          <input
            type="submit"
            value={toggleForm ? 'Submit' : 'Next'}
            className="w-full bg-green-300 text-black py-2 rounded-md hover:bg-opacity-80"
          />
        </form>
      </div>
    </div>
  );
};

export default SignupCombined;