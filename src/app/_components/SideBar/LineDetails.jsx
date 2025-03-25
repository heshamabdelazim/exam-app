import React from "react";

function LineDetails({ head, value }) {
  return (
    <div>
      <span className="text-[13px]">{head}: </span>
      <span className="font-bold text-center text-sm ">
        {value ? value : "  not verified"}
      </span>
    </div>
  );
}

export default LineDetails;
