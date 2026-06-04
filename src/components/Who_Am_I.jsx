import React from "react";
import profile from "@/assets/images/profile.jpg";
import { motion } from "framer-motion";

const Who_Am_I = () => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative w-full max-w-[380px] pt-16"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] rounded-full border-4 border-[#0b1121] z-10 overflow-hidden shadow-[0_0_20px_rgba(0,210,255,0.3)]">
        <img className="w-full h-full object-cover" src={profile} alt="Profile" />
      </div>
      
      <div className="glass-card rounded-[2rem] p-8 pt-20 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Who Am I</h2>
        <p className="text-white/80 text-sm leading-relaxed mb-6">
          I am Natnael, a passionate full-stack web developer and UI/UX designer focusing on developing my creative skills. Always open to learn new tech stacks, collaborative energy with team.
        </p>
        
        <div className="w-full h-[1px] bg-white/10 mb-6"></div>
        
        <h3 className="text-xl font-semibold mb-3 text-gradient-accent">Education</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          I am currently a computer science and engineering student at Adama Science and Technology University. I have some internship experience at web and app development company called EagleLion Plc.
        </p>
      </div>
    </motion.div>
  );
};

export default Who_Am_I;
