"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userValidation } from "../../../lib/RTK/slices/studentSlice";
import FormInput from "./FormInput";
import { allStudents } from "../../../lib/data";
import { Contact } from "lucide-react";

function FormValidation() {
  let [formData, setFormData] = useState({
    userName: "",
    password: "",
    sorry: null,
  });
  const dispatch = useDispatch();

  const validation = (e) => {
    e.preventDefault();
    if (formData.userName && formData.password) {
      const ifUser = allStudents.find(
        (user) =>
          user.password == formData.password &&
          user.userName == formData.userName
      );
      ifUser
        ? dispatch(userValidation(ifUser))
        : setFormData((old) => {
            return { ...old, sorry: "sorry, Wrong user name or password" };
          });
    }
  };

  return (
    <div className="formParent p-[1rem] flex justify-center items-center gap-[0.5rem] flex-col md:flex-row">
      <div className="left-details p-5 min-h-[360px] bg-secondary flex-1 flex flex-col justify-between">
        <h1 className="text-[2.5rem]">Welcome to examination environment</h1>
        <div className="flex gap-4 ">
          <p className="flex-1 border-right p-2">
            This is{" "}
            <span className="text-orange-400 font-bold">Development Mode</span>,
            which is not a real-time project and without backend. <br />
            So, As a developer I prepared some accounts of random students to
            test it.
          </p>

          <ul className="flex  flex-col gap-4  p-2 ">
            {allStudents.map((stud) => (
              <li key={stud.id} className="flex items-center gap-5">
                <Contact className="text-orange-400" />
                <div className="flex-1">
                  <p>UserName: {stud.userName}</p>
                  <p>Password: {stud.password}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-orange-400 font-extrabold tracking-wider">
          Mock of ITI exam interface
        </p>
      </div>
      <form className="min-h-[360px]" onSubmit={(e) => validation(e)}>
        <h4 className="text-lightOrange text-2xl text-center font-bold tracking-widest  ">
          Hello!
        </h4>
        <p className="my-4 text-black text-center">It's good to see you.</p>
        <div className="flex flex-col gap-4">
          <FormInput form={{ formData, setFormData }} />
          <FormInput type="password" form={{ formData, setFormData }} />
          <input
            type="submit"
            value="Log in"
            className="cursor-pointer hover:bg-lightOrange p-3 bg-lightYellow transition"
          />
        </div>
        <h3
          className={`text-center ${
            formData.sorry ? "h-[24px]" : "h-0"
          } transition-[height] duration-[0.7s] overflow-hidden`}
        >
          {formData.sorry}
        </h3>
      </form>
    </div>
  );
}

export default FormValidation;
