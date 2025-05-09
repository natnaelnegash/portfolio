import React from "react";
import Who_Am_I from "./Who_Am_I";
import What_I_Do from "./What_I_Do";

const About_Me = () => {
  return (
    <div className="flex justify-between w-full h-[570px] items-center">
      <Who_Am_I />
      <What_I_Do />
    </div>
  );
};

export default About_Me;
