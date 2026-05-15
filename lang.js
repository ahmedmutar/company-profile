/**
 * lang.js — Language switcher for Scoop Technology
 * Switches all pages between English and Indonesian via JavaScript.
 * Include this file on any page — the button is injected automatically.
 */

const LANG = (() => {
  'use strict';

  // ── Plain-text translations (English → Indonesian) ────────────────────────
  const textMap = {
    // Navigation
    'Home': 'Beranda',
    'About Us': 'Tentang Kami',
    'Case Studies': 'Studi Kasus',
    'Careers': 'Karir',
    'Contact Us': 'Hubungi Kami',
    'Contact': 'Kontak',
    'Blog': 'Blog',

    // Hero dashboard mockup
    'Automated tasks today': 'Tugas otomatis hari ini',
    'System accuracy': 'Akurasi sistem',
    'Work hours saved': 'Jam kerja tersimpan',
    'Process efficiency — last 7 days': 'Efisiensi proses — 7 hari terakhir',
    'System active now': 'Sistem aktif sekarang',
    '24/7 without intervention': '24/7 tanpa intervensi',
    'Faster than before': 'Lebih cepat dari sebelumnya',

    // Hero text
    'AI Solutions for Real Businesses': 'Solusi AI untuk Bisnis Nyata',
    'Scoop Technology helps businesses work faster with AI tailored to your operations. You don\'t need to understand the technology to feel the results.':
      'Scoop Technology membantu bisnis bekerja lebih cepat dengan AI yang disesuaikan untuk operasi Anda. Anda tidak perlu memahami teknologinya untuk merasakan hasilnya.',
    'Free Consultation': 'Konsultasi Gratis',
    'See Real Results': 'Lihat Hasil Nyata',

    // Numbers strip
    'Projects completed': 'Proyek selesai',
    'Satisfied clients': 'Klien puas',
    'Industry experience': 'Pengalaman industri',
    'AI & data specialists': 'Spesialis AI & data',

    // Problems section
    'Does this sound familiar?': 'Apakah ini terasa familiar?',
    'Common challenges businesses face today': 'Tantangan umum yang dihadapi bisnis saat ini',
    'Many businesses know something can be improved — but don\'t know where to start.':
      'Banyak bisnis tahu ada yang bisa diperbaiki — tapi tidak tahu harus mulai dari mana.',
    'Before Scoop': 'Sebelum Scoop',
    'After Scoop': 'Setelah Scoop',
    'Repetitive work wastes time': 'Pekerjaan berulang membuang waktu',
    'Employees spend hours on work that could be automated': 'Karyawan menghabiskan jam untuk pekerjaan yang bisa diotomasi',
    'Data is scattered, reports built manually every week': 'Data tersebar, laporan dibuat manual setiap minggu',
    'Business decisions based on gut feeling, not data': 'Keputusan bisnis berdasarkan perasaan, bukan data',
    'Customer service teams overwhelmed answering the same questions': 'Tim layanan pelanggan kewalahan menjawab pertanyaan yang sama',
    'Slow processes cause missed business opportunities': 'Proses lambat menyebabkan peluang bisnis terlewat',
    'Business runs on its own, team focuses on what matters': 'Bisnis berjalan sendiri, tim fokus pada hal yang penting',
    'Repetitive tasks handled automatically by AI, 24 hours a day': 'Tugas berulang ditangani otomatis oleh AI, 24 jam sehari',
    'Reports generated automatically every day, real-time and accurate': 'Laporan dibuat otomatis setiap hari, real-time dan akurat',
    'Clear dashboard shows you the best next step': 'Dashboard yang jelas menunjukkan langkah terbaik berikutnya',
    'Smart chatbot answers customer questions anytime': 'Chatbot cerdas menjawab pertanyaan pelanggan kapan saja',
    'Processes that used to take days complete in minutes': 'Proses yang dulu memakan hari selesai dalam menit',
    // Stats
    'of employee time spent on repetitive tasks that AI can handle': 'waktu karyawan untuk tugas berulang yang bisa ditangani AI',
    'faster reporting when dashboards replace manual spreadsheets': 'pelaporan lebih cepat saat dashboard menggantikan spreadsheet manual',
    'of customer questions answered by chatbots without human help': 'pertanyaan pelanggan dijawab chatbot tanpa bantuan manusia',
    'average time to see measurable results after implementation': 'rata-rata waktu untuk melihat hasil terukur setelah implementasi',
    // Tags
    'Manual data entry': 'Input data manual',
    'No real-time reporting': 'Tidak ada laporan real-time',
    'Slow approval workflows': 'Alur persetujuan lambat',
    'Disconnected systems': 'Sistem yang tidak terhubung',
    'Untracked inventory': 'Inventaris tidak terlacak',
    'Customer service bottlenecks': 'Hambatan layanan pelanggan',
    'Decisions based on gut, not data': 'Keputusan berdasarkan perasaan, bukan data',
    'No visibility into operations': 'Tidak ada visibilitas operasional',

    // Services
    'Our Services': 'Layanan Kami',
    'Ask us more →': 'Tanya lebih lanjut →',
    'FEATURED SERVICE · 01': 'LAYANAN UNGGULAN · 01',
    'Not sure where to start? We map the AI potential across your entire business — with savings estimates and a realistic implementation timeline.':
      'Tidak tahu harus mulai dari mana? Kami memetakan potensi AI di seluruh bisnis Anda — dengan estimasi penghematan dan timeline implementasi yang realistis.',
    'Start free consultation': 'Mulai konsultasi gratis',
    'Full business process audit': 'Audit proses bisnis lengkap',
    'We study your workflow and identify bottlenecks that can be automated.': 'Kami mempelajari alur kerja Anda dan mengidentifikasi hambatan yang dapat diotomasi.',
    'Calculate ROI & savings estimate': 'Hitung ROI & estimasi penghematan',
    'Concrete numbers — how much can be saved and when the investment pays off.': 'Angka konkret — berapa yang bisa dihemat dan kapan investasi terbayar.',
    'A realistic implementation roadmap': 'Peta jalan implementasi yang realistis',
    'Not an empty presentation — a plan with milestones, timeline, and success metrics.': 'Bukan presentasi kosong — rencana dengan milestone, timeline, dan metrik keberhasilan.',
    'Web Design & Revamp': 'Desain & Revamp Website',
    'Transform your old website into a premium, responsive, conversion-driven site built to modern design standards.': 'Ubah website lama Anda menjadi situs premium, responsif, dan berorientasi konversi.',
    'Learn more': 'Pelajari lebih lanjut',
    'Mobile Apps Development': 'Pengembangan Aplikasi Mobile',
    'Build smooth Android & iOS apps for customer-facing services or internal team operations.': 'Bangun aplikasi Android & iOS yang mulus untuk layanan pelanggan atau operasi tim internal.',
    'Dashboard & Analytics System': 'Sistem Dashboard & Analitik',
    'Monitor business performance in real time with a custom dashboard that\'s easy to read and accurate.': 'Pantau kinerja bisnis secara real time dengan dashboard kustom yang mudah dibaca dan akurat.',
    'Process Automation (AI)': 'Otomasi Proses (AI)',
    'Let AI handle routine tasks like data entry and document sorting automatically, 24/7.': 'Biarkan AI menangani tugas rutin seperti input data dan pengurutan dokumen secara otomatis, 24/7.',
    'Chatbot & Virtual Assistants': 'Chatbot & Asisten Virtual',
    'Customer service that\'s always on, answering questions anytime in natural language.': 'Layanan pelanggan yang selalu aktif, menjawab pertanyaan kapan saja.',
    'Computer Vision / AI Visual': 'Computer Vision / AI Visual',
    'Use cameras + AI for automated product quality checks or object recognition.': 'Gunakan kamera + AI untuk pengecekan kualitas produk otomatis atau pengenalan objek.',

    // How it works
    'How We Work': 'Cara Kami Bekerja',
    'Just tell us your business challenge — we\'ll help map the way forward.': 'Ceritakan saja tantangan bisnis Anda — kami akan membantu memetakan jalannya.',
    'First Conversation': 'Percakapan Pertama',
    'We listen to your business story — what\'s working well and where time is being wasted.': 'Kami mendengarkan cerita bisnis Anda — apa yang berjalan baik dan di mana waktu terbuang.',
    'We Map the Solution': 'Kami Memetakan Solusinya',
    'Our team shows you concretely which areas can be improved with AI, plus savings estimates.': 'Tim kami menunjukkan secara konkret area mana yang bisa ditingkatkan dengan AI, beserta estimasi penghematan.',
    'We Build Together': 'Kami Membangun Bersama',
    'Fast iterations with measurable milestones. Every week there\'s progress you can see and feel.': 'Iterasi cepat dengan milestone terukur. Setiap minggu ada kemajuan yang bisa Anda lihat dan rasakan.',
    'Launch & Grow': 'Peluncuran & Berkembang',
    'System goes live, business runs more efficiently. We stay by your side to ensure everything keeps improving.': 'Sistem aktif, bisnis berjalan lebih efisien. Kami tetap mendampingi untuk memastikan segalanya terus meningkat.',

    // Results
    'Real Results': 'Hasil Nyata',
    'Manufacturing · Visual Inspection': 'Manufaktur · Inspeksi Visual',
    'Electronics Manufacturer: Product Defects Detected Automatically': 'Produsen Elektronik: Cacat Produk Terdeteksi Otomatis',
    'An AI-powered camera system that inspects every product in real time — more precise than the human eye, and never tires.': 'Sistem kamera bertenaga AI yang memeriksa setiap produk secara real time — lebih presisi dari mata manusia, dan tidak pernah lelah.',
    'Defect detection accuracy': 'Akurasi deteksi cacat',
    'QC cost savings': 'Penghematan biaya QC',
    'Capacity increase': 'Peningkatan kapasitas',
    'Retail · Stock Prediction': 'Ritel · Prediksi Stok',
    'Retail Chain 200+ Outlets: Never Wrong on Stock Again': 'Jaringan Ritel 200+ Gerai: Tidak Pernah Salah Stok Lagi',
    'AI predicts demand at every outlet with high accuracy — no more overstock or out-of-stock situations.': 'AI memprediksi permintaan di setiap gerai dengan akurasi tinggi — tidak ada lagi overstock atau kehabisan stok.',
    'Overstock reduction': 'Pengurangan overstock',
    'Saved per quarter': 'Dihemat per kuartal',
    'Insurance · Documents': 'Asuransi · Dokumen',
    'Insurance Claims: From 3 Days to 4 Minutes': 'Klaim Asuransi: Dari 3 Hari ke 4 Menit',
    'AI reads, verifies, and processes claim documents automatically — what used to take 3 days now takes minutes.': 'AI membaca, memverifikasi, dan memproses dokumen klaim secara otomatis — yang dulu butuh 3 hari kini selesai dalam menit.',
    'Processing time reduced': 'Waktu proses berkurang',
    'Claim capacity increase': 'Peningkatan kapasitas klaim',
    'View all case studies →': 'Lihat semua studi kasus →',

    // Why us
    'Why Scoop?': 'Mengapa Scoop?',
    'Our focus is one thing: is your business better after working with us?': 'Fokus kami satu hal: apakah bisnis Anda lebih baik setelah bekerja sama dengan kami?',
    'We speak business, not tech': 'Kami bicara bisnis, bukan teknis',
    'You don\'t need to understand AI. We explain everything clearly.': 'Anda tidak perlu memahami AI. Kami menjelaskan segalanya dengan jelas.',
    'Results in weeks, not years': 'Hasil dalam minggu, bukan tahun',
    'An MVP can be running in 4–6 weeks.': 'MVP bisa berjalan dalam 4–6 minggu.',
    'Custom solutions, not templates': 'Solusi kustom, bukan template',
    'Every solution is built from scratch to fit your needs.': 'Setiap solusi dibangun dari nol untuk memenuhi kebutuhan Anda.',
    'We stay with you after the project ends': 'Kami tetap mendampingi setelah proyek selesai',
    'We monitor and improve the system continuously.': 'Kami memantau dan meningkatkan sistem secara terus-menerus.',
    'Average improvement for our clients': 'Rata-rata peningkatan untuk klien kami',
    'Time efficiency': 'Efisiensi waktu',
    'Cost savings': 'Penghematan biaya',
    'Decision accuracy': 'Akurasi keputusan',
    'Customer satisfaction': 'Kepuasan pelanggan',
    'Active clients': 'Klien aktif',
    'Satisfaction rating': 'Rating kepuasan',
    'Experience': 'Pengalaman',

    // Testimonials
    'What Our Clients Say': 'Apa Kata Klien Kami',
    'From 120+ projects, here are some of the most memorable.': 'Dari 120+ proyek, inilah beberapa yang paling berkesan.',
    'Trusted by': 'Dipercaya oleh',
    'Distance reduced': 'Jarak berkurang',
    'Fuel saved/month': 'BBM dihemat/bulan',
    'On-time delivery': 'Pengiriman tepat waktu',

    // FAQ
    'Common Questions': 'Pertanyaan Umum',
    'Still have something to ask? Contact us directly.': 'Masih ada yang ingin ditanyakan? Hubungi kami langsung.',
    'Contact Us': 'Hubungi Kami',
    'Does my business need to be large before using AI?': 'Apakah bisnis saya harus besar sebelum menggunakan AI?',
    'No. In fact, mid-size and growing businesses often get the biggest benefit from AI. We have packages suited for different scales.': 'Tidak. Justru bisnis menengah dan yang sedang berkembang sering mendapat manfaat terbesar dari AI. Kami memiliki paket yang sesuai untuk berbagai skala.',
    'How long before we can see results?': 'Berapa lama sampai kami bisa melihat hasilnya?',
    'Most clients see real change within 4–8 weeks. We work iteratively — there are small wins you can feel from the start.': 'Sebagian besar klien melihat perubahan nyata dalam 4–8 minggu. Kami bekerja secara iteratif — ada kemenangan kecil yang bisa Anda rasakan sejak awal.',
    'Is our business data safe?': 'Apakah data bisnis kami aman?',
    'Data security is our top priority. We use industry-standard encryption and all agreements include strict NDAs.': 'Keamanan data adalah prioritas utama kami. Kami menggunakan enkripsi standar industri dan semua perjanjian mencakup NDA yang ketat.',
    'We don\'t have an IT team. Is that okay?': 'Kami tidak punya tim IT. Apakah itu tidak masalah?',
    'Yes. We often work with clients who have no technical team at all. We handle everything from start to finish.': 'Ya. Kami sering bekerja dengan klien yang sama sekali tidak memiliki tim teknis. Kami menangani segalanya dari awal hingga akhir.',

    // Careers page
    'Send your CV or LinkedIn profile. Tell us what you\'ve built and the kind of problems you most want to solve.':
      'Kirim CV atau profil LinkedIn Anda. Ceritakan apa yang pernah Anda bangun dan masalah seperti apa yang paling ingin Anda pecahkan.',
    'See Our Culture': 'Lihat Budaya Kami',

    // CTA section
    'Start Now — Free': 'Mulai Sekarang — Gratis',
    'Tell us your business challenge. In 30 minutes, we\'ll show you where AI can make the biggest difference — no cost, no commitment.':
      'Ceritakan tantangan bisnis Anda. Dalam 30 menit, kami akan menunjukkan di mana AI bisa membuat perbedaan terbesar — tanpa biaya, tanpa komitmen.',
    'Schedule Free Consultation': 'Jadwalkan Konsultasi Gratis',
    'Or call us': 'Atau hubungi kami',

    // Service modal
    'What You Get:': 'Yang Anda Dapatkan:',
    'Consult on This Service': 'Konsultasi Layanan Ini',
    'Close': 'Tutup',

    // Footer
    'Pages': 'Halaman',
    'Services': 'Layanan',
    'All systems operational': 'Semua sistem beroperasi',
    'Privacy Policy': 'Kebijakan Privasi',
    'Terms & Conditions': 'Syarat & Ketentuan',
    'All rights reserved.': 'Hak cipta dilindungi.',
    'Subscribe': 'Berlangganan',
    'Your email for weekly AI tips': 'Email Anda untuk tips AI mingguan',

    // Ticker
    'Business Automation': 'Otomasi Bisnis',
    'Artificial Intelligence': 'Kecerdasan Buatan',
    'Data Analytics': 'Analitik Data',
    'Operational Efficiency': 'Efisiensi Operasional',
    'Smart Chatbot': 'Chatbot Cerdas',
    'Image Recognition': 'Pengenalan Gambar',
    'Digital Transformation': 'Transformasi Digital',
    'Machine Learning': 'Pembelajaran Mesin',

    // About page
    'Our Story': 'Cerita Kami',
    'Our Journey': 'Perjalanan Kami',
    'Our Values': 'Nilai-Nilai Kami',
    'Our Team': 'Tim Kami',
    'Work Culture': 'Budaya Kerja',
    'Join Our Team': 'Bergabung dengan Tim Kami',

    // Careers page
    'Open Positions': 'Posisi Terbuka',
    'Apply Now': 'Lamar Sekarang',
    'Full Time': 'Penuh Waktu',
    'Remote': 'Jarak Jauh',
    'On-site': 'Di Kantor',

    // Contact page
    'Contact Info': 'Info Kontak',
    'Several ways': 'Beberapa cara',
    'to get started': 'untuk memulai',
    'Start a conversation': 'Mulai percakapan',
    'Free Consultation': 'Konsultasi Gratis',
    'Partnership': 'Kemitraan',
    'Other': 'Lainnya',
    'Full name *': 'Nama lengkap *',
    'Company name *': 'Nama perusahaan *',
    'WhatsApp Number': 'Nomor WhatsApp',
    'Industry *': 'Industri *',
    'Select your industry': 'Pilih industri Anda',
    'What would you like to discuss? *': 'Apa yang ingin Anda diskusikan? *',
    'Select a topic': 'Pilih topik',
    'Tell us more *': 'Ceritakan lebih detail *',
    'Estimated budget (optional)': 'Estimasi budget (opsional)',
    'Select budget range': 'Pilih rentang budget',
    'Send Message': 'Kirim Pesan',
    'Your message has been sent!': 'Pesan Anda sudah terkirim!',
    'Our team will reply within 1 business day to the email you provided.': 'Tim kami akan membalas dalam 1 hari kerja ke email yang Anda cantumkan.',
    'View Our Services': 'Lihat Layanan Kami',
    'Business Hours': 'Jam Operasional',
    'Monday – Friday': 'Senin – Jumat',
    'Saturday': 'Sabtu',
    'Sunday & Public Holidays': 'Minggu & Hari Libur',
    'Closed': 'Tutup',
    'Head Office': 'Kantor Pusat',
    'Open in Google Maps': 'Buka di Google Maps',

    // Blog page
    'Categories': 'Kategori',
    'Recent Articles': 'Artikel Terbaru',
    'Popular Tags': 'Tag Populer',
    'No articles yet': 'Belum ada artikel',
    'No categories yet': 'Belum ada kategori',
    'No tags yet': 'Belum ada tag',
    'Open Admin Panel': 'Buka Panel Admin',
    'Search articles...': 'Cari artikel...',
    'All': 'Semua',
    'Want to learn more?': 'Ingin tahu lebih lanjut?',
    'Start Consultation →': 'Mulai Konsultasi →',
  };

  // ── HTML translations (elements with inline markup) ───────────────────────
  const htmlMap = {
    'hero-title': {
      en: 'Your business can run<br><span class="gr">smarter</span><br>than it does today',
      id: 'Bisnis Anda bisa berjalan<br><span class="gr">lebih cerdas</span><br>dari sekarang',
    },
    'hero-trust': {
      en: 'Trusted by <strong>120+ companies</strong> worldwide',
      id: 'Dipercaya oleh <strong>120+ perusahaan</strong> di seluruh dunia',
    },
    'svc-title': {
      en: 'AI solutions for every<br>business need',
      id: 'Solusi AI untuk setiap<br>kebutuhan bisnis',
    },
    'sf-name': {
      en: 'AI Consulting &amp;<br>Strategy',
      id: 'Konsultasi AI &amp;<br>Strategi',
    },
    'how-title': {
      en: 'From the first conversation<br>to a better-running business',
      id: 'Dari percakapan pertama<br>hingga bisnis yang berjalan lebih baik',
    },
    'results-title': {
      en: 'Not stories —<br>this is what actually happened',
      id: 'Bukan cerita —<br>ini yang benar-benar terjadi',
    },
    'why-title': {
      en: 'We don\'t just<br>build technology.<br>We make sure it works.',
      id: 'Kami tidak hanya<br>membangun teknologi.<br>Kami memastikannya bekerja.',
    },
    'testi-title': {
      en: 'Not our words —<br>the words of those who\'ve experienced it',
      id: 'Bukan kata-kata kami —<br>kata mereka yang telah merasakannya',
    },
    'faq-title': {
      en: 'Have questions?<br>We answer them here.',
      id: 'Punya pertanyaan?<br>Kami menjawabnya di sini.',
    },
    'cta-title': {
      en: 'Your business can be<br>far more <span class="gr">efficient</span> today',
      id: 'Bisnis Anda bisa jauh lebih<br><span class="gr">efisien</span> mulai hari ini',
    },
    'careers-cta-title': {
      en: 'Let\'s build technology<br>that <span class="gr">actually helps</span>',
      id: 'Mari bangun teknologi<br>yang <span class="gr">benar-benar bermanfaat</span>',
    },
  };

  // ── Activity feed translations ─────────────────────────────────────────────
  const activitiesID = [
    { t: 'Laporan bulanan dibuat otomatis', s: 'PT Cahaya Elektronik', time: 'baru saja' },
    { t: '847 entri data diproses oleh AI', s: 'Mandala Retail Group', time: '2 mnt lalu' },
    { t: '23 klaim asuransi diverifikasi', s: 'Asuransi Prima', time: '5 mnt lalu' },
    { t: 'Rute untuk 380 armada kendaraan dioptimalkan', s: 'PT Nusantara Logistik', time: '12 mnt lalu' },
  ];

  // ── Service modal translations ─────────────────────────────────────────────
  const svcDataID = {
    web: {
      title: 'Desain & Revamp Website',
      desc: 'Kami mengubah website lama Anda menjadi aset digital yang kuat. Fokus pada performa tinggi, desain visual yang memukau, dan pengalaman pengguna yang mengubah pengunjung menjadi pelanggan.',
      features: ['UI/UX Modern & Premium', 'Optimasi Kecepatan (Lighthouse 90+)', 'Responsif di Semua Perangkat', 'Arsitektur Ramah SEO'],
    },
    mobile: {
      title: 'Pengembangan Aplikasi Mobile',
      desc: 'Bangun aplikasi mobile native atau hybrid (React Native/Flutter) yang memberikan pengalaman mulus untuk pengguna Anda. Ideal untuk aplikasi tim internal atau layanan B2C.',
      features: ['Dukungan Android & iOS', 'Push Notification', 'Integrasi API Kompleks', 'Pemeliharaan Rutin'],
    },
    dashboard: {
      title: 'Sistem Dashboard & Analitik',
      desc: 'Ubah data mentah menjadi keputusan bisnis yang cerdas. Kami membangun sistem dashboard kustom terintegrasi dengan database Anda untuk pemantauan real-time.',
      features: ['Sinkronisasi Data Real-time', 'Visualisasi Grafik Interaktif', 'Ekspor Laporan Otomatis', 'Kontrol Akses Multi-level'],
    },
    automation: {
      title: 'Otomasi Proses (AI)',
      desc: 'Hilangkan pekerjaan manual yang membosankan. AI kami bisa menangani input data otomatis, pengurutan dokumen, dan pengiriman email cerdas berdasarkan pemicu tertentu.',
      features: ['Otomasi Input Data', 'Parsing Dokumen', 'Alur Kerja Cerdas', 'Pengurangan Biaya hingga 70%'],
    },
    chatbot: {
      title: 'Chatbot & Asisten Virtual',
      desc: 'Berikan layanan 24/7 kepada pelanggan Anda. Chatbot berbasis LLM (seperti GPT) yang dilatih khusus dengan data bisnis Anda untuk menjawab pertanyaan teknis maupun umum.',
      features: ['Dukungan Multi-bahasa', 'Integrasi WhatsApp/Telegram', 'Pelatihan Data Privat', 'Sistem Handoff ke Manusia'],
    },
    vision: {
      title: 'Computer Vision / AI Visual',
      desc: 'Gunakan kamera sebagai sensor cerdas. Dari penghitungan stok otomatis di gudang hingga deteksi cacat produksi di pabrik dengan akurasi tinggi.',
      features: ['Otomasi Kontrol Kualitas', 'Penghitungan Objek', 'Analitik Keamanan', 'Siap IoT Industri'],
    },
  };

  // ── State ──────────────────────────────────────────────────────────────────
  let current = localStorage.getItem('scoop_lang') || 'en';
  const originals = new Map();
  let saved = false;

  // ── Core functions ─────────────────────────────────────────────────────────
  function saveTextNodes() {
    if (saved) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const tag = node.parentNode?.tagName?.toLowerCase();
        if (tag === 'script' || tag === 'style') return NodeFilter.FILTER_REJECT;
        return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });
    let node;
    while ((node = walker.nextNode())) originals.set(node, node.textContent);
    saved = true;
  }

  function applyTextNodes(lang) {
    originals.forEach((orig, node) => {
      if (!node.parentNode) return;
      const trimmed = orig.trim();
      if (!trimmed) return;
      if (lang === 'en') {
        node.textContent = orig;
      } else {
        const t = textMap[trimmed];
        if (t) node.textContent = orig.replace(trimmed, t);
      }
    });
  }

  function applyHtmlElements(lang) {
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const map = htmlMap[key];
      if (map) el.innerHTML = lang === 'id' ? map.id : map.en;
    });
  }

  function applyPlaceholders(lang) {
    document.querySelectorAll('[placeholder]').forEach(el => {
      if (!el.dataset.origPlaceholder) el.dataset.origPlaceholder = el.getAttribute('placeholder');
      const orig = el.dataset.origPlaceholder;
      el.setAttribute('placeholder', lang === 'id' ? (textMap[orig] || orig) : orig);
    });
  }

  function updateButton() {
    const btn = document.getElementById('lang-btn');
    if (!btn) return;
    btn.innerHTML = current === 'en'
      ? '<span class="lang-flag">🇮🇩</span><span class="lang-lbl">ID</span>'
      : '<span class="lang-flag">🇬🇧</span><span class="lang-lbl">EN</span>';
    btn.title = current === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English';
  }

  function apply(lang) {
    saveTextNodes();
    applyTextNodes(lang);
    applyHtmlElements(lang);
    applyPlaceholders(lang);
    document.documentElement.lang = lang;
    current = lang;
    localStorage.setItem('scoop_lang', lang);
    updateButton();
    document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
  }

  function toggle() { apply(current === 'en' ? 'id' : 'en'); }

  // ── Button injection ───────────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById('lang-btn-style')) return;
    const style = document.createElement('style');
    style.id = 'lang-btn-style';
    style.textContent = `
      #lang-btn {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        background: var(--bg, #f8fafc);
        border: 1.5px solid var(--bdr-2, #cbd5e1);
        border-radius: 20px;
        padding: 4px 10px 4px 7px;
        font-family: var(--fb, 'Nunito', sans-serif);
        font-size: 12px;
        font-weight: 700;
        color: var(--text-2, #475569);
        cursor: pointer;
        transition: all .2s;
        white-space: nowrap;
        line-height: 1;
      }
      #lang-btn:hover {
        border-color: var(--blue, #3b82f6);
        color: var(--blue, #3b82f6);
        background: var(--blue-l, #eff6ff);
      }
      .lang-flag { font-size: 14px; line-height: 1; }
      .lang-lbl  { font-size: 11px; font-weight: 800; letter-spacing: .04em; }
    `;
    document.head.appendChild(style);
  }

  function injectButton() {
    if (document.getElementById('lang-btn')) return;
    // Try inserting before the CTA nav link or after last nav-links item
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      const li = document.createElement('li');
      li.style.cssText = 'display:flex;align-items:center;';
      li.innerHTML = '<button id="lang-btn" onclick="LANG.toggle()"></button>';
      navLinks.appendChild(li);
    }
  }

  // ── Init ──────────────────────────────────────────────────────────────────
  function init() {
    const run = () => {
      injectStyles();
      injectButton();
      saveTextNodes();
      if (current === 'id') apply('id');
      updateButton();
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  }

  init();

  // ── Public API ────────────────────────────────────────────────────────────
  return { toggle, apply, current: () => current, activitiesID, svcDataID };
})();
