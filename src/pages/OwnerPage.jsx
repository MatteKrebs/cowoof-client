import React, { useState, useEffect } from 'react';
import OwnerCard from '../components/OwnerCard';
import { getOwner } from '../services/owners.services';
import { useNavigate, useParams } from 'react-router-dom';

const OwnersPage = () => {
  const [owner, setOwner] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    document.title = 'Check me out | Pet Pals';

    async function getOwnerData(id) {
      try {
        const owner = await getOwner(id);
        setError(false)
        setOwner(owner)
        return owner;
      } catch (err) {
        console.error(err);
        setError(true)
        alert("User is not logged in")
        navigate("/login")
      }
    }

    getOwnerData(id);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">{owner && owner.userName}</h1>

      <div className="flex flex-row flex-wrap justify-center items-center">
         { owner && <OwnerCard owner={owner} />}
         { !owner && <p>Loading...</p> }
      </div>

      {error && <p className="text-red-500">There was an error. Please try again later.</p>}
    </div>
  );
};

export default OwnersPage;