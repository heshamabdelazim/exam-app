import React from "react";
import CompHead from "../CompHead";
import NewsList from "./NewsList";

function Welcome({ userData }) {
  const justSpliting = (ind) => {
    //for first 2 names
    return userData.name?.split(" ")[ind];
  };
  const h3Classes = "text-xl font-semibold";

  return (
    <div className="  bg-backGround p-3 md:p-6 rounded shadow-[0_0_10px_0_#008000d1;] ">
      <CompHead headName="Welcome" />
      <span className="font-bold text-lightOrange text-lg">
        {`${justSpliting(0)} ${justSpliting(1)}`}
      </span>
      <span>, It's good to see you.</span>
      <div className="mt-8 ">
        <h3 className={h3Classes}>Here are latest infomrations:</h3>
        <NewsList userData={userData} />
      </div>
    </div>
  );
}

export default Welcome;
