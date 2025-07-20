import React from "react";
import { allStudents } from "../../../../lib/data";
import { Contact } from "lucide-react";
import Credential from "./Credential";

function Intro() {
  return (
    <div className="left-details w-[100%] p-5 min-h-[360px] bg-slate-300 opacity-70 flex-1 flex flex-col justify-between">
      <h1 className="text-[2.5rem] text-center md:text-start md:text-5xl ">
        Welcome to Examination School
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-4 mt-3 md:mt-0 text-[1rem] md:text-lg">
        <p className="flex-1 border-right p-2 ">
          This is{" "}
          <span className="text-orange-400 font-bold">Testing Stage</span>,
          which is not a real-time project and without Server. <br />
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
                <Credential>
                  <p>UserName: {stud.userName}</p>
                </Credential>
                <Credential>
                  <p>Password: {stud.password}</p>
                </Credential>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-orange-400 font-extrabold tracking-wider">
        Mock of ITI exam interface
      </p>
    </div>
  );
}

export default Intro;
