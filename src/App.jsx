import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/screens/Home/Home";
import What_I_Do from "@/components/What_I_Do";
import Experience from "@/screens/Home/Experience";
import Skills from "@/screens/Home/Skills";
import Projects from "@/screens/Home/Projects";
import Contact_Me from "@/screens/Home/Contact_Me";
import Nav from "@/components/Nav";

const BackgroundParticles = lazy(() => import("@/components/BackgroundParticles"));
const ProjectDetail = lazy(() => import("@/screens/ProjectDetail"));

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0b1121] text-white selection:bg-[#00d2ff] selection:text-[#0b1121] relative z-0">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Suspense fallback={null}>
        <BackgroundParticles />
      </Suspense>
      <Nav />
      <main id="main-content" className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <What_I_Do />
              <Experience />
              <Skills />
              <Projects />
              <Contact_Me />
            </>
          } />
          <Route path="/project/:id" element={
            <Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#00d2ff] border-t-transparent rounded-full animate-spin"></div></div>}>
              <ProjectDetail />
            </Suspense>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
