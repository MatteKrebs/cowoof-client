import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div className="w-2/5 p-4">
      <img className="PetCard" src={pet.petImage} alt={`A ${pet.petName}`} />
      <h2>Name: {pet.petName}</h2>
      <h3>Age: {pet.petAge}</h3>
      <p>About Me: {pet.petAbout}</p>
    </div>
  );
};

export default PetCard;