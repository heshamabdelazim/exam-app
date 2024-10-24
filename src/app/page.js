"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import UserInterface from "./_components/UserInterface";
import FormValidation from "./_components/FormValidation";

export default function Home() {
  const user = useSelector((data) => data.student);

  console.log(user);
  return (
    <main className="">
      {user ? <UserInterface userData={user} /> : <FormValidation />}
    </main>
  );
}
