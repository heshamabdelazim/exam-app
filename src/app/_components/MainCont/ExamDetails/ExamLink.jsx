import Link from "next/link";
import React from "react";

function ExamLink({ id, describe }) {
  return (
    <strong className="basis-1/4 text-center  hover:text-green-700">
      <Link href={`/exam/${id}`}>{describe}</Link>
    </strong>
  );
}

export default ExamLink;
