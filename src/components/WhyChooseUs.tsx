import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATISTICS } from '../data';
import { CheckCircle2, HeartHandshake } from 'lucide-react';
import Icon from './Icon';

// Custom Count Up Animator sub-component — only runs when triggered (in view)
function SafeCounter({ value, duration = 2, triggered }: { value: number; duration?: number; triggered: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let start = 0;
    const end = value;
    if (end === 0) return;

    const totalMs = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMs / end), 16);

    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMs / stepTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration, triggered]);

  return <span>{count}</span>;
}

export default function WhyChooseUs() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  const checklists = [
    {
      title: 'Certified Professionals',
      description: 'Fully qualified installer engineers licensed by the Energy Commission of Ghana led by Michael Bentum.'
    },
    {
      title: 'Modern Technology',
      description: 'Deploying high-frequency spectrum analyzers, IP thermal diagnostic devices, and advanced smart systems.'
    },
    {
      title: 'Fast Response',
      description: 'Rapid-response diagnostic teams dispatched within 2 hours across key locations in greater Accra.'
    },
    {
      title: 'Quality Workmanship',
      description: 'Aesthetic, concealed wiring conduits, neat surface runs, and robust mounting structural guarantees.'
    },
    {
      title: 'Customer Support',
      description: 'Unprecedented access to the CEO and immediate post-project support with maintenance timelines.'
    },
    {
      title: 'Safety Standards',
      description: 'Rigorous insulation tests, safety residual current grounding, and fully certified fire hazard reductions.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 -left-36 w-72 h-72 rounded-full bg-[#0A5C9E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Statistics section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-sm">
          {STATISTICS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center relative after:absolute after:h-8 after:w-[1px] after:bg-slate-350 dark:after:bg-slate-700 after:top-1/2 after:-translate-y-1/2 after:right-0 last:after:hidden last:md:after:hidden md:after:block after:hidden"
            >
              <div className="mx-auto h-12 w-12 rounded-lg bg-[#0A5C9E]/10 dark:bg-[#0A5C9E]/20 flex items-center justify-center text-[#0A5C9E] dark:text-[#00d2ff] mb-4 border border-[#0A5C9E]/15 dark:border-[#0A5C9E]/30">
                <Icon name={stat.icon} size={22} />
              </div>
              <p className="text-3xl md:text-5xl font-black text-[#062B5B] dark:text-white tracking-tight leading-none mb-2">
                <SafeCounter value={stat.value} triggered={statsInView} />
                <span className="text-[#0A5C9E] dark:text-[#00d2ff]">{stat.suffix}</span>
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Content row (Left: details, Right: visual checklist) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 text-left">
            <p className="text-xs font-bold tracking-widest text-[#0A5C9E] dark:text-[#00d2ff] uppercase font-mono">
              The Mikessat Standard
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4 animate-[pulse_10s_infinite]">
              What Sets Us<br />Apart from Rest
            </h2>
            <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed font-semibold">
              We understand that technical systems represent critical investments. Our teams bridge the gap between heavy industrial safety guidelines and affordable domestic pricing, and our direct line access with Michael Bentum means zero automated chatbots and 100% human accountability.
            </p>

            <div className="bg-[#0A5C9E]/5 dark:bg-[#0A5C9E]/10 border border-[#0A5C9E]/20 dark:border-[#0A5C9E]/30 rounded-2xl p-6 space-y-4 flex items-start gap-4 shadow-sm">
              <div className="p-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-xl text-[#0A5C9E] shrink-0">
                <HeartHandshake size={24} />
              </div>
              <div>
                <p className="font-extrabold text-[#062B5B] dark:text-[#00d2ff] text-base font-sans">Direct Client Commitment</p>
                <p className="text-xs text-slate-605 dark:text-slate-300 mt-1 leading-relaxed font-semibold">
                  We stand by our post-installation performance. Every completed general project receives an automated 12-month workmanship safety warranty certificate.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklists.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0A5C9E]/35 dark:hover:border-[#0A5C9E]/30 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl p-6 space-y-3 flex flex-col justify-start text-left"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#0A5C9E] dark:text-[#00d2ff] shrink-0" size={18} />
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-base tracking-wide font-sans">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed pl-7 font-semibold">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
