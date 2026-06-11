import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Clock, Send, MessageSquareCode, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES } from '../data';

interface ContactProps {
  preselectedService?: string;
}

export default function Contact({ preselectedService = '' }: ContactProps) {
  // Local states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  // Sync pre-selected service from other triggers
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
      // Scroll to contact form smoothly when a service is preselected
      const element = document.querySelector('#contact');
      if (element) {
        const yOffset = -80;
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
    }
  }, [preselectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{9,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (e.g. +233246445790)';
    }
    if (!formData.serviceType) newErrors.serviceType = 'Please select a technical service';
    if (!formData.message.trim()) newErrors.message = 'Please specify your project details';
    
    // Email is optional but if filled, validate
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setApiError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 text-slate-800 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-1/2 -right-36 w-72 h-72 rounded-full bg-[#0A5C9E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full font-sans">
        
        {/* Header Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#0A5C9E] uppercase font-mono mb-2">
            Secure Service
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Consult With Our Experts List
          </h2>
          <p className="text-lg text-slate-655 leading-relaxed font-medium">
            Send us your technical specs, layout plans, or diagnostic problems. Michael Bentum and our engineers are ready to resolve them.
          </p>
        </div>

        {/* Form and info split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/85 shadow-md rounded-3xl p-6 sm:p-10 relative flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <p className="text-sm text-[#0A5C9E] font-mono leading-none tracking-wider uppercase font-extrabold mb-4">Project Inquiry Form</p>
                  
                  {/* Row Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold tracking-wide text-slate-705">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Michael Boateng"
                        className={`w-full bg-slate-50 border ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-slate-205 focus:border-[#0A5C9E]'
                        } rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white transition-all`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs flex items-center gap-1 font-bold">
                          <AlertCircle size={10} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold tracking-wide text-slate-705">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+233 24 644 5790"
                        className={`w-full bg-slate-50 border ${
                          errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-slate-205 focus:border-[#0A5C9E]'
                        } rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white transition-all`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs flex items-center gap-1 font-bold">
                          <AlertCircle size={10} /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row Email & Service type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold tracking-wide text-slate-705">
                        Email Address <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="client@gmail.com"
                        className={`w-full bg-slate-50 border ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-slate-205 focus:border-[#0A5C9E]'
                        } rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white transition-all`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs flex items-center gap-1 font-bold">
                          <AlertCircle size={10} /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Service selection */}
                    <div className="space-y-2">
                      <label htmlFor="serviceType" className="text-xs font-bold tracking-wide text-slate-705">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={`w-full bg-slate-50 border ${
                          errors.serviceType ? 'border-red-500/50 focus:border-red-500' : 'border-slate-205 focus:border-[#0A5C9E]'
                        } rounded-lg px-4 py-3 text-sm text-slate-800 outline-none focus:bg-white transition-all cursor-pointer`}
                      >
                        <option value="" className="bg-white text-slate-600">-- Choose a Service --</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title} className="bg-white text-slate-800">
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <p className="text-red-500 text-xs flex items-center gap-1 font-bold">
                          <AlertCircle size={10} /> {errors.serviceType}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold tracking-wide text-slate-705">
                      Project Goals & Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your requirements. E.g. 4 CCTV cameras placement, 3-phase domestic wiring, automatic gate weight, or exact troubleshooting signals..."
                      className={`w-full bg-slate-50 border ${
                        errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-slate-205 focus:border-[#0A5C9E]'
                      } rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:bg-white transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs flex items-center gap-1 font-bold">
                        <AlertCircle size={10} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* API error */}
                  {apiError && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-4 py-3 rounded-lg">
                      <AlertCircle size={16} className="shrink-0" /> {apiError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="quote-submit-btn"
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#0A5C9E] hover:bg-[#062B5B] disabled:bg-[#0A5C9E]/50 text-white py-3.5 px-6 rounded-lg font-bold text-base transition-all duration-300 mt-2 flex items-center justify-center gap-2 shadow-md shadow-[#0a5c9e]/15 border border-transparent"
                    >
                      {submitting ? (
                        <span>Validating System Logs...</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Quote Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="h-20 w-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto border border-emerald-150 shadow-md">
                    <CheckCircle2 size={44} />
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-2xl font-black text-[#062B5B]">System Synchronized!</h3>
                    <p className="text-slate-650 text-sm max-w-md mx-auto leading-relaxed font-semibold">
                      Your technical survey inquiry was safely logged. CEO Michael Bentum and our tech crew will evaluate your specs and phone you back within 2 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-250 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Block: Info & Maps */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            <div className="bg-white border border-slate-200/85 shadow-md rounded-3xl p-8 space-y-8 flex-grow">
              
              <h3 className="text-xl font-bold tracking-tight text-[#062B5B] border-b border-slate-100 pb-4">
                Corporate Contacts
              </h3>

              <div className="space-y-6">
                {/* Phone Link */}
                <a
                  href="tel:+233246445790"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all group"
                >
                  <div className="h-10 w-10 bg-[#0A5C9E]/10 rounded-lg flex items-center justify-center text-[#0A5C9E] group-hover:bg-[#0a5c9e] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#0A5C9E]/15">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#0A5C9E] font-extrabold">Direct Voice Hotline</p>
                    <p className="font-extrabold text-[#062B5B] text-base mt-1">+233 246 445 790</p>
                    <p className="text-xs text-slate-550 font-bold">Tap to dial - CEO Michael Bentum</p>
                  </div>
                </a>

                {/* Email link */}
                <a
                  href="mailto:support@mikessatengineering.com"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all group"
                >
                  <div className="h-10 w-10 bg-[#0A5C9E]/10 rounded-lg flex items-center justify-center text-[#0A5C9E] group-hover:bg-[#0a5c9e] group-hover:text-white transition-colors duration-300 shrink-0 border border-[#0A5C9E]/15">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#0A5C9E] font-extrabold">Technical Desk Email</p>
                    <p className="font-extrabold text-[#062B5B] text-base mt-1 text-wrap break-all">support@mikessatengineering.com</p>
                    <p className="text-xs text-slate-550 font-bold">Receive detailed proposals & pricing sheets</p>
                  </div>
                </a>

                {/* Hours section */}
                <div className="flex items-start gap-4 p-3">
                  <div className="h-10 w-10 bg-[#0A5C9E]/10 rounded-lg flex items-center justify-center text-[#0A5C9E] shrink-0 border border-[#0A5C9E]/15">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#0A5C9E] font-extrabold">Working Hours</p>
                    <div className="text-slate-800 text-sm font-bold mt-1 space-y-1">
                      <p>Mon - Fri: <span className="text-[#0A5C9E]">8:00 AM - 6:00 PM</span></p>
                      <p>Saturdays: <span className="text-slate-500">9:00 AM - 2:00 PM</span></p>
                      <p className="text-xs text-emerald-600 font-extrabold mt-1">Emergency Call Outs: 24/7 Standby</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic WhatsApp Trigger */}
              <div className="border-t border-slate-100 pt-6">
                <a
                  href="https://wa.me/233246445790?text=Hello%20Mikessat%20Engineering,%20I%2527m%20interested%20in%20obtaining%20a%20commercial%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-center border border-transparent"
                >
                  <MessageSquareCode size={20} />
                  <span>Launch WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded maps space */}
            <div className="border border-slate-200 shadow-md rounded-3xl overflow-hidden h-56 relative bg-slate-100">
              <iframe
                title="Mikessat Accra Ghana Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127066.22891969036!2d-0.26462879555139265!3d5.5913504810565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1700000000000!3m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.02) brightness(1.02)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
