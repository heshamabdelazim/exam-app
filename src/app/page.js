"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import UserInterface from "./_components/UserInterface";
import FormValidation from "./_components/FormValidation";
import { useEffect } from "react";
import { userValidation } from "../../lib/RTK/slices/studentSlice";

export default function Home() {
  const user = useSelector((data) => data.student);
  const dispatch = useDispatch();
  // console.log(user.percent());
  console.log(user);

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
