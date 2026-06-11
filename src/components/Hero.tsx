import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Zap, Shield, HelpCircle, HardHat, Cog } from 'lucide-react';
import banner from '@/assets/images/banner.jpg';
import banner1 from '@/assets/images/banner1.jpg';
import banner3 from '@/assets/images/banner3.jpg';
import banner4 from '@/assets/images/banner4.jpg';
import banner5 from '@/assets/images/banner5.jpg';
import banner12 from '@/assets/images/banner12.jpg';

const SLIDES = [
  {
    image: banner,
    label: 'The Mikessat Engineering Team',
    description: 'Professional engineers and technicians delivering certified solutions across Ghana.'
  },
  {
    image: banner1,
    label: 'Electrical Installation & Maintenance',
    description: 'Expert, certified electrical engineering solutions compliance checks.'
  },
  {
    image: banner12,
    label: 'CCTV & Security Systems',
    description: 'Robust IP security systems with intelligent remote viewing setups.'
  },
  {
    image: banner3,
    label: 'Solar & Rooftop Engineering',
    description: 'Multi-User satellite arrays and structural digital transceivers.'
  },
  {
    image: banner4,
    label: 'Industrial Engineering Solutions',
    description: 'Neat distribution cabinet cabling under National HSE guidelines.'
  },
  {
    image: banner5,
    label: 'Advanced Technical Operations',
    description: 'Highly energy-efficient, precision-engineered installations across Ghana.'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNavTo = (id: string) => {
    if (id === '#contact') {
      window.location.hash = '#/contact';
    } else if (id === '#services') {
      window.location.hash = '#/services';
    } else {
      const element = document.querySelector(id);
      if (element) {
        const topOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden pt-20"
    >
      {/* Dynamic Fading Slideshow Background with full visual depth */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SLIDES[currentSlide].image})` }}
          />
        </AnimatePresence>
      </div>

      {/* Cinematic Overlays ensuring readability and ultimate contrast */}
      <div className="absolute inset-0 bg-slate-950/65 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-c from-[#0A5C9E]/15 via-transparent to-transparent z-10 animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />

      {/* Floating UI Badges - Engineering Tech Accents */}
      <div className="absolute bottom-10 right-10 z-20 hidden lg:flex items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 shadow-2xl px-4 py-2.5 rounded-xl select-none">
        <HardHat size={16} className="text-[#00d2ff]" />
        <div className="text-left">
          <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400 font-bold">Current Project Preview</p>
          <p className="text-xs font-semibold text-white">{SLIDES[currentSlide].label}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl text-left">
          {/* Subtle Accent Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-slate-100 uppercase font-mono">
              Professional Engineering in Ghana
            </span>
          </motion.div>

          {/* Core Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-6"
          >
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A5C9E] to-[#00d2ff]">Excellence.</span><br />
            Reliable Solutions.<br />
            <span className="text-white relative inline-block">
              Trusted Results.
              <span className="absolute left-0 bottom-2 w-full h-[6px] bg-[#0A5C9E]/30 -z-10 rounded" />
            </span>
          </motion.h1>

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-10 max-w-2xl text-shadow-sm"
          >
            Delivering professional electrical, satellite, networking, security, automation, and installation services across Ghana. Trusted by homeowners, commercial properties, and enterprises.
          </motion.p>

          {/* Active Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={() => handleNavTo('#contact')}
              className="bg-[#0A5C9E] hover:bg-[#00d2ff] hover:text-slate-950 text-center text-white px-8 py-4 rounded-lg font-bold text-base shadow-xl hover:shadow-[#00d2ff]/20 transition-all duration-300 hover:scale-[1.02] border border-white/5 cursor-pointer"
            >
              Request Quote
            </button>
            <button
              onClick={() => handleNavTo('#services')}
              className="bg-white/10 hover:bg-white/20 text-center text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 border border-white/10 backdrop-blur-md cursor-pointer"
            >
              View Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Manual Slideshow Controls */}
      <div className="absolute bottom-10 left-10 z-20 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 shadow-lg transition-all duration-200 cursor-pointer"
          aria-label="Previous slide"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="flex items-center gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-[#00d2ff]' : 'w-2 bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/10 shadow-lg transition-all duration-200 cursor-pointer"
          aria-label="Next slide"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
