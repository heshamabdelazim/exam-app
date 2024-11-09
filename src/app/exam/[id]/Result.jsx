"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Result({ exam }) {
  const router = useRouter();
  const calculation = () => {
    let correctCounter = 0;
    exam.quesArray.map((que) => {
      if (que.userAns == que.correctAns) {
        correctCounter++;
      }
    });
    return (correctCounter * 100) / exam.quesArray.length;
  };
  return (
    <div className="text-center text-2xl flex flex-col gap-5">
      The Subject Score is {calculation()}%
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
