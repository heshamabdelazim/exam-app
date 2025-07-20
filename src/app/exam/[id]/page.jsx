"use client";
import { notoSerif } from "@/app/fonts/fonts";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Timer from "./Timer";
import Aside from "./Aside";
import Questions from "./Questions";
import Instructions from "./Instructions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { userValidation } from "../../../../lib/RTK/slices/studentSlice";
import Result from "./Result";

function page({ params }) {
  // let [slug, setSlug] = useState(null);
  // const gettingSlug = () => params.then((res) => setSlug(res.slug));
  // useEffect(() => {
  //   gettingSlug();
  // }, []);
  //another way
  const { id } = React.use(params);
  const { student: userData } = useSelector((data) => data);
  let [exam, setExam] = useState(null);
  let [font, setFont] = useState(null); //to avoid hydration
  let [timeNums, setTimeNums] = useState(null);
  let [begin, setBegin] = useState(false);
  let [userConfirm, setUserConfirm] = useState(false);
  let [showQues, setShowQues] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  /*
   * Scenario: Initial Exam Flow
   *
   * This documentation outlines the step-by-step user interaction and UI changes
   * for the beginning of the exam process.
   *
   * 1. Initial State (After User Accesses the Exam):
   * - mainContent: Displays initial instructions.
   * - 'Start Exam' Button: Disabled (not clickable).
   *
   * 2. User Confirms Instructions (clicks 'Confirm'):
   * - 'Start Exam' Button: Enabled (clickable).
   * - mainContent: Updates to "Please press start to begin exam."
   *
   * 3. User Clicks 'Start Exam' Button:
   * - 'Start Exam' Button: Text changes to "Submit" (and its changes functionality).
   * - mainContent: Displays the exam questions.
   */
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userData = JSON.parse(localStorage.getItem("user"));
      const allExamsArr = userData.examDetails;
      const theExam = allExamsArr.find((ele) => ele.examId == id);
      setExam(() => {
        const allQue = theExam.quesArray.map((que) => {
          return { ...que, flagged: false, userAns: null };
        });
        return { ...theExam, quesArray: allQue };
      }); // @fetching from a server but no backend
      setFont(notoSerif.className); //to avoid hydration
      setTimeNums({
        min: theExam?.duration.min,
        hr: theExam?.duration.hr,
        sec: "0",
      });
      dispatch(userValidation(userData));
    } else {
      router.replace("/"); //if somebody delete localStorage, (the current) in history stack will be home
    }
  }, []);

  //==== memoization components=====
  const asideComponent = useMemo(() => {
    return <Aside exam={exam} begin={begin} />;
  }, [exam, begin]);
  // ==================
  const mainContent = useMemo(() => {
    // the first access of the user, mainContent will be instructions
    if (!userConfirm)
      return (
        <Instructions
          setUserConfirm={setUserConfirm}
          exam={exam}
          userData={userData}
        />
      );
    // user confirmed instructions, mainContent will be "Are you ready?"
    if (userConfirm && showQues && !begin)
      return (
        <p className="text-center text-2xl">
          Make sure you are ready and phone is off.
        </p>
      );
    //user is ready, mainContent will be questoins
    if (userConfirm && begin)
      return <Questions exam={exam} setExam={setExam} />;
    //user finish, mainContent will be the result
    if (userConfirm && !showQues) return <Result exam={exam} />;
  }, [exam, userConfirm, userData, begin, showQues]);

  // ==================
  let timerMemoization = useMemo(
    () => (
      <Timer
        begin={begin}
        setBegin={setBegin}
        setTimeNums={setTimeNums}
        timeNums={timeNums}
        userConfirm={userConfirm}
        setShowQues={setShowQues}
      />
    ),
    [begin, timeNums, userConfirm, showQues]
  );
  return (
    <>
      {exam ? (
        <div
          className={`${
            font ? font : ""
          } grid grid-rows-7 grid-cols-12 min-h-[100vh] max-h-[100vh]  `}
        >
          <header className="bg-backGround gap-4 row-span-1 col-span-12 flex justify-between items-center px-4 md:px-11 shadow-lg">
            <div className="text-[1.5rem] lg:text-[3rem] text-lightOrange flex justify-center items-center">
              {exam.name}
            </div>
            {showQues ? (
              timerMemoization
            ) : (
              <>
                <h3 className="font-semibold text-lightOrange">
                  Exam Submitted Successfully
                </h3>
              </>
            )}
            <div className="md:flex flex-col justify-center items-center hidden">
              <strong>
                Duration{" "}
                {exam.duration.hr
                  ? `${exam.duration.hr} : ${exam.duration.min} hr`
                  : `${exam.duration.min}min`}
              </strong>
              <strong>Number of Questions: {exam.quesArray.length}</strong>
            </div>
          </header>
          {asideComponent}
          {/* <Aside exam={exam} /> */}
          <main className="queSection overflow-auto row-span-6 col-span-11 p-5 md:p-10 ">
            {mainContent}
          </main>
        </div>
      ) : (
        <p className="text-center text-3xl">Looding...</p>
      )}
    </>
  );
}

export default page;

// NOOOTE : the error of hydration because of the font.className is different
