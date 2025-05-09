import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./screens/Home/Home";
import Skills from "./screens/Home/Skills";
import Projects from "./screens/Home/Projects";
import Contact_Me from "./screens/Home/Contact_Me";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="flex flex-col w-[1280px] p-[1rem] h-full">
        <Nav />
        <Home />
        <Skills />
        <Projects />
        <Contact_Me />
      </div>
    </>
  );
}

export default App;
