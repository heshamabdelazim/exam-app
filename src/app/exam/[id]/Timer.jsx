"use client";
import React, { useEffect, useRef, useState } from "react";

function Timer({ exam, timeNums, setTimeNums, begin, setBegin }) {
  // const test = [...exam?.duration.min];
  const digit2 = (num) => (num >= 10 ? num : `0${num}`);

  console.log(timeNums);
  console.log(begin);

  useEffect(() => {
    // setInterval(()=>{},1000)
    if (begin) {
      const intervalId = setInterval(() => {
        if (timeNums.hr == 0 && timeNums.min == 0 && timeNums.sec == 0) {
          clearInterval(intervalId);
          setBegin(false);
        } else {
          setTimeNums((old) => {
            return {
              hr: old.sec <= 0 ? (old.min <= 0 ? old.hr - 1 : old.hr) : old.hr,
              min: old.sec <= 0 ? (old.min <= 0 ? 59 : old.min - 1) : old.min,
              sec: old.sec <= 0 ? 59 : old.sec - 1,
            };
          });
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timeNums, begin]);
  return (
    <div className="timer border-[3px] h-[70%] bg-lightYellow basis-[30%] flex justify-between border-blue-300 rounded">
      {/* number */}
      <div className="basis-[70%] bg-white flex justify-center items-center text-3xl tracking-widest ">
        {`${digit2(timeNums.hr)} : ${digit2(timeNums.min)} : ${digit2(
          timeNums.sec
        )}`}
      </div>
      <div className="flex-1 flex justify-center items-center">
        {/* <button>{start ? "submit" : "start"}</button> */}
        <button onClick={() => setBegin(true)}>Begin exam</button>
      </div>
      {/* button or submit */}
    </div>
  );
}

export default Timer;

// We got
