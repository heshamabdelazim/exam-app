import React from "react";
import ListCom from "../../ListCom";

function NewsList({ userData }) {
  return (
    <ul className="mt-3 flex flex-col gap-3 ">
      {userData.news.map((ele, ind) => (
        <ListCom LineData={ele} key={ind} /> //
      ))}
    </ul>
  );
}

export default NewsList;
