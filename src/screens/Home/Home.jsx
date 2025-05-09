import React from "react";
import Nav from "../../components/Nav";
import About_Me from "../../components/About_Me";

const Home = () => {
  return (
    <section id="home" className="w-full h-[100vh] flex flex-col gap-10">
      <div className="flex justify-between w-1/2 h-[60px]"></div>
      <About_Me />
    </section>
  );
};

export default Home;
