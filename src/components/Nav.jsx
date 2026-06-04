import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contact_me" },
  ];

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
    >
      <motion.nav
        layout
        className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="flex gap-6 sm:gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm sm:text-base font-medium text-white/80 hover:text-[#00d2ff] hover:drop-shadow-[0_0_8px_rgba(0,210,255,0.8)] transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Nav;
