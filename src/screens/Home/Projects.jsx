import React from "react";
import icons from "@/constants/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "@/constants/data";

const ProjectCard = ({ id, title, detail, preview_img, techStack, role, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="flex flex-col md:flex-row justify-between items-center w-full max-w-2xl rounded-3xl glass-card hover:bg-[#233d44]/40 hover:border-[#00d2ff]/40 transition-all duration-300 p-6 md:p-8 gap-6 group cursor-pointer relative overflow-hidden"
    >
      <Link to={`/project/${id}`} className="absolute inset-0 z-20" aria-label={`View ${title} case study`}></Link>
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d2ff]/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#00d2ff]/20 transition-all"></div>
      
      <div className="flex-1 flex flex-col justify-center gap-3 z-10 w-full">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#00d2ff] transition-colors">{title}</h3>
          {role && <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">{role}</span>}
        </div>
        <p className="text-white/70 text-sm md:text-base leading-relaxed">{detail}</p>
        
        {techStack && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {techStack.slice(0, 4).map((tech, idx) => (
              <span key={idx} className="text-xs px-2 py-0.5 rounded-md bg-[#00d2ff]/10 text-[#00d2ff]/70">{tech}</span>
            ))}
            {techStack.length > 4 && <span className="text-xs px-2 py-0.5 text-white/40">+{techStack.length - 4}</span>}
          </div>
        )}
        
        <div className="flex items-center gap-2 mt-1 text-[#00d2ff] font-medium text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <span>View Case Study</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      </div>
      
      <div className="w-full md:w-[220px] h-[160px] rounded-2xl bg-gradient-to-br from-[#677E8A]/50 to-[#233D44]/50 border border-white/5 flex items-center justify-center z-10 group-hover:scale-105 transition-transform duration-500 overflow-hidden flex-shrink-0">
        {preview_img ? (
          <img src={preview_img} alt={`${title} preview`} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <span className="text-white/30 font-medium text-sm">Preview Coming</span>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 flex flex-col items-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-gradient"
      >
        Projects
      </motion.h2>
      
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center px-4">
        {projectsData.map((proj, idx) => (
          <ProjectCard 
            key={proj.id}
            index={idx}
            id={proj.id}
            title={proj.title}
            detail={proj.detail}
            preview_img={proj.preview_img}
            techStack={proj.techStack}
            role={proj.role}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
