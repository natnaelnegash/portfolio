import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsData } from "@/constants/data";
import { motion } from "framer-motion";
import icons from "@/constants/icons";
import ImageSlider from "@/components/ImageSlider";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-gradient">Project Not Found</h1>
        <button onClick={() => navigate("/")} className="px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors">
          Return Home
        </button>
      </div>
    );
  }

  const previewImages = project.preview_img;
  const isArray = Array.isArray(previewImages);
  const hasPreview = previewImages && (isArray ? previewImages.length > 0 : true);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen py-24 md:py-32 flex flex-col items-center relative z-10"
    >
      <div className="w-full max-w-4xl px-4 flex justify-between items-center mb-12">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/70 hover:text-[#00d2ff] transition-colors group">
          <img src={icons.arrow} className="w-5 h-5 invert rotate-180 group-hover:scale-110 transition-transform" alt="back" />
          <span>Back to Projects</span>
        </button>
        
        <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/30 hover:bg-[#00d2ff]/20 transition-colors">
          <span>View Live</span>
        </a>
      </div>

      <div className="w-full max-w-4xl px-4">
        {/* Header */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient">{project.title}</h1>
            <span className="px-4 py-1 rounded-full glass text-sm font-medium">{project.year}</span>
          </div>
          <p className="text-xl md:text-2xl text-[#00d2ff] font-medium">{project.role}</p>
        </motion.div>

        {/* Preview Images */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          {hasPreview ? (
            isArray ? (
              <ImageSlider images={previewImages} title={project.title} />
            ) : (
              <div className="w-full rounded-[2rem] glass-card overflow-hidden">
                <img src={previewImages} alt={`${project.title} preview`} className="w-full h-auto" loading="lazy" />
              </div>
            )
          ) : (
            <div className="w-full aspect-video rounded-[2rem] glass-card flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#677E8A]/20 to-[#233D44]/40 mix-blend-overlay"></div>
              <span className="text-white/40 text-2xl font-medium tracking-widest uppercase">Project Preview</span>
            </div>
          )}
        </motion.div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 space-y-12"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 mt-0.5 flex-shrink-0 flex items-center justify-center rounded-full bg-[#00d2ff]/20 text-[#00d2ff]">
                      ✓
                    </div>
                    <span className="text-white/80 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;
