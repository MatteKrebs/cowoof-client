import React from "react";
import dogImg from "../assets/images/dogphoto1.png";
import PetCard from "./PetCard";

const OwnerCard = ({ owner, onClick = () => { } }) => {
  const handleMailClick = (e) => {
    // Prevent the click from bubbling up to the parent (card)
    e.stopPropagation();
    window.location.href = `mailto:${owner.userEmail}`;
  }

  const showPets = () => {
    return owner && owner.usersPetId && owner.usersPetId.length > 0;
  }

  return (
    <>
    <div className="flex bg-white rounded-lg p-8 shadow-md max-w-md m-8" onClick={onClick}>
      {/* Left side with the image */}
      <div className="flex-shrink-0">
        <img className="w-24 h-24 rounded-full" src={dogImg} alt="a dog" />
      </div>

      {/* Right side with information */}
      <div className="ml-4 flex flex-col items-start">
        <h2 className="text-xl font-semibold mb-2">{owner.userName}</h2>
        <h3 className="text-gray-600">
          Location: {owner.locationCountry}, {owner.locationCity}, {owner.locationPostalCode}
        </h3>
        <p className="text-gray-800">About Me: {owner.userDescription}</p>
        <h3 className="text-l font-semibold mt-4">Availability to help:</h3>
        <ul className="list-disc pl-6">
          {owner.availabilityToHelp.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="text-l font-semibold mt-4">Availability needed:</h3>
        <ul className="list-disc pl-6">
          {owner.availabilityNeeded.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-slate-900" onClick={handleMailClick}>
          Message {owner.userName}
        </button>
      </div>      
    </div>
    {showPets() && <div className="flex flex-col items-center justify-between">
        <h3 className="text-xl font-semibold mt-4">Pets</h3>
        <ul className="list-disc pl-6">
          {owner.usersPetId.map((pet, index) => (
            <PetCard key={index} pet={pet} />
          ))}
        </ul>
      </div>}
    </>
  );
};

export default OwnerCard;
