import React from 'react';
import UserProfile from '../components/UserProfile';

const ProfilePage = () => {
  // Define a user object with the required properties
  const user = {
    userName: 'JohnDoe', // Make sure you have userName instead of name if that's what you're using
    location: 'New York',
    availabilityToHelp: 'Monday to Friday',
    availabilityNeeded: 'Weekends',
    profilePicture: 'path-to-profile-picture.jpg',
    pets: [
      { name: 'Buddy', type: 'Dog' },
      { name: 'Whiskers', type: 'Cat' },
    ],
  };

  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile user={user} /> {/* Pass the user object as a prop */}
    </div>
  );
};

export default ProfilePage;