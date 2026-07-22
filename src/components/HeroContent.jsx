import React from "react";
import profile from "@/assets/images/profile.webp";
import { motion } from "framer-motion";
import MagneticElement from "@/components/MagneticElement";

const HeroContent = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between w-full gap-12 lg:gap-16">
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        <p className="text-[#00d2ff] font-medium text-lg mb-4 tracking-wide">Hi, I'm Natnael</p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          I build{" "}
          <span className="text-gradient-accent">production-grade</span>
          <br />
          software that scales.
        </h1>

        <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
          Full-stack engineer specializing in React, Node.js, and Flutter. 
          I architect scalable web platforms and cross-platform mobile experiences — 
          from database design to pixel-perfect interfaces.
        </p>

        {/* Credibility Metrics */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-2xl md:text-3xl font-bold text-white">2+</span>
            <span className="text-sm text-white/50">Years Building</span>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-2xl md:text-3xl font-bold text-white">10+</span>
            <span className="text-sm text-white/50">Projects Shipped</span>
          </div>
          <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-2xl md:text-3xl font-bold text-white">Full-Stack</span>
            <span className="text-sm text-white/50">Specialization</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <MagneticElement>
            <a 
              href="#projects"
              className="px-8 py-4 rounded-full font-bold text-[#0b1121] bg-[#00d2ff] hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] inline-flex items-center gap-2"
            >
              <span>View My Work</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
          </MagneticElement>
          {/* <MagneticElement>
            <a 
              href="/cv.pdf" 
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:border-[#00d2ff]/50 hover:text-[#00d2ff] transition-all inline-flex items-center gap-2"
            >
              <span>Download Résumé</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </MagneticElement> */}
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex-shrink-0"
      >
        <MagneticElement>
          <div className="relative">
            <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-4 border-[#0b1121] shadow-[0_0_40px_rgba(0,210,255,0.3)] hover:shadow-[0_0_60px_rgba(0,210,255,0.5)] transition-shadow duration-500">
              <img 
                className="w-full h-full object-cover" 
                src={profile} 
                alt="Natnael Negash — Full-Stack Developer" 
                width="280"
                height="280"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#00d2ff]/20 scale-110 animate-pulse pointer-events-none" aria-hidden="true"></div>
          </div>
        </MagneticElement>
      </motion.div>
    </div>
  );
};

export default HeroContent;
