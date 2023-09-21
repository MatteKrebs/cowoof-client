import React, { useState, useEffect } from 'react';
import OwnerCard from '../components/OwnerCard';
import { axiosInstance } from '../utilities/api';

const OwnersPage = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    axiosInstance.get('/owners')
      .then((response) => {
        setOwners(response.data);
      })
      .catch((error) => {
        console.error('Error fetching owners:', error);
      });
  }, []);

  return (
    <div>
      <h1>Owners Page</h1>
      <div className="owner-list">
        {owners.map((owner) => (
          <OwnerCard key={owner.id} owner={owner} />
        ))}
      </div>
    </div>
  );
};

export default OwnersPage;