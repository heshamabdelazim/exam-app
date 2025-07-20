"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userValidation } from "../../../../lib/RTK/slices/studentSlice";
import FormInput from "../FormInput";
import { allStudents } from "../../../../lib/data";

function Signform() {
  let [formData, setFormData] = useState({
    userName: "",
    password: "",
    sorry: null,
  }); //this is bad useState acts like Heap data-structure. If a key changes, all state will be updated
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
        dispatch(userValidation({ ...ifUser })); //why spread? because the output is class object like this => Student{id:..,...,...} so I made it plain object
        window.localStorage.setItem("user", JSON.stringify({ ...ifUser }));
      } else {
        setFormData((old) => {
          return { ...old, sorry: "sorry, Wrong user name or password" };
        });
      }
    }
  };
  return (
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
          className="cursor-pointer hover:bg-lightOrange p-3 bg-lightYellow transition "
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
  );
}

export default Signform;
