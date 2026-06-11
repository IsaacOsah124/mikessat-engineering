import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '@/assets/images/logo.png';

interface NavbarProps {
  currentPage: string;
  theme: string;
  onThemeToggle: () => void;
}

export default function Navbar({ currentPage, theme, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isTransparent = !isScrolled && currentPage === 'home';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About us', href: '#/about' },
    { name: 'Services', href: '#/services' },
    { name: 'Projects', href: '#/projects' },
    { name: 'Contact us', href: '#/contact' }
  ];

  const getPageName = (hash: string) => {
    if (hash === '#/about') return 'about';
    if (hash === '#/services') return 'services';
    if (hash === '#/projects') return 'projects';
    if (hash === '#/contact') return 'contact';
    return 'home';
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    window.location.hash = href;
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-355 ${
        isScrolled || currentPage !== 'home'
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#/');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center">
              <div className="bg-white rounded-lg px-2.5 py-1.5 shadow-sm">
                <img src={logoImg} alt="Mikessat Engineering" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const linkPage = getPageName(link.href);
                const isActive = currentPage === linkPage;
                
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`text-sm font-semibold tracking-wide transition-colors duration-200 relative py-1 group ${
                        isActive 
                          ? isTransparent 
                            ? 'text-white font-bold' 
                            : 'text-[#0A5C9E]' 
                          : isTransparent 
                            ? 'text-white/80 hover:text-white' 
                            : 'text-slate-700 dark:text-slate-300 hover:text-[#0A5C9E]'
                      }`}
                    >
                      {link.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      } ${isTransparent ? 'bg-white' : 'bg-[#0A5C9E]'}`} />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={onThemeToggle}
              className={`p-2.5 rounded-full transition-all duration-200 border cursor-pointer ${
                isTransparent 
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} className="text-amber-500" /> : <Moon size={15} />}
            </button>

            {/* CTA Phone Call */}
            <a
              href="tel:+233246445790"
              className="flex items-center gap-2 bg-[#0A5C9E] hover:bg-[#062B5B] text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-[#0A5C9E]/10"
            >
              <Phone size={14} className="animate-pulse" />
              <span>+233 246 445 790</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2.5">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                isTransparent 
                  ? 'bg-transparent border-white/20 text-white hover:bg-white/10' 
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
              title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} />}
            </button>
            <a
              href="tel:+233246445790"
              className={`p-2.5 rounded-full text-xs transition-all ${
                isTransparent 
                  ? 'bg-white/10 text-white hover:bg-white/20' 
                  : 'bg-[#0A5C9E]/10 text-[#0A5C9E] hover:bg-[#0A5C9E]/20'
              }`}
              title="Call Us"
            >
              <Phone size={15} />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-all duration-200 ${
                isTransparent 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-[#0A5C9E] hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 shadow-inner">
              {navLinks.map((link) => {
                const linkPage = getPageName(link.href);
                const isActive = currentPage === linkPage;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`block px-3 py-2.5 rounded-md text-base font-semibold transition-all duration-200 border-l-2 ${
                      isActive 
                        ? 'text-[#0A5C9E] bg-slate-50 dark:bg-slate-800/50 border-[#0A5C9E]' 
                        : 'text-slate-700 dark:text-slate-300 hover:text-[#0A5C9E] hover:bg-slate-50 dark:hover:bg-slate-800/30 border-transparent hover:border-[#0A5C9E]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 px-3">
                <a
                  href="tel:+233246445790"
                  className="w-full flex items-center justify-center gap-3 bg-[#0A5C9E] hover:bg-[#062B5B] text-white py-3 rounded-lg font-bold shadow-md text-center transition-all"
                >
                  <Phone size={18} />
                  <span>Call +233 246 445 790</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
