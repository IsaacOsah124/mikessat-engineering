import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white text-slate-800 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#0A5C9E]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#062B5B]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full font-sans">
        
        {/* Header Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#0A5C9E] uppercase font-mono mb-2">
            Client Success
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 animate-fade-in">
            Trusted by Hundreds of Clients
          </h2>
          <p className="text-lg text-slate-655 leading-relaxed font-medium">
            Hear from our satisfied premium homeowners, estate developers, and corporate facility directors who depend on Mikessat Engineering.
          </p>
        </div>

        {/* Testimonials 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200/80 hover:border-[#0A5C9E]/35 rounded-2xl p-8 relative flex flex-col justify-between group hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="space-y-6">
                {/* Quote Accent & Ratings */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>
                  <Quote size={24} className="text-[#0A5C9E]/15 group-hover:text-[#0A5C9E]/55 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-slate-705 text-sm md:text-base leading-relaxed font-semibold italic text-left">
                  "{t.comment}"
                </p>
              </div>

              {/* Client Info Block */}
              <div className="border-t border-slate-200 pt-6 mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[#0A5C9E]/10 flex items-center justify-center font-black text-[#0A5C9E] uppercase text-sm border border-[#0A5C9E]/15 shrink-0">
                  {t.name[0]}
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-slate-900 text-sm tracking-wide leading-none mb-1">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-550 leading-none font-bold">
                    {t.role} {t.company ? <span className="text-[#0A5C9E] font-extrabold">| {t.company}</span> : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust seal footer */}
        <div className="mt-20 flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-1 text-red-500 animate-pulse">
            <Heart size={16} className="fill-current" />
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
            Over 520+ Satisfied Clients and Growing across Greater Accra, Eastern, and Ashanti Regions.
          </p>
        </div>

      </div>
    </section>
  );
}
