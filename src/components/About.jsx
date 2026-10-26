import React from 'react';
import { GraduationCap, BarChart3, Workflow, Lightbulb, Target, Sparkles } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: <GraduationCap className="w-6 h-6 text-red-500" />,
      title: 'YBS Akademik Altyapı',
      desc: 'Akdeniz Üniversitesi Yönetim Bilişim Sistemleri bölümünde yönetim stratejileri, veri tabanı mimarileri ve bilgi sistemleri entegrasyonu üzerine eğitim alıyorum.',
      tag: 'Akdeniz Üniversitesi'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-red-500" />,
      title: 'Veri Analitiği & ML',
      desc: 'Python, Pandas ve Scikit-Learn ile finansal ve operasyonel verileri analiz ederek stratejik kararları destekleyen öngörücü modeller geliştiriyorum.',
      tag: 'Python & SQL'
    },
    {
      icon: <Workflow className="w-6 h-6 text-red-500" />,
      title: 'İş Süreçleri & Optimizasyon',
      desc: 'Kurumsal iş süreçlerini haritalandırıp darboğazları analiz ediyor; dijital dönüşüm ve otomasyon ile verimlilik artışı hedefliyorum.',
      tag: 'Süreç Modelleme'
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-red-500" />,
      title: 'Problem Çözme & Web',
      desc: 'Analitik düşünce yapısını modern web teknolojileri (React, Tailwind) ile birleştirerek veriyi son kullanıcı için anlaşılır ve etkileşimli hale getiriyorum.',
      tag: 'Kullanıcı Deneyimi'
    }
  ];

  return (
    <section id="hakkimda" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Hakkımda
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Veriyi Değere, Süreçleri Başarıya Dönüştürüyorum
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            İşletmelerin operasyonel zorluklarını anlayıp veri bilimi ve modern bilişim araçlarıyla sürdürülebilir, ölçülebilir çözümler üretmeyi benimsiyorum.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="group p-7 rounded-2xl bg-white hover:bg-white border border-red-100/90 hover:border-red-300 shadow-sm hover:shadow-xl hover:shadow-red-100/60 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle top accent gradient line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-red-50 group-hover:bg-red-100/80 border border-red-100 text-red-600 transition-colors duration-200">
                  {item.icon}
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-red-900 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Objectives Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-red-50/90 via-rose-50/40 to-pink-50/50 border border-red-100/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-red-200">
              🎓
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Akdeniz Üniversitesi — Yönetim Bilişim Sistemleri
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Lisans Derecesi (2023 – 2027 Devam Ediyor) • Karar Destek, Veri Analitiği ve Süreç Modelleme
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-red-800 border border-red-200 shadow-2xs">
              <Target className="w-3.5 h-3.5 text-red-500" />
              Lisans Eğitimi (Devam Ediyor)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
