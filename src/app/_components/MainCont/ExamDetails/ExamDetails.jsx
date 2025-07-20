"use client";
import React, { useEffect, useState } from "react";
import CompHead from "../CompHead";
import ExamLine from "./ExamLine";
import { useDispatch } from "react-redux";
import { fireError } from "../../../../../lib/utilis";

function ExamDetails({ userData }) {
  let [exams, setExams] = useState(null);
  const dispatch = useDispatch();
  const fetchingData = async () => {
    try {
      //suppose we made fetch // no backend //only the class return objects
      setExams(userData.examDetails);
      console.log("codes read");

      // beso;
    } catch (err) {
      fireError(dispatch, "sorry, something went wrong");
    } finally {
      setTimeout(() => {
        fireError(dispatch, ""); //after 5 seconds, the (error msg) will disappear
      }, 5000);
    }
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <div className="bg-backGround col-span-2 p-3 md:p-6">
      <CompHead headName="Exams Details" />
      <ul className="mt-4 flex flex-col gap-5">
        {exams?.map((obj) => (
          <ExamLine key={obj.examId} examObj={obj} />
        ))}
      </ul>
    </div>
  );
}

export default ExamDetails;
