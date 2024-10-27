import Image from "next/image";
import React from "react";

function Header({ userData }) {
  //classes used many times
  const spanClasses = "font-bold text-lightOrange";
  const barParentClasses = "flex items-center gap-6"; //this is the bar line parent that holds everything
  const barBorderClasses =
    "h-6 inline-block  w-40 bg-white overflow-hidden border  border-lightYellow  rounded-full"; //this is the tube of the bar
  const barItselfClasses =
    "flex justify-center items-center rounded-e-full border-r-2 bg-lightOrange h-[100%] text-sm";
  const anyRemaining = () => {
    const ifRemaining =
      userData.examsIds.length !== userData.examsFinished.length;
    return ifRemaining ? (
      <p>
        {" "}
        You have finished{" "}
        <span className={spanClasses}>
          {userData.examsFinished.length}
        </span>{" "}
        exams, But still{" "}
        <span className={spanClasses}>
          {userData.examsIds.length - userData.examsFinished.length}{" "}
        </span>
        remaining.
      </p>
    ) : (
      <p>You have finished all your exams successfully.</p>
    );
  };

  return (
    <header>
      <figure className=" flex gap-5 flex-col lg:flex-row items-center bg-primary p-6 ">
        <div className="bg-white flex items-center justify-center border border-lightOrange rounded-full overflow-hidden basis-[20%] border-x-2">
          <div className="relative w-40 h-60 ">
            <Image src={userData.image} alt="stud" fill />
          </div>
        </div>
        <div className="text-md md:text-xl font-semibold tracking-[0.1rem]">
          <p className="text-3xl mb-7">
            Welcome <span className={spanClasses}>{userData.name}</span> It's
            good to see you
          </p>
          <div className="flex flex-col gap-3">
            <p>ID: {userData.id}</p>
            <p>Grade: {userData.grade}th level</p>
            <div className={barParentClasses}>
              <p>Progress: </p>
              <div className={barBorderClasses}>
                <div
                  className={barItselfClasses}
                  style={{ width: `${userData.progress}%` }}
                >
                  {userData.progress}%
                </div>
              </div>
              {anyRemaining()}
            </div>
            <div className={barParentClasses}>
              <p>Total Score: </p>
              <div className={barBorderClasses}>
                <div
                  className={barItselfClasses}
                  style={{ width: `${userData.totalScore}%` }}
                >
                  {userData.totalScore}%
                </div>
              </div>
              <p>
                Performance Level:{" "}
                <span className={spanClasses}>{userData.gradeLetter}</span>
              </p>
            </div>
          </div>
        </div>
      </figure>
    </header>
  );
}

export default Header;
