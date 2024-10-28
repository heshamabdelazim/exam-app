"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../lib/RTK/slices/studentSlice";
import Image from "next/image";
import { allStudents } from "../../../lib/data";
import Header from "./Header";
import SideBar from "./SideBar/SideBar";
import MainCont from "./MainCont/MainCont";
import { notoSerif } from "../fonts/fonts";

function UserInterface({ userData }) {
  const dispatch = useDispatch();

  const _logOut = () => {
    dispatch(logOut());
    localStorage.clear("user");
  };

  console.log(userData);
  return (
    <>
      <div className={`flex gap-5 p-8 ${notoSerif.className}`}>
        <SideBar userData={userData} />
        <MainCont userData={userData} />
        {/* <Header userData={userData} /> */}
      </div>
      <button onClick={() => _logOut()}>Logout</button>
    </>
  );
}

export default UserInterface;
