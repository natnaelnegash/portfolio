import React from "react";

const Contacts = ({ icon, contact, link }) => {
  return (
    <a href={link}>
      <div className="flex items-center w-[380px] h-[40px] gap-2">
        <img src={icon} className="w-[25px] h-[25px]" />
        <p className="flex-9/10 h-full text-2xl font-normal text-white">
          {contact}
        </p>
      </div>
    </a>
  );
};

export default Contacts;
