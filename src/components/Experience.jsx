import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2, ShieldCheck, ShoppingCart } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      period: '2023 — 2027 (Devam Ediyor)',
      title: 'Yönetim Bilişim Sistemleri (Lisans)',
      organization: 'Akdeniz Üniversitesi',
      location: 'Antalya, Türkiye',
      type: 'Lisans Eğitimi',
      icon: <GraduationCap className="w-4 h-4 text-red-500" />,
      description:
        'İşletme yönetimi ile bilişim teknolojilerinin kesişiminde; veritabanı mimarisi, karar destek sistemleri, istatistiksel analiz ve sistem tasarımı üzerine eğitim alıyorum.',
      points: [
        'Yöneylem araştırması, optimizasyon ve karar verme teknikleriyle analitik problem çözme.',
        'İlişkisel veritabanları (MS SQL) tasarımı, veri işleme ve kurumsal sistem entegrasyonu.',
        'İş gereksinimlerini analiz etme, süreçleri modelleme ve kurumsal kaynak planlaması esasları.'
      ],
      skills: ['YBS', 'MS SQL', 'Süreç Modelleme', 'Karar Destek', 'İstatistik']
    },
    {
      period: null,
      title: 'Kredi Kartı Dolandırıcılığı Tespiti (ML & Risk Analizi)',
      organization: 'Kredi Kartı Sahtekarlık Analitiği Projesi',
      location: 'Bağımsız Proje',
      type: 'Makine Öğrenmesi',
      icon: <ShieldCheck className="w-4 h-4 text-red-500" />,
      description:
        'Son derece dengesiz (%0.17 fraud) 284.807 finansal işlem verisi üzerinde şüpheli hareketleri yakalamak ve banka kayıplarını minimize etmek amacıyla geliştirildi.',
      points: [
        'Data Leakage önleme prensibi ve StandardScaler ile verilerin eşit ağırlıkta modellenmesi.',
        'Karar Ağacı (Decision Tree) ve Lojistik Regresyon modelleriyle %78 Recall ve %83 F1-Score başarısı.',
        'Streamlit ile gerçek zamanlı karar ve risk değerlendirmesi sunan interaktif web arayüzü.'
      ],
      skills: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Streamlit', 'Risk Analizi']
    },
    {
      period: '2023 — 2024',
      title: 'Aquaflora — E-Ticaret ve Süreç Platformu',
      organization: 'Aquaflora Web Platformu',
      location: 'Antalya, Türkiye',
      type: 'Web Geliştirme',
      icon: <ShoppingCart className="w-4 h-4 text-red-500" />,
      description:
        'Dalış malzemeleri ve su altı ekipmanları satışı için uçtan uca kullanıcı deneyimi, sepet akışı ve ürün kataloğunu yöneten modern web uygulaması tasarımı.',
      points: [
        'Vite, Tailwind CSS ve JavaScript ile hızlı ve mobil uyumlu ön yüz mimarisi.',
        'Dinamik sepet yönetimi, ürün kataloglama ve kullanıcı dostu arayüz tasarımı.',
        'MongoDB Atlas veritabanı şemaları ve REST API entegrasyonu.'
      ],
      skills: ['JavaScript', 'React', 'Tailwind CSS', 'Vite', 'MongoDB', 'UI/UX']
    }
  ];

  return (
    <section id="deneyim" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Deneyim & Yolculuk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Eğitim ve Proje Yolculuğum
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Yönetim Bilişim Sistemleri lisans eğitimim ve pratik olarak hayata geçirdiğim temel çalışmalarım.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-red-200/90 space-y-12 max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Node / Circle */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-10 h-10 rounded-full bg-white border-2 border-red-300 group-hover:border-red-500 shadow-md shadow-red-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                  {exp.icon}
                </div>
              </div>

              {/* Card Container */}
              <div className="bg-white group-hover:bg-white p-6 sm:p-7 rounded-2xl border border-red-100 group-hover:border-red-300 shadow-sm hover:shadow-xl hover:shadow-red-100/70 transition-all duration-300 hover:-translate-y-0.5">
                
                {/* Meta details (Period & Type) */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  {exp.period ? (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  ) : (
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100/70 px-2.5 py-0.5 rounded-md">
                      {exp.type}
                    </span>
                  )}
                  {exp.period && (
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100/70 px-2.5 py-0.5 rounded-md">
                      {exp.type}
                    </span>
                  )}
                </div>

                {/* Role and Organization */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                  {exp.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 mt-1 mb-4">
                  <span className="font-semibold text-red-900">{exp.organization}</span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-5">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-red-50">
                  {exp.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-[11px] font-medium text-red-800 bg-red-50/70 rounded-md border border-red-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
