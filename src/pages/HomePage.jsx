import React from 'react';
import { Link } from 'react-router-dom';
import CoverPhoto1 from '../assets/images/coverdogphoto1.png';
import { useAuth } from '../hooks/useAuth';

const Homepage = () => {
  // Define the style for the right side (image) using CoverPhoto1
  const rightSideStyle = {
    backgroundImage: `url(${CoverPhoto1})`
  };

  const { user, isLoggedIn } = useAuth();
  console.log(user)
  console.log(isLoggedIn)
  return (
    <div className="flex h-screen">
      <div className="w-1/4 flex flex-col justify-center items-center bg-green-300 text-white p-8">

        <h1 className="text-3xl font-semibold mb-8"> Welcome to CoWoof {user ? `, ${user.userName}`: ''}</h1>
        <h4 className="text-xl font-semibold mb-8">A Co-Parenting community for Dog Parents that care.</h4>
        <Link to="/about" className="btn">About Us</Link>
        { !isLoggedIn && <Link to="/login" className="btn mt-4">Login</Link> }
        { isLoggedIn && <Link to="/owners" className="btn mt-4 border-spacing-2 border-2 rounded-md p-4 hover:border-white">Search Owners</Link> }
        { !isLoggedIn && <Link to="/signup" className="btn mt-4">Sign Up</Link> }
      </div>

      <div className="w-3/4 bg-cover bg-center relative" style={rightSideStyle}>
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
    </div>
  );
};

export default Homepage;