import React, { useEffect, useState } from 'react';
import UserProfile from '../components/UserProfile';
import { getOwner } from '../services/owners.services';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();
  const { navigate } = useNavigate();
  const [userFromDB, setUserFromDB] = useState(null);

  useEffect(() => {
    document.title = 'Profile | Pet Pals';

    async function getOwnerData(id) {
      try {
        const owner = await getOwner(id);
        setUserFromDB(owner)
        return owner;
      } catch (err) {
        console.error(err);
        alert("User did not exist")
        navigate("/login")
      }
    }

    getOwnerData(user._id)
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {userFromDB && <UserProfile user={userFromDB} />}
      {!userFromDB && <p>Loading...</p>}
    </div>
  );
};

export default ProfilePage;