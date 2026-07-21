import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    if (!isHomePage) return;
    const sectionIds = ["home", "services", "experience", "skills", "projects", "contact_me"];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { name: "Home", href: "#home", section: "home" },
    { name: "Experience", href: "#experience", section: "experience" },
    { name: "Skills", href: "#skills", section: "skills" },
    { name: "Projects", href: "#projects", section: "projects" },
    { name: "Contact", href: "#contact_me", section: "contact_me" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <nav
          aria-label="Main navigation"
          className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "glass shadow-lg shadow-black/20"
              : "bg-transparent"
          }`}
        >
          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={isHomePage ? link.href : `/${link.href}`}
                aria-current={isHomePage && activeSection === link.section ? "true" : undefined}
                className={`text-sm font-medium transition-all duration-300 relative ${
                  isHomePage && activeSection === link.section
                    ? "text-[#00d2ff] drop-shadow-[0_0_8px_rgba(0,210,255,0.6)]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {isHomePage && activeSection === link.section && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#00d2ff] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white block origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-white block origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0b1121]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {links.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={isHomePage ? link.href : `/${link.href}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl font-semibold transition-colors ${
                    isHomePage && activeSection === link.section
                      ? "text-[#00d2ff]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
