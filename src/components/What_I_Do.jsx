import React from "react";
import web_icon from "@/assets/icons/Group.png";
import figma_icon from "@/assets/icons/Figma.png";
import flutter_icon from "@/assets/icons/flutter.png";
import { motion } from "framer-motion";

const What_I_Do = () => {
  const skills = [
    {
      title: "Web Development",
      desc: "Creative web developer specializing in React on front-end and Node.js on back-end.",
      icon: web_icon
    },
    {
      title: "UI/UX Designer",
      desc: "Creative designs focusing on user ease of use and attractive interfaces.",
      icon: figma_icon
    },
    {
      title: "Mobile App Developer",
      desc: "I use both React Native and Flutter for developing cool cross-platform applications.",
      icon: flutter_icon
    }
  ];

  return (
    <div className="w-full max-w-6xl">
      <div className="flex flex-col items-center gap-12 w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gradient text-center"
        >
          What I Do
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center glass p-10 rounded-3xl gap-6 hover:border-[#00d2ff]/40 hover:bg-white/5 transition-all cursor-pointer group shadow-lg"
            >
              <div className="w-[80px] h-[80px] flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl group-hover:bg-[#00d2ff]/20 group-hover:scale-110 transition-all duration-300">
                <img src={skill.icon} alt={skill.title} className="w-10 h-10 object-contain drop-shadow-md" />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00d2ff] transition-colors mb-4">{skill.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm md:text-base">
                  {skill.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default What_I_Do;
