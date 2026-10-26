import React from 'react';
import { Heart, Github, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-white border-t border-red-100/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo & Copyright */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white text-xs font-bold shadow-xs">
              B
            </span>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} <span className="font-semibold text-slate-700">Buket Baytar</span>. Tüm hakları saklıdır.
            </p>
          </div>

          {/* Center Note */}
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            React & Tailwind CSS ile sevgiyle tasarlandı
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-400" />
          </p>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/buketbaytar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-slate-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/buketbaytar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-slate-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Yukarı Çık"
              className="p-2 text-slate-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors ml-2"
              title="Başa Dön"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
