import React, { useState } from "react";
import icons from "@/constants/icons";
import Contacts from "@/components/Contacts";
import { motion } from "framer-motion";



const Contact_Me = () => {
  const contactsData = [
    { icon: icons.mail, contact: "natnaelnegash95@gmail.com", link: "mailto:natnaelnegash95@gmail.com" },
    { icon: icons.phone, contact: "+251924303582", link: "tel:+251924303582" },
    { icon: icons.linkedin, contact: "in/natnael-negash", link: "https://linkedin.com/in/natnael-negash-305996289" },
    { icon: icons.ig, contact: "ig/natnael_251", link: "https://instagram.com/natnael_251" },
    { icon: icons.github, contact: "github/natnaelnegash", link: "https://github.com/natnaelnegash" },
    { icon: icons.telegram, contact: "t.me/nat_woo", link: "https://t.me/nat_woo" }
  ];

  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // IMPORTANT: Replace "YOUR_FORMSPREE_ENDPOINT" with your actual endpoint from formspree.io
  const formEndpoint = "https://formspree.io/f/mgobejgb" ;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formEndpoint.includes("YOUR_FORMSPREE_ENDPOINT")) {
      setFormStatus("Please add your Formspree endpoint in Contact_Me.jsx");
      return;
    }
    
    setIsSubmitting(true);
    setFormStatus("");
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        setFormStatus("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      setFormStatus("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact_me" className="w-full min-h-screen py-20 flex flex-col justify-center items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-[3rem] w-full max-w-6xl p-8 md:p-12 lg:p-16 flex flex-col items-center relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-[300px] bg-[#00d2ff]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="w-full text-center mb-12 z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Let's Connect</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            I'm currently available for freelance work or full-time roles. Send me a message using the form below, or reach out on my socials!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-12 z-10">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 min-h-[420px] flex flex-col justify-center">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center p-8 glass rounded-3xl h-full"
              >
                <div className="w-20 h-20 bg-[#00d2ff]/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#00d2ff] text-4xl" aria-hidden="true">✓</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-white/70 mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form action={formEndpoint} method="POST" onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm text-white/70 font-medium ml-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required
                    autoComplete="name"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl glass bg-white/5 border border-white/10 focus:border-[#00d2ff]/50 focus:outline-none focus:ring-1 focus:ring-[#00d2ff]/50 text-white placeholder-white/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm text-white/70 font-medium ml-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required
                    autoComplete="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl glass bg-white/5 border border-white/10 focus:border-[#00d2ff]/50 focus:outline-none focus:ring-1 focus:ring-[#00d2ff]/50 text-white placeholder-white/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm text-white/70 font-medium ml-2">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    required
                    rows="4"
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-2xl glass bg-white/5 border border-white/10 focus:border-[#00d2ff]/50 focus:outline-none focus:ring-1 focus:ring-[#00d2ff]/50 text-white placeholder-white/30 transition-all resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-2 rounded-2xl font-bold text-[#0b1121] bg-[#00d2ff] hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                
                {formStatus && (
                  <p className="text-sm text-red-400 text-center mt-2" role="alert" aria-live="polite">{formStatus}</p>
                )}
              </form>
            )}
          </div>

          {/* Vertical Divider (Desktop) */}
          <div className="hidden lg:block w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          {/* Social Links */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Socials</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full max-w-md">
              {contactsData.map((item, idx) => (
                <Contacts 
                  key={idx}
                  index={idx}
                  icon={item.icon}
                  contact={item.contact}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      
      <footer className="mt-24 w-full max-w-6xl z-10">
        <div className="w-full h-px bg-white/10 mb-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Natnael Negash. Built with React & Tailwind CSS.
          </p>
          <nav aria-label="Footer navigation" className="flex gap-6">
            <a href="#home" className="text-white/40 hover:text-white/70 text-sm transition-colors">Home</a>
            <a href="#projects" className="text-white/40 hover:text-white/70 text-sm transition-colors">Projects</a>
            <a href="https://github.com/natnaelnegash" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white/70 text-sm transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/natnael-negash-305996289" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white/70 text-sm transition-colors">LinkedIn</a>
          </nav>
        </div>
      </footer>
    </section>
  );
};

export default Contact_Me;
