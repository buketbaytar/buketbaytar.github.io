import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hakkimda', 'deneyim', 'projeler', 'iletisim'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımda', href: '#hakkimda', id: 'hakkimda' },
    { name: 'Deneyim', href: '#deneyim', id: 'deneyim' },
    { name: 'Projeler', href: '#projeler', id: 'projeler' },
    { name: 'İletişim', href: '#iletisim', id: 'iletisim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm shadow-red-100/50 border-b border-red-100/70 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-slate-800 transition-colors"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 via-rose-500 to-red-600 flex items-center justify-center text-white text-sm font-extrabold shadow-sm shadow-red-300">
              B
            </span>
            <span>
              Buket Baytar<span className="text-red-500 font-extrabold">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 p-1.5 rounded-full border border-red-100/80 shadow-sm shadow-red-50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-red-100/80 text-red-800 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-red-700 hover:bg-red-50/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Social Links & Action */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/in/buketbaytar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profili"
              className="p-2.5 text-slate-600 hover:text-red-700 hover:bg-red-50/80 border border-red-100/60 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/buketbaytar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profili"
              className="p-2.5 text-slate-600 hover:text-red-700 hover:bg-red-50/80 border border-red-100/60 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-2xs"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#iletisim"
              className="ml-1 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-red-500 via-rose-500 to-red-600 hover:from-red-600 hover:to-rose-600 rounded-xl shadow-sm shadow-red-300/50 hover:shadow-red-400/50 transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Bağlantı Kur
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-600 hover:text-red-700 hover:bg-red-50 border border-red-100/60 focus:outline-hidden"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-red-100 px-4 pt-3 pb-5 mt-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-red-50 hover:text-red-700"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3 mt-2 border-t border-red-100">
              <a
                href="https://www.linkedin.com/in/buketbaytar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 bg-red-50/80 rounded-lg hover:text-red-700 flex-1 justify-center border border-red-100"
              >
                <Linkedin className="w-4 h-4 text-red-600" />
                LinkedIn
              </a>
              <a
                href="https://github.com/buketbaytar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 bg-red-50/80 rounded-lg hover:text-red-700 flex-1 justify-center border border-red-100"
              >
                <Github className="w-4 h-4 text-red-600" />
                GitHub
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
