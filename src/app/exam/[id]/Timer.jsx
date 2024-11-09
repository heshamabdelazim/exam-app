"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { digit2 } from "../../../../lib/utilis";
import { Ban } from "lucide-react";

function Timer({
  timeNums,
  setTimeNums,
  begin,
  setBegin,
  userConfirm,
  setFinish,
  setShowQues,
}) {
  useEffect(() => {
    // setInterval(()=>{},1000)
    if (begin) {
      const intervalId = setInterval(() => {
        if (timeNums.hr == 0 && timeNums.min == 0 && timeNums.sec == 0) {
          clearInterval(intervalId);
          setBegin(false);
          setShowQues(false);
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

  const buttonFunctionality = () => {
    if (userConfirm) {
      if (begin) {
        // submitting and user finish the exam
        // calculating results
        setBegin(false);
        setShowQues(false);
      } else {
        //the user will start the exam now
        setBegin(true);
      }
    } else {
      //the user didn't confirm in the instructions comp
      return;
    }
  };
  return (
    <div
      className="timer border-[3px] h-[70%]  basis-[30%] flex justify-between border-blue-300 rounded transition-all"
      style={{
        opacity: userConfirm ? "100%" : "70%",
      }}
    >
      <div className="basis-[70%] bg-white flex justify-center items-center text-3xl tracking-widest transition-all ">
        {`${digit2(timeNums.hr)} : ${digit2(timeNums.min)} : ${digit2(
          timeNums.sec
        )}`}
      </div>
      <div
        className={`flex-1 flex justify-center items-center hover:text-white transition-all ${
          !begin ? "hover:bg-green-400" : "hover:bg-red-400"
        }`}
        onClick={() => buttonFunctionality()}
        style={{
          cursor: userConfirm ? "pointer" : "not-allowed",
        }}
      >
        {!userConfirm ? (
          <>
            <Ban />
          </>
        ) : !begin ? (
          "Ready?"
        ) : (
          "submit"
        )}
      </div>
      {/* button or submit */}
    </div>
  );
}

export default Timer; // We got
