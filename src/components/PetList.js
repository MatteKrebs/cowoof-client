import React from "react";
import PetCard from "./PetCard"; // Adjust the path to your PetCard component
import dogImg from "../assets/images/dogphoto1.png";

const PetList = () => {
  const pets = [
    { name: "Buddy", age: 3, about: "Friendly dog that loves to play." },
    { name: "Luna", age: 2, about: "Energetic and great with kids." },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {pets.map((pet, index) => (
        <PetCard
          key={index}
          petName={pet.name}
          petAge={pet.age}
          petAbout={pet.about}
          image={dogImg}
        />
      ))}
    </div>
  );
};

export default PetList;
