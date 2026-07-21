import React from "react";
import profile from "@/assets/images/profile.jpg";
import { motion } from "framer-motion";
import MagneticElement from "@/components/MagneticElement";

const Who_Am_I = () => {
  const topSkills = ["React", "Node.js", "Flutter", "Tailwind CSS", "MongoDB", "PostgreSQL"];

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative w-full max-w-[480px] pt-16 flex flex-col items-center"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <MagneticElement>
          <div className="w-[130px] h-[130px] rounded-full border-4 border-[#0b1121] overflow-hidden shadow-[0_0_30px_rgba(0,210,255,0.4)] hover:shadow-[0_0_40px_rgba(0,210,255,0.6)] transition-shadow duration-300">
            <img className="w-full h-full object-cover" src={profile} alt="Profile" />
          </div>
        </MagneticElement>
      </div>
      
      <div className="glass-card rounded-[2.5rem] p-8 md:p-10 pt-24 flex flex-col items-center text-center w-full z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Hi, I'm <span className="text-gradient">Natnael</span></h2>
        <h3 className="text-xl md:text-2xl font-medium text-[#00d2ff] mb-6">Full-Stack Developer</h3>
        
        <p className="text-white/80 text-base leading-relaxed mb-6">
          I architect and build scalable, high-performance web applications and fluid mobile experiences. From pixel-perfect front-ends to robust backend systems, I turn complex problems into elegant digital solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {topSkills.map(skill => (
            <span key={skill} className="px-4 py-1.5 text-sm font-medium bg-[#00d2ff]/10 text-[#00d2ff] rounded-full border border-[#00d2ff]/20 shadow-sm">
              {skill}
            </span>
          ))}
        </div>

        <MagneticElement>
          <a 
            href="/cv.pdf" 
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full font-bold text-[#0b1121] bg-[#00d2ff] hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] cursor-pointer inline-flex items-center gap-2"
          >
            <span>Download Résumé</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </a>
        </MagneticElement>
      </div>
    </motion.div>
  );
};

export default Who_Am_I;
