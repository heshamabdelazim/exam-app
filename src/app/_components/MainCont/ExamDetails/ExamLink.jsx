import Link from "next/link";
import React from "react";

function ExamLink({ id, describe, strongClass }) {
  return (
    <strong
      className={`basis-1/4 text-center  hover:text-green-700 text-[red] ${strongClass}`}
    >
      <Link href={`/exam/${id}`}>{describe}</Link>
    </strong>
  );
}

export default ExamLink;
