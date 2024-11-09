"use client";
import ListCom from "@/app/_components/MainCont/1-Welcome/ListCom";
import React, { useEffect } from "react";
import { digit2 } from "../../../../lib/utilis";
import { useRouter } from "next/navigation";

function Instructions({ setUserConfirm, exam, userData }) {
  useEffect(() => {
    console.log("Instruction is rendering");
  });
  const router = useRouter();
  const cancelConfirm = () => {
    router.back();
  };

  const buttonClass = "px-3 py-2 rounded transition-all hover:text-white";
  return (
    <>
      <h2 className="text-lightOrange text-3xl mb-5">Instructions</h2>
      <ul className="flex flex-col gap-5">
        <ListCom LineData={`Hello ${userData.name.split(" ")[0]}.`} />
        <ListCom
          LineData={`You are about to enter your exam ${exam.name} session.`}
        />
        <ListCom
          LineData={`Remember, The duration is ${digit2(
            exam.duration.hr
          )} : ${digit2(exam.duration.min)} : 00 ${
            exam.duration.hr < 1 ? "min" : "hr"
          }.`}
        />
        <ListCom LineData={`If you understand instructions please confirm.`} />
        <ListCom
          LineData={`After Confirm, You will be asked to press begin exam.`}
        />
      </ul>
      <div className="mt-6">
        {" "}
        Do you understand instructions?
        <div className="flex gap-5 mt-3 ">
          <button
            onClick={() => setUserConfirm(true)}
            className={`${buttonClass} bg-green-400`}
          >
            Confirm
          </button>
          <button
            onClick={() => cancelConfirm()}
            className={`${buttonClass} bg-red-400`}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default Instructions;
