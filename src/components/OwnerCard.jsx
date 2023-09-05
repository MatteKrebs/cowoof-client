import React from "react";
import GroupCard from "./GroupCard"; // Adjust the path to your GroupCard component
import dogImg from "../assets/images/dogphoto1.png";

const OwnerCard = ({ ownerName, location, about, woofs, coWoofers }) => {
  return (
    <div>
      <img className="OwnerCardImage" src={dogImg} alt="a dog" />
      <h2>Name: {ownerName}</h2>
      <h3>Location: {location}</h3>
      <p>About Me: {about}</p>
      <h3>My Woofs:</h3>
      <img src={woofs} alt="My Woofs" />
      <h3>My CoWoofers:</h3>
      {coWoofers.map((coWoofer, index) => (
        <GroupCard
          key={index}
          groupName={coWoofer.name}
          groupImage={coWoofer.image}
        />
      ))}
    </div>
  );
};

export default OwnerCard;