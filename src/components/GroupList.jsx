import React from "react";
import GroupCard from "./"; // Adjust the path to your GroupCard component

const GroupList = ({ groups }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {groups.map((group, index) => (
        <GroupCard
          key={index}
          groupName={group.name}
          groupLocation={group.location}
          groupImage={group.image}
          groupAdmin={group.admin}
          groupMembers={group.members}
        />
      ))}
    </div>
  );
};

export default GroupList;