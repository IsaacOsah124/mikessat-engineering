import { Facebook, Instagram, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import logoImg from '@/assets/images/logo.png';

export default function Footer() {
  const currentYear = 2026; // Match system year

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61586347541029',
      icon: Facebook,
      bgColor: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mikessat',
      icon: Instagram,
      bgColor: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-purple-600'
    },
    {
      // Custom Simple SVG Icon for TikTok since lucide does not have standard Tiktok in older versions
      name: 'TikTok',
      url: 'https://www.tiktok.com/@mikes.sat.enginee',
      icon: (props: any) => (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          className="h-4 w-4 inline-block"
          style={{ width: props.size || 16, height: props.size || 16 }}
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95 1.14 2.28 1.95 3.73 2.27v3.52c-1.83-.02-3.64-.67-5.07-1.82-.16-.13-.3-.27-.45-.4v6.86c.03 1.9-.38 3.84-1.28 5.51-1.42 2.65-4.22 4.47-7.25 4.82-1.89.24-3.83.05-5.6-.57-3.13-1.07-5.62-3.8-6.32-7.06-.82-3.69.5-7.7 3.37-10.12 2.45-2.09 5.86-2.88 9-2.02v3.6c-1.63-.58-3.48-.42-4.97.43-1.6 1-2.58 2.87-2.48 4.75.1 1.98 1.3 3.84 3.1 4.63 1.3.58 2.76.62 4.08.11 1.62-.6 2.75-2.22 2.85-3.95L12.53.02z"/>
        </svg>
      ),
      bgColor: 'hover:bg-black'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About us', href: '#/about' },
    { name: 'Meet the Team', href: '#/about#team' },
    { name: 'Services', href: '#/services' },
    { name: 'Projects', href: '#/projects' },
    { name: 'Contact us', href: '#/contact' }
  ];

  const keyServices = [
    { name: 'General Electrical Wiring', href: '#/services' },
    { name: 'DSTV Installation', href: '#/services' },
    { name: 'CCTV & Alarm Systems', href: '#/services' },
    { name: 'Gate Automation', href: '#/services' },
    { name: 'Access Control Systems', href: '#/services' },
    { name: 'Network Setup', href: '#/services' }
  ];

  const handleScrollTo = (id: string) => {
    window.location.hash = id;
    if (!id.includes('team')) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 relative overflow-hidden text-left">
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#0A5C9E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: About & Logo */}
          <div className="space-y-6">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#/');
              }}
              className="inline-block"
            >
              <div className="flex items-center">
                <div className="bg-white rounded-lg px-2.5 py-1.5 shadow-sm">
                  <img src={logoImg} alt="Mikessat Engineering" className="h-7 w-auto object-contain" />
                </div>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold font-sans">
              Become Ghana's most trusted and innovative engineering solutions provider. Delivering electrical wiring, CCTV, satellites, fencing, and gate automations neatly.
            </p>

            {/* Social Links Panel */}
            <div className="space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-[#0A5C9E] dark:text-[#00d2ff] font-bold">Follow Us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                   const IconComp = social.icon as any;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 bg-slate-200/60 dark:bg-slate-800 hover:bg-[#0A5C9E]/95 dark:hover:bg-[#0A5C9E]/95 rounded-full border border-slate-300/40 dark:border-slate-700 text-slate-700 dark:text-slate-300 ${social.bgColor} hover:text-white dark:hover:text-white transition-all duration-350 hover:scale-105 shadow-sm flex items-center justify-center`}
                      title={`Visit Mikessat on ${social.name}`}
                      aria-label={`Visit Mikessat on ${social.name}`}
                    >
                      <IconComp size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Col 2: Quick links */}
          <div className="space-y-6 text-left">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider font-mono border-l-2 border-[#0A5C9E] pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(link.href);
                    }}
                    className="text-slate-600 dark:text-slate-400 hover:text-[#0A5C9E] dark:hover:text-[#00d2ff] transition-colors flex items-center gap-1 group/link font-semibold"
                  >
                    <ArrowRight size={12} className="text-slate-400 dark:text-slate-500 group-hover/link:text-[#0A5C9E] dark:group-hover/link:text-[#00d2ff] transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Solutions */}
          <div className="space-y-6 text-left">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider font-mono border-l-2 border-[#0A5C9E] pl-2.5">
              Service Index
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              {keyServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(service.href);
                    }}
                    className="text-slate-600 dark:text-slate-400 hover:text-[#0A5C9E] dark:hover:text-[#00d2ff] transition-colors flex items-center gap-1 group/link font-semibold"
                  >
                    <ArrowRight size={12} className="text-slate-400 dark:text-slate-500 group-hover/link:text-[#0A5C9E] dark:group-hover/link:text-[#00d2ff] transition-colors" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Reach Mikessat */}
          <div className="space-y-6 text-left text-xs sm:text-sm">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider font-mono border-l-2 border-[#0A5C9E] pl-2.5">
              Direct Contact
            </h4>
            
            <div className="space-y-4 font-semibold text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-3">
                <Phone size={14} className="text-[#0A5C9E] dark:text-[#00d2ff] shrink-0 mt-1" />
                <div>
                  <p className="text-slate-805 dark:text-slate-200 font-bold text-xs">Michael Bentum (CEO)</p>
                  <a href="tel:+233246445790" className="hover:text-[#0A5C9E] dark:hover:text-[#00d2ff] block mt-0.5">+233 246 445 790</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={14} className="text-[#0A5C9E] dark:text-[#00d2ff] shrink-0 mt-1" />
                <div>
                  <p className="text-slate-805 dark:text-slate-200 font-bold text-xs">Technical Support</p>
                  <a href="mailto:support@mikessatengineering.com" className="hover:text-[#0A5C9E] dark:hover:text-[#00d2ff] block mt-0.5 break-all">support@mikessatengineering.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={14} className="text-[#0A5C9E] dark:text-[#00d2ff] shrink-0 mt-1" />
                <div>
                  <p className="text-slate-805 dark:text-slate-200 font-bold text-xs">Ghana Time Attendance</p>
                  <p className="mt-0.5">Mon - Sat: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Separator & copyright block */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Mikessat Engineering. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-500 dark:text-slate-400">
            <p>Michael Bentum (CEO)</p>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <p>Energy Commission Ghana Compliant</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
