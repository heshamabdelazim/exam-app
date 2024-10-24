"use client";
import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";

function FormInput({ type, form }) {
  const ifPassword = type === "password"; //to deferntiate between inputs(text or password)
  let [password, setPassword] = useState(ifPassword && true); // true : false
  const iconClasses = "passIcon absolute z-50 cursor-pointer";

  console.log(form); //output is
  /*
    formData: {userName: 'Hesham', password: 'Abdelazim', sorry: null}
    setFormData : ƒ ()
  */

  const updating = (e) => {
    ifPassword
      ? form.setFormData((old) => {
          return { ...old, password: e.target.value, sorry: null };
        })
      : form.setFormData((old) => {
          return { ...old, userName: e.target.value, sorry: null };
        });
  };

  return (
    <div className="relative w-[100%]">
      <input
        type={`${password ? "password" : "text"}`}
        placeholder={`${ifPassword ? "Password" : "UserName"}`}
        id={`${ifPassword ? "password" : "username"}`}
        className="p-4 rounded w-[100%] focus:outline-none"
        onInput={(e) => updating(e)}
        value={ifPassword ? form.formData.password : form.formData.userName}
      />
      {ifPassword && (
        <>
          {password ? (
            <EyeClosed
              className={iconClasses}
              onClick={() => setPassword((old) => !old)}
            />
          ) : (
            <Eye
              className={iconClasses}
              onClick={() => setPassword((old) => !old)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default FormInput;
