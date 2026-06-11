import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Eye, X, ChevronLeft, ChevronRight, MapPin, Play } from 'lucide-react';

const CATEGORIES = ['All', 'Construction', 'Electrical', 'Security', 'Satellite', 'Automation'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [zoomProject, setZoomProject] = useState<Project | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  // All media items for the lightbox: images first, then video last
  const getMediaList = (project: Project) => {
    const imgs = project.images?.length ? project.images : [project.image];
    return imgs;
  };

  const openProject = (project: Project) => {
    setMediaIndex(0);
    setZoomProject(project);
  };

  const prev = () => setMediaIndex((i) => Math.max(0, i - 1));
  const next = (max: number) => setMediaIndex((i) => Math.min(max - 1, i + 1));

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!zoomProject) return;
      if (e.key === 'Escape') setZoomProject(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next(getMediaList(zoomProject).length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [zoomProject, mediaIndex]);

  return (
    <section id="projects" className="py-24 bg-white text-slate-800 border-t border-slate-200 relative">
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#0A5C9E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">

        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#0A5C9E] uppercase font-mono mb-2">
            Our Work Portfolio
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Showcase of Engineering Projects
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            A visual overview of real structural projects, satellite alignments, smart automation access panels, and electrical wiring systems completed across Ghana.
          </p>

          {/* Filter buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#0A5C9E] text-white border border-[#0A5C9E]/10 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-200/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200/60 cursor-pointer shadow-md"
                onClick={() => openProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/35 to-transparent opacity-80 group-hover:opacity-85 transition-opacity duration-300" />

                {/* Video badge */}
                {project.video && (
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    <Play size={10} className="fill-white" /> VIDEO
                  </div>
                )}

                {/* Multiple images badge */}
                {project.images && project.images.length > 1 && (
                  <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    {project.images.length} PHOTOS
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="p-3 bg-[#0A5C9E]/90 backdrop-blur-sm rounded-full text-white shadow-lg scale-90 group-hover:scale-100 transition-all duration-300">
                    <Eye size={20} />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1.5 text-left">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#0A5C9E]/90 text-[10px] font-mono font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-blue-200 transition-colors">
                    {project.title}
                  </h3>
                  {project.location && (
                    <p className="flex items-center gap-1 text-[11px] text-slate-300 font-medium">
                      <MapPin size={10} /> {project.location}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {zoomProject && (() => {
            const mediaList = getMediaList(zoomProject);
            const hasMultiple = mediaList.length > 1;

            return (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setZoomProject(null)}
                  className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative bg-white border border-slate-200 shadow-2xl rounded-2xl max-w-5xl w-full overflow-hidden z-10 max-h-[90vh] flex flex-col"
                >
                  {/* Close */}
                  <button
                    onClick={() => setZoomProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-slate-700 hover:text-slate-950 border border-slate-200 transition-colors z-20 shadow-sm"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-12 overflow-auto">
                    {/* Media panel */}
                    <div className="md:col-span-8 bg-slate-950 flex flex-col">
                      {/* Main image */}
                      <div className="relative flex items-center justify-center min-h-[40vh] md:min-h-[55vh] flex-1">
                        <img
                          src={mediaList[mediaIndex]}
                          alt={`${zoomProject.title} – photo ${mediaIndex + 1}`}
                          className="max-h-[55vh] max-w-full object-contain"
                        />

                        {/* Prev / Next arrows */}
                        {hasMultiple && (
                          <>
                            <button
                              onClick={prev}
                              disabled={mediaIndex === 0}
                              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white disabled:opacity-30 transition-all"
                            >
                              <ChevronLeft size={20} />
                            </button>
                            <button
                              onClick={() => next(mediaList.length)}
                              disabled={mediaIndex === mediaList.length - 1}
                              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white disabled:opacity-30 transition-all"
                            >
                              <ChevronRight size={20} />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Thumbnail strip */}
                      {hasMultiple && (
                        <div className="flex gap-2 p-3 overflow-x-auto bg-slate-900 border-t border-slate-800">
                          {mediaList.map((src, i) => (
                            <button
                              key={i}
                              onClick={() => setMediaIndex(i)}
                              className={`shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all ${
                                i === mediaIndex ? 'border-[#00d2ff]' : 'border-transparent opacity-60 hover:opacity-100'
                              }`}
                            >
                              <img src={src} alt="" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Video player */}
                      {zoomProject.video && (
                        <div className="border-t border-slate-800 p-4 bg-slate-900">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-[#00d2ff] font-bold mb-2 flex items-center gap-1">
                            <Play size={10} className="fill-[#00d2ff]" /> Project Video
                          </p>
                          <video
                            src={zoomProject.video}
                            controls
                            className="w-full rounded-lg max-h-48 bg-black"
                            preload="metadata"
                          />
                        </div>
                      )}
                    </div>

                    {/* Info panel */}
                    <div className="md:col-span-4 p-6 md:p-8 flex flex-col justify-between text-left space-y-6 bg-slate-50">
                      <div className="space-y-4">
                        <span className="inline-block px-2.5 py-1 rounded bg-[#0A5C9E]/10 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0A5C9E] border border-[#0A5C9E]/20">
                          {zoomProject.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-black text-[#062B5B]">
                          {zoomProject.title}
                        </h3>
                        {zoomProject.location && (
                          <p className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                            <MapPin size={12} className="text-[#0A5C9E]" /> {zoomProject.location}
                          </p>
                        )}
                        <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                          {zoomProject.description}
                        </p>
                        {hasMultiple && (
                          <p className="text-[11px] text-slate-400 font-mono">
                            Photo {mediaIndex + 1} of {mediaList.length}
                          </p>
                        )}
                      </div>

                      <div className="border-t border-slate-200 pt-6 space-y-3">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-[#0A5C9E] font-bold">Need a similar setup?</p>
                        <a
                          href="#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            setZoomProject(null);
                            window.location.hash = '#/contact';
                          }}
                          className="inline-flex items-center justify-center w-full bg-[#0A5C9E] hover:bg-[#062B5B] text-white py-3.5 rounded-lg text-xs font-bold tracking-wide transition-all shadow-md"
                        >
                          Inquire About This Project &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
}
