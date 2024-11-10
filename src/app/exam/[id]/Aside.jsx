"use client";
import { Ban } from "lucide-react";
import React, { useEffect } from "react";

function Aside({ exam, begin }) {
  return (
    <aside
      className={`row-span-6 col-span-1 flex flex-col items-center px-1 py-4 md:p-4 gap-8 bg-slate-100 overflow-hidden  ${
        !begin ? "justify-center text-gray-400" : ""
      }`}
    >
      {begin ? (
        exam.quesArray.map((que, ind) => (
          <a
            key={ind}
            href={`#que${que.id}`}
            className={`relative w-[90%] h-10 flex justify-center items-center hover:border transition-all ${
              que.flagged ? "bg-secondBackGround" : "bg-slate-300"
            }`}
          >
            {ind + 1}
          </a>
        ))
      ) : (
        <>
          <Ban width={50} height={50} />
        </>
      )}
    </aside>
  );
}

export default Aside;
