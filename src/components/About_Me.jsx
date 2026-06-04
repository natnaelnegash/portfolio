import React from "react";
import Who_Am_I from "@/components/Who_Am_I";
import What_I_Do from "@/components/What_I_Do";

const About_Me = () => {
  return (
    <div className="flex flex-col w-full items-center gap-32">
      <div className="w-full flex justify-center">
        <Who_Am_I />
      </div>
      <div className="w-full flex justify-center w-full">
        <What_I_Do />
      </div>
    </div>
  );
};

export default About_Me;
