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
  const data = useSelector((data) => data.student);

  console.log(data);
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row gap-5 p-5 md:p-8 ${notoSerif.className}`}
      >
        <SideBar userData={userData} contentPadding="p-3 md:p-6" />
        <MainCont userData={userData} contentPadding="p-3 md:p-6" />
        {/* <Header userData={userData} /> */}
      </div>
    </>
  );
}

export default UserInterface;
