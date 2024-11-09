"use client";
import React from "react";
import Figure from "./Figure";
import UserDetails from "./UserDetails";
import Quote from "./Quote";
import { useDispatch } from "react-redux";
import { logOut } from "../../../../lib/RTK/slices/studentSlice";

function SideBar({ userData }) {
  const dispatch = useDispatch();
  const _logOut = () => {
    dispatch(logOut());
    localStorage.clear("user");
  };

  return (
    <div
      className={`relative basis-[10%] md:basis-[20%] bg-backGround min-h-[100vh] rounded flex flex-col gap-7 p-3 md:p-6`}
    >
      <button
        className="absolute top-0 left-0  p-2 rounded bg-slate-400 text-slate-200 hover:text-white transition"
        onClick={() => _logOut()}
      >
        Logout
      </button>
      <Figure userData={userData} />
      <Quote userData={userData} />
      <UserDetails userData={userData} />
    </div>
  );
}

export default SideBar;
