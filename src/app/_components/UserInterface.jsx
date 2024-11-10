"use client";
import React from "react";
import { useSelector } from "react-redux";
import SideBar from "./SideBar/SideBar";
import MainCont from "./MainCont/MainCont";
import { notoSerif } from "../fonts/fonts";

function UserInterface({ userData }) {
  const data = useSelector((data) => data.student);

  return (
    <>
      <div
        className={`flex flex-col lg:flex-row gap-5 p-5 md:p-8 ${notoSerif.className}`}
      >
        <SideBar userData={userData} contentPadding="p-3 md:p-6" />
        <MainCont userData={userData} contentPadding="p-3 md:p-6" />
      </div>
    </>
  );
}

export default UserInterface;
