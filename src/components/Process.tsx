import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 text-slate-800 border-t border-slate-200 relative overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#0A5C9E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-bold tracking-widest text-[#0A5C9E] uppercase font-mono mb-2">
            Engineered Workflow
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Our 5-Step Operational Process
          </h2>
          <p className="text-lg text-slate-655 leading-relaxed font-medium">
            From your first hello phone call to physical installation and continuous maintenance, we deliver absolute reliability at every phase.
          </p>
        </div>

        {/* Responsive Timeline Grid (Horizontal on large screen, vertical on mobile text) */}
        <div className="relative">
          {/* Connecting Connector Line - Hidden on small screen, visible on lg */}
          <div className="absolute top-[42px] left-0 w-full h-[2px] bg-gradient-to-r from-slate-200 via-[#0A5C9E]/45 to-slate-200 z-0 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-slate-200 lg:border-none lg:bg-transparent rounded-2xl p-6 lg:p-0 relative group text-left shadow-sm lg:shadow-none"
              >
                {/* Numeric Indicator Node */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0 mb-6 lg:mb-0">
                  <div className="h-14 w-14 rounded-2xl bg-[#062B5B] text-white font-mono font-black text-lg flex items-center justify-center border border-[#0A5C9E]/35 shadow-md group-hover:bg-[#0A5C9E] group-hover:scale-105 transition-all duration-300 z-10 relative">
                    {step.step}
                  </div>
                  
                  {/* Title */}
                  <div className="lg:mt-6 text-left">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#0A5C9E]">Phase {step.step}</span>
                    <h3 className="text-xl font-bold text-slate-900 tracking-wide mt-1 group-hover:text-[#0A5C9E] transition-colors">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Horizontal Gap spacer to align content nicely under node */}
                <div className="text-left mt-2 lg:mt-4 pl-0">
                  <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle vertical connector element for mobile display */}
                <div className="absolute left-[38px] top-16 bottom-0 w-[2px] bg-[#0A5C9E]/30 lg:hidden group-last:hidden -z-10 h-10 -mb-16 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Flow assurance banner */}
        <div className="mt-20 p-8 rounded-2xl bg-[#0A5C9E]/5 border border-[#0A5C9E]/20 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-left">
            <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-405 shrink-0">
              <CheckCircle2 size={20} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#062B5B]">Full Process Transparency</p>
              <p className="text-xs text-slate-500 mt-1 font-semibold">We issue detailed quotations with clear breakdown and specifications before any work starts.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap bg-[#0A5C9E] hover:bg-[#062B5B] text-white transition-all font-bold text-xs px-5 py-3.5 rounded-lg uppercase tracking-wider shadow-md shadow-[#0a5c9e]/10"
          >
            Start Project Dialog &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
