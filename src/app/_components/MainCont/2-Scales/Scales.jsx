import React from "react";
import CompHead from "../CompHead";
import GradeLetter from "./GradeLetter";

function Scales({ userData }) {
  const barBorderClasses =
    "h-6 inline-block  w-full bg-white overflow-hidden border  border-lightYellow  rounded-full"; //this is the tube of the bar
  const barItselfClasses =
    " text-white flex justify-center items-center rounded-e-full border-r-2 bg-lightOrange h-[100%] text-sm";
  const liClasses = "flex flex-col gap-3";

  const arr = [
    {
      title: "Progress",
      rate: userData.progress,
      description: `based on exams done (${userData.examsFinished.length} exams are done out of ${userData.examsIds.length})`,
    },
    {
      title: "Total Score",
      rate: userData.totalScore,
      description: `based on your grades (Your grade letter is ${userData.gradeLetter})`,
    },
  ];
  return (
    <div className="bg-backGround p-4 pb-8 md:p-6">
      <CompHead headName="Scales" />
      <ul className="mt-4 flex flex-col gap-7">
        {arr.map((ele, ind) => (
          <li className={liClasses} key={ind}>
            <h4 className="font-bold">
              {ele.title}{" "}
              <span className="font-light">: {ele.description}</span>
            </h4>
            <div className={barBorderClasses}>
              <div
                className={barItselfClasses}
                style={{ width: `${ele.rate}%` }}
              >
                {ele.rate}%
              </div>
            </div>
          </li>
        ))}
        <li className={liClasses}>
          <h4 className="font-bold mb-8">Grade: </h4>
          <GradeLetter userData={userData} />
        </li>
      </ul>
    </div>
  );
}

export default Scales;
