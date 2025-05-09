import React from "react";
import icons from "../../constants/icons";

const Project_Right = ({ link, title, detail }) => {
  return (
    <a href={link}>
      <div className="flex font-normal text-white justify-between items-center w-[563px] rounded-4xl bg-[#677E8A] hover:bg-[#677e8a8e] transition-all duration-400 ease-out h-[300px] p-5 gap-3 cursor-pointer">
        <div className="h-[190px] w-[270px] flex flex-col justify-center gap-4">
          <p className="text-2xl">{title}</p>
          <p className="text-1xl">{detail}</p>
        </div>
        <div className="rounded-3xl h-full w-[220px] bg-[#D9D9D9]"></div>
        <img
          src={icons.arrow}
          className="w-[40px] h-[40px] hover:scale-150 duration-400"
        />
      </div>
    </a>
  );
};

export default Project_Right;
