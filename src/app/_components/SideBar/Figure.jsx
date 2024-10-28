import Image from "next/image";
import React from "react";

function Figure({ userData }) {
  return (
    <figure className="flex justify-center items-center flex-col gap-2 ">
      {/* img */}
      <div className="w-[200px] h-[200px] rounded-full border border-white overflow-hidden border-[5px] p-2 bg-white">
        <Image src={userData.image} alt="user-img" width={200} height={200} />
      </div>
      {/* figcaption has name */}
      <figcaption className="font-extrabold text-2xl text-center">
        {userData.name}
      </figcaption>
      {/* title */}
      <p className="font-bold text-xl text-lightYellow mt-[-5px]">
        {userData.grade}th grade
      </p>
    </figure>
  );
}

export default Figure;
