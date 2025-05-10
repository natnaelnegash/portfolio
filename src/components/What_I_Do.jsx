import React from "react";
import web_icon from "@/assets/icons/Group.png";
import figma_icon from "@/assets/icons/Figma.png";
import flutter_icon from "@/assets/icons/flutter.png";

const What_I_Do = () => {
  return (
    <div className="rounded-4xl w-[448px] h-[520px] flex justify-center items-center bg-[#233D44]">
      <div className="w-[374px] h-[470px] rounded-3xl bg-[#677E8A] p-3">
        <div className="flex flex-col gap-2 w-full h-full">
          <p className="text-2xl">What I Do</p>
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center w-[282px] h-[120px] bg-[#ABAFB5] p-2 gap-2">
              <div>
                <img src={web_icon} />
              </div>
              <div>
                <p className="text-[18px]">Web Development</p>
                <p className="text-[14px] w-[150px] h-[80px] ml-3">
                  Creative web developer specializing in react on front-end and
                  nodejs on back-end
                </p>
              </div>
            </div>
            <div className="flex items-center w-[282px] h-[120px] bg-[#ABAFB5] p-2 gap-2">
              <div>
                <img src={figma_icon} />
              </div>
              <div>
                <p className="text-[18px]">UI/UX Designer</p>
                <p className="text-[14px] w-[150px] h-[80px] ml-3">
                  Creative designs focusing on user ease of use and attractive
                  interfaces
                </p>
              </div>
            </div>
            <div className="flex items-center w-[282px] h-[120px] bg-[#ABAFB5] p-2 gap-2">
              <div>
                <img src={flutter_icon} />
              </div>
              <div>
                <p className="text-[16px]">Mobile App Developer</p>
                <p className="text-[14px] w-[150px] h-[80px] ml-3">
                  I use both reactnative and flutter for developing cool
                  applicaitons
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What_I_Do;
