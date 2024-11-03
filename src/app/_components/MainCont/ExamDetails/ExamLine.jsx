import { Circle } from "lucide-react";
import Link from "next/link";
import React from "react";
import ExamLink from "./ExamLink";

function ExamLine({ examObj }) {
  const ifPassed50 = examObj.score > 49.9;
  const liClass = `flex gap-2 items-center ${
    examObj.score
      ? ifPassed50
        ? "bg-cyan-300 opacity-60"
        : "bg-red-300 opacity-60 "
      : "bg-lightOrange  attract"
  } px-2 py-1 rounded-full`;

  console.log(examObj);
  return (
    <li className={liClass}>
      <div className="flex gap-2 items-center basis-1/4">
        <Circle
          fill="white"
          stroke="none"
          width={10}
          height={10}
          className="basis-3 attract"
        />
        <strong>{examObj.name}</strong>
      </div>
      <strong className=" basis-1/4 text-center">
        {examObj.score ? `Score: ${examObj.score}%` : `Required`}
      </strong>
      <strong className=" text-center basis-1/4 ">
        Duration{" "}
        {examObj.duration.hr
          ? `${examObj.duration.hr} : ${examObj.duration.min}hr`
          : `${examObj.duration.min}min`}
      </strong>
      {examObj.score ? (
        <>
          {ifPassed50 ? (
            <strong className="text-center basis-1/4">
              Score: {examObj.score}% {!ifPassed50 && "Not passed"}{" "}
            </strong>
          ) : (
            <ExamLink id={examObj.id} describe="Retake Exam" />
          )}
        </>
      ) : (
        <ExamLink describe="Start Exam" id={examObj.id} />
      )}
    </li>
  );
}

export default ExamLine;
