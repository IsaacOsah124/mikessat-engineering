import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { Service } from '../types';
import Icon from './Icon';
import ServiceModal from './ServiceModal';

const CATEGORIES = [
  { value: 'all', label: 'All Solutions' },
  { value: 'electrical', label: 'Electrical Wiring' },
  { value: 'satellite', label: 'Satellite & TVs' },
  { value: 'security', label: 'Surveillance & Fencing' },
  { value: 'automation', label: 'Smart Automation' },
  { value: 'networking', label: 'IT Networks' }
];

interface ServicesProps {
  onQuoteSelect: (serviceName: string) => void;
}

export default function Services({ onQuoteSelect }: ServicesProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = SERVICES.filter(
    (s) => activeTab === 'all' || s.category === activeTab
  );

  return (
    <section id="services" className="py-24 bg-slate-50 text-slate-800 border-t border-slate-200 relative">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#0A5C9E]/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#0A5C9E] uppercase font-mono mb-2">
            What We Do Best
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Our Professional Technical Services
          </h2>
          <p className="text-lg text-slate-650 leading-relaxed font-medium">
            Mikessat Engineering provides all 15 corporate engineering services with highly refined quality metrics, fully compliant with Ghana safety regulations.
          </p>

          {/* Categories Tab Bar */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-slate-200/60 pb-6">
            {CATEGORIES.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  activeTab === tab.value
                    ? 'bg-[#0A5C9E] text-white shadow-md shadow-[#0a5c9e]/20'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-250 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                className="bg-white border border-slate-200 shadow-sm hover:border-[#0A5C9E]/35 hover:shadow-md overflow-hidden flex flex-col justify-between group transition-all duration-300 rounded-2xl"
              >
                {/* Visual Accent */}
                <div className="h-2 bg-[#062B5B]/5 group-hover:bg-[#0A5C9E]/55 transition-colors duration-300" />
                
                <div className="p-8 space-y-6 flex-grow text-left">
                  {/* Icon Panel */}
                  <div className="h-12 w-12 rounded-xl bg-[#0A5C9E]/10 flex items-center justify-center text-[#0A5C9E] border border-[#0A5C9E]/10 group-hover:bg-[#0A5C9E] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1">
                    <Icon name={service.icon} size={22} />
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-[#062B5B] tracking-wide transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-8 pt-0 flex items-center justify-between border-t border-slate-100 mt-auto">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-[#0A5C9E] flex items-center gap-1.5 group/btn transition-colors"
                  >
                    <span>Full Specs</span>
                    <motion.span
                      className="inline-block"
                      animate={{ x: 0 }}
                      whileHover={{ x: 3 }}
                    >
                      &rarr;
                    </motion.span>
                  </button>
                  <button
                    onClick={() => onQuoteSelect(service.title)}
                    className="text-xs font-bold font-mono tracking-wider text-[#0A5C9E] hover:text-white bg-slate-50 hover:bg-[#0A5C9E] px-4 py-2 rounded-lg border border-slate-200 hover:border-transparent transition-all"
                  >
                    Order Link
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for detail view */}
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onQuoteRequest={onQuoteSelect}
          />
        )}

      </div>
    </section>
  );
}
