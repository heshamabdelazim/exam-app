"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userValidation } from "../../../lib/RTK/slices/studentSlice";
import FormInput from "./FormInput";
import { Contact } from "lucide-react";
import { allStudents } from "../../../lib/data";

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
          user.userName == formData.userName.trim() &&
          user.password == formData.password
      );

      if (ifUser) {
        dispatch(userValidation({ ...ifUser })); //why spread? because the output is with class like this => Student{id:..,...,...} so I made it normal object
        window.localStorage.setItem("user", JSON.stringify({ ...ifUser }));
      } else {
        setFormData((old) => {
          return { ...old, sorry: "sorry, Wrong user name or password" };
        });
      }
    }
  };

  return (
    <div className="formParent p-[1rem] flex justify-center items-center gap-[0.5rem] flex-col lg:flex-row">
      <div className="left-details w-[100%] p-5 min-h-[360px] bg-slate-300 opacity-70 flex-1 flex flex-col justify-between">
        <h1 className="text-[2.5rem] text-center md:text-start md:text-5xl ">
          Welcome to examination School
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-3 md:mt-0 text-[1rem] md:text-lg">
          <p className="flex-1 border-right p-2 ">
            This is{" "}
            <span className="text-orange-400 font-bold">Development Mode</span>,
            which is not a real-time project and without backend. <br />
            So, Here are some accounts of random students for testing.
          </p>

          <ul className="flex flex-wrap justify-center  md:flex-col gap-4 p-0 md:p-2 my-4 md:my-0">
            {allStudents.map((stud) => (
              <li
                key={stud.userId}
                className="flex items-center gap-3 md:gap-5 text-center"
              >
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
      <form className="min-h-[360px] w-[100%]" onSubmit={(e) => validation(e)}>
        <h4 className="text-lightOrange text-2xl text-center font-bold tracking-widest  ">
          Hello!
        </h4>
        <p className="my-4 text-white md:text-black text-center">
          It's good to see you.
        </p>
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
