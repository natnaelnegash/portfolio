import React from "react";
import icons from "../../../constants/icons";

const Skills = () => {
  return (
    <section id="skills" className="w-full h-[100vh] flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center w-full h-full p-2">
        <p className="text-4xl">Skills</p>
        <div className="flex items-center justify-center gap-46 w-full ">
          <p className="text-3xl">Front-end</p>
          <p className="text-3xl">Back-end</p>
          <p className="text-3xl">Databases</p>
          <p className="text-3xl">App-Dev</p>
        </div>
        <div className="w-full h-full grid grid-cols-4 items-center justify-items-center">
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.react_icon} className="w-[70px] h-[70px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.node_icon} className="w-[65px] h-[70px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.postgres_icon} className="w-[70px] h-[70px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.react_icon} className="w-[70px] h-[70px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.redux} className="w-[70px] h-[70px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.laravel} className="w-[70px] h-[70px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.mongo_icon} className="w-[45px] h-[75px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.flutter_icon} className="w-[63px] h-[70px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.tailwind_icon} className="w-[85px] h-[45px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.postman_icon} className="w-[70px] h-[70px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.prisma_icon} className="w-[60px] h-[70px]" />
          </div>
          <div className="w-[188px] h-[87px] flex items-center justify-center rounded-4xl bg-[#233D44] p-4">
            <img src={icons.firebase} className="w-[50px] h-[70px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
