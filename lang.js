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
    'Process Automation': 'Otomasi Proses',
    'Let AI handle routine tasks like data entry and document sorting automatically, 24/7.': 'Biarkan AI menangani tugas rutin seperti input data dan pengurutan dokumen secara otomatis, 24/7.',
    'Chatbot & Virtual Assistants': 'Chatbot & Asisten Virtual',
    'Customer service that\'s always on, answering questions anytime in natural language.': 'Layanan pelanggan yang selalu aktif, menjawab pertanyaan kapan saja.',
    'Computer Vision / AI Visual': 'Computer Vision / AI Visual',
    'Use cameras + AI for automated product quality checks or object recognition.': 'Gunakan kamera + AI untuk pengecekan kualitas produk otomatis atau pengenalan objek.',
    'Chat with us': 'Chat dengan kami',

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

    // ── web-design.html ──────────────────────────────────────────────────────
    'Service · Web Design': 'Layanan · Desain Web',
    'We turn outdated, slow websites into digital assets that actually bring in business. Premium design, fast load times, and built to convert.': 'Kami mengubah website usang yang lambat menjadi aset digital yang benar-benar mendatangkan bisnis. Desain premium, waktu muat cepat, dan dibangun untuk konversi.',
    'Start a Free Consultation': 'Mulai Konsultasi Gratis',
    'See Our Work': 'Lihat Portofolio',
    'more leads from a well-designed website vs. an outdated one': 'lebih banyak prospek dari website yang didesain dengan baik vs. yang usang',
    'of users leave a site that takes more than 3 seconds to load': 'pengguna meninggalkan situs yang membutuhkan lebih dari 3 detik untuk dimuat',
    'of first impressions are based on visual design alone': 'kesan pertama didasarkan pada desain visual saja',
    'average delivery time from discovery to launch': 'rata-rata waktu pengiriman dari discovery hingga peluncuran',
    'The Difference': 'Perbedaannya',
    'What changes when we rebuild your site': 'Apa yang berubah saat kami membangun ulang situs Anda',
    'An outdated website costs you visitors before they even read a single word. Here\'s what the shift looks like.': 'Website yang usang membuat Anda kehilangan pengunjung sebelum mereka membaca satu kata pun. Ini tampilan perubahannya.',
    'Before — Typical old site': 'Sebelum — Situs lama yang khas',
    'After — Rebuilt by Scoop': 'Setelah — Dibangun ulang oleh Scoop',
    'Loads in 7–12 seconds': 'Memuat dalam 7–12 detik',
    'Broken on mobile': 'Rusak di perangkat mobile',
    'No clear call-to-action': 'Tidak ada ajakan bertindak yang jelas',
    'Invisible on Google': 'Tidak terlihat di Google',
    'Loads under 1.5 seconds': 'Memuat di bawah 1,5 detik',
    'Pixel-perfect on all screen sizes': 'Sempurna di semua ukuran layar',
    'Clear CTAs that drive action': 'CTA yang jelas mendorong tindakan',
    'SEO-ready from day one': 'Siap SEO dari hari pertama',
    'Portfolio': 'Portofolio',
    'Websites built for every industry': 'Website untuk setiap industri',
    'From retail to SaaS, every project is designed from scratch for that specific business and its audience.': 'Dari ritel hingga SaaS, setiap proyek dirancang dari nol untuk bisnis dan audiensnya yang spesifik.',
    'E-Commerce & Retail': 'E-Commerce & Ritel',
    'Fashion & Lifestyle Store': 'Toko Mode & Gaya Hidup',
    'Full catalog with cart, checkout, and product filtering. Designed to maximize average order value and reduce drop-off at checkout.': 'Katalog lengkap dengan keranjang, checkout, dan filter produk. Dirancang untuk memaksimalkan nilai pesanan rata-rata dan mengurangi drop-off saat checkout.',
    'Product catalog': 'Katalog produk',
    'Shopping cart': 'Keranjang belanja',
    'Payment gateway': 'Gateway pembayaran',
    'Mobile-first': 'Mobile-first',
    'Corporate & B2B': 'Korporat & B2B',
    'Professional Services Company Profile': 'Profil Perusahaan Layanan Profesional',
    'Clean, trust-building corporate profile with case studies, team bios, and a lead-capture form that converts cold visitors into warm inquiries.': 'Profil korporat yang bersih dan membangun kepercayaan dengan studi kasus, bio tim, dan formulir penangkap prospek yang mengubah pengunjung dingin menjadi pertanyaan hangat.',
    'Company profile': 'Profil perusahaan',
    'Lead forms': 'Formulir prospek',
    'CMS integration': 'Integrasi CMS',
    'Multilingual': 'Multibahasa',
    'SaaS & Tech Product': 'Produk SaaS & Teknologi',
    'Software Product Landing Page': 'Landing Page Produk Software',
    'Conversion-focused landing page with live product demo mockups, feature comparison, and social proof sections built to drive sign-ups.': 'Landing page yang berfokus pada konversi dengan mockup demo produk langsung, perbandingan fitur, dan bagian bukti sosial yang dirancang untuk mendorong pendaftaran.',
    'Product demo': 'Demo produk',
    'Feature comparison': 'Perbandingan fitur',
    'Pricing table': 'Tabel harga',
    'Dark mode UI': 'UI mode gelap',
    'F&B & Hospitality': 'F&B & Perhotelan',
    'Sports & Recreation': 'Olahraga & Rekreasi',
    'Club de Padel': 'Club de Padel',
    'Premium padel court landing page with international WPT certification showcase, real-time booking system, integrated payment, community dashboard, and facility highlights — built to convert sport enthusiasts into members.': 'Landing page lapangan padel premium dengan sertifikasi WPT internasional, sistem booking real-time, pembayaran terintegrasi, dashboard komunitas, dan highlight fasilitas — dibangun untuk mengubah penggemar olahraga menjadi anggota.',
    'WPT certified': 'Tersertifikasi WPT',
    'Live booking': 'Booking langsung',
    'Community features': 'Fitur komunitas',
    'Retail & Fashion': 'Ritel & Fashion',
    'Clothing Area': 'Clothing Area',
    'Premium fashion retail landing page with luxury dark-gold aesthetic, ISO & OEKO-TEX certification showcase, product catalogue with order flow, and integrated payment — designed to elevate the brand and drive conversions.': 'Landing page ritel fashion premium dengan estetika dark-gold mewah, sertifikasi ISO & OEKO-TEX, katalog produk dengan alur order, dan pembayaran terintegrasi — dirancang untuk meningkatkan brand dan mendorong konversi.',
    'ISO certified brand': 'Brand bersertifikat ISO',
    'F&B & Specialty Coffee': 'F&B & Specialty Coffee',
    'Coffee Idea': 'Coffee Idea',
    'Specialty coffee brand with warm serif aesthetic, single-origin origin showcase, SCA certification highlights, full menu with online ordering, store visit features with opening hours, and integrated payment — built for discerning coffee lovers.': 'Brand specialty coffee dengan estetika serif hangat, showcase biji single-origin, sertifikasi SCA, menu lengkap dengan pemesanan online, fitur kunjungan store, dan pembayaran terintegrasi — dibangun untuk pecinta kopi sejati.',
    'Warm serif UI': 'UI serif hangat',
    'Store locator': 'Lokasi store',
    'SCA certified': 'Bersertifikat SCA',
    'F&B & Street Food': 'F&B & Street Food',
    'Chicken Wings': 'Chicken Wings',
    'High-energy street food landing page with bold fire-and-orange branding, 6-item menu with heat level indicators, 5 sauce variants, online ordering with delivery and pick-up options, and integrated payment — designed to drive appetite and impulse orders.': 'Landing page street food berenergi tinggi dengan branding api-oranye yang berani, menu 6 item dengan indikator level kepedasan, 5 varian saus, pemesanan online dengan opsi delivery dan pick-up, dan pembayaran terintegrasi — dirancang untuk membangkitkan selera dan impulse order.',
    'Bold fire branding': 'Branding api yang berani',
    'Heat level system': 'Sistem level kepedasan',
    'Restaurant & Café Website': 'Website Restoran & Kafe',
    'Visual-heavy design with online menu, reservation system, and delivery integration. Built to bring foot traffic and online orders at the same time.': 'Desain visual-berat dengan menu online, sistem reservasi, dan integrasi pengiriman. Dibangun untuk mendatangkan pengunjung dan pesanan online sekaligus.',
    'Online menu': 'Menu online',
    'Reservation system': 'Sistem reservasi',
    'WhatsApp integration': 'Integrasi WhatsApp',
    'Everything your new website needs to perform': 'Semua yang dibutuhkan website baru Anda untuk tampil maksimal',
    'Modern & Premium UI/UX': 'UI/UX Modern & Premium',
    'Designed from scratch in Figma. Every layout, spacing, and color decision is intentional — built to communicate trust and drive action.': 'Dirancang dari nol di Figma. Setiap tata letak, spasi, dan keputusan warna disengaja — dibangun untuk mengkomunikasikan kepercayaan dan mendorong tindakan.',
    'Full Figma source file included': 'File sumber Figma lengkap disertakan',
    'Speed Optimization (Lighthouse 90+)': 'Optimasi Kecepatan (Lighthouse 90+)',
    'Core Web Vitals optimized. Images are compressed, code is minified, and caching is configured so your site loads in under 1.5 seconds.': 'Core Web Vitals dioptimalkan. Gambar dikompresi, kode diminifikasi, dan caching dikonfigurasi sehingga situs Anda dimuat dalam waktu di bawah 1,5 detik.',
    'Google PageSpeed 90+ score': 'Skor Google PageSpeed 90+',
    'Responsive on All Devices': 'Responsif di Semua Perangkat',
    'Pixel-perfect across desktop, tablet, and mobile. Every breakpoint is tested — no broken layouts or cropped text on any screen size.': 'Sempurna di desktop, tablet, dan mobile. Setiap breakpoint diuji — tidak ada tata letak rusak atau teks terpotong di ukuran layar mana pun.',
    'Tested on 12+ device sizes': 'Diuji pada 12+ ukuran perangkat',
    'SEO-Friendly Architecture': 'Arsitektur Ramah SEO',
    'Semantic HTML, proper meta tags, schema markup, XML sitemaps, and canonical URLs — built so Google can find and rank you from launch day.': 'HTML semantik, meta tag yang tepat, markup schema, XML sitemap, dan URL kanonik — dibangun agar Google dapat menemukan dan meranking Anda sejak hari peluncuran.',
    'On-page SEO baseline included': 'Dasar SEO on-page disertakan',
    'CMS & Easy Content Editing': 'CMS & Pengeditan Konten Mudah',
    'Update text, images, and blog posts yourself without touching code. We set up a CMS and train your team to manage the site independently.': 'Perbarui teks, gambar, dan posting blog sendiri tanpa menyentuh kode. Kami menyiapkan CMS dan melatih tim Anda untuk mengelola situs secara mandiri.',
    '1 hour training session included': '1 jam sesi pelatihan disertakan',
    'Post-Launch Support': 'Dukungan Pasca Peluncuran',
    '30 days of free fixes after launch. After that, we offer affordable monthly maintenance to keep your site fast, secure, and up to date.': '30 hari perbaikan gratis setelah peluncuran. Setelah itu, kami menawarkan pemeliharaan bulanan yang terjangkau untuk menjaga situs Anda cepat, aman, dan terkini.',
    '30 days free post-launch support': '30 hari dukungan pasca peluncuran gratis',
    'How It Works': 'Cara Kerjanya',
    'A clear, collaborative process — you always know what\'s happening and what\'s next.': 'Proses yang jelas dan kolaboratif — Anda selalu tahu apa yang sedang terjadi dan apa yang berikutnya.',
    'Discovery Call': 'Panggilan Discovery',
    'We learn your business, your audience, and what the new site needs to achieve. No forms — just a conversation.': 'Kami mempelajari bisnis Anda, audiens Anda, dan apa yang perlu dicapai situs baru. Tanpa formulir — hanya percakapan.',
    'Design Concept': 'Konsep Desain',
    'We present two visual directions in Figma. You pick one, give feedback, and we refine until it\'s exactly right.': 'Kami mempresentasikan dua arah visual di Figma. Anda memilih satu, memberi umpan balik, dan kami menyempurnakan hingga benar-benar tepat.',
    'Full UI Design': 'Desain UI Penuh',
    'Every page designed at full resolution — desktop and mobile. You review and approve before a single line of code is written.': 'Setiap halaman dirancang dalam resolusi penuh — desktop dan mobile. Anda meninjau dan menyetujui sebelum satu baris kode ditulis.',
    'Development': 'Pengembangan',
    'We build to the approved designs with clean, fast code. You can preview on a staging URL before anything goes public.': 'Kami membangun sesuai desain yang disetujui dengan kode yang bersih dan cepat. Anda dapat melihat preview di URL staging sebelum apa pun dipublikasikan.',
    'Launch & Handover': 'Peluncuran & Serah Terima',
    'We deploy to your domain, submit to Google, and walk you through managing the site. You\'re live and in control.': 'Kami deploy ke domain Anda, submit ke Google, dan memandu Anda mengelola situs. Anda aktif dan dalam kendali.',
    'Why Scoop vs. Others': 'Mengapa Scoop vs. Lainnya',
    'What you actually get matters more than who you hire': 'Apa yang Anda dapatkan lebih penting dari siapa yang Anda rekrut',
    'Custom design': 'Desain kustom',
    'Generic templates, shared with 10,000 other sites': 'Template generik, dibagikan dengan 10.000 situs lain',
    'Built from scratch — unique to your brand': 'Dibangun dari nol — unik untuk brand Anda',
    'Page speed': 'Kecepatan halaman',
    'Bloated plugins slow load to 5–10 seconds': 'Plugin yang berat memperlambat pemuatan hingga 5–10 detik',
    'Optimized code, loads in under 1.5 seconds': 'Kode yang dioptimalkan, dimuat dalam waktu di bawah 1,5 detik',
    'Mobile experience': 'Pengalaman mobile',
    'Auto-scaled, often broken on smaller screens': 'Diskalakan otomatis, sering rusak di layar yang lebih kecil',
    'Designed for mobile first, then scaled up': 'Dirancang untuk mobile terlebih dahulu, kemudian diperbesar',
    'SEO setup': 'Pengaturan SEO',
    'Manual, easy to miss critical elements': 'Manual, mudah melewatkan elemen kritis',
    'Full on-page SEO baseline from day one': 'Dasar SEO on-page lengkap sejak hari pertama',
    'Support after launch': 'Dukungan setelah peluncuran',
    'You\'re on your own — or pay per ticket': 'Anda sendirian — atau bayar per tiket',
    '30 days free, then flexible maintenance plans': '30 hari gratis, lalu paket pemeliharaan fleksibel',
    'Time to launch': 'Waktu peluncuran',
    'Weeks of self-learning before getting started': 'Minggu-minggu belajar mandiri sebelum memulai',
    'Live in 4 weeks with zero effort from your side': 'Live dalam 4 minggu tanpa upaya dari pihak Anda',
    'Tools we use to build with': 'Tools yang kami gunakan untuk membangun',
    'We pick the right stack for your specific project — not one-size-fits-all.': 'Kami memilih stack yang tepat untuk proyek spesifik Anda — bukan satu ukuran untuk semua.',
    'Client Story': 'Kisah Klien',
    'What happened after the revamp': 'Apa yang terjadi setelah revamp',
    'Founder, Rahardja Interiors · Jakarta': 'Pendiri, Rahardja Interiors · Jakarta',
    'Inquiry increase': 'Peningkatan pertanyaan',
    'Ready to start?': 'Siap memulai?',
    'Book a free 30-minute consultation. We\'ll review your current site, identify the biggest gaps, and show you what the rebuild would look like — before you commit to anything.': 'Pesan konsultasi gratis 30 menit. Kami akan meninjau situs Anda saat ini, mengidentifikasi kesenjangan terbesar, dan menunjukkan seperti apa hasil pembangunan ulangnya — sebelum Anda berkomitmen pada apa pun.',
    'Book Free Consultation': 'Pesan Konsultasi Gratis',
    'See All Services': 'Lihat Semua Layanan',
    'Helping businesses worldwide work faster and more efficiently with AI that actually works.': 'Membantu bisnis di seluruh dunia bekerja lebih cepat dan efisien dengan AI yang benar-benar bekerja.',

    // ── mobile-app.html ──────────────────────────────────────────────────────
    'Mobile App Development': 'Pengembangan Aplikasi Mobile',
    'Mobile App Design': 'Desain Aplikasi Mobile',
    'Android, iOS & PWA — built with React Native and Flutter. From UMKM cashier apps to enterprise dashboards to SaaS products.': 'Android, iOS & PWA — dibangun dengan React Native dan Flutter. Dari aplikasi kasir UMKM hingga dashboard enterprise hingga produk SaaS.',
    'days average delivery': 'rata-rata waktu pengiriman',
    'platforms, one codebase': 'platform, satu codebase',
    'crash-free sessions target': 'target sesi bebas crash',
    'scalable from day one': 'skalabel sejak hari pertama',
    'App showcase': 'Pameran aplikasi',
    'One team, every segment': 'Satu tim, setiap segmen',
    'We build apps for all kinds of businesses — from single-outlet UMKM to multi-division enterprises.': 'Kami membangun aplikasi untuk semua jenis bisnis — dari UMKM satu gerai hingga perusahaan multi-divisi.',
    'Who we build for': 'Siapa yang kami bangun untuk',
    'Built for every business type': 'Dibangun untuk setiap jenis bisnis',
    'Whether you\'re a warung going digital or a company rolling out an internal tool for 500 staff — the approach fits.': 'Baik Anda warung yang go digital maupun perusahaan yang meluncurkan alat internal untuk 500 staf — pendekatannya cocok.',
    'UMKM & Small Business': 'UMKM & Bisnis Kecil',
    'Digital cashier, inventory management, online ordering, and daily reports — all in one lightweight app that\'s easy to use.': 'Kasir digital, manajemen stok, pemesanan online, dan laporan harian — semua dalam satu app yang ringan dan mudah dipakai.',
    'Product catalog, shopping cart, checkout, payment gateway, and push notifications. A shopping experience that feels native on Android & iOS.': 'Katalog produk, keranjang belanja, checkout, payment gateway, dan notifikasi push. Pengalaman belanja yang terasa native di Android & iOS.',
    'Internal apps for field teams, approval systems, operational dashboards, or a replacement for manual processes that eat up time.': 'Aplikasi internal untuk tim lapangan, sistem approval, dashboard operasional, atau pengganti proses manual yang memakan waktu.',
    'MVP in 4 weeks. Scalable architecture, smooth onboarding, and UI that keeps user retention high.': 'MVP dalam 4 minggu. Arsitektur yang bisa scale, onboarding yang smooth, dan UI yang membuat user retention tetap tinggi.',
    'Scope of work': 'Lingkup pekerjaan',
    'No hidden fees. Here\'s what you get from day one.': 'Tidak ada biaya tersembunyi. Ini yang Anda dapat dari hari pertama.',
    'Wireframe, mockup, and interactive prototype in Figma before a single line of code is written.': 'Wireframe, mockup, dan prototype interaktif di Figma sebelum satu baris kode ditulis.',
    'One React Native or Flutter codebase that runs on both platforms. No need to pay for two teams.': 'Satu codebase React Native atau Flutter yang jalan di dua platform. Tidak perlu bayar dua tim.',
    'Connection to REST APIs, databases, existing systems, or third-party services (payment, maps, notifications).': 'Koneksi ke REST API, database, sistem existing, atau third-party services (payment, map, notifikasi).',
    'Firebase Cloud Messaging for order notifications, reminders, updates, or other important messages.': 'Firebase Cloud Messaging untuk notifikasi order, reminder, update, atau pesan penting lainnya.',
    'Email/password login, Google Sign-In, WhatsApp OTP, and role-based access control.': 'Login email/password, Google Sign-In, OTP WhatsApp, dan role-based access control.',
    'App keeps working when the signal is weak. Data syncs automatically when the connection returns.': 'App tetap bisa dipakai saat sinyal lemah. Data sync otomatis begitu koneksi kembali.',
    'We handle the publishing process to Google Play and Apple App Store — including screenshots, descriptions, and review.': 'Kami urus proses publish ke Google Play dan Apple App Store — termasuk screenshot, deskripsi, dan review.',
    '3 months post-launch support': '3 bulan dukungan pasca peluncuran',
    'Bug fixes, minor updates, and technical consultation after the app goes live at no extra charge.': 'Bug fix, minor update, dan konsultasi teknis setelah app live tanpa biaya tambahan.',
    'How it works': 'Cara kerjanya',
    'From idea to store in 5 steps': 'Dari ide ke toko dalam 5 langkah',
    'A process you can follow from day one, without confusing technical jargon.': 'Proses yang bisa Anda ikuti sejak hari pertama, tanpa jargon teknis yang membingungkan.',
    'Discovery & scoping': 'Discovery & scoping',
    'We discuss requirements, who the users are, which features matter most, and which platform to prioritize. Output: scope document + timeline + cost estimate.': 'Kita diskusi kebutuhan, siapa penggunanya, fitur apa yang paling penting, dan platform mana yang menjadi prioritas. Output: scope dokumen + timeline + estimasi biaya.',
    'Wireframe & UI Design': 'Wireframe & Desain UI',
    'The design team creates user flow wireframes then develops them into high-fidelity UI in Figma. You review and give feedback before development begins.': 'Tim desain membuat wireframe alur pengguna lalu dikembangkan ke high-fidelity UI di Figma. Kamu review dan beri feedback sebelum development mulai.',
    'Development runs in two-week sprints. You can see progress via internal builds (TestFlight for iOS, APK for Android) and weekly team updates.': 'Development berjalan sprint dua minggu. Kamu bisa lihat progres via build internal (TestFlight untuk iOS, APK untuk Android) dan update mingguan dari tim.',
    'QA & testing': 'QA & pengujian',
    'Testing on real devices: various screen sizes, OS versions, poor network conditions, and the most likely edge cases in the field.': 'Pengujian di device nyata: berbagai ukuran layar, versi OS, kondisi jaringan lemah, dan skenario edge case yang paling mungkin terjadi di lapangan.',
    'Launch & handover': 'Peluncuran & serah terima',
    'Submit to Google Play & App Store. After approval, you receive the source code, technical documentation, and access to all accounts. 3-month support starts here.': 'Submit ke Google Play & App Store. Setelah approved, kamu terima source code, dokumentasi teknis, dan akses ke semua akun. Support 3 bulan berjalan dari sini.',
    'Why custom': 'Mengapa kustom',
    'Custom app vs template solution': 'Aplikasi kustom vs solusi template',
    'Template and no-code tools are fast for prototypes, but not for businesses that grow.': 'Template dan no-code tools cepat untuk prototype, tapi tidak untuk bisnis yang tumbuh.',
    'Criteria': 'Kriteria',
    'Native (separate)': 'Native (terpisah)',
    'Android & iOS from one codebase': 'Android & iOS dari satu codebase',
    'Custom brand design': 'Desain sesuai brand',
    'API & existing system integration': 'Integrasi API & sistem existing',
    'Offline mode': 'Mode offline',
    'Development cost': 'Biaya pengembangan',
    'Efficient (one team)': 'Efisien (satu tim)',
    'Cheap upfront': 'Murah di awal',
    '2× more expensive': '2× lebih mahal',
    'Long-term scalability': 'Skalabilitas jangka panjang',
    'Client-owned source code': 'Source code milik klien',
    'Proven tools — chosen based on project requirements, not trends.': 'Tools yang sudah terbukti — dipilih berdasarkan kebutuhan proyek, bukan tren.',
    '"We used to handle all field orders through WhatsApp. Now we have our own app — the sales team can enter orders, check stock, and receive confirmation in seconds. Revenue went up 40% in the first 3 months."': '"Kami tadinya pakai WhatsApp untuk semua order dari lapangan. Sekarang ada app sendiri — tim sales bisa input order, lihat stok, dan terima konfirmasi dalam hitungan detik. Omzet naik 40% dalam 3 bulan pertama."',
    'Operations Director, PT Distribusi Nusantara': 'Direktur Operasional, PT Distribusi Nusantara',
    'Start building': 'Mulai membangun',
    'Free 30-minute consultation. Tell us what you need and we\'ll estimate scope, timeline, and cost with no commitment.': 'Konsultasi 30 menit — gratis. Ceritakan kebutuhan Anda dan kami estimasi scope, waktu, dan biaya tanpa komitmen.',
    'Start free consultation': 'Mulai konsultasi gratis',
    'See case studies': 'Lihat studi kasus',
    'AI & mobile solutions for businesses that want to move faster.': 'Solusi AI & mobile untuk bisnis yang ingin bergerak lebih cepat.',

    // ── dashboard-analytics.html ─────────────────────────────────────────────
    'Service · Analytics': 'Layanan · Analitik',
    'Custom dashboards and real-time analytics built for your exact data — no generic BI tools, no data science degree required.': 'Dashboard kustom dan analitik real-time yang dibangun untuk data Anda — tanpa alat BI generik, tanpa keahlian data science.',
    'Real-time Data': 'Data Real-time',
    'Custom Dashboards': 'Dashboard Kustom',
    'Any Data Source': 'Sumber Data Apa Pun',
    'faster decisions with real-time data': 'keputusan lebih cepat dengan data real-time',
    'view across all your data sources': 'tampilan menyeluruh semua sumber data Anda',
    'data science expertise needed': 'keahlian data science yang dibutuhkan',
    'typical first dashboard delivery': 'pengiriman dashboard pertama',
    'Live preview': 'Pratinjau langsung',
    'One dashboard, all your numbers': 'Satu dashboard, semua angka Anda',
    'Stop hunting through spreadsheets. See everything in one live, interactive view — updated automatically.': 'Berhenti berburu melalui spreadsheet. Lihat semuanya dalam satu tampilan live yang interaktif — diperbarui secara otomatis.',
    'Analytics for every business type': 'Analitik untuk setiap jenis bisnis',
    'Whether you track 10 transactions or 10 million — the dashboard fits how your business thinks.': 'Baik Anda melacak 10 transaksi atau 10 juta — dashboard menyesuaikan cara bisnis Anda berpikir.',
    'Daily sales summary, stock alerts, and profit margins — all in one screen your whole team can read at a glance.': 'Ringkasan penjualan harian, peringatan stok, dan margin keuntungan — semuanya dalam satu layar yang bisa dibaca seluruh tim sekilas pandang.',
    'Revenue trends, top-selling products, cart abandonment rates, customer lifetime value, and ad performance in real time.': 'Tren pendapatan, produk terlaris, tingkat abandonment keranjang, nilai seumur hidup pelanggan, dan performa iklan secara real-time.',
    'Multi-department KPI dashboards, scheduled executive reports, and role-based access so each team sees what\'s relevant to them.': 'Dashboard KPI multi-departemen, laporan eksekutif terjadwal, dan akses berbasis peran sehingga setiap tim melihat apa yang relevan bagi mereka.',
    'MRR, churn rate, daily active users, feature adoption, and funnel conversion — the metrics that tell you if you\'re actually growing.': 'MRR, tingkat churn, pengguna aktif harian, adopsi fitur, dan konversi funnel — metrik yang memberitahu Anda apakah Anda benar-benar tumbuh.',
    'Custom dashboard UI': 'UI Dashboard Kustom',
    'Designed in Figma and built to match your brand, your data structure, and how your team actually thinks.': 'Dirancang di Figma dan dibangun untuk mencerminkan brand Anda, struktur data Anda, dan cara tim Anda berpikir.',
    'Real-time data sync': 'Sinkronisasi data real-time',
    'Live updates from your databases, APIs, or spreadsheets — no manual refreshes, no stale numbers.': 'Pembaruan langsung dari database, API, atau spreadsheet Anda — tanpa refresh manual, tanpa angka usang.',
    'Multiple data source connections': 'Koneksi berbagai sumber data',
    'Connect SQL databases, REST APIs, Google Sheets, or CSV files — we build and maintain the data pipelines.': 'Hubungkan database SQL, REST API, Google Sheets, atau file CSV — kami membangun dan memelihara pipeline data.',
    'Interactive charts & filters': 'Grafik & filter interaktif',
    'Bar charts, line charts, pie charts, funnels, and heatmaps — all filterable by date, region, or any dimension.': 'Bar chart, line chart, pie chart, funnel, dan heatmap — semuanya bisa difilter berdasarkan tanggal, wilayah, atau dimensi apa pun.',
    'Role-based access control': 'Kontrol akses berbasis peran',
    'Different views for executives, managers, and field teams. Everyone sees what\'s relevant to their role.': 'Tampilan berbeda untuk eksekutif, manajer, dan tim lapangan. Semua orang melihat apa yang relevan dengan peran mereka.',
    'Automated email reports': 'Laporan email otomatis',
    'Scheduled PDF or email summaries sent to your team daily, weekly, or monthly — automatically, without anyone lifting a finger.': 'Ringkasan PDF atau email terjadwal yang dikirim ke tim Anda setiap hari, minggu, atau bulan — otomatis, tanpa perlu tindakan siapa pun.',
    'Mobile-responsive': 'Responsif mobile',
    'Access your dashboard on any device. The numbers follow you — phone, tablet, or desktop, anywhere you are.': 'Akses dashboard Anda dari perangkat apa pun. Angka-angka mengikuti Anda — ponsel, tablet, atau desktop, di mana pun Anda berada.',
    'Ongoing support & new metrics': 'Dukungan berkelanjutan & metrik baru',
    'As your business grows, we update data models and add new metrics without extra setup cost.': 'Seiring pertumbuhan bisnis Anda, kami memperbarui model data dan menambahkan metrik baru tanpa biaya setup tambahan.',
    'From data audit to live dashboard in 5 steps': 'Dari audit data ke dashboard live dalam 5 langkah',
    'A clear process — you always know what\'s happening and what\'s next.': 'Proses yang jelas — Anda selalu tahu apa yang sedang terjadi dan apa yang berikutnya.',
    'Data audit': 'Audit data',
    'We map your existing data sources, what metrics you currently track, and what decisions you wish you could make faster. Output: dashboard blueprint + data connection plan.': 'Kami memetakan sumber data Anda yang ada, metrik apa yang Anda lacak saat ini, dan keputusan apa yang ingin Anda buat lebih cepat. Output: blueprint dashboard + rencana koneksi data.',
    'Data model design': 'Desain model data',
    'We design the data structure, connection logic, and update frequency before building anything — so there are no surprises or rewrites later.': 'Kami merancang struktur data, logika koneksi, dan frekuensi pembaruan sebelum membangun apa pun — sehingga tidak ada kejutan atau penulisan ulang di kemudian hari.',
    'Dashboard UI design': 'Desain UI dashboard',
    'High-fidelity Figma mockup of every view in your dashboard. You review, give feedback, and approve before we write a single line of code.': 'Mockup Figma high-fidelity dari setiap tampilan di dashboard Anda. Anda meninjau, memberi umpan balik, dan menyetujui sebelum kami menulis satu baris kode.',
    'Development & integration': 'Pengembangan & integrasi',
    'We build the dashboard and connect it to your live data sources. You can preview on a staging URL and track progress throughout — no black box.': 'Kami membangun dashboard dan menghubungkannya ke sumber data live Anda. Anda dapat melihat preview di URL staging dan melacak progres sepanjang waktu — tidak ada kotak hitam.',
    'Training & handover': 'Pelatihan & serah terima',
    'We walk your team through the dashboard, deliver full documentation, and hand over everything — source code, data pipeline access, and all credentials.': 'Kami memandu tim Anda melalui dashboard, memberikan dokumentasi lengkap, dan menyerahkan segalanya — source code, akses pipeline data, dan semua kredensial.',
    'Custom dashboard vs off-the-shelf tools': 'Dashboard kustom vs alat siap pakai',
    'Generic BI tools give you a starting point. A custom dashboard gives you exactly what your business needs.': 'Alat BI generik memberi Anda titik awal. Dashboard kustom memberi Anda tepat apa yang dibutuhkan bisnis Anda.',
    'Excel / Google Sheets': 'Excel / Google Sheets',
    'Off-the-shelf BI tool': 'Alat BI siap pakai',
    'Real-time data': 'Data real-time',
    'Custom metrics & layout': 'Metrik & tata letak kustom',
    'Connects to any data source': 'Terhubung ke sumber data apa pun',
    'Brand-matched design': 'Desain sesuai brand',
    'No technical skill to use': 'Tidak perlu keahlian teknis untuk digunakan',
    'Automated reports': 'Laporan otomatis',
    'Cost as you scale': 'Biaya seiring pertumbuhan',
    'Flat project fee': 'Biaya proyek tetap',
    'Time cost grows': 'Biaya waktu meningkat',
    'Monthly subscription': 'Langganan bulanan',
    'Proven tools — chosen based on your data sources and scale, not trends.': 'Tools yang terbukti — dipilih berdasarkan sumber data dan skala Anda, bukan tren.',
    '"Before this dashboard, our Monday morning meeting started with someone spending an hour pulling numbers from six different spreadsheets. Now everyone walks in already knowing the numbers. We cut that prep time to zero."': '"Sebelum dashboard ini, rapat Senin pagi kami dimulai dengan seseorang yang menghabiskan satu jam mengumpulkan angka dari enam spreadsheet berbeda. Sekarang semua orang masuk sudah mengetahui angkanya. Kami memotong waktu persiapan itu menjadi nol."',
    'CEO, Sustain Retail Group · Surabaya': 'CEO, Sustain Retail Group · Surabaya',
    'Start today': 'Mulai hari ini',
    'Free 30-minute data audit. We\'ll map your current data sources, identify what\'s missing, and show you exactly what a custom dashboard could look like — before you commit to anything.': 'Audit data 30 menit gratis. Kami akan memetakan sumber data Anda saat ini, mengidentifikasi yang kurang, dan menunjukkan dengan tepat seperti apa dashboard kustom bisa terlihat — sebelum Anda berkomitmen pada apa pun.',
    'Book a free data audit': 'Pesan audit data gratis',
    'AI & data solutions for businesses that want to move faster.': 'Solusi AI & data untuk bisnis yang ingin bergerak lebih cepat.',
    'Dashboard & Analytics': 'Dashboard & Analitik',

    // ── case-studies.html ─────────────────────────────────────────────────────
    'AI Consulting': 'Konsultasi AI',
    'Chatbot & Assistants': 'Chatbot & Asisten',
    'Every case study is a real story — the problem the client faced, the solution we built, and the numbers they experienced.': 'Setiap studi kasus adalah cerita nyata — masalah yang dihadapi klien, solusi yang kami bangun, dan angka yang mereka rasakan.',
    'First consultation is free, no commitment.': 'Konsultasi pertama gratis, tanpa komitmen.',
    'Want results like these?': 'Ingin hasil seperti ini?',
    'Start Free Consultation': 'Mulai Konsultasi Gratis',

    // ── blog.html ─────────────────────────────────────────────────────────────
    'Insights & Tips': 'Wawasan & Tips',
    'Articles about AI': 'Artikel tentang AI',
    'Practical tips and field stories — written for business owners, not engineers.': 'Tips praktis dan cerita lapangan — ditulis untuk pemilik bisnis, bukan insinyur.',
    'Ready to take action?': 'Siap mengambil tindakan?',
    'The next step is seeing how AI can work directly for your business.': 'Langkah berikutnya adalah melihat bagaimana AI bisa bekerja langsung untuk bisnis Anda.',
    'Free 30-minute consultation to explore AI opportunities in your business.': 'Konsultasi gratis 30 menit untuk mengeksplorasi peluang AI di bisnis Anda.',

    // ── careers.html ──────────────────────────────────────────────────────────
    'Careers at Scoop Technology': 'Karir di Scoop Technology',
    'Find your role': 'Temukan peran Anda',
    'Open Roles': 'Posisi Terbuka',
    'Why Join Us': 'Mengapa Bergabung',
    'Benefits': 'Manfaat',
    'Recruitment Process': 'Proses Rekrutmen',
    'Scoop Technology builds AI products and solutions for real operational problems: slow manual processes, data-free decisions, overwhelmed customer service, and visual inspection that demands high accuracy.': 'Scoop Technology membangun produk dan solusi AI untuk masalah operasional nyata: proses manual yang lambat, keputusan tanpa data, layanan pelanggan yang kewalahan, dan inspeksi visual yang menuntut akurasi tinggi.',
    'We work cross-discipline. Engineers, data scientists, designers, and business analysts sit at the same table to ensure solutions are not just smart, but also usable, maintainable, and impactful.': 'Kami bekerja lintas disiplin. Insinyur, ilmuwan data, desainer, dan analis bisnis duduk di meja yang sama untuk memastikan solusi tidak hanya cerdas, tetapi juga dapat digunakan, dipelihara, dan berdampak.',
    'If you love solving problems at the root, are comfortable learning new technology, and want to see your work directly impact client businesses, we might be a great fit.': 'Jika Anda suka memecahkan masalah dari akarnya, nyaman mempelajari teknologi baru, dan ingin melihat pekerjaan Anda langsung berdampak pada bisnis klien, kami mungkin sangat cocok.',
    'Real problems, not empty demos': 'Masalah nyata, bukan demo kosong',
    'Every project has clear business context, real users, and defined success metrics.': 'Setiap proyek memiliki konteks bisnis yang jelas, pengguna nyata, dan metrik keberhasilan yang terdefinisi.',
    'Growing technical standards': 'Standar teknis yang berkembang',
    'We take code quality, measured experimentation, data security, and clean deployment seriously.': 'Kami serius memperhatikan kualitas kode, eksperimen terukur, keamanan data, dan deployment yang bersih.',
    'Flexible, yet accountable': 'Fleksibel, namun bertanggung jawab',
    'We respect healthy work rhythms, as long as communication and results remain clear.': 'Kami menghormati ritme kerja yang sehat, selama komunikasi dan hasil tetap jelas.',
    'Remote-friendly': 'Ramah remote',
    'Real client impact': 'Dampak nyata pada klien',
    'Hybrid & remote-friendly': 'Hybrid & ramah remote',
    'Work from office or remote depending on team and project needs.': 'Bekerja dari kantor atau remote tergantung kebutuhan tim dan proyek.',
    'Learning budget': 'Anggaran belajar',
    'Access to courses, books, certifications, and conferences relevant to your role.': 'Akses ke kursus, buku, sertifikasi, dan konferensi yang relevan dengan peran Anda.',
    'Health insurance': 'Asuransi kesehatan',
    'Health coverage to help the team work with peace of mind.': 'Perlindungan kesehatan untuk membantu tim bekerja dengan tenang.',
    'Clear career path': 'Jalur karir yang jelas',
    'Expectations, mentoring, and growth paths are transparent from day one.': 'Ekspektasi, mentoring, dan jalur pertumbuhan transparan sejak hari pertama.',
    'CV Screening': 'Screening CV',
    'We review your experience, interests, and initial fit with the role\'s requirements.': 'Kami meninjau pengalaman, minat, dan kesesuaian awal Anda dengan persyaratan peran.',
    'Initial interview': 'Wawancara awal',
    'A light conversation about your motivation, work style, and expectations.': 'Percakapan ringan tentang motivasi, gaya kerja, dan ekspektasi Anda.',
    'Case study': 'Studi kasus',
    'A small challenge that mirrors real work — not irrelevant puzzles.': 'Tantangan kecil yang mencerminkan pekerjaan nyata — bukan teka-teki yang tidak relevan.',
    'Final interview': 'Wawancara akhir',
    'A discussion with your potential lead and a detailed walkthrough of the offer and onboarding.': 'Diskusi dengan calon atasan Anda dan penjelasan rinci tentang penawaran dan proses onboarding.',
    'to final decision': 'hingga keputusan akhir',
    'Send CV': 'Kirim CV',
    'If you don\'t see a role that fits, send your profile by email. We\'re always happy to meet sharp, talented people.': 'Jika Anda tidak melihat peran yang cocok, kirimkan profil Anda melalui email. Kami selalu senang bertemu orang-orang yang cerdas dan berbakat.',
    'Transparent from start': 'Transparan dari awal',
    'We look for people who are curious, thorough, and care about the impact of their work. Advanced technology should still feel useful to real people.': 'Kami mencari orang yang penasaran, teliti, dan peduli dengan dampak pekerjaan mereka. Teknologi canggih tetap harus terasa berguna bagi orang nyata.',

    // ── ai-consulting.html ────────────────────────────────────────────────────
    'Service · Consulting': 'Layanan · Konsultasi',
    'We help Indonesian businesses find the right AI problems to solve, build the right roadmap to solve them, and execute without the six-month gap between strategy and results.': 'Kami membantu bisnis Indonesia menemukan masalah AI yang tepat untuk diselesaikan, membangun roadmap yang tepat, dan mengeksekusi tanpa jeda enam bulan antara strategi dan hasil.',
    'AI Readiness Assessment': 'Penilaian Kesiapan AI',
    'Prioritized Roadmap': 'Roadmap yang Diprioritaskan',
    'POC in 4 Weeks': 'POC dalam 4 Minggu',
    'from first call to working proof of concept': 'dari panggilan pertama ke proof of concept yang berjalan',
    'faster implementation when strategy is right first': 'implementasi lebih cepat saat strategi sudah benar sejak awal',
    'of AI projects that fail had no clear success criteria': 'proyek AI yang gagal tidak memiliki kriteria keberhasilan yang jelas',
    'of engagements tied to a measurable business outcome': 'dari setiap engagement terikat pada hasil bisnis yang terukur',
    'Your AI roadmap, made visible': 'Roadmap AI Anda, dibuat terlihat',
    'Every engagement produces a prioritized project plan — phases, timelines, owners, and success metrics — not a theoretical framework.': 'Setiap engagement menghasilkan rencana proyek yang diprioritaskan — fase, timeline, pemilik, dan metrik keberhasilan — bukan kerangka teori.',
    'Phase 1 · Assessment': 'Fase 1 · Penilaian',
    'Phase 2 · Roadmap': 'Fase 2 · Roadmap',
    'Phase 3 · Proof of Concept': 'Fase 3 · Proof of Concept',
    'Phase 4 · Scale': 'Fase 4 · Skala',
    'Quick Win': 'Kemenangan Cepat',
    'AI maturity model': 'Model kematangan AI',
    'Where are you on the AI curve?': 'Di mana posisi Anda dalam kurva AI?',
    'We start every engagement with an honest assessment of where the business sits today. The roadmap follows from that — not from a template.': 'Kami memulai setiap engagement dengan penilaian jujur di mana bisnis berada hari ini. Roadmap mengikuti dari sana — bukan dari template.',
    'Level 1': 'Level 1',
    'Level 2': 'Level 2',
    'Level 3': 'Level 3',
    'Level 4': 'Level 4',
    'Level 5': 'Level 5',
    'Exploring': 'Menjelajah',
    'No AI in production. Leadership is interested but unsure where to start or what is realistic.': 'Belum ada AI di produksi. Pimpinan tertarik tapi belum tahu harus mulai dari mana atau apa yang realistis.',
    'Most common starting point': 'Titik awal yang paling umum',
    'Piloting': 'Percontohan',
    'One or two experiments running. Results are promising but nothing has reached production scale.': 'Satu atau dua eksperimen berjalan. Hasilnya menjanjikan tapi belum ada yang mencapai skala produksi.',
    'Deploying': 'Menerapkan',
    'At least one AI system is live and generating measurable value. The challenge is scaling and prioritizing what comes next.': 'Setidaknya satu sistem AI sudah aktif dan menghasilkan nilai terukur. Tantangannya adalah mengembangkan dan memprioritaskan apa yang berikutnya.',
    'We often start here too': 'Kami sering mulai dari sini juga',
    'Scaling': 'Mengembangkan',
    'Multiple systems in production. The focus shifts to integration, governance, and building internal AI capability.': 'Beberapa sistem dalam produksi. Fokus beralih ke integrasi, tata kelola, dan membangun kemampuan AI internal.',
    'Leading': 'Memimpin',
    'AI is embedded in core business processes. The team can build and maintain systems without full external dependency.': 'AI tertanam dalam proses bisnis inti. Tim dapat membangun dan memelihara sistem tanpa ketergantungan eksternal penuh.',
    'What every engagement includes': 'Yang termasuk dalam setiap engagement',
    'Every consulting engagement produces tangible deliverables — documents you keep, decisions you can act on.': 'Setiap engagement konsultasi menghasilkan deliverable nyata — dokumen yang Anda simpan, keputusan yang bisa Anda tindaklanjuti.',
    'AI Readiness Assessment': 'Penilaian Kesiapan AI',
    'An honest audit of your data maturity, team capability, infrastructure, and process quality — scored against what each AI initiative actually requires.': 'Audit jujur kematangan data Anda, kemampuan tim, infrastruktur, dan kualitas proses — diberi skor terhadap apa yang sebenarnya dibutuhkan setiap inisiatif AI.',
    'Prioritized use case list': 'Daftar use case yang diprioritaskan',
    'Every AI idea mapped against business impact, implementation complexity, and data availability. Ranked. With a clear recommendation of where to start.': 'Setiap ide AI dipetakan terhadap dampak bisnis, kompleksitas implementasi, dan ketersediaan data. Dirangking. Dengan rekomendasi yang jelas tentang di mana harus memulai.',
    '12-month AI roadmap': 'Roadmap AI 12 bulan',
    'Phase-by-phase plan with timelines, dependencies, team requirements, and budget estimates for each initiative.': 'Rencana fase per fase dengan timeline, dependensi, kebutuhan tim, dan estimasi anggaran untuk setiap inisiatif.',
    'Success metrics definition': 'Definisi metrik keberhasilan',
    'Named KPIs, target values, measurement methods, and review cadences — agreed before any build work begins.': 'KPI yang dinamai, nilai target, metode pengukuran, dan frekuensi tinjauan — disepakati sebelum pekerjaan pembangunan dimulai.',
    'Vendor & tool selection': 'Pemilihan vendor & tools',
    'Independent recommendations on which AI platforms, cloud providers, and off-the-shelf tools fit your stack and budget. We have no vendor relationships that bias this.': 'Rekomendasi independen tentang platform AI, penyedia cloud, dan tools siap pakai mana yang sesuai dengan stack dan anggaran Anda. Kami tidak memiliki hubungan vendor yang membiaskan ini.',
    'Proof of concept build': 'Pembangunan proof of concept',
    'For the highest-priority use case, we build a working POC in 4 weeks — so you validate the approach on real data before committing to full implementation.': 'Untuk use case prioritas tertinggi, kami membangun POC yang berfungsi dalam 4 minggu — sehingga Anda memvalidasi pendekatan pada data nyata sebelum berkomitmen pada implementasi penuh.',
    'Team capability plan': 'Rencana kemampuan tim',
    'What roles you need, what skills to hire for, what to train internally, and what to keep outsourced. Sized for your budget and growth stage.': 'Peran apa yang Anda butuhkan, keahlian apa yang harus direkrut, apa yang harus dilatih secara internal, dan apa yang harus dioutsource. Disesuaikan untuk anggaran dan tahap pertumbuhan Anda.',
    'Implementation oversight': 'Pengawasan implementasi',
    'If you build with your own team or another vendor, we stay on as a technical reviewer — catching problems before they become expensive rework.': 'Jika Anda membangun dengan tim sendiri atau vendor lain, kami tetap sebagai reviewer teknis — menangkap masalah sebelum menjadi pengerjaan ulang yang mahal.',
    'No discovery phase that takes three months. No report that sits in a drawer. Every step produces something actionable.': 'Tidak ada fase discovery yang memakan tiga bulan. Tidak ada laporan yang tersimpan di laci. Setiap langkah menghasilkan sesuatu yang bisa ditindaklanjuti.',
    'Week 1 · 2 calls': 'Minggu 1 · 2 panggilan',
    'Problem discovery': 'Penemuan masalah',
    'We map the business, the operations, and the pain points. We are not looking for where AI can fit — we are looking for where the biggest operational drag is and whether AI is the right tool for it.': 'Kami memetakan bisnis, operasi, dan titik masalah. Kami tidak mencari di mana AI bisa cocok — kami mencari di mana hambatan operasional terbesar berada dan apakah AI adalah alat yang tepat untuk itu.',
    'Week 1–2': 'Minggu 1–2',
    'Data and infrastructure audit': 'Audit data dan infrastruktur',
    'We review your data sources, storage, quality, and accessibility. This step determines which AI use cases are technically feasible now and which require data work first.': 'Kami meninjau sumber data, penyimpanan, kualitas, dan aksesibilitas Anda. Langkah ini menentukan use case AI mana yang secara teknis layak sekarang dan mana yang memerlukan pekerjaan data terlebih dahulu.',
    'Week 2–3': 'Minggu 2–3',
    'Week 3–4': 'Minggu 3–4',
    'Use case scoring and prioritization': 'Penilaian dan prioritisasi use case',
    'Every candidate use case is scored on business impact, data readiness, implementation risk, and time to value. The output is a ranked list with a clear recommendation — not a list of equally viable options.': 'Setiap kandidat use case diberi skor berdasarkan dampak bisnis, kesiapan data, risiko implementasi, dan waktu untuk mendapat nilai. Outputnya adalah daftar yang diranking dengan rekomendasi yang jelas — bukan daftar opsi yang sama-sama layak.',
    'Week 3': 'Minggu 3',
    'Roadmap design and alignment': 'Desain dan penyelarasan roadmap',
    'We present the 12-month roadmap, success metrics, and budget estimates. You review, push back, and we adjust until the plan reflects your actual constraints and priorities.': 'Kami mempresentasikan roadmap 12 bulan, metrik keberhasilan, dan estimasi anggaran. Anda meninjau, memberikan masukan, dan kami menyesuaikan hingga rencana mencerminkan kendala dan prioritas Anda yang sebenarnya.',
    'Weeks 4–8': 'Minggu 4–8',
    'Proof of concept build': 'Pembangunan proof of concept',
    'We build a working POC of the top-priority initiative on your real data. Not a demo. Something connected to your actual systems that you can test with real users and measure against the agreed success criteria.': 'Kami membangun POC yang berfungsi dari inisiatif prioritas tertinggi pada data nyata Anda. Bukan demo. Sesuatu yang terhubung ke sistem Anda yang sebenarnya yang bisa Anda uji dengan pengguna nyata dan ukur terhadap kriteria keberhasilan yang disepakati.',
    'Ongoing': 'Berkelanjutan',
    'Oversight and iteration': 'Pengawasan dan iterasi',
    'Monthly check-ins against the roadmap, quarterly roadmap reviews as the business changes, and on-call technical review for your internal team or any vendor you bring in for subsequent phases.': 'Check-in bulanan terhadap roadmap, tinjauan roadmap triwulanan seiring perubahan bisnis, dan tinjauan teknis on-call untuk tim internal Anda atau vendor yang Anda bawa untuk fase berikutnya.',
    'Built for businesses ready to move': 'Dibangun untuk bisnis yang siap bergerak',
    'We work best with clients who have a real operational problem, a budget to solve it, and a decision-maker who owns the outcome.': 'Kami bekerja terbaik dengan klien yang memiliki masalah operasional nyata, anggaran untuk mengatasinya, dan pengambil keputusan yang bertanggung jawab atas hasilnya.',
    'Mid-size enterprises': 'Perusahaan menengah',
    '50–500 employees, established operations, and a leadership team that knows something needs to change but has not committed to a direction yet.': '50–500 karyawan, operasi yang mapan, dan tim pimpinan yang tahu sesuatu perlu berubah namun belum berkomitmen pada arah tertentu.',
    'Growth-stage startups': 'Startup tahap pertumbuhan',
    'Series A or beyond, with a product that generates data. AI can accelerate the core product, reduce support costs, or unlock a new customer segment.': 'Series A atau lebih, dengan produk yang menghasilkan data. AI dapat mempercepat produk inti, mengurangi biaya dukungan, atau membuka segmen pelanggan baru.',
    'Family businesses': 'Bisnis keluarga',
    'Second or third generation leadership modernizing operations. The priority is usually cost reduction and data visibility — not AI for its own sake.': 'Kepemimpinan generasi kedua atau ketiga yang memodernisasi operasi. Prioritasnya biasanya pengurangan biaya dan visibilitas data — bukan AI demi AI itu sendiri.',
    'Businesses post-pilot': 'Bisnis pasca-pilot',
    'An AI pilot ran, results were promising, but the path from pilot to production is unclear. We help bridge the gap between a working demo and a running system.': 'Pilot AI sudah berjalan, hasilnya menjanjikan, namun jalan dari pilot ke produksi tidak jelas. Kami membantu menjembatani kesenjangan antara demo yang berfungsi dan sistem yang berjalan.',
    'Why Scoop': 'Mengapa Scoop',
    'AI consulting that builds things, not reports': 'Konsultasi AI yang membangun sesuatu, bukan laporan',
    'Most strategy consultants hand you a document and leave. We stay until something is running.': 'Kebanyakan konsultan strategi menyerahkan dokumen dan pergi. Kami tetap sampai sesuatu berjalan.',
    'Produces working software': 'Menghasilkan perangkat lunak yang berfungsi',
    'Big 4 / Strategy Consulting': 'Big 4 / Konsultasi Strategi',
    'Doing it internally': 'Melakukannya secara internal',
    'Indonesia-specific context': 'Konteks spesifik Indonesia',
    'Tied to measurable business outcomes': 'Terikat pada hasil bisnis yang terukur',
    'POC within 4–8 weeks': 'POC dalam 4–8 minggu',
    'Independent vendor recommendations': 'Rekomendasi vendor independen',
    'Accessible budget for SMEs': 'Anggaran yang terjangkau untuk UKM',
    'Stays through implementation': 'Mendampingi selama implementasi',
    'Frameworks & tools': 'Framework & tools',
    'We recommend tools based on your data, team, and scale — not based on what we already know.': 'Kami merekomendasikan tools berdasarkan data, tim, dan skala Anda — bukan berdasarkan apa yang sudah kami ketahui.',
    '"We had talked about AI for two years without a single project making it to production. In three months with Scoop, we had a working system on the line and a clear plan for what comes next. The difference was that they started with the business problem, not the technology."': '"Kami sudah membicarakan AI selama dua tahun tanpa satu pun proyek yang sampai ke produksi. Dalam tiga bulan bersama Scoop, kami memiliki sistem yang berfungsi di lini produksi dan rencana yang jelas untuk langkah berikutnya. Perbedaannya adalah mereka mulai dari masalah bisnis, bukan teknologi."',
    'COO, PT Maju Bersama Industri · Bekasi': 'COO, PT Maju Bersama Industri · Bekasi',
    'Start here': 'Mulai di sini',
    'Book a free 45-minute AI readiness call. We will tell you honestly where your business sits today, what is realistic in the next 90 days, and what the first step looks like — before you commit to anything.': 'Pesan panggilan penilaian kesiapan AI gratis 45 menit. Kami akan memberi tahu Anda dengan jujur di mana bisnis Anda berada hari ini, apa yang realistis dalam 90 hari ke depan, dan seperti apa langkah pertamanya — sebelum Anda berkomitmen pada apa pun.',
    'Book a free AI readiness call': 'Pesan panggilan kesiapan AI gratis',
    'AI Consulting & Strategy': 'Konsultasi AI & Strategi',
    'Who we work with': 'Siapa yang kami layani',
    'What we work with': 'Apa yang kami gunakan',
    '. All rights reserved.': '. Hak cipta dilindungi.',

    // ── chatbot.html ──────────────────────────────────────────────────────────
    'Service · AI Chatbot': 'Layanan · AI Chatbot',
    'An AI chatbot trained on your own data — product catalogues, FAQs, policies, price lists. It handles customer questions, qualifies leads, and knows exactly when to hand off to your team.': 'Chatbot AI yang dilatih menggunakan data bisnis Anda sendiri — katalog produk, FAQ, kebijakan, daftar harga. Menangani pertanyaan pelanggan, mengkualifikasi prospek, dan tahu kapan harus meneruskan ke tim Anda.',
    'WhatsApp & Telegram': 'WhatsApp & Telegram',
    'Website Widget': 'Widget Website',
    'Trained on Your Data': 'Dilatih dengan Data Anda',
    'of customer questions handled without human involvement': 'pertanyaan pelanggan ditangani tanpa keterlibatan manusia',
    'availability — no overtime, no holidays, no sick days': 'ketersediaan — tanpa lembur, tanpa hari libur, tanpa sakit',
    'average response time regardless of message volume': 'rata-rata waktu respons terlepas dari volume pesan',
    'average time from kickoff to live chatbot': 'rata-rata waktu dari kickoff hingga chatbot live',
    'Live Preview': 'Pratinjau Langsung',
    'What your chatbot looks like in action': 'Tampilan chatbot Anda saat bekerja',
    'This is a simplified view of a real conversation handled by an AI chatbot trained on a product catalogue and FAQ database.': 'Tampilan sederhana percakapan nyata yang ditangani chatbot AI yang dilatih dengan katalog produk dan database FAQ.',
    'Use Cases': 'Kasus Penggunaan',
    'What your chatbot can handle': 'Apa yang bisa ditangani chatbot Anda',
    "If it's a question your team answers more than twice a week, the chatbot can handle it.": 'Jika itu pertanyaan yang dijawab tim Anda lebih dari dua kali seminggu, chatbot bisa menanganinya.',
    'Customer Service & FAQ': 'Layanan Pelanggan & FAQ',
    "Answers product questions, pricing, operating hours, shipping policies, and return procedures — instantly, in the customer's own language.": 'Menjawab pertanyaan produk, harga, jam operasional, kebijakan pengiriman, dan prosedur retur — secara instan, dalam bahasa pelanggan.',
    'Lead Qualification': 'Kualifikasi Prospek',
    'Asks the right questions, scores the lead, collects contact details, and passes warm prospects directly to your sales team — ready to close.': 'Menanyakan pertanyaan yang tepat, memberi skor prospek, mengumpulkan detail kontak, dan meneruskan prospek yang berminat langsung ke tim penjualan Anda.',
    'Appointment Booking': 'Pemesanan Janji Temu',
    'Lets customers book consultations, demo calls, or service slots directly in the chat — synced to your calendar with automatic reminders.': 'Memungkinkan pelanggan memesan konsultasi, demo call, atau slot layanan langsung dalam obrolan — tersinkron dengan kalender Anda dengan pengingat otomatis.',
    'Order Status & Tracking': 'Status & Pelacakan Pesanan',
    'Customers type an order number and get live status updates pulled from your system — no agent needed, no queue to wait in.': 'Pelanggan mengetik nomor pesanan dan mendapat pembaruan status langsung dari sistem Anda — tanpa agen, tanpa antrean.',
    'Internal HR Bot': 'Bot HR Internal',
    'Employees ask about leave balances, payslips, company policies, and onboarding steps — answered instantly without emailing HR.': 'Karyawan bertanya tentang saldo cuti, slip gaji, kebijakan perusahaan, dan langkah onboarding — dijawab seketika tanpa email ke HR.',
    'After-Hours Support': 'Dukungan di Luar Jam Kerja',
    'When your team is offline, the chatbot collects issue details and contact information so agents can follow up first thing in the morning with full context.': 'Saat tim offline, chatbot mengumpulkan detail masalah dan informasi kontak sehingga agen bisa menindaklanjuti di pagi hari dengan konteks lengkap.',
    'Product Recommendations': 'Rekomendasi Produk',
    "Asks a few questions about the customer's need and suggests the right product or package from your catalogue — like a trained sales rep, always available.": 'Mengajukan beberapa pertanyaan tentang kebutuhan pelanggan dan menyarankan produk atau paket yang tepat dari katalog Anda — seperti tenaga penjual terlatih, selalu tersedia.',
    'Document & Form Collection': 'Pengumpulan Dokumen & Formulir',
    'Guides customers through submitting required documents, filling forms, or completing onboarding steps — reducing incomplete submissions.': 'Membimbing pelanggan dalam mengirimkan dokumen yang diperlukan, mengisi formulir, atau menyelesaikan langkah onboarding — mengurangi pengajuan tidak lengkap.',
    "What's Included": 'Yang Disertakan',
    'Everything needed to run a reliable chatbot': 'Semua yang dibutuhkan untuk menjalankan chatbot yang andal',
    'Knowledge Base Setup': 'Setup Basis Pengetahuan',
    'We extract, clean, and structure your business data — FAQs, product info, policies, SOPs — into a searchable knowledge base the AI can use accurately.': 'Kami mengekstrak, membersihkan, dan menyusun data bisnis Anda — FAQ, info produk, kebijakan, SOP — menjadi basis pengetahuan yang dapat dicari secara akurat.',
    'Custom Personality & Tone': 'Kepribadian & Nada Kustom',
    "We define the chatbot's name, language style, response length, and conversation flow to match your brand — formal, friendly, or technical.": 'Kami mendefinisikan nama chatbot, gaya bahasa, panjang respons, dan alur percakapan agar sesuai dengan brand Anda.',
    'Multi-channel Deployment': 'Penerapan Multi-saluran',
    'One chatbot brain, deployed across WhatsApp, Telegram, and your website simultaneously. All conversations tracked in one dashboard.': 'Satu otak chatbot, diterapkan di WhatsApp, Telegram, dan website Anda sekaligus. Semua percakapan terlacak dalam satu dashboard.',
    'Human Handoff Logic': 'Logika Serah Terima ke Manusia',
    'When the chatbot encounters a complex question or a hot lead, it escalates to a human agent — passing the full conversation context so no one has to repeat themselves.': 'Saat chatbot menemukan pertanyaan kompleks atau prospek panas, ia meneruskan ke agen manusia — dengan konteks percakapan lengkap sehingga tidak ada yang perlu mengulang.',
    'Bilingual Support (ID / EN)': 'Dukungan Bilingual (ID / EN)',
    "Detects the customer's language automatically and responds in kind. No configuration needed — it switches mid-conversation if necessary.": 'Mendeteksi bahasa pelanggan secara otomatis dan merespons dalam bahasa yang sama. Tidak perlu konfigurasi — beralih di tengah percakapan jika diperlukan.',
    'Analytics Dashboard': 'Dashboard Analitik',
    'See what customers ask most, where conversations drop off, response accuracy rates, and how many leads were captured — updated daily.': 'Lihat apa yang paling banyak ditanyakan pelanggan, di mana percakapan terhenti, tingkat akurasi respons, dan berapa prospek yang berhasil dikumpulkan — diperbarui setiap hari.',
    'CRM / System Integration': 'Integrasi CRM / Sistem',
    'Connects to your existing tools — HubSpot, Salesforce, Google Sheets, your custom database — to pull live data and push captured leads automatically.': 'Terhubung ke alat yang sudah ada — HubSpot, Salesforce, Google Sheets, database kustom Anda — untuk mengambil data langsung dan mendorong prospek secara otomatis.',
    '3-Month Post-Launch Support': 'Dukungan 3 Bulan Pasca Peluncuran',
    'We monitor accuracy, retrain on new data, fix edge cases, and update the knowledge base as your products or policies change.': 'Kami memantau akurasi, melatih ulang dengan data baru, memperbaiki kasus tepi, dan memperbarui basis pengetahuan seiring perubahan produk atau kebijakan Anda.',
    'From kickoff to live chatbot in 3 weeks': 'Dari kickoff ke chatbot live dalam 3 minggu',
    'Week 1': 'Minggu 1',
    'Discovery & data collection': 'Penemuan & pengumpulan data',
    'We map your most common customer questions, collect your knowledge sources (FAQs, product sheets, policy docs, past chat logs), and define the conversations the bot needs to handle well. This determines what it can and can\'t do at launch.': 'Kami memetakan pertanyaan pelanggan yang paling umum, mengumpulkan sumber pengetahuan Anda (FAQ, lembar produk, dokumen kebijakan, log obrolan sebelumnya), dan mendefinisikan percakapan yang perlu ditangani bot dengan baik.',
    'Build & train': 'Membangun & melatih',
    'We structure the knowledge base, configure the LLM, set up conversation flows, define escalation triggers, and connect to your channels. The chatbot is tested internally against hundreds of real question variations before you see it.': 'Kami menyusun basis pengetahuan, mengonfigurasi LLM, menyiapkan alur percakapan, mendefinisikan pemicu eskalasi, dan menghubungkan ke saluran Anda. Chatbot diuji secara internal terhadap ratusan variasi pertanyaan nyata sebelum Anda melihatnya.',
    'QA & refinement': 'QA & penyempurnaan',
    "You and your team test the chatbot with real scenarios. We fix incorrect answers, improve response quality on edge cases, and tune the handoff logic until you're confident in what it does — and what it correctly declines to answer.": 'Anda dan tim menguji chatbot dengan skenario nyata. Kami memperbaiki jawaban yang salah, meningkatkan kualitas respons pada kasus tepi, dan menyetel logika serah terima hingga Anda yakin.',
    'Go live + handover': 'Go live + serah terima',
    'The chatbot goes live on all configured channels. Your team gets access to the analytics dashboard and a simple content editor to add new FAQs without touching code. We monitor the first two weeks closely and handle any issues.': 'Chatbot aktif di semua saluran yang dikonfigurasi. Tim Anda mendapat akses ke dashboard analitik dan editor konten sederhana untuk menambahkan FAQ baru tanpa menyentuh kode. Kami memantau dua minggu pertama dengan seksama.',
    'Human vs Chatbot': 'Manusia vs Chatbot',
    'What actually changes after deployment': 'Apa yang sebenarnya berubah setelah penerapan',
    'Scenario': 'Skenario',
    'Human agent only': 'Hanya agen manusia',
    'With Scoop Chatbot': 'Dengan Chatbot Scoop',
    'Response time at 11pm': 'Waktu respons pukul 23.00',
    'No response until morning': 'Tidak ada respons hingga pagi',
    'Same question asked 50x a day': 'Pertanyaan yang sama ditanyakan 50x sehari',
    'Agent answers each one manually': 'Agen menjawab satu per satu secara manual',
    'Lead captured at midnight': 'Prospek masuk tengah malam',
    'Lost — no one to follow up': 'Hilang — tidak ada yang menindaklanjuti',
    'Complex technical question': 'Pertanyaan teknis kompleks',
    'Agent handles (slow, error-prone)': 'Agen menangani (lambat, mudah salah)',
    'Cost per handled conversation': 'Biaya per percakapan yang ditangani',
    'Under 3 seconds, always': 'Di bawah 3 detik, selalu',
    'Bot handles all 50 automatically': 'Bot menangani semua 50 secara otomatis',
    'Collected, scored, in CRM by morning': 'Dikumpulkan, dinilai, masuk CRM sebelum pagi',
    'Bot answers from knowledge base — escalates if unsure': 'Bot menjawab dari basis pengetahuan — eskalasi jika tidak yakin',
    'Under Rp 500 at scale': 'Di bawah Rp 500 dalam skala besar',
    'Handles 10x volume with no slowdown': 'Menangani volume 10x tanpa melambat',
    'Scalable during promo / peak': 'Scalable saat promo / puncak',
    'Agents overwhelmed': 'Agen kewalahan',
    'Rp 15,000–50,000 (staff time)': 'Rp 15.000–50.000 (waktu staf)',
    'Technology': 'Teknologi',
    'Built on proven AI infrastructure': 'Dibangun di atas infrastruktur AI yang terbukti',
    'We were getting 200+ WhatsApp messages a day and our team couldn\'t keep up. Within the first week after the chatbot went live, 78% of those messages were handled automatically. Our agents now only deal with real inquiries — and our response time went from 4 hours to under a minute.': 'Kami menerima 200+ pesan WhatsApp sehari dan tim kami tidak bisa mengimbanginya. Dalam minggu pertama setelah chatbot aktif, 78% pesan tersebut ditangani secara otomatis. Agen kami kini hanya menangani pertanyaan nyata — dan waktu respons kami turun dari 4 jam menjadi di bawah satu menit.',
    'Head of Customer Experience · Toko Elektronik Makmur': 'Kepala Pengalaman Pelanggan · Toko Elektronik Makmur',
    "We'll audit your most common customer conversations, identify what the chatbot should handle, and give you a realistic scope and cost estimate — before you commit to anything.": 'Kami akan mengaudit percakapan pelanggan yang paling umum, mengidentifikasi apa yang harus ditangani chatbot, dan memberi Anda estimasi lingkup dan biaya yang realistis — sebelum Anda berkomitmen.',
    'Book a free chatbot audit': 'Pesan audit chatbot gratis',

    // ── computer-vision.html ──────────────────────────────────────────────────
    'Service · Computer Vision': 'Layanan · Computer Vision',
    'AI-powered visual inspection deployed on your existing cameras — detecting defects, counting objects, and monitoring operations 24/7 with accuracy human inspectors can\'t match at scale.': 'Inspeksi visual berbasis AI yang diterapkan pada kamera Anda yang sudah ada — mendeteksi cacat, menghitung objek, dan memantau operasi 24/7 dengan akurasi yang tidak bisa ditandingi inspektor manusia.',
    'Manufacturing QC': 'QC Manufaktur',
    'Retail & Warehouse': 'Ritel & Gudang',
    'Works on Existing Cameras': 'Berfungsi pada Kamera yang Ada',
    'detection accuracy — vs 94% average for human inspectors': 'akurasi deteksi — vs rata-rata 94% untuk inspektor manusia',
    'processing time per frame — real-time at any production speed': 'waktu pemrosesan per frame — real-time di kecepatan produksi apa pun',
    'uninterrupted monitoring — no fatigue, no shift changes': 'pemantauan tanpa henti — tanpa kelelahan, tanpa pergantian shift',
    'average time from camera assessment to live deployment': 'rata-rata waktu dari penilaian kamera hingga penerapan langsung',
    'Live Demo': 'Demo Langsung',
    'What an AI vision system looks like in action': 'Tampilan sistem AI vision saat bekerja',
    'This simulates a real detection feed from a factory quality-control line. Green boxes are passing units. Red indicates a detected defect.': 'Ini mensimulasikan feed deteksi nyata dari lini quality-control pabrik. Kotak hijau adalah unit yang lolos. Merah menunjukkan cacat yang terdeteksi.',
    'Detections': 'Deteksi',
    'Session stats': 'Statistik sesi',
    'Where AI vision makes the biggest difference': 'Di mana AI vision membuat perbedaan terbesar',
    'Any process that relies on a human eye looking at the same thing repeatedly is a candidate for automation.': 'Setiap proses yang mengandalkan mata manusia untuk melihat hal yang sama berulang kali adalah kandidat untuk otomasi.',
    'Defect Detection': 'Deteksi Cacat',
    'Inspects every product on the line for cracks, scratches, discolouration, dimensional errors, or missing components — at production speed, without slowing throughput.': 'Memeriksa setiap produk di lini untuk retakan, goresan, perubahan warna, kesalahan dimensi, atau komponen yang hilang — pada kecepatan produksi, tanpa memperlambat throughput.',
    'Inventory & Stock Counting': 'Inventaris & Penghitungan Stok',
    'Counts items on shelves, pallets, or conveyor belts in real time. Flags low stock automatically and syncs counts to your inventory system — no manual stock-takes required.': 'Menghitung barang di rak, palet, atau ban berjalan secara real time. Menandai stok rendah secara otomatis dan menyinkronkan hitungan ke sistem inventaris Anda — tidak diperlukan stock-take manual.',
    'People Counting & Flow': 'Penghitungan & Alur Orang',
    'Tracks visitor and staff movement across zones — store sections, production areas, or access points. Identifies crowding and optimises staff allocation based on live footfall data.': 'Melacak pergerakan pengunjung dan staf di berbagai zona — bagian toko, area produksi, atau titik akses. Mengidentifikasi kepadatan dan mengoptimalkan alokasi staf berdasarkan data lalu lintas langsung.',
    'PPE & Safety Compliance': 'Kepatuhan APD & Keselamatan',
    'Detects whether workers on the floor are wearing required safety equipment — helmets, vests, gloves — and triggers an alert instantly when a violation is detected.': 'Mendeteksi apakah pekerja di lantai produksi mengenakan peralatan keselamatan yang diperlukan — helm, rompi, sarung tangan — dan memicu peringatan seketika saat pelanggaran terdeteksi.',
    'Security & Access Monitoring': 'Pemantauan Keamanan & Akses',
    'Detects unauthorised access, loitering in restricted areas, or suspicious behaviour across your camera network — and sends real-time alerts to your security team.': 'Mendeteksi akses tidak sah, berkeliaran di area terbatas, atau perilaku mencurigakan di seluruh jaringan kamera Anda — dan mengirim peringatan real-time ke tim keamanan Anda.',
    'Assembly Verification': 'Verifikasi Perakitan',
    'Confirms that each assembly step was completed correctly — right components, right orientation, right sequence — before the product moves to the next station.': 'Mengonfirmasi bahwa setiap langkah perakitan diselesaikan dengan benar — komponen yang tepat, orientasi yang tepat, urutan yang tepat — sebelum produk berpindah ke stasiun berikutnya.',
    'Label & Packaging Check': 'Pemeriksaan Label & Kemasan',
    'Verifies that labels are present, correctly positioned, not blurred, and match the expected product — catching mislabelling before goods leave the warehouse.': 'Memverifikasi bahwa label ada, diposisikan dengan benar, tidak buram, dan sesuai dengan produk yang diharapkan — menangkap pelabelan yang salah sebelum barang meninggalkan gudang.',
    'Freshness & Condition Detection': 'Deteksi Kesegaran & Kondisi',
    'Used in food production and cold-chain logistics to assess product appearance, detect spoilage indicators, and flag batches that don\'t meet quality standards before shipment.': 'Digunakan dalam produksi makanan dan logistik rantai dingin untuk menilai tampilan produk, mendeteksi indikator pembusukan, dan menandai batch yang tidak memenuhi standar kualitas sebelum pengiriman.',
    'Everything needed to run a production-grade vision system': 'Semua yang dibutuhkan untuk menjalankan sistem vision berkelas produksi',
    'Camera Assessment & Selection': 'Penilaian & Pemilihan Kamera',
    'We audit your existing cameras and site layout. If new cameras are needed, we specify the right hardware — resolution, frame rate, lens, and placement — for your detection requirements.': 'Kami mengaudit kamera Anda yang sudah ada dan tata letak lokasi. Jika kamera baru diperlukan, kami menentukan perangkat keras yang tepat — resolusi, frame rate, lensa, dan penempatan — untuk kebutuhan deteksi Anda.',
    'Custom Model Training': 'Pelatihan Model Kustom',
    'We collect sample images from your specific environment and train a detection model on your actual products or defect types — not a generic model that guesses.': 'Kami mengumpulkan gambar sampel dari lingkungan spesifik Anda dan melatih model deteksi pada produk atau jenis cacat aktual Anda — bukan model generik yang menebak.',
    'Real-time Alert System': 'Sistem Peringatan Real-time',
    'When a defect, violation, or anomaly is detected, the system triggers an instant alert — via dashboard notification, WhatsApp, email, or direct signal to your line PLC.': 'Saat cacat, pelanggaran, atau anomali terdeteksi, sistem memicu peringatan seketika — melalui notifikasi dashboard, WhatsApp, email, atau sinyal langsung ke PLC lini Anda.',
    'See defect rates, yield per shift, detection trends, and camera health — all in one live dashboard. Exportable reports for QC managers and operations leads.': 'Lihat tingkat cacat, hasil per shift, tren deteksi, dan kesehatan kamera — semuanya dalam satu dashboard langsung. Laporan yang dapat diekspor untuk manajer QC dan pemimpin operasi.',
    'Multi-Camera Support': 'Dukungan Multi-Kamera',
    'A single system manages multiple cameras across multiple production lines or zones. Each camera is configured independently, all feeding into one management interface.': 'Satu sistem mengelola beberapa kamera di beberapa lini produksi atau zona. Setiap kamera dikonfigurasi secara independen, semuanya masuk ke satu antarmuka manajemen.',
    'ERP & MES Integration': 'Integrasi ERP & MES',
    'Connects to your existing manufacturing or warehouse systems — SAP, Odoo, custom databases — to automatically log detections, update quality records, and trigger downstream actions.': 'Terhubung ke sistem manufaktur atau gudang yang sudah ada — SAP, Odoo, database kustom — untuk secara otomatis mencatat deteksi, memperbarui catatan kualitas, dan memicu tindakan hilir.',
    'Edge or Cloud Deployment': 'Penerapan Edge atau Cloud',
    'Runs on-premise on an edge device (NVIDIA Jetson or equivalent) for low-latency processing without internet dependency — or cloud-hosted for multi-site deployments.': 'Berjalan on-premise di perangkat edge (NVIDIA Jetson atau setara) untuk pemrosesan latensi rendah tanpa ketergantungan internet — atau dihosting cloud untuk penerapan multi-lokasi.',
    'We monitor model accuracy, retrain on new defect types as your product evolves, and fine-tune thresholds to reduce false positives. Your yield numbers keep improving after launch.': 'Kami memantau akurasi model, melatih ulang pada jenis cacat baru seiring produk Anda berkembang, dan menyesuaikan threshold untuk mengurangi false positif. Angka hasil Anda terus meningkat setelah peluncuran.',
    'From camera assessment to live detection in 4 weeks': 'Dari penilaian kamera ke deteksi langsung dalam 4 minggu',
    'Site assessment & data capture': 'Penilaian lokasi & pengambilan data',
    'We visit the site, assess lighting conditions, camera positions, and product flow. We collect a sample dataset of images covering normal units, known defect types, and edge cases — the quality of this data directly determines detection accuracy.': 'Kami mengunjungi lokasi, menilai kondisi pencahayaan, posisi kamera, dan aliran produk. Kami mengumpulkan dataset sampel gambar yang mencakup unit normal, jenis cacat yang diketahui, dan kasus tepi — kualitas data ini secara langsung menentukan akurasi deteksi.',
    'Model training & validation': 'Pelatihan & validasi model',
    'We annotate the dataset, train the detection model, and validate it against a held-out test set. Accuracy, precision, and recall are reported before anything is deployed. We don\'t move forward until the numbers meet the agreed acceptance criteria.': 'Kami menganotasi dataset, melatih model deteksi, dan memvalidasinya terhadap test set yang dipegang. Akurasi, presisi, dan recall dilaporkan sebelum apa pun diterapkan. Kami tidak melanjutkan hingga angkanya memenuhi kriteria penerimaan yang disepakati.',
    'Deployment & integration': 'Penerapan & integrasi',
    'The system is deployed on your hardware or cloud environment, integrated with your existing line or warehouse systems, and tested in production conditions. Alert routing, dashboard access, and reporting are all configured before handover.': 'Sistem diterapkan pada perangkat keras atau lingkungan cloud Anda, diintegrasikan dengan lini atau sistem gudang yang sudah ada, dan diuji dalam kondisi produksi. Routing peringatan, akses dashboard, dan pelaporan semuanya dikonfigurasi sebelum serah terima.',
    'Go live + continuous improvement': 'Go live + perbaikan berkelanjutan',
    'The system goes live. Your team gets access to the dashboard and alert configuration. We monitor false positive and false negative rates for the first month and retrain on new edge cases as they appear in production — accuracy typically improves 2–3% in the first 30 days.': 'Sistem mulai aktif. Tim Anda mendapat akses ke dashboard dan konfigurasi peringatan. Kami memantau tingkat false positif dan false negatif selama bulan pertama dan melatih ulang pada kasus tepi baru saat muncul dalam produksi — akurasi biasanya meningkat 2–3% dalam 30 hari pertama.',
    'Manual vs AI Vision': 'Manual vs AI Vision',
    'What changes when you add AI eyes to your line': 'Apa yang berubah saat Anda menambahkan mata AI ke lini Anda',
    'Capability': 'Kemampuan',
    'Human inspector': 'Inspektor manusia',
    'With Scoop Vision AI': 'Dengan AI Vision Scoop',
    'Inspection speed': 'Kecepatan inspeksi',
    'Limited by human reaction time — typically 5–8 units/min': 'Dibatasi oleh waktu reaksi manusia — biasanya 5–8 unit/menit',
    'Processes every unit at full line speed — no bottleneck': 'Memproses setiap unit pada kecepatan lini penuh — tanpa bottleneck',
    'Accuracy over an 8-hour shift': 'Akurasi selama shift 8 jam',
    'Drops to 70–80% by hour 6 due to fatigue': 'Turun ke 70–80% pada jam ke-6 karena kelelahan',
    'Consistent 99%+ — no fatigue, no variation': 'Konsisten 99%+ — tanpa kelelahan, tanpa variasi',
    'Night shift coverage': 'Cakupan shift malam',
    'Overtime cost, lower morale, higher miss rate': 'Biaya lembur, moral lebih rendah, tingkat kesalahan lebih tinggi',
    'Same performance at 2am as at 9am': 'Performa sama pukul 02.00 seperti pukul 09.00',
    'New defect type response': 'Respons jenis cacat baru',
    'Retraining takes weeks — inconsistent until then': 'Pelatihan ulang membutuhkan minggu — tidak konsisten hingga saat itu',
    'Retrain the model in days — deployed without retraining staff': 'Latih ulang model dalam hitungan hari — diterapkan tanpa melatih ulang staf',
    'Cost at scale': 'Biaya pada skala besar',
    'Linear — more volume means more inspectors': 'Linear — volume lebih besar berarti lebih banyak inspektor',
    'Fixed infrastructure cost — scales to 10x volume with no extra headcount': 'Biaya infrastruktur tetap — skala ke volume 10x tanpa tambahan tenaga kerja',
    'Audit trail': 'Jejak audit',
    'No automatic record of each inspection decision': 'Tidak ada catatan otomatis dari setiap keputusan inspeksi',
    'Every inspection logged with timestamp, image, and confidence score': 'Setiap inspeksi dicatat dengan timestamp, gambar, dan skor kepercayaan',
    'Built on the most reliable computer vision stack available': 'Dibangun di atas stack computer vision paling andal yang tersedia',
    'Before the AI system, our QC team was manually checking every unit on two production lines — and we were still shipping a defect rate of 1.8%. Three months after deployment, the defect rate is 0.2% and our QC team has been redeployed to process improvement work instead of repetitive inspection. The ROI was clear in the first month.': 'Sebelum sistem AI, tim QC kami memeriksa setiap unit secara manual di dua lini produksi — dan kami masih mengirimkan tingkat cacat 1,8%. Tiga bulan setelah penerapan, tingkat cacat adalah 0,2% dan tim QC kami telah dipindahtugaskan ke pekerjaan peningkatan proses alih-alih inspeksi berulang. ROI sudah jelas dalam bulan pertama.',
    'VP Operations · PT Mitra Komponen Industri · Bekasi': 'VP Operasional · PT Mitra Komponen Industri · Bekasi',
    'We\'ll assess your current setup, identify the highest-value detection use case, and give you a scope and accuracy estimate — before you commit to anything.': 'Kami akan menilai pengaturan Anda saat ini, mengidentifikasi use case deteksi bernilai tertinggi, dan memberi Anda estimasi lingkup dan akurasi — sebelum Anda berkomitmen pada apa pun.',
    'Book a free vision assessment': 'Pesan penilaian vision gratis',
    'Computer Vision & AI Visual': 'Computer Vision & AI Visual',
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

    // ── web-design.html ──────────────────────────────────────────────────────
    'wd-hero-title': {
      en: 'Your website should<br><span class="gr">work as hard as you do</span>',
      id: 'Website Anda seharusnya<br><span class="gr">bekerja sekeras Anda</span>',
    },
    'wd-process-title': {
      en: 'From first call to live website<br>in 4 weeks',
      id: 'Dari panggilan pertama ke website live<br>dalam 4 minggu',
    },
    'wd-cta-title': {
      en: 'Your next client is judging<br>your website <span style="background:linear-gradient(135deg,var(--blue),var(--teal));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">right now</span>',
      id: 'Klien berikutnya sedang menilai<br>website Anda <span style="background:linear-gradient(135deg,var(--blue),var(--teal));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">sekarang</span>',
    },

    // ── dashboard-analytics.html ─────────────────────────────────────────────
    'da-hero-title': {
      en: 'Turn your data into<br><span class="gr">decisions that drive growth</span>',
      id: 'Ubah data Anda menjadi<br><span class="gr">keputusan yang mendorong pertumbuhan</span>',
    },
    'da-cta-title': {
      en: 'Ready to see your data<br><span class="gr">in one place?</span>',
      id: 'Siap melihat data Anda<br><span class="gr">dalam satu tempat?</span>',
    },

    // ── mobile-app.html ──────────────────────────────────────────────────────
    'ma-hero-title': {
      en: 'Apps that work for<br><span class="gr">your business, not against it</span>',
      id: 'Aplikasi yang bekerja untuk<br><span class="gr">bisnis Anda, bukan melawannya</span>',
    },
    'ma-cta-title': {
      en: 'Got an app idea?<br><span class="gr">Let\'s build it.</span>',
      id: 'Punya ide aplikasi?<br><span class="gr">Mari kita wujudkan.</span>',
    },

    // ── process-automation.html ───────────────────────────────────────────────
    'pa-hero-title': {
      en: 'Let AI handle the work<br><span class="gr">your team shouldn\'t do</span>',
      id: 'Biarkan AI menangani pekerjaan<br><span class="gr">yang tidak perlu dilakukan tim Anda</span>',
    },
    'pa-cta-title': {
      en: 'Ready to stop doing<br><span class="gr">work that AI can handle?</span>',
      id: 'Siap berhenti mengerjakan<br><span class="gr">hal yang bisa ditangani AI?</span>',
    },

    // ── chatbot.html ─────────────────────────────────────────────────────────
    'cb-hero-title': {
      en: 'Your business, answering<br><span class="gr">questions 24 hours a day</span>',
      id: 'Bisnis Anda, menjawab<br><span class="gr">pertanyaan 24 jam sehari</span>',
    },
    'cb-cta-title': {
      en: 'Ready to stop answering<br><span class="gr">the same questions manually?</span>',
      id: 'Siap berhenti menjawab<br><span class="gr">pertanyaan yang sama berulang kali?</span>',
    },
    'cb-chat-1': {
      en: "Hi! 👋 I'm the Scoop Technology virtual assistant. How can I help you today?",
      id: 'Halo! 👋 Saya asisten virtual Scoop Technology. Ada yang bisa saya bantu hari ini?',
    },
    'cb-chat-2': {
      en: 'How much does the dashboard analytics package cost?',
      id: 'Berapa harga paket dashboard analytics?',
    },
    'cb-chat-3': {
      en: 'The Dashboard Analytics package starts from Rp 15 million for the initial setup, including up to 5 data sources and 3 months of support. May I ask which industry your business is in?',
      id: 'Paket Dashboard Analytics dimulai dari Rp 15 juta untuk setup awal, termasuk hingga 5 sumber data dan 3 bulan support. Boleh saya tanyakan industri bisnis Anda?',
    },
    'cb-chat-4': {
      en: "We're in retail, with 12 branches",
      id: 'Kami di bidang retail, punya 12 cabang',
    },
    'cb-chat-5': {
      en: "For multi-branch retail, we recommend the Enterprise package. Our team can schedule a free demo — would you like me to connect you with one of our consultants? 🙌",
      id: 'Untuk retail multi-cabang, kami rekomendasikan paket Enterprise. Tim kami bisa jadwalkan demo gratis — apakah Anda ingin saya hubungkan dengan konsultan kami? 🙌',
    },
    'cb-chat-typing': {
      en: 'typing...',
      id: 'mengetik...',
    },
    'cb-chat-input': {
      en: 'Type a message...',
      id: 'Tulis pesan...',
    },

    // ── case-studies.html ────────────────────────────────────────────────────
    'cs-hero-title': {
      en: 'Not promises —<br>this is what <span class="gr">actually happened</span>',
      id: 'Bukan janji —<br>ini yang <span class="gr">benar-benar terjadi</span>',
    },
    'cs-cta-title': {
      en: 'Tell us about your<br>business <span class="gr">challenge</span>',
      id: 'Ceritakan kepada kami<br><span class="gr">tantangan bisnis</span> Anda',
    },

    // ── blog.html ─────────────────────────────────────────────────────────────
    'bl-hero-title': {
      en: 'Articles about AI<br>that are <span class="gr">easy to understand</span>',
      id: 'Artikel tentang AI<br>yang <span class="gr">mudah dipahami</span>',
    },
    'bl-cta-title': {
      en: 'From reading articles<br>to <span class="gr">real results</span>',
      id: 'Dari membaca artikel<br>ke <span class="gr">hasil nyata</span>',
    },

    // ── careers.html ──────────────────────────────────────────────────────────
    'cr-hero-title': {
      en: 'Build AI that<br><span class="gr">powers real businesses</span>',
      id: 'Bangun AI yang<br><span class="gr">menggerakkan bisnis nyata</span>',
    },
    'cr-why-title': {
      en: 'A place to learn fast,<br>and do meaningful work',
      id: 'Tempat belajar cepat,<br>dan mengerjakan hal yang bermakna',
    },
    'cr-benefits-title': {
      en: 'Support to work<br>and grow comfortably',
      id: 'Dukungan untuk bekerja<br>dan berkembang dengan nyaman',
    },

    // ── ai-consulting.html ───────────────────────────────────────────────────
    'aic-hero-title': {
      en: 'AI strategy that ships,<br><span class="gr">not just slide decks</span>',
      id: 'Strategi AI yang benar-benar dijalankan,<br><span class="gr">bukan sekadar presentasi</span>',
    },
    'aic-process-title': {
      en: 'From first call to working POC in 6 steps',
      id: 'Dari panggilan pertama ke POC yang berjalan dalam 6 langkah',
    },
    'aic-cta-title': {
      en: 'Not sure where to start?<br><span class="gr">That is exactly why we exist.</span>',
      id: 'Belum tahu harus mulai dari mana?<br><span class="gr">Itulah alasan kami ada.</span>',
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

// ── Dynamic copyright year ────────────────────────────────────────────────
document.querySelectorAll('.copy-year').forEach(el => {
  el.textContent = new Date().getFullYear();
});
