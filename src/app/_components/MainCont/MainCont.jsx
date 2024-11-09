import React from "react";
import Welcome from "./1-Welcome/ًWelcome";
import Scales from "./2-Scales/Scales";
import ExamDetails from "./ExamDetails/ExamDetails";

function MainCont({ userData }) {
  return (
    <div className="flex-1 flex flex-col md:grid md:grid-cols-2 gap-3  ">
      <Welcome userData={userData} />
      <Scales userData={userData} />
      <ExamDetails userData={userData} />
    </div>
  );
}

export default MainCont;
