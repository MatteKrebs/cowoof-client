import React from "react";

const UserProfile = ({user, pets = [], groups = []}) => {
  console.log(user);
  const { userImage, userName, userDescription = "", availabilityToHelp, availabilityNeeded, locationPostalCode, locationCountry, locationCity } = user;

  return (
    <div className="flex p-4 bg-gray-100 rounded-lg">
      <div className="w-1/4 p-4">
        {/* Use a conditional to display the user image or a placeholder */}
        {userImage ? (
          <img src={userImage} alt="Profile" className="w-40 h-40 rounded-full object-cover mx-auto mb-4" />
        ) : (
          <div className="w-40 h-40 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-4 cursor-pointer">
            Upload
          </div>
        )}
        <p className="text-center font-bold text-xl">{userName}</p>
        <p className="text-center mb-2">{userDescription}</p>
        <p className="text-center">{locationCountry}, {locationCity}, {locationPostalCode}</p>
        <p className="text-center">Availability to Help: {availabilityToHelp}</p>
        <p className="text-center">Availability Needed: {availabilityNeeded}</p>
      </div>
      <div className="w-3/4 p-4">
        <div className="mb-4">
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
        </div>
        <div>
          <h2 className="text-2xl font-bold">Groups</h2>
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