import React, { useState, useEffect } from 'react';
import OwnerCard from '../components/OwnerCard';
import { getOwnersByCity, getOwner } from '../services/owners.services';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';

const OwnersPage = () => {
  const [owners, setOwners] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [totalOwners, setTotalOwners] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(false);
  const [userCity, setUserCity] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Owners | Pet Pals';
    async function getOwnerData(id) {
      try {
        const owner = await getOwner(id);
        setUserCity(owner.locationCity)
        return owner;
      } catch (err) {
        console.error(err);
        alert("User is not logged in")
        navigate("/login")
      }
    }

    getOwnerData(user._id);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function getOwners() {
      try {
        const { docs, totalPages, totalDocs } = await getOwnersByCity(userCity, currentPage);
        setOwners(docs);
        setTotalPages(totalPages);
        setTotalOwners(totalDocs);
        setError(false)
      } catch (err) {
        console.error(err);
        setError(true)
      }
    }

    userCity && getOwners();
  }, [userCity, currentPage]);


  const handleClick = (id) => {
    navigate(`/owner/${id}`)
  } 

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">Find an Owner</h1>
      <p className="text-xl font-semibold mb-4">Search for a pet owner in your area, {userCity}</p>
      <p className="text-l font-semibold mb-8">Total Owners: {totalOwners}</p>

      <div className="flex flex-row flex-wrap justify-center items-center">
        {owners.map((owner) => (
          <OwnerCard key={owner._id} owner={owner} onClick={() => handleClick(owner._id)}/>
        ))}
      </div>

      {error && <p className="text-red-500">There was an error. Please try again later.</p>}
      {totalPages > 0 && <Pagination currentPage={currentPage} onPageChange={setPage} totalPages={totalPages} />}
    </div>
  );
};

export default OwnersPage;