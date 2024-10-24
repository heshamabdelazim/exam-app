"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../lib/RTK/slices/studentSlice";

function UserInterface({ userData }) {
  const dispatch = useDispatch();
  return (
    <div>
      this is user INterface Hello: {userData?.userName}
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}

export default UserInterface;
