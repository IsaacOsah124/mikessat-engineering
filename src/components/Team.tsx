import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TEAM_MEMBERS } from '../data';
import { Mail, Phone, ShieldCheck, ArrowRight, X } from 'lucide-react';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);

  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-t border-slate-205 dark:border-slate-800 relative overflow-hidden">
      {/* Decorative premium tech background grids grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0A5C9E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#062B5B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-bold tracking-widest text-[#0A5C9E] dark:text-[#00d2ff] uppercase font-mono mb-3 bg-[#0A5C9E]/5 dark:bg-[#0a5c9e]/20 px-3 py-1.5 rounded-full inline-block">
            Professional Engineering Staff
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">
            Meet the Minds Behind Mikessat
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-350 leading-relaxed font-semibold">
            Our certified engineering crew works collaboratively to ensure top-tier reliability, absolute safety, and neat finishing layouts on every single worksite.
          </p>
        </div>

        {/* Dynamic Responsive 3-Column Centering Layout */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-[360px] flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 hover:border-[#0A5C9E]/40 dark:hover:border-[#00d2ff]/40 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Profile Headshot Panel with premium hover transitions */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 contrast-[1.02] transition-all duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Credentials Banner */}
                {member.id === 1 && (
                  <div className="absolute top-3 left-3 bg-slate-950/90 dark:bg-slate-900/90 backdrop-blur-md text-amber-500 border border-amber-500/30 px-3 py-1 rounded-full text-[8px] font-mono tracking-widest uppercase flex items-center gap-1.5 shadow-md">
                    <ShieldCheck size={11} className="text-amber-500" />
                    <span className="font-bold">Founder / CEO</span>
                  </div>
                )}

                {/* Glassy Quick Contact Icon Overlays */}
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={`mailto:support@mikessatengineering.com?subject=Inquiry to ${member.name}`}
                    className="h-10 w-10 bg-white dark:bg-slate-900 text-[#0A5C9E] dark:text-[#00d2ff] rounded-full flex items-center justify-center hover:bg-[#0A5C9E] dark:hover:bg-[#0A5C9E] hover:text-white dark:hover:text-white transition-all transform hover:scale-110 shadow-md"
                    title={`Email ${member.name}`}
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href="tel:+233246445790"
                    className="h-10 w-10 bg-white dark:bg-slate-900 text-[#0A5C9E] dark:text-[#00d2ff] rounded-full flex items-center justify-center hover:bg-[#0A5C9E] dark:hover:bg-[#0A5C9E] hover:text-white dark:hover:text-white transition-all transform hover:scale-110 shadow-md"
                    title={`Call ${member.name}`}
                  >
                    <Phone size={16} />
                  </a>
                </div>
              </div>

              {/* Text / Name Header details */}
              <div className="pt-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0A5C9E] dark:text-[#00d2ff] font-extrabold bg-[#0A5C9E]/5 dark:bg-[#0A5C9E]/15 border border-[#0A5C9E]/10 dark:border-[#00d2ff]/10 px-2.5 py-1 rounded-md inline-block">
                    {member.role}
                  </span>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mt-3 leading-snug tracking-tight group-hover:text-[#0A5C9E] dark:group-hover:text-[#00d2ff] transition-colors line-clamp-1">
                    {member.name}
                  </h3>
                  
                  {/* Bio brief preview of profile */}
                  <p className="text-xs text-slate-505 dark:text-slate-400 leading-relaxed font-semibold mt-3.5 line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Trigger Button with Micro Motion */}
                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 w-full flex items-center justify-between">
                  <button
                    onClick={() => setSelectedMember(member)}
                    className="text-xs font-bold text-[#0A5C9E] dark:text-[#00d2ff] hover:text-[#062B5B] dark:hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    aria-label={`Read full bio of ${member.name}`}
                  >
                    <span>Read Full Profile</span>
                    <ArrowRight size={13} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Lightbox Modal for detailed biographies */}
        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backing wash overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-zoom-out"
              />

              {/* Modal Card body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 text-left p-6 sm:p-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-5 right-5 h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all cursor-pointer z-20"
                  aria-label="Close detailed view"
                >
                  <X size={18} />
                </button>

                {/* Inside Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 items-start">
                  
                  {/* Photo panel */}
                  <div className="sm:col-span-2 space-y-4">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    {/* Official communications hot links */}
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={`mailto:support@mikessatengineering.com?subject=Corporate Inquiry for ${selectedMember.name}`}
                        className="bg-slate-100 dark:bg-slate-800 hover:bg-[#0A5C9E] dark:hover:bg-[#0A5C9E] text-[#0A5C9E] dark:text-[#00d2ff] hover:text-white dark:hover:text-white font-bold text-xs py-2.5 rounded-xl text-center transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-705"
                      >
                        <Mail size={13} />
                        <span>Email Staff</span>
                      </a>
                      <a
                        href="tel:+233246445790"
                        className="bg-slate-100 dark:bg-slate-800 hover:bg-[#0A5C9E] dark:hover:bg-[#0A5C9E] text-[#0A5C9E] dark:text-[#00d2ff] hover:text-white dark:hover:text-white font-bold text-xs py-2.5 rounded-xl text-center transition-all flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-705"
                      >
                        <Phone size={13} />
                        <span>Call Direct</span>
                      </a>
                    </div>
                  </div>

                  {/* text bio details */}
                  <div className="sm:col-span-3 space-y-4 pt-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#0A5C9E] dark:text-[#00d2ff] font-black bg-[#0A5C9E]/10 dark:bg-[#0a5c9e]/20 px-3 py-1 rounded-full">
                      {selectedMember.role}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mt-2">
                      {selectedMember.name}
                    </h3>

                    <div className="h-px bg-slate-100 dark:bg-slate-800 w-full" />

                    <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-semibold">
                      <p className="whitespace-pre-line leading-relaxed">{selectedMember.bio}</p>
                    </div>

                    <div className="pt-4 flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-extrabold">Active Engineering Specialist</span>
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
