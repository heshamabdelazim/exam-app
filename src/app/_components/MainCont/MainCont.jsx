import React from "react";
import Motivations from "./Motivations";
import Personality from "./Personality";
import Goals from "./Goals";
import Welcome from "./ًWelcome";

function MainCont({ userData }) {
  return (
    <div className="flex-1 grid grid-cols-2 gap-3  bg-blue-500">
      <Welcome userData={userData} />
      <Motivations userData={userData} />
      <Personality userData={userData} />
      <Goals userData={userData} />
    </div>
  );
}

export default MainCont;
