import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, CheckCircle2 } from 'lucide-react';
import { Service } from '../types';
import Icon from './Icon';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onQuoteRequest: (serviceTitle: string) => void;
}

export default function ServiceModal({ service, onClose, onQuoteRequest }: ServiceModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Content Structure */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 scrollbar-thin scrollbar-thumb-slate-200"
        >
          {/* Header image background */}
          <div className="h-44 bg-slate-100 relative overflow-hidden flex items-end">
            {service.image ? (
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-90"
                referrerPolicy="no-referrer"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-slate-700 hover:text-slate-950 border border-slate-250 transition-colors shadow-sm"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Title */}
            <div className="relative p-6 z-10 flex items-center gap-3">
              <div className="h-10 w-10 bg-[#0A5C9E] rounded-lg flex items-center justify-center text-white border border-[#0A5C9E]/10 shadow-sm">
                <Icon name={service.icon} size={20} />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0A5C9E] font-extrabold pb-1 block">
                  {service.category} Service
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#062B5B] leading-none">
                  {service.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Details Context */}
          <div className="p-6 md:p-8 space-y-6 text-slate-705 text-left">
            {/* Short highlight */}
            <p className="text-slate-905 font-bold text-base border-l-4 border-[#0A5C9E] pl-4 leading-relaxed">
              {service.description}
            </p>

            {/* Deep technical paragraph */}
            <div className="space-y-4 text-sm leading-relaxed font-semibold">
              <p className="text-slate-650">{service.fullDetails}</p>
              
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3 mt-4">
                <p className="text-xs font-mono font-bold tracking-widest uppercase text-[#062B5B]">Why Mikessat guarantees this:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-[#0A5C9E]" />
                    <span>Certified engineering team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-[#0A5C9E]" />
                    <span>Conformity with Energy Commission</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-[#0A5C9E]" />
                    <span>Original products & material warranties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-[#0A5C9E]" />
                    <span>Rapid diagnostic support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Form Action Footer */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-slate-150">
              <button
                onClick={() => {
                  onQuoteRequest(service.title);
                  onClose();
                }}
                className="w-full sm:w-auto bg-[#0A5C9E] hover:bg-[#062B5B] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all text-center shadow-md shadow-[#0a5c9e]/10"
              >
                Inquire & Get Free Quote
              </button>
              <a
                href="https://wa.me/233246445790"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all text-center"
              >
                <Phone size={14} />
                <span>WhatsApp Instant Ask</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
