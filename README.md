# Buket Baytar — Kişisel Portfolyo Web Sitesi 💜

React ve Tailwind CSS kullanılarak modern, ferah ve hafif mor tonlarında (light purple) tasarlanmış tek sayfalık (single-page) kişisel portfolyo web sitesi.

---

## 🚀 Yerel Ortamda (Local) Tek Tıklamayla Çalıştırma

Projeyi çalıştırmanın 2 çok basit yolu vardır:

### 1. Yol: Tek Tıklama ile (Önerilen)
Proje klasöründe bulunan **`baslat.bat`** (veya **`start.bat`**) dosyasına **çift tıklayın**.
- Gerekli paketleri kontrol eder.
- Geliştirme sunucusunu (`vite`) başlatır.
- Tarayıcınızı otomatik olarak açarak `http://localhost:5173` adresine yönlendirir.

### 2. Yol: Terminal / Komut Satırı ile
Proje dizinindeyken aşağıdaki komutu çalıştırmanız yeterlidir:
```bash
npm run dev
```
Ardından tarayıcınızdan `http://localhost:5173` adresini ziyaret edebilirsiniz.

---

## 🎨 Tasarım ve Bölümler

1. **Top Bar (Sabit Üst Menü / Sticky Navbar):**
   - Sayfa içi yumuşak kaydırma (smooth scroll): *Hakkımda*, *Deneyim*, *Projeler*, *İletişim*.
   - Sağ alanda [LinkedIn](https://www.linkedin.com/in/buketbaytar) ve [GitHub](https://github.com/buketbaytar) butonları.
   - Mobil cihazlar için responsive hamburger menü.

2. **Hero Bölümü:**
   - Sağ tarafta zarif, hafif mor ışımalı yuvarlak çerçeveli profil fotoğrafı alanı.
   - Sol tarafta isim (**Buket Baytar**), unvan ve Akdeniz Üniversitesi Yönetim Bilişim Sistemleri (YBS) arka planını yansıtan biyografi.
   - Teknolojiler ve yetkinlikler için modern etiketler (*Python, SQL, Power BI, Scikit-Learn, React, Tailwind CSS vb.*).
   - `public` klasöründen dosya indiren işlevsel **"CV İndir"** butonu (`/Buket_Baytar_CV.pdf`).

3. **Hakkımda Bölümü:**
   - YBS akademik altyapısı, veri odaklı karar alma vizyonu, süreç optimizasyonu ve analitik düşünce sütunları.

4. **Deneyim Bölümü (Dikey Zaman Çizelgesi / Vertical Timeline):**
   - Dikey eksenli, sade ve şık kartlar ile eğitim ve proje yolculuğu.

5. **Projeler Bölümü:**
   - Kredi Kartı Dolandırıcılığı Tespiti (Makine Öğrenmesi & Streamlit Web Paneli).
   - Aquaflora (Modern E-Ticaret & Süreç Platformu).
   - Kurumsal Karar Destek & Power BI Dashboard.
   - Doğrudan GitHub depolarına yönlendiren bağlantılar.

6. **İletişim & Alt Bilgi (Footer):**
   - Tek tıklamayla kopyalanabilir e-posta alanı (`buketbaytar@icloud.com`).
   - Sosyal medya bağlantıları ve yukarı dönme butonu.

---

## 📁 Proje Klasör Yapısı

```
Portfolyo/
├── public/
│   ├── Buket_Baytar_CV.pdf  # CV İndir butonunun indirdiği dosya
│   ├── cv.pdf
│   └── favicon.svg          # Mor 'B' monogram ikon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sabit üst menü & ikonlar
│   │   ├── Hero.jsx         # Yuvarlak profil alanı, biyografi, badge'ler, CV butonu
│   │   ├── About.jsx        # Hakkımda bölümü
│   │   ├── Experience.jsx   # Dikey zaman çizelgesi (timeline)
│   │   ├── Projects.jsx     # Proje kartları ve GitHub bağlantıları
│   │   ├── Contact.jsx      # İletişim kartı ve e-posta kopyalama
│   │   └── Footer.jsx       # Alt bilgi alanı
│   ├── App.jsx              # Ana tek sayfa bileşeni
│   ├── index.css            # Tailwind CSS & özel stiller
│   └── main.jsx             # React giriş noktası
├── baslat.bat               # Windows için tek tıkla çalıştırma scripti
├── start.bat                # Alternatif çalıştırma scripti
├── index.html               # Plus Jakarta Sans ve meta ayarları
├── tailwind.config.js       # Özel mor (brand) palet ve gölge tanımları
├── vite.config.js           # Vite yapılandırması
└── package.json             # Bağımlılıklar ve komutlar
```

---

## 🛠 Kullanılan Teknolojiler

- **React 18**
- **Tailwind CSS 3**
- **Vite 6**
- **Lucide Icons**
- **Plus Jakarta Sans Font**
