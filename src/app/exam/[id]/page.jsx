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
  the scinario will work throw the following
    after the user Enter, It will show instructions in the mainContent and the button start will not be working
    so the user confirm instructions? the button can be work but the main content will be=>(please press start to begin exam)
    the user press start ? the button will be (submit) and the main Content will be all questions
  */
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userData = JSON.parse(localStorage.getItem("user"));
      const allExamsArr = userData.examDetails;
      const theExam = allExamsArr.find((ele) => ele.id == id);
      setExam(() => {
        const allQue = theExam.quesArray.map((que) => {
          return { ...que, flagged: false, userAns: null };
        });
        return { ...theExam, quesArray: allQue };
      }); //it's like fetching from backend but no backend
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
  let asideComponent = useMemo(() => {
    return <Aside exam={exam} begin={begin} />;
  }, [exam, begin]);
  // ==================
  let mainContent = useMemo(() => {
    if (!userConfirm) {
      // when the user enter he will see instructions first
      return (
        <Instructions
          setUserConfirm={setUserConfirm}
          exam={exam}
          userData={userData}
        />
      );
    } else {
      //when the user clicked confirm to be true and that after he has read instructions
      if (begin) {
        //the user clicked on begin to be true then the exam show
        return <Questions exam={exam} setExam={setExam} />;
      } else {
        if (showQues) {
          return (
            <p className="text-center text-2xl">
              Make sure you are ready and phone is off.
            </p>
          );
        } else {
          return <Result exam={exam} />;
        }
      }
    }
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
