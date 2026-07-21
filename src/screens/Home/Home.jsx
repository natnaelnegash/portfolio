import React from "react";
import HeroContent from "@/components/HeroContent";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="w-full min-h-screen flex flex-col justify-center items-center pt-24 pb-12 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full flex flex-col justify-center"
      >
        <HeroContent />
      </motion.div>
    </section>
  );
};

export default Home;
