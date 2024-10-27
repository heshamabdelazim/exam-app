"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../lib/RTK/slices/studentSlice";
import Image from "next/image";
import { allStudents } from "../../../lib/data";
import Header from "./Header";

function UserInterface({ userData }) {
  const dispatch = useDispatch();

  const _logOut = () => {
    dispatch(logOut());
    localStorage.clear("user");
  };

  console.log(userData);
  return (
    <div>
      <Header userData={userData} />
      <button onClick={() => _logOut()}>Logout</button>
    </div>
  );
}

export default UserInterface;
