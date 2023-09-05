import React from "react";
import dogImg from "../assets/images/dogphoto1.png";

const OwnerList = ({ owners }) => {
    return (
      <div className="flex flex-wrap justify-center">
        {owners.map((owner, index) => (
          <OwnerCard
            key={index}
            ownerName={owner.name}
            location={owner.location}
            about={owner.about}
            woofs={owner.woofs}
            coWoofers={owner.coWoofers}
          />
        ))}
      </div>
    );
  };
  
  export default OwnerList;
  