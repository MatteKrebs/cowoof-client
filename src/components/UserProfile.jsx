import React from "react";

const UserProfile = ({ user, pets = [], groups = [] }) => {
  const { userImage = "https://i.pravatar.cc/300", userName, userDescription = "", availabilityToHelp, availabilityNeeded, locationPostalCode, locationCountry, locationCity } = user;

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
            return (<span key={index}>{item}</span>)
          })}</p>
          <p className="text-center"><b>Availability needed:</b> {availabilityNeeded.map(function (item, index) {
            return (<span key={index}>{item}</span>)
          })}</p>
        </div>
      </div>
      <div className="flex pt-12">
        <h2 className="text-2xl font-bold">Pets</h2>
        <div className="flex space-x-4">
          {pets.map((pet, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-2">
                {/* Display pet image or a placeholder */}
                {pet.petImage ? (
                  <img src={pet.petImage} alt={pet.name} className="w-20 h-20 rounded-full object-cover" />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                    No Image
                  </div>
                )}
              </div>
              <p>{pet.name}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="ml-32 text-2xl font-bold">Groups</h2>
          <ul className="list-disc pl-8">
            {groups.map((group, index) => (
              <li key={index}>{group.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;