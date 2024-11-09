import { Flag } from "lucide-react";
import React, { useEffect, useRef } from "react";

function Questions({ exam, setExam }) {
  let { current: num } = useRef(1);

  const answering = (queId, userAns) => {
    const allQues = exam.quesArray.map((que) => {
      if (que.id == queId) {
        console.log(que);
        que.userAns = userAns;
      }
      return que;
    });
    setExam((old) => {
      return { ...old, quesArray: allQues };
    });
  };
  const nestedLoopAnswers = (que) => {
    return (
      <>
        {que.choices.map((choice, ind) => (
          <li key={ind} className="flex items-center gap-3">
            <input
              type="radio"
              id={num}
              name={que.id}
              value={choice}
              className="p-3"
              onChange={() => answering(que.id, choice)}
            />
            <label htmlFor={num++} className="text-sm md:text-xl">
              {choice}
            </label>
          </li>
        ))}
      </>
    );
  };

  const flaggingMethod = (id) => {
    const allQuesArr = exam.quesArray.map((que) => {
      if (que.id == id) {
        que.flagged = !que.flagged;
      }
      return que;
    });
    console.log(allQuesArr);
    setExam((old) => {
      return { ...old, quesArray: allQuesArr };
    });
  };
  return (
    <div>
      <ol className="">
        {exam?.quesArray.map((que, ind) => (
          <li key={que.id} id={`que${que.id}`}>
            <div
              className={`flex gap-2 md:gap-0 p-2 md:p-6 justify-between rounded items-start transition-all ${
                que.flagged ? "flagged" : "bg-transparent"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 md:gap-4">
                  <span className="text-lightOrange text-2xl">{ind + 1}.</span>
                  <h4 className="text-xl md:text-3xl ">{que.QHead}</h4>
                </div>
                <ol className="my-7 mt-3 flex flex-col gap-5 pl-9 ">
                  {nestedLoopAnswers(que)}
                </ol>
              </div>
              <span
                className="p-3 rounded-full bg-backGround cursor-pointer hover:bg-secondBackGround transition"
                onClick={() => flaggingMethod(que.id)}
              >
                <Flag fill="orange" />
              </span>
            </div>
            <hr className="bg-red-500 p-[0.05rem]" />
          </li>
        ))}
      </ol>
    </div>
  );
  // Note I notice that the input always render when I opened the console so I made it memoization for caching data
}

export default Questions;
