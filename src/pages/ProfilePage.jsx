import React, { useEffect, useState } from 'react';
import UserProfile from '../components/UserProfile';
import { getOwner } from '../services/owners.services';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [userFromDB, setUserFromDB] = useState(null);

  async function getOwnerData(id) {
    try {
      const owner = await getOwner(id, true, true);
      setUserFromDB(owner)
      return owner;
    } catch (err) {
      console.error(err);
      alert("User did not exist")
      navigate("/login")
    }
  }

  useEffect(() => {
    document.title = 'Profile | Pet Pals';

    getOwnerData(user._id)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onUpdate = async () => {
    const updatedOwner = await getOwnerData(user._id)
    setUserFromDB(updatedOwner)
  }

  return (
    <div className="flex flex-col justify-center items-center bg-green-300 text-white p-8 h-full">
      {userFromDB && <UserProfile user={userFromDB} onUpdate={onUpdate} />}
      {!userFromDB && <p>Loading...</p>}
    </div>
  );
};

export default ProfilePage;