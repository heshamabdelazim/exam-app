"use client";
import React, { useEffect, useState } from "react";

function page({ params }) {
  // let [slug, setSlug] = useState(null);
  // const gettingSlug = () => params.then((res) => setSlug(res.slug));
  // useEffect(() => {
  //   gettingSlug();
  // }, []);
  //another way
  const { id } = React.use(params);

  let [exam, setExam] = useState(null);
  useEffect(() => {
    const allExamsArr = JSON.parse(localStorage.getItem("user")).examDetails;
    const theExam = allExamsArr.find((ele) => ele.id == id);
    setExam(theExam);
  }, []);
  console.log(exam);
  return (
    <div>
      {exam ? (
        <div className="grid grid-rows-7 grid-cols-9 min-h-[100vh] gap-2 gap-y-5">
          {/* header */}
          <header className="bg-cyan-500 row-span-1 col-span-9">
            <h2>{exam.name}</h2>
            <h3>Duration: {exam.duration}min</h3>
            <h3>Number of Questions: {exam.quesArray.length}</h3>
          </header>
          {/* arrows */}
          <div className="bg-red-700 row-span-6 col-span-1">Arrows</div>
          {/* question section */}
          <div className="bg-green-600 row-span-6 col-span-8">
            {" "}
            Question section
          </div>
        </div>
      ) : (
        <p className="text-center text-3xl">Looding...</p>
      )}
    </div>
  );
}

export default page;
