import React from "react";
import { useNavigate } from "react-router-dom"
import { deletePet } from "../services/pet.services";

const UserProfile = ({ user, onUpdate }) => {
  const { userImage = "https://i.pravatar.cc/300", userName, userDescription = "", availabilityToHelp, availabilityNeeded, locationPostalCode, locationCountry, locationCity } = user;
  const navigate = useNavigate();

  const handleClickEdit = (petId) => {
    if(!petId) return navigate("/pet/")

    navigate(`/pet/${petId}`)
  }

  const handleDelete = (petId) => {
    deletePet(petId)
      .then(() => {
        onUpdate()
      })
      .catch((err) => {
        console.error(err);
      })
  }


  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex p-4 bg-gray-100 rounded-lg text-black">
          <div className="p-4">
            {userImage ? (
              <img src={userImage} alt="Profile" className="w-40 h-40 rounded-full object-cover mx-auto m-4" />
            ) : (
              <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-4 cursor-pointer">
                Upload
              </div>
            )}
            <p className="text-center font-bold text-xl">{userName}</p>
            <p className="text-center mb-2">{userDescription}</p>
          </div>
        </div>
        <div className="flex flex-col p-12 text-black justify-start items-start">
          <p className="text-center"><b>Address: </b>{locationCountry}, {locationCity}, {locationPostalCode}</p>
          <p className="text-center"><b>Availability to help:</b> {availabilityToHelp.map(function (item, index) {
            return (<span key={index}>{item}, </span>)
          })}</p>
          <p className="text-center"><b>Availability needed:</b> {availabilityNeeded.map(function (item, index) {
            return (<span key={index}>{item}, </span>)
          })}</p>
        </div>
      </div>
      <div className="flex flex-col pt-12 items-start">
        <h2 className="text-2xl font-bold mb-12">Pets</h2>
        <div className="flex flex-row space-x-4">
          {user.usersPetId.map((pet, index) => (
            <div key={index} className="flex flex-row items-center justify-center">

              <div key={index} className="flex flex-col">
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mx-auto">
                  <img src={pet.petImage} alt={pet.petName} className="w-20 h-20 rounded-full object-cover" />
                </div>
                <p className="mt-4 text-xl">{pet.petName}</p>
              </div>
              <button className="m-4 bg-white rounded text-slate-500 p-4 shadow-md" onClick={() => handleClickEdit(pet._id)}>Edit</button>
              <button className="m-4 bg-white rounded text-slate-500 p-4 shadow-md" onClick={() => handleDelete(pet._id)}>Delete</button>

            </div>
          ))}
          {user.usersPetId.length === 0 && 
          <><p className="text-xl">You don't have any pets yet. Add one!</p>
          <button className="m-4 bg-white rounded text-slate-500 p-4 shadow-md" onClick={() => handleClickEdit()}>Add</button>
          </>}
        </div>
        <div className="flex flex-col justify-start items-start pb-12">
          <h2 className="flex flex-row text-2xl font-bold items-start mb-12 mt-12">Groups</h2>
          <ul className="pl-8 items-start">
            {user.usersGroups.map((group, index) => (
              <li key={index}>{group.name}</li>
            ))}
          </ul>
          {user.usersGroups.length === 0 && <p className="text-xl">You are not part of any groups yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;