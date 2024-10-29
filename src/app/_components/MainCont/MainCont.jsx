import React from "react";
import Personality from "./Personality";
import Goals from "./Goals";
import Welcome from "./1-Welcome/ًWelcome";
import Scales from "./2-Scales/Scales";

function MainCont({ userData }) {
  return (
    <div className="flex-1 grid grid-cols-2 gap-3  ">
      <Welcome userData={userData} />
      <Scales userData={userData} />
      <Personality userData={userData} />
      <Goals userData={userData} />
    </div>
  );
}

export default MainCont;
