import React from "react";
//import OwnerCard from "./OwnerCard";
//import PetCard from "./PetCard";
//import dogImg from "../assets/images/dogphoto1.png";



const GroupCard = ({ groupName, groupLocation, groupImage, groupAdmin, groupMembers}) => {
    return(
        <div>
            <img className="GroupCardImage" src={groupImage} alt="cowoofers" />
            <h2>{groupName}</h2>
            <h3>Location: {groupLocation}</h3>
            <h5>{groupAdmin}</h5>
            <h3>Members:</h3>
            <ul>
                {groupMembers.map((member, index) => (
                <li key={index}>{member}</li>
                ))}
            </ul>
        </div>
    )
}

export default GroupCard;