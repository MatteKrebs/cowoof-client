import React from 'react';

const UserProfile = ({ user }) => {
  const {
    name,
    location,
    availabilityToHelp,
    availabilityNeeded,
    profilePicture,
    pets,
  } = user;

  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile" />
      </div>
      <div className="user-info">
        <div className="top-right-info">
          <h2>{name}</h2>
          <p>Location: {location}</p>
          <p>Availability to Help: {availabilityToHelp}</p>
          <p>Availability Needed: {availabilityNeeded}</p>
        </div>
      </div>
      <div className="pets-info">
        <h2>Pets</h2>
        <ul>
          {pets.map((pet, index) => (
            <li key={index}>{pet.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;