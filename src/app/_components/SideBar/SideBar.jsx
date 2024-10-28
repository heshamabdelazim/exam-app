import React from "react";
import Figure from "./Figure";
import UserDetails from "./UserDetails";
import Quote from "./Quote";

function SideBar({ userData }) {
  return (
    <div className="basis-[20%] p-6 bg-backGround min-h-[100vh] rounded flex flex-col gap-7">
      <Figure userData={userData} />
      <Quote userData={userData} />
      <UserDetails userData={userData} />
    </div>
  );
}

export default SideBar;
