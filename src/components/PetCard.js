import React from "react";

const PetCard = ({ petName, petAge, petAbout, petImage }) => {
  return (
    <div className="w-2/5 p-4">
      <img className="PetCard" src={petImage} alt={`A ${petName}`} />
      <h2>Name: {petName}</h2>
      <h3>Age: {petAge}</h3>
      <p>About Me: {petAbout}</p>
    </div>
  );
};

export default PetCard;