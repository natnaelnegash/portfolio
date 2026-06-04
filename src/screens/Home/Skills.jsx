import React from "react";
import icons from "@/constants/icons";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = ["Front-end", "Back-end", "Databases", "App-Dev"];
  
  const skillIcons = [
    { name: "React", icon: icons.react_icon },
    { name: "Node.js", icon: icons.node_icon },
    { name: "PostgreSQL", icon: icons.postgres_icon },
    { name: "Redux", icon: icons.redux },
    { name: "Laravel", icon: icons.laravel },
    { name: "MongoDB", icon: icons.mongo_icon },
    { name: "Flutter", icon: icons.flutter_icon },
    { name: "Tailwind CSS", icon: icons.tailwind_icon },
    { name: "Postman", icon: icons.postman_icon },
    { name: "Prisma", icon: icons.prisma_icon },
    { name: "Firebase", icon: icons.firebase },
    { name: "NextJs", icon: icons.nextjs },
    { name: "Zustand", icon: icons.zustand },
    { name: "Swagger", icon: icons.swagger },
    { name: "Hoppscotch", icon: icons.hoppscotch },
    { name: "Drizzle", icon: icons.drizzle },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="w-full min-h-screen py-20 flex flex-col justify-center">
      <div className="flex flex-col items-center w-full px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gradient"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 w-full mb-16">
          {skillCategories.map((cat, idx) => (
            <motion.p 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-lg md:text-xl text-white/60 font-medium px-4 py-2 rounded-full glass"
            >
              {cat}
            </motion.p>
          ))}
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"
        >
          {skillIcons.map((skill, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-full aspect-square max-w-[140px] flex flex-col items-center justify-center rounded-2xl glass-card group hover:border-[#00d2ff]/50 transition-colors"
            >
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-12 h-12 md:w-16 md:h-16 object-contain mb-3 group-hover:drop-shadow-[0_0_10px_rgba(0,210,255,0.8)] transition-all duration-300" 
              />
              <span className="text-xs md:text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
