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
          className=" popp-bg bg-[white] bg-opacity-5 fixed z-50 inset-0 backdrop-blur-[1.2px]"
          onClick={() => {
            dispatch(setError(null));
          }}
        >
          <div className=" popp w-[90%] md:w-[50%] min-h-[15vh] shadow-[0_0_20px_gray] text-lightOrange bg-secondBackGround">
            <p className="font-bold text-xl lg:text-4xl ">
              Sorry, Something went wrong
            </p>
            <p className="text-lg md:text-2xl">{isError}</p>
            <button
              className="absolute left-[80%] md:left-[101%] top-[-35%] md:top-[-1%] p-2 rounded bg-secondBackGround hover:bg-lightOrange hover:text-white transition"
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
