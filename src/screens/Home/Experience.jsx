import React from "react";
import { motion } from "framer-motion";

const ExperienceItem = ({ title, company, period, description, alignRight }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center w-full my-8 ${alignRight ? "md:flex-row-reverse" : ""}`}>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, x: alignRight ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={`glass-card p-6 md:p-8 rounded-3xl w-full max-w-lg ${alignRight ? "md:text-left" : "md:text-right"}`}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <h4 className="text-lg text-[#00d2ff] mb-2">{company}</h4>
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 text-sm text-white/60 mb-4">
            {period}
          </span>
          <p className="text-white/70 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
      
      <div className="hidden md:flex flex-col items-center justify-center w-10">
        <div className="w-4 h-4 rounded-full bg-[#00d2ff] shadow-[0_0_15px_rgba(0,210,255,0.8)] z-10"></div>
        <div className="w-[2px] h-96 bg-gradient-to-b from-transparent via-[#00d2ff] to-transparent absolute -z-10"></div>
      </div>
      
      <div className="w-full md:w-1/2 hidden md:block"></div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "EagleLion Plc",
      period: "Jul 2025 – Sep 2025",
      description: "Returned for a second summer to take on greater ownership. Led front-end architecture decisions for internal tools, mentored junior interns, and contributed to production deployments across web and mobile projects.",
      alignRight: false
    },
    {
      title: "Software Engineering Intern",
      company: "EagleLion Plc",
      period: "Jul 2024 – Sep 2024",
      description: "Collaborated with a cross-functional team to develop web and mobile applications. Built RESTful API endpoints, implemented responsive UI components, and gained hands-on experience with modern full-stack frameworks and CI/CD workflows.",
      alignRight: true
    },
    {
      title: "B.Sc. Computer Science & Engineering",
      company: "Adama Science and Technology University",
      period: "May 2022 – May 2026",
      description: "Graduated with a focus on software engineering, algorithms, and systems design. Built 7+ production projects during studies, actively participated in hackathons, and developed strong problem-solving and collaborative skills.",
      alignRight: false
    }
  ];

  return (
    <section id="experience" className="w-full min-h-screen py-20 flex flex-col justify-center items-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-gradient text-center"
      >
        Experience & Education
      </motion.h2>

      <div className="w-full max-w-6xl relative flex flex-col items-center">
        {/* Center Line for Desktop */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/10 z-0"></div>
        
        {experiences.map((exp, index) => (
          <ExperienceItem 
            key={index}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            alignRight={exp.alignRight}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
