"use client";
import React from "react";

import { Contact } from "lucide-react";
import { allStudents } from "../../../lib/data";
import Signform from "./Signin-Intro/Signform";
import Intro from "./Signin-Intro/Intro";

function FormValidation() {
  return (
    <div className="formParent p-[1rem] flex justify-center items-center gap-[0.5rem] flex-col lg:flex-row">
      <Intro />
      <Signform />
    </div>
  );
}

export default FormValidation;
