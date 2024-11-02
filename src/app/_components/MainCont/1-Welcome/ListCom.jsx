import { Circle } from "lucide-react";
import React from "react";

function ListCom({ LineData }) {
  return (
    <li className="flex items-center gap-3 font-bold">
      <Circle
        fill="orange"
        stroke="none"
        width={10}
        height={10}
        className="basis-3"
      />{" "}
      {LineData}
    </li>
  );
}

export default ListCom;
