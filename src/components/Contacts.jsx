import React from "react";
import { motion } from "framer-motion";

const Contacts = ({ icon, contact, link, index }) => {
  return (
    <motion.a 
      href={link || "#"}
      target={link ? "_blank" : "_self"}
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center w-full max-w-[320px] h-14 px-6 gap-4 rounded-full glass hover:bg-white/10 hover:border-[#00d2ff]/40 transition-all cursor-pointer group"
    >
      <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full group-hover:bg-[#00d2ff]/20 transition-colors">
        <img src={icon} className="w-5 h-5 object-contain invert opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" alt="contact icon" />
      </div>
      <p className="text-lg font-medium text-white/80 group-hover:text-white transition-colors truncate">
        {contact}
      </p>
    </motion.a>
  );
};

export default Contacts;
