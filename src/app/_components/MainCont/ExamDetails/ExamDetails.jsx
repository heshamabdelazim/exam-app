"use client";
import React, { useEffect, useState } from "react";
import CompHead from "../CompHead";
import allExams from "../../../../../lib/exams";
import ListCom from "../1-Welcome/ListCom";
import ExamLine from "./ExamLine";

function ExamDetails({ userData }) {
  let [exams, setExams] = useState(null);
  const fetchingData = async () => {
    //suppose we made fetch // no backend //only the class return objects
    setExams(userData.examDetails);
    // return allExams
  };
  useEffect(() => {
    fetchingData();
  }, []);
  console.log(exams);
  return (
    <div className="bg-backGround col-span-2 p-7">
      <CompHead headName="Exams Details" />
      <ul className="mt-4 flex flex-col gap-5">
        {exams?.map((obj) => (
          <ExamLine key={obj.id} examObj={obj} />
        ))}
      </ul>
    </div>
  );
}

export default ExamDetails;
