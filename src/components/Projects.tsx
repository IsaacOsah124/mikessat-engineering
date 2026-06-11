import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Eye, X } from 'lucide-react';

const CATEGORIES = ['All', 'Electrical', 'Security', 'Satellite', 'Automation'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [zoomImage, setZoomImage] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-white text-slate-800 border-t border-slate-200 relative">
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#0A5C9E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#0A5C9E] uppercase font-mono mb-2">
            Our Work Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 animate-fade-in">
            Showcase of Engineering Projects
          </h2>
          <p className="text-lg text-slate-655 leading-relaxed font-medium">
            A visual overview of real structural projects, satellite alignments, smart automation access panels, and electrical wiring systems completed across Ghana.
          </p>

          {/* Filtering buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#0A5C9E] text-white border border-[#0A5C9E]/10 shadow-sm shadow-[#0a5c9e]/15'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-200/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-105 border border-slate-200/60 cursor-pointer shadow-md"
                onClick={() => setZoomImage(project)}
              >
                {/* Real Image background */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-all duration-750 filter brightness-90 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />

                {/* Dark to translucent gradient mask for contrast & text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/35 to-transparent opacity-80 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Focus Overlay Accent */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="p-3 bg-[#0A5C9E]/90 backdrop-blur-sm rounded-full text-white shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <Eye size={20} />
                  </span>
                </div>

                {/* Project Texts (White/High Contrast text over absolute dark mask overlay) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2 text-left">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#0A5C9E]/90 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Zoom Lightbox Modal */}
        <AnimatePresence>
          {zoomImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setZoomImage(null)}
                className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white border border-slate-200 shadow-2xl rounded-2xl max-w-4xl w-full overflow-hidden z-10"
              >
                {/* Close Trigger */}
                <button
                  onClick={() => setZoomImage(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-slate-700 hover:text-slate-950 border border-slate-250 transition-colors z-20 shadow-sm"
                  aria-label="Close lightbox"
                >
                  <X size={16} />
                </button>

                {/* Lightbox Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-8 bg-slate-100 flex items-center justify-center min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]">
                    <img
                      src={zoomImage.image}
                      alt={zoomImage.title}
                      className="max-h-[75vh] max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-between text-left space-y-6 bg-slate-50">
                    <div className="space-y-4">
                      <span className="inline-block px-2.5 py-1 rounded bg-[#0A5C9E]/10 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0A5C9E] border border-[#0A5C9E]/20">
                        {zoomImage.category} System
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-[#062B5B]">
                        {zoomImage.title}
                      </h3>
                      <p className="text-sm text-slate-650 leading-relaxed font-semibold">
                        {zoomImage.description}
                      </p>
                    </div>

                    <div className="border-t border-slate-200 pt-6 space-y-3">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[#0A5C9E] font-bold">Need a similar setup?</p>
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          setZoomImage(null);
                          const el = document.querySelector('#contact');
                          if (el) {
                            const yOffset = -80;
                            const yPosition = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: yPosition, behavior: 'smooth' });
                          }
                        }}
                        className="inline-flex items-center justify-center w-full bg-[#0A5C9E] hover:bg-[#062B5B] text-center text-white py-3.5 rounded-lg text-xs font-bold font-sans tracking-wide transition-all shadow-md shadow-[#0a5c9e]/10"
                      >
                        Inquire About This Project &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
