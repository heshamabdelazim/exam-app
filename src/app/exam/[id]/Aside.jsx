import React from "react";

function Aside({ exam }) {
  return (
    <aside className=" row-span-6 col-span-1 flex flex-col items-end p-4 gap-8">
      {exam?.quesArray.map((que, ind) => (
        <a
          key={ind}
          href={que.id}
          className="bg-red-500 w-full h-14 flex justify-end items-center"
        >
          {" "}
          {que.id}
        </a>
      ))}
    </aside>
  );
}

export default Aside;
