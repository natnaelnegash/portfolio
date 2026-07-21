import React from "react";
import icons from "@/constants/icons";
import { motion } from "framer-motion";

const SkillCategory = ({ title, skills, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col items-center w-full"
  >
    <h3 className="text-lg font-semibold text-white/50 mb-6 tracking-wide uppercase">{title}</h3>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <motion.div 
          key={index}
          whileHover={{ scale: 1.1, y: -5 }}
          className="w-[100px] h-[100px] flex flex-col items-center justify-center rounded-2xl glass-card group hover:border-[#00d2ff]/50 transition-colors"
        >
          <img 
            src={skill.icon} 
            alt={skill.name}
            loading="lazy"
            className="w-10 h-10 object-contain mb-2 group-hover:drop-shadow-[0_0_10px_rgba(0,210,255,0.8)] transition-all duration-300" 
          />
          <span className="text-xs font-medium text-white/50 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: icons.react_icon },
        { name: "Next.js", icon: icons.nextjs },
        { name: "Tailwind", icon: icons.tailwind_icon },
        { name: "Redux", icon: icons.redux },
        { name: "Zustand", icon: icons.zustand },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: icons.node_icon },
        { name: "Laravel", icon: icons.laravel },
        { name: "Prisma", icon: icons.prisma_icon },
        { name: "Drizzle", icon: icons.drizzle },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: icons.postgres_icon },
        { name: "MongoDB", icon: icons.mongo_icon },
        { name: "Firebase", icon: icons.firebase },
      ]
    },
    {
      title: "Mobile",
      skills: [
        { name: "Flutter", icon: icons.flutter_icon },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Postman", icon: icons.postman_icon },
        { name: "Swagger", icon: icons.swagger },
        { name: "Hoppscotch", icon: icons.hoppscotch },
      ]
    }
  ];

  return (
    <section id="skills" className="w-full py-24 flex flex-col justify-center relative z-10">
      <div className="flex flex-col items-center w-full px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-gradient"
        >
          Skills & Technologies
        </motion.h2>

        <div className="w-full max-w-5xl flex flex-col gap-12">
          {categories.map((cat, idx) => (
            <SkillCategory 
              key={cat.title}
              title={cat.title}
              skills={cat.skills}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
