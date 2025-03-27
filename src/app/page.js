"use client";
import { useDispatch, useSelector } from "react-redux";
import UserInterface from "./_components/UserInterface";
import FormValidation from "./_components/FormValidation";
import { useEffect } from "react";
import { userValidation } from "../../lib/RTK/slices/studentSlice";
import { Student } from "../../lib/data";

export default function Home() {
  const user = useSelector((data) => data.student);
  const dispatch = useDispatch();

  useEffect(() => {
    const ifUser = localStorage.getItem("user");
    if (ifUser) {
      const currentUser = JSON.parse(ifUser);
      dispatch(userValidation(currentUser));
    }
  }, []);

  return (
    <main className="">
      {user ? <UserInterface userData={user} /> : <FormValidation />}
    </main>
  );
}
