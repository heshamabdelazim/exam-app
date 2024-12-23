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
  const strongClass = "basis-1/4 text-center text-[14px] md:text-lg";
  return (
    <li className={liClass}>
      <div className="flex gap-1 sm:gap-2 items-center basis-1/4">
        <Circle
          fill={ifPassed50 ? "white" : "red"}
          stroke="none"
          width={10}
          height={10}
          className="basis-3 attract hidden sm:block"
        />

        <strong className={strongClass}>{examObj.name}</strong>
      </div>
      <strong className={strongClass}>
        {examObj.score ? `Score: ${examObj.score}%` : `Required`}
      </strong>
      <strong className={strongClass}>
        Duration{" "}
        {examObj.duration.hr
          ? `${examObj.duration.hr} : ${examObj.duration.min}hr`
          : `${examObj.duration.min}min`}
      </strong>
      {examObj.score ? (
        <>
          {ifPassed50 ? (
            <strong className={strongClass}>
              Score: {examObj.score}% {!ifPassed50 && "Not passed"}{" "}
            </strong>
          ) : (
            <ExamLink
              id={examObj.examId}
              describe="Retake Exam"
              strongClass={strongClass}
            />
          )}
        </>
      ) : (
        <ExamLink
          describe="Start Exam"
          id={examObj.examId}
          strongClass={strongClass}
        />
      )}
    </li>
  );
}

export default ExamLine;
