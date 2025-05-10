import React, { useEffect, useState } from "react";

const Nav = () => {
  const [height, setHeight] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const minHeight = 10;
      const maxHeight = 60;
      const newHeight = Math.max(minHeight, maxHeight - scrollY);
      setHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      style={{
        height: `${height}px`,
        borderRadius: height < 60 && height,
        opacity: "-moz-initial",
      }}
      className="flex ease-out duration-200 transition-all fixed top-0 w-[1245px] z-100 justify-center place-items-center rounded-3xl h-[60px] p-2 bg-[#ABAFB5]"
    >
      <div className="flex justify-between w-1/2">
        <a
          href="#home"
          style={{
            color: "#122E34",
            transition: "all 0.3s",
            animation: "ease-out",
          }}
          className={height < 20 ? "text-1xl" : "text-2xl"}
        >
          Home
        </a>
        <a
          href="#skills"
          style={{
            color: "#122E34",
            transition: "all 0.3s",
            animation: "ease-out",
          }}
          className={height < 20 ? "text-1xl" : "text-2xl"}
        >
          Skills
        </a>
        <a
          href="#projects"
          style={{
            color: "#122E34",
            transition: "all 0.3s",
            animation: "ease-out",
          }}
          className={height < 20 ? "text-1xl" : "text-2xl"}
        >
          Projects
        </a>
        <a
          href="#contact_me"
          style={{
            color: "#122E34",
            transition: "all 0.3s",
            animation: "ease-out",
          }}
          className={height < 20 ? "text-1xl" : "text-2xl"}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Nav;
