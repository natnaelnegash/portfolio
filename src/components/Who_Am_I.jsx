import React from "react";
import profile from "../../../../Downloads/Telegram Desktop/profile.jpg";

const Who_Am_I = () => {
  return (
    <div className="rounded-4xl w-[384px] h-[520px] flex flex-col justify-end pb-4 items-center bg-[#233D44]">
      <div className="border-5 border-[#233D44] w-[123px] h-[123px] rounded-full absolute top-21 z-10 overflow-hidden">
        <img className="w-full h-full object-cover" src={profile} />
      </div>
      <div className="w-[306px] h-[430px] rounded-3xl bg-[#677E8A] p-5">
        <div className="w-full h-full">
          <p className="text-2xl">Who Am I</p>
          <p className="text-1xl px-2 pl-4">
            I am Natnael, a passionate full-stack web-developer and UI/UX
            designer focusing on developing my creative skills. Always open to
            learn new tech stacks, collaborative energy with team
          </p>
          <p className="text-2xl">Education</p>
          <div className="flex justify-center items-center">
            <div className="text-1xl px-2 pl-4">
              I am currently a computer science and engneering student at Adama
              Science and Technology University. I have some internship
              experience at web and app development company called EagleLion Plc
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who_Am_I;
