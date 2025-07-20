"use client";
import { X } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../../../lib/RTK/slices/error";

function ErrorHandling({ children }) {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.errorTxt);

  return (
    <>
      {children}
      {isError && (
        <div
          className="bg-[white] bg-opacity-5 fixed z-50 inset-0 animate-none backdrop-blur-[1.2px]"
          onClick={() => {
            dispatch(setError(null));
          }}
        >
          <div className=" pop-up bg-opa shadow-[0_0_20px_gray] text-lightOrange bg-secondBackGround">
            <p className="font-bold">Sorry, Something went wrong</p>
            <p className="text-4xl">{isError}</p>
            <button
              className="absolute left-[101%] top-[-1%] p-2 rounded bg-secondBackGround hover:bg-lightOrange hover:text-white transition"
              onClick={() => {
                dispatch(setError(null));
              }}
            >
              <X size={32} strokeWidth={3} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ErrorHandling;

/*

<X size={32} strokeWidth={1} />
*/
