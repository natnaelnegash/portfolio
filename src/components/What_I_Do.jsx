import React from "react";
import web_icon from "@/assets/icons/Group.png";
import figma_icon from "@/assets/icons/Figma.png";
import flutter_icon from "@/assets/icons/flutter.png";
import { motion } from "framer-motion";

const What_I_Do = () => {
  const services = [
    {
      title: "Full-Stack Web Engineering",
      desc: "Building production-grade web platforms with React, Next.js, and Node.js. From RESTful APIs and database architecture to responsive, performant front-ends.",
      icon: web_icon
    },
    {
      title: "Design Engineering",
      desc: "Translating design systems into maintainable component libraries. Pixel-perfect interfaces with a focus on accessibility, responsiveness, and micro-interactions.",
      icon: figma_icon
    },
    {
      title: "Cross-Platform Mobile",
      desc: "Shipping native-quality mobile experiences with Flutter. Offline-first architecture, smooth animations, and platform-specific optimizations.",
      icon: flutter_icon
    }
  ];

  return (
    <section id="services" className="w-full py-24 flex flex-col items-center relative z-10">
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
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center text-center glass p-10 rounded-3xl gap-6 hover:border-[#00d2ff]/40 hover:bg-white/5 transition-all cursor-default group shadow-lg"
              >
                <div className="w-[80px] h-[80px] flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl group-hover:bg-[#00d2ff]/20 group-hover:scale-110 transition-all duration-300">
                  <img src={service.icon} alt="" aria-hidden="true" className="w-10 h-10 object-contain drop-shadow-md" />
                </div>
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00d2ff] transition-colors mb-4">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default What_I_Do;
