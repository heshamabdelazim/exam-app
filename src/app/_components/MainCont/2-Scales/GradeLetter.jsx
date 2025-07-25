"use client";
import { ArrowBigDown, ArrowDownFromLine } from "lucide-react";
import React, { useEffect, useRef } from "react";

function GradeLetter({ userData }) {
  const transitionBarMove =
    "transition: 0.8s cubic-bezier(0.32, -0.21, 0.47, 0.97);";
  const scalNums = [0, 50, 65, 75, 85, 100]; //this under the bar
  const scalPosition = [
    { grade: "F", start: 0, end: 49.9 },
    { grade: "D", start: 50, end: 64.9 },
    { grade: "C", start: 65, end: 74.9 },
    { grade: "B", start: 75, end: 84.9 },
    { grade: "A", start: 85, end: 100 },
  ];

  const gradeBar = useRef();
  const arrow = useRef();

  useEffect(() => {
    setTimeout(
      () =>
        (gradeBar.current.style.cssText = `width: 100%; ${transitionBarMove};`),
      100
    );
    setTimeout(() => {
      arrow.current.style.cssText = `left:${userData.totalScore}%;  ${transitionBarMove};`;
    }, 500);
  }, []);

  return (
    <div className="w-[20%]" ref={gradeBar}>
      <div className=" gradient-bar w-full h-11 relative ">
        <div
          ref={arrow}
          className="flex left-0 flex-col items-center absolute top-0 translate-y-[-100%] translate-x-[-50%]"
          // style={{ left: 0 }}
        >
          <span className="text-lightOrange">
            {userData.gradeLetter} - {userData.totalScore}%
          </span>
          <ArrowDownFromLine />
        </div>
        {scalPosition.map((ele, ind) => (
          <span
            key={ind}
            className="flex justify-center items-center absolute border-r-[1px] border-l-[1px] top-0 h-full "
            style={{ left: `${ele.start}%`, width: `${ele.end - ele.start}%` }}
          >
            {ele.grade}
          </span>
        ))}
      </div>
      <div className=" border-b-[2px] border-lightOrange mt-3 relative">
        {scalNums.map((ele, ind) => (
          <div
            key={ind}
            className={`absolute flex flex-col items-center top-0 translate-x-[-50%] text-[10px] lg:text-sm text- font-bold`}
            style={{ left: `${ele}%` }}
          >
            <span className="bg-black w-[1px] h-2 inline-block" />
            {ele}%
          </div>
        ))}
      </div>
    </div>
  );
}

export default GradeLetter;
