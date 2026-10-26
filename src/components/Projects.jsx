import React from 'react';
import { ExternalLink, Github, Sparkles, Database, Layers, ArrowUpRight, ShieldCheck, ShoppingCart, BarChart3 } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'fraud-detection',
      title: 'Kredi Kartı Dolandırıcılığı Tespiti',
      subtitle: 'Credit Card Fraud Detection & Streamlit Web Paneli',
      category: 'Makine Öğrenmesi & Veri Analitiği',
      icon: <ShieldCheck className="w-5 h-5 text-red-500" />,
      description:
        '284.000+ işlem içeren yüksek oranda dengesiz (%0.17 fraud) finansal veri setinde dolandırıcılık vakalarını minimize etmek için geliştirilmiş makine öğrenmesi ve karar destek simülasyonu.',
      highlights: [
        'Data Leakage önleme ve StandardScaler ile özellik ölçeklendirme',
        'Karar Ağacı (Decision Tree) ve Lojistik Regresyon karşılaştırması',
        'Recall (Duyarlılık: %78) ve F1-Score (%83) optimizasyonu',
        'Streamlit ile anlık risk analizi yapan interaktif simülasyon paneli'
      ],
      tags: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Streamlit', 'Veri Modelleme'],
      githubUrl: 'https://github.com/buketbaytar/credit-card-fraud-detection',
      featured: true,
      badgeText: 'Öne Çıkan ML Projesi'
    },
    {
      id: 'aquaflora',
      title: 'Aquaflora — E-Ticaret Platformu',
      subtitle: 'Modern Web Mimarisi & Süreç Yönetimi',
      category: 'Web Geliştirme & UI/UX',
      icon: <ShoppingCart className="w-5 h-5 text-red-500" />,
      description:
        'Dalış malzemeleri ve su altı ekipmanları alanında kullanıcı odaklı e-ticaret süreçlerini yöneten, sepet ve katalog akışlarını dijitalleştiren modern web uygulaması.',
      highlights: [
        'Vite ve modern JavaScript ile yüksek performanslı arayüz',
        'Kullanıcı dostu dinamik sepet ve ürün filtreleme mekanizmaları',
        'MongoDB Atlas veritabanı şeması ve REST API entegrasyonu'
      ],
      tags: ['JavaScript', 'Vite', 'Tailwind CSS', 'Node.js', 'MongoDB', 'UI/UX'],
      githubUrl: 'https://github.com/buketbaytar/aquaflora',
      featured: false,
      badgeText: 'Web & E-Ticaret'
    },
    {
      id: 'powerbi-dashboard',
      title: 'Kurumsal Karar Destek Paneli',
      subtitle: 'Power BI & SQL ile İş Zekası ve KPI Analizi',
      category: 'İş Analitiği & İş Zekası (BI)',
      icon: <BarChart3 className="w-5 h-5 text-red-500" />,
      description:
        'İşletmelerin operasyonel verilerini konsolide ederek satış performansını, stok devir hızını ve kritik KPI göstergelerini görselleştiren interaktif yönetim paneli.',
      highlights: [
        'MS SQL veritabanı üzerinden ilişkisel veri ambarı modelleme',
        'DAX fonksiyonları ile dinamik metrik ve trend hesaplamaları',
        'Yöneticiler için anlık aksiyon alınabilir analitik raporlar'
      ],
      tags: ['Power BI', 'MS SQL', 'DAX', 'Excel', 'İş Analizi'],
      githubUrl: 'https://github.com/buketbaytar',
      featured: false,
      badgeText: 'İş Zekası (BI)'
    }
  ];

  return (
    <section id="projeler" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Portfolyo & Projeler
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Geliştirdiğim Seçkin Çalışmalar
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Veri bilimi, makine öğrenmesi, iş zekası ve modern web teknolojilerini bir araya getiren projelerim.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group hover:-translate-y-1 ${
                proj.featured
                  ? 'border-red-300 shadow-lg shadow-red-100/80 ring-2 ring-red-400/20'
                  : 'border-red-100 hover:border-red-300 shadow-sm hover:shadow-xl hover:shadow-red-100/60'
              }`}
            >
              {/* Top Accent Gradient Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-red-500 via-rose-500 to-red-600" />

              <div className="p-7 space-y-5 flex-1">
                
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    {proj.badgeText}
                  </span>
                  <div className="p-2 rounded-xl bg-red-50 text-red-500 group-hover:bg-red-100 transition-colors">
                    {proj.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-medium text-red-600 mt-1">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {proj.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                    Önemli Çıktılar:
                  </p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Card Footer: Tags & Repo Link */}
              <div className="p-7 pt-0 border-t border-red-50 mt-4 space-y-4">
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-red-50/70 text-red-800 border border-red-100/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-2">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 text-xs font-semibold rounded-xl text-red-800 bg-red-50/80 hover:bg-red-100 border border-red-200/80 group-hover:border-red-300 transition-all duration-200"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Github className="w-4 h-4 text-red-600" />
                      GitHub'da İncele
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
