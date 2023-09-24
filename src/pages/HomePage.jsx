import React from 'react';
import { Link } from 'react-router-dom';
import CoverPhoto1 from '../assets/images/coverdogphoto1.png';

const Homepage = () => {
  // Define the style for the right side (image) using CoverPhoto1
  const rightSideStyle = {
    backgroundImage: `url(${CoverPhoto1})`
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 flex flex-col justify-center items-center bg-green-300 text-white p-8">
        <h1 className="text-3xl font-semibold mb-8">CoWoof</h1>
        <h4 className="text-xl font-semibold mb-8">A Co-Parenting community for Dog Parents that care.</h4>
        <Link to="/about" className="btn">About Us</Link>
        <Link to="/login" className="btn mt-4">Login</Link>
        <Link to="/signup" className="btn mt-4">Sign Up</Link>
      </div>

      <div className="w-3/4 bg-cover bg-center relative" style={rightSideStyle}>
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
    </div>
  );
};

export default Homepage;