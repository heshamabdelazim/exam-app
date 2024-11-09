"use client";
import React, { useEffect } from "react";

function Aside({ exam, test }) {
  console.log(exam.quesArray);
  return (
    <aside className=" row-span-6 col-span-1 flex flex-col items-end p-4 gap-8 bg-slate-100">
      {exam?.quesArray.map((que, ind) => (
        <a
          key={ind}
          href={`#que${que.id}`}
          className={`relative w-[90%] h-10 flex justify-center items-center hover:border transition-all ${
            que.flagged ? "bg-secondBackGround" : "bg-slate-300"
          }`}
        >
          {ind + 1}
        </a>
      ))}
    </aside>
  );
}

export default Aside;
