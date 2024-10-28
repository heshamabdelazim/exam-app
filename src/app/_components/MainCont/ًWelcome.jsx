import React from "react";
import CompHead from "./CompHead";

function Welcome({ userData }) {
  const justSpliting = (ind) => {
    //for first 2 names
    return userData.name.split(" ")[ind];
  };
  return (
    <div className="bg-backGround p-7 rounded">
      <CompHead headName="Welcome" />
      <span className="text-lightOrange font-bold text-lg">
        {`${justSpliting(0)} ${justSpliting(1)}`}
      </span>
      <span>, It's good to see you.</span>
      <h3 className="mt-4 text-xl font-semibold">
        Here are latest infomrations:
      </h3>
    </div>
  );
}

export default Welcome;
