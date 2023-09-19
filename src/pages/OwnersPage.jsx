import React, { useState, useEffect } from 'react';
import OwnerCard from '../components/OwnerCard'; // Import the OwnerCard component
import { axiosInstance } from '../utilities/api'; // Import Axios for making API requests

const OwnersPage = () => {
  const [owners, setOwners] = useState([]); // State to store the list of owners

  useEffect(() => {
    // Fetch the list of owners from your API when the component mounts
    axiosInstance.get('/owners') // Replace with your API endpoint
      .then((response) => {
        setOwners(response.data); // Update the state with the fetched owners
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