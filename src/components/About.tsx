import { motion } from 'motion/react';
import { CORE_VALUES } from '../data';
import Icon from './Icon';
import Team from './Team';

export default function About() {
  return (
    <>
    <section id="about" className="py-24 bg-white text-slate-800 overflow-hidden border-t border-slate-200 relative">
      {/* Visual Background Accent Details */}
      <div className="absolute top-52 -left-48 w-96 h-96 rounded-full bg-[#0A5C9E]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-52 -right-48 w-96 h-96 rounded-full bg-[#062B5B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Who We Are Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-[#0A5C9E] uppercase font-mono mb-2"
          >
            Who We Are
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6"
          >
            Committed to Engineering Integrity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-650 leading-relaxed font-medium"
          >
            Mikessat Engineering delivers professional engineering and technical installation services focused on reliability, innovation, quality, and customer satisfaction.
          </motion.p>
        </div>

        {/* Corporate Trust Layout (Team Photo + Vision/Mission) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Block: Team Photo with glass overlay */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative group"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#062B5B] to-[#0A5C9E] rounded-xl blur opacity-15 group-hover:opacity-25 transition duration-500" />
            
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="CEO Michael Bentum and Mikessat Engineering Technician Team"
                className="w-full object-cover aspect-[4/3] group-hover:scale-102 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              
              {/* Overlay Caption Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-slate-200/80 p-4.5 rounded-lg shadow-lg">
                <p className="text-sm font-bold text-slate-900 font-sans">The Mikessat Crew</p>
                <p className="text-[11px] font-mono text-slate-600 mt-1 font-semibold leading-relaxed">
                  CEO Michael Bentum and our certified installation specialists active on a professional client worksite.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Vision statement */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-xl relative group hover:border-[#0A5C9E]/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#062B5B] opacity-5 rounded-bl-full group-hover:opacity-10 transition-all" />
              <div className="h-12 w-12 rounded-lg bg-[#062B5B]/10 flex items-center justify-center mb-5 border border-[#062B5B]/15">
                <Icon name="Cpu" className="text-[#0A5C9E]" size={22} />
              </div>
              <h3 className="text-xl font-bold tracking-wide text-slate-950 mb-3 font-sans">Our Vision</h3>
              <p className="text-slate-650 leading-relaxed text-sm font-medium">
                Become Ghana's most trusted and innovative engineering solutions provider, recognized for setting high parameters of safety, precision, and reliable customer service.
              </p>
            </div>

            {/* Mission statement */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-xl relative group hover:border-[#0A5C9E]/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#0A5C9E]/5 rounded-bl-full group-hover:opacity-10 transition-all" />
              <div className="h-12 w-12 rounded-lg bg-[#0A5C9E]/10 flex items-center justify-center mb-5 border border-[#0A5C9E]/15">
                <Icon name="Award" className="text-[#0A5C9E]" size={22} />
              </div>
              <h3 className="text-xl font-bold tracking-wide text-slate-950 mb-3 font-sans">Our Mission</h3>
              <p className="text-slate-650 leading-relaxed text-sm font-medium">
                Provide high-quality, reliable, affordable engineering services through highly skilled personnel, modern technology, and a customer-first approach that ensures complete client satisfaction.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Sub-grid */}
        <div className="mt-20">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="h-1 w-12 bg-[#0A5C9E] mb-4 rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2 font-display">Our Core Values</h3>
            <p className="text-sm text-slate-500 font-mono font-bold uppercase tracking-wider">The blueprints guiding active work since inception.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, index) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl hover:border-[#0A5C9E]/40 hover:-translate-y-1 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-10 w-10 bg-[#0A5C9E]/5 rounded-lg flex items-center justify-center mb-4 text-[#0A5C9E] border border-[#0A5C9E]/10">
                    <Icon name={val.icon} size={20} />
                  </div>
                  <h4 className="text-sm font-extrabold text-[#062B5B] mb-2 tracking-wide font-sans">{val.title}</h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed mt-2 font-medium">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
    <Team />
    </>
  );
}
