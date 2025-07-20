"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setError } from "../../../../lib/RTK/slices/error";

function Result({ exam }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const calculation = () => {
    let correctAns_counter = 0;
    exam.quesArray.map((que) => {
      if (que.userAns == que.correctAns) {
        correctAns_counter++;
      }
    });
    return (correctAns_counter * 100) / exam.quesArray.length;
  };
  const isPassed = calculation() >= 50;

  //displaying error, no server
  useEffect(() => {
    try {
      NO_DATABASE_CONNECTION_HERE; //undefined
    } catch (err) {
      dispatch(setError("No server-side to store your data."));
    }
  }, []);

  return (
    <div className="text-center text-2xl flex flex-col gap-5 h-[100%] justify-between items-center">
      <p className="result">The Subject Score is {calculation()}%</p>
      <div className="relative basis-[80%] md:min-w-[60%] min-w-[90%] ">
        <Image
          src={isPassed ? "/Congrates.png" : "/sorry.png"}
          alt="status-img"
          fill
          className="flex justify-center"
        />
      </div>
      <button
        onClick={() => router.push("/")}
        className="bg-secondBackGround p-2 rounded hover:bg-lightYellow transition hover:text-white"
      >
        Back Portfolio
      </button>
    </div>
  );
}

export default Result;
