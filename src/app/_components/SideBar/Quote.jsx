import { dynaPuff } from "@/app/fonts/fonts";
import { QuoteIcon } from "lucide-react";
import React from "react";

function Quote({ userData }) {
  return (
    <div className={`${dynaPuff.className}`}>
      <QuoteIcon
        fill="orange"
        stroke="none"
        width={35}
        height={35}
        className="m-auto mb-[4px]"
      />
      <p className="text-center font-light tracking-wider ">{userData.quote}</p>
    </div>
  );
}

export default Quote;
