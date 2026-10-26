import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Check, Copy, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'buketbaytar@icloud.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="iletisim" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            İletişim
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Birlikte Harika İşler Üretelim
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Veri analizi, iş analistliği rolleri, staj ve iş birlikleri için benimle doğrudan iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Contact Banner & Cards */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-red-50/30 to-rose-50/30 rounded-3xl border border-red-200/80 p-8 sm:p-12 shadow-xl shadow-red-100/60 relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-200/25 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            
            {/* Left Column: Direct Action */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Yeni Fırsatlar İçin Açığım 🚀
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yönetim Bilişim Sistemleri disipliniyle verileri anlamlandırmaya, iş süreçlerini modellemeye ve kurumsal verimliliği artırmaya hazırım.
              </p>

              {/* Email Box with One-Click Copy */}
              <div className="flex items-center gap-2 p-2 bg-white rounded-2xl border border-red-200 shadow-2xs">
                <div className="p-2.5 rounded-xl bg-red-50 text-red-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  readOnly
                  value={email}
                  className="bg-transparent text-xs sm:text-sm font-semibold text-slate-800 outline-hidden flex-1 select-all"
                />
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl text-red-700 bg-red-50 hover:bg-red-100 transition-colors"
                  title="E-postayı Kopyala"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Kopyalandı!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopyala</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Mail Button */}
              <div>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-red-500 via-rose-500 to-red-600 hover:from-red-600 hover:to-rose-600 shadow-md shadow-red-200/80 hover:shadow-red-300/70 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>E-posta Gönder</span>
                </a>
              </div>
            </div>

            {/* Right Column: Social Connection Cards */}
            <div className="space-y-3.5">
              
              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/buketbaytar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-red-50/50 border border-red-100/80 hover:border-red-300 shadow-xs hover:shadow-md hover:shadow-red-100/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Profesyonel Profil</p>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-red-600">
                      linkedin.com/in/buketbaytar
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-red-400 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/buketbaytar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-red-50/50 border border-red-100/80 hover:border-red-300 shadow-xs hover:shadow-md hover:shadow-red-100/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Açık Kaynak & Kodlar</p>
                    <p className="text-sm font-bold text-slate-800 group-hover:text-red-600">
                      github.com/buketbaytar
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-red-400 group-hover:text-red-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/80 border border-red-100">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-red-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Konum</p>
                  <p className="text-sm font-bold text-slate-800">
                    Antalya, Türkiye (Akdeniz Üniversitesi)
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
