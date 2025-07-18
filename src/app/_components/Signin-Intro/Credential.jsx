"use client";
import { Copy } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

function Credential({ children, test }) {
  //the children is a react element=>  <p>UserName: hesham@12</p>

  let [msg, setMsg] = useState(null);
  const handleCopy = () => {
    let isCopied = navigator.clipboard.writeText(children.props.children[1]);
    try {
      if (isCopied) setMsg("COPIED!");
    } catch (err) {
      setMsg("sorry!");
    }
  };

  useEffect(() => {
    let intervalID;
    if (msg) intervalID = setTimeout(() => setMsg(""), 1000);
    return () => clearTimeout(intervalID);
  }, [msg]);

  return (
    <div className="flex justify-between gap-2">
      {children}
      <button className="relative" onClick={() => handleCopy()}>
        <Copy />
        {msg && (
          <span className="rounded p-3 absolute bottom-[90%] left-[50%] translate-x-[-50%] bg-yellow-300">
            {msg}
          </span>
        )}
      </button>
    </div>
  );
}

export default Credential;
