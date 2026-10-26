import React from 'react';
import { Download, Sparkles, FolderGit2, Database, Code2, LineChart, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const technologies = [
    { name: 'Python', category: 'data' },
    { name: 'Pandas & NumPy', category: 'data' },
    { name: 'MS SQL', category: 'data' },
    { name: 'Power BI', category: 'data' },
    { name: 'Scikit-Learn', category: 'data' },
    { name: 'Excel', category: 'data' },
    { name: 'React', category: 'web' },
    { name: 'Tailwind CSS', category: 'web' },
    { name: 'JavaScript', category: 'web' },
    { name: 'Streamlit', category: 'data' },
    { name: 'HTML5 & CSS3', category: 'web' },
    { name: 'İş Analizi & Modelleme', category: 'skill' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background soft ambient light red / rose orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Title, Badges, CV Button */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-medium shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>Akdeniz Üniversitesi • Yönetim Bilişim Sistemleri (2023 — 2027)</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2.5">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-red-500">
                KİŞİSEL PORTFOLYO
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Merhaba, Ben{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-red-600">
                  Buket
                </span>{' '}
                👋
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-700">
                Yönetim Bilişim Sistemleri Öğrencisi <span className="text-red-400">|</span> Veri Analisti Adayı
              </p>
            </div>

            {/* Bio text updated as requested */}
            <div className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal space-y-2.5">
              <p>Akdeniz Üniversitesi'nde Yönetim Bilişim Sistemleri 4. sınıf öğrencisiyim.</p>
              <p>İş süreçleri, karar destek sistemleri ve veriyi anlamlı içgörülere dönüştürme konularına ilgi duyuyorum.</p>
              <p className="font-medium text-slate-700">Veri Analizi, İş Analizi ve Süreç Geliştirme rollerinde kariyer yapmayı hedefliyorum.</p>
            </div>

            {/* Technology Badges */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-900/70">
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                <span>Teknolojiler & Yetkinlikler</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white text-slate-700 border border-red-100 hover:border-red-300 hover:bg-red-50/80 hover:text-red-900 shadow-2xs transition-all duration-150 cursor-default"
                  >
                    {tech.category === 'data' && <Database className="w-3 h-3 text-red-500" />}
                    {tech.category === 'web' && <Code2 className="w-3 h-3 text-rose-500" />}
                    {tech.category === 'skill' && <LineChart className="w-3 h-3 text-pink-500" />}
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Call To Action: CV Download & Projects */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <a
                href="/Buket_Baytar_CV.pdf"
                download="Buket_Baytar_CV.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-red-500 via-rose-500 to-red-600 hover:from-red-600 hover:to-rose-600 shadow-md shadow-red-200/80 hover:shadow-lg hover:shadow-red-300/70 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-4 h-4 animate-bounce" />
                <span>CV İndir</span>
              </a>

              <a
                href="#projeler"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-red-50 hover:text-red-800 border border-red-200/80 shadow-2xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4 text-red-500" />
                <span>Projeleri İncele</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Veri & Süreç Modelleme</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Karar Destek Sistemleri</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              
              {/* Outer decorative soft glow ring in light red */}
              <div className="absolute -inset-2 bg-gradient-to-r from-red-400 via-rose-300 to-pink-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>

              {/* Circular profile frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-2 bg-gradient-to-tr from-red-500 via-rose-300 to-pink-400 shadow-xl shadow-red-200/70">
                <div className="w-full h-full rounded-full overflow-hidden bg-white relative flex items-center justify-center border-4 border-white">
                  
                  {/* Photo with avatar fallback */}
                  <img
                    src="https://avatars.githubusercontent.com/u/202552207?v=4"
                    alt="Buket Baytar Profil Fotoğrafı"
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
                    }}
                  />
                  
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
