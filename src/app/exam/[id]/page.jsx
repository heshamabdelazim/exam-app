"use client";
import { notoSerif } from "@/app/fonts/fonts";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowBigRight } from "lucide-react";
import QuestionComp from "./QuestionComp";
import Timer from "./Timer";
import Aside from "./Aside";
import Questions from "./Questions";

function page({ params }) {
  // let [slug, setSlug] = useState(null);
  // const gettingSlug = () => params.then((res) => setSlug(res.slug));
  // useEffect(() => {
  //   gettingSlug();
  // }, []);
  //another way
  const { id } = React.use(params);

  let [exam, setExam] = useState(null);
  let [font, setFont] = useState(null); //to avoid hydration
  let [timeNums, setTimeNums] = useState(null);
  let [begin, setBegin] = useState(false);

  useEffect(() => {
    const allExamsArr = JSON.parse(localStorage.getItem("user")).examDetails;
    const theExam = allExamsArr.find((ele) => ele.id == id);
    setExam(theExam); //it's like fetching from backend but no backend
    setFont(notoSerif.className); //to avoid hydration
    setTimeNums({
      min: theExam?.duration.min,
      hr: theExam?.duration.hr,
      sec: "0",
    });
  }, []);
  return (
    <div
      className={`${
        font ? font : ""
      } grid grid-rows-7 grid-cols-12 min-h-[100vh] max-h-[100vh]  `}
    >
      {exam ? (
        <>
          <header className="bg-secondBackGround gap-4 row-span-1 col-span-12 flex justify-between items-center px-11 shadow-lg">
            <div className="text-[3rem] text-lightOrange flex justify-center items-center">
              {exam.name}
            </div>
            <Timer
              exam={exam}
              begin={begin}
              setBegin={setBegin}
              setTimeNums={setTimeNums}
              timeNums={timeNums}
            />
            <div className="flex flex-col justify-center items-center">
              <strong>
                Duration{" "}
                {exam.duration.hr
                  ? `${exam.duration.hr} : ${exam.duration.min} hr`
                  : `${exam.duration.min}min`}
              </strong>
              <strong>Number of Questions: {exam.quesArray.length}</strong>
            </div>
          </header>

          <Aside exam={exam} />
          <Questions exam={exam} />
        </>
      ) : (
        <p className="text-center text-3xl">Looding...</p>
      )}
    </div>
  );
}

export default page;

// NOOOTE : the error of hydration because of the font.className is different

/*
{exam ? (
        <div className="grid grid-rows-7 grid-cols-9 min-h-[100vh] gap-2 gap-y-5 ">
          <header className="bg-backGround gap-4 row-span-1 col-span-9 flex justify-between px-11 py-4  ">
            <h2 className="text-[3rem] text-lightYellow">{exam.name}</h2>
            <Timer />
            <ul className="flex flex-col">
              <strong>Duration: {exam.duration}min</strong>
              <strong>Number of Questions: {exam.quesArray.length}</strong>
            </ul>
          </header>

          <aside className="bg-red-700 row-span-6 col-span-1 flex flex-col">
            {exam?.quesArray.map((que, ind) => (
              <div key={ind}> {que.id}</div>
            ))}
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </aside>

          <div className="bg-green-600 row-span-6 col-span-8">
            {" "}
            Question section
          </div>
        </div>
      ) : (
        <p className="text-center text-3xl">Looding...</p>
      )}
*/
