import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "@/screens/Home/Home";
import Experience from "@/screens/Home/Experience";
import Skills from "@/screens/Home/Skills";
import Projects from "@/screens/Home/Projects";
import Contact_Me from "@/screens/Home/Contact_Me";
import Nav from "@/components/Nav";
import BackgroundParticles from "@/components/BackgroundParticles";
import ProjectDetail from "@/screens/ProjectDetail";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0b1121] text-white selection:bg-[#00d2ff] selection:text-[#0b1121] relative z-0">
      <BackgroundParticles />
      <Nav />
      <main className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Experience />
              <Skills />
              <Projects />
              <Contact_Me />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
