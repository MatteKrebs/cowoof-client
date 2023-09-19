import React, { useContext } from 'react';
import UserProfile from '../components/UserProfile';
import { AuthContext } from '../context/auth.context';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile user={user} />
    </div>
  );
};

export default ProfilePage;