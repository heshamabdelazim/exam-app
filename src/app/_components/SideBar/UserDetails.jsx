import React from "react";
import LineDetails from "./LineDetails";

function UserDetails({ userData }) {
  return (
    <div className="p-4 bg-secondBackGround rounded">
      {/* some details */}
      <div className="flex flex-col gap-2 mb-4">
        <LineDetails head="Age" value={userData.age} />
        <LineDetails head="Location" value={userData.location} />
        <LineDetails head="ID" value={userData.id} />
      </div>
      <div className="flex flex-wrap gap-3">
        {userData.hobbies.map((hob, id) => (
          <span
            key={id}
            className="bg-lightOrange p-2 rounded-lg font-semibold text-sm text-white"
          >
            {hob}
          </span>
        ))}
      </div>
      {/* skills - flex warp */}
    </div>
  );
}

export default UserDetails;
