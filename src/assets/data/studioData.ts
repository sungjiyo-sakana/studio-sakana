import { PipelineStep, StudioStat, NewsItem } from '../types';

export interface ClientStudio {
  id: string;
  nameJa: string;
  nameEn: string;
  kanjiLogo: string;
  tagline: string;
  notableWorks: string;
  logoUrl?: string;
}

export const CLIENT_STUDIOS: ClientStudio[] = [
  {
    id: 'gekkou',
    nameJa: '株式会社Studio Gekkou',
    nameEn: 'Studio Gekkou Co., Ltd.',
    kanjiLogo: 'Studio Gekkou',
    tagline: 'Official Co-Production Partner',
    notableWorks: 'Mayonaka Heart Tune, 10-Year Last Stand',
    logoUrl: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20GEKKOU.png'
  },
  {
    id: 'studiokai',
    nameJa: '株式会社スタジオKAI',
    nameEn: 'Studio KAI Inc.',
    kanjiLogo: 'Studio KAI',
    tagline: 'Animation Production Partner',
    notableWorks: 'Yumeiro Wonder MV, Yuusha Kei ni Shosu',
    logoUrl: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20STUDIO%20KAI.png'
  },
  {
    id: 'mappa',
    nameJa: '株式会社MAPPA',
    nameEn: 'MAPPA Co., Ltd.',
    kanjiLogo: 'MAPPA',
    tagline: 'Anime Production Studio',
    notableWorks: 'Jigokuraku Season 2',
    logoUrl: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20MAPPA.png'
  },
  {
    id: 'konami',
    nameJa: 'KONAMI animation',
    nameEn: 'KONAMI Animation',
    kanjiLogo: 'KONAMI animation',
    tagline: 'Anime & Game Studio',
    notableWorks: 'Yu-Gi-Oh! CARD GAME: THE CHRONICLES',
    logoUrl: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20KONAMI%20AN.png'
  },
  {
    id: 'shuka',
    nameJa: '株式会社朱夏',
    nameEn: 'Shuka Inc.',
    kanjiLogo: '朱夏 SHUKA',
    tagline: 'Creative Animation Studio',
    notableWorks: 'Ikoku Nikki',
    logoUrl: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20SHUKA.png'
  }
];

export const STUDIO_INFO = {
  nameJa: '株式会社魚 (スタジオ魚)',
  nameEn: 'Studio Sakana Co., Ltd.',
  nameId: 'Studio Sakana Co., Ltd.',
  legalNameJa: '株式会社魚',
  legalNameEn: 'Sakana Co., Ltd.',
  founderJa: '菅原 聖',
  founderEn: 'Hijiri Sugahara',
  taglineJa: '東京都板橋区高島平のアニメーション制作スタジオ',
  taglineEn: 'Anime Production Studio in Takashimadaira, Tokyo',
  taglineId: 'Studio Produksi Animasi di Takashimadaira, Tokyo',
  foundedDate: '2025年1月7日',
  foundedYear: 2025,
  locationJa: '東京都板橋区高島平5-18-7',
  locationEn: '5-18-7 Takashimadaira, Itabashi-ku, Tokyo, Japan',
  locationId: '5-18-7 Takashimadaira, Itabashi-ku, Tokyo, Jepang',
  phone: '090-7343-2219',
  businessHoursJa: '10:00 ～ 22:00（※緊急時は22時以降も対応可能）',
  businessHoursEn: '10:00 AM - 10:00 PM JST (Emergency late night support available)',
  businessHoursId: '10:00 - 22:00 JST (Dukungan darurat larut malam tersedia)',
  discordUrl: 'https://discord.gg/cVzZxxSR6W',
  partnerStudioName: 'Studio Gekkou & Studio KAI',
  keyframeStaffListUrl: 'https://keyframe-staff-list.com/studio/778',
  officialWebsite: 'https://studio-sakana.co.jp/',
  heroBannerImg: '',
  logoImg: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20SAKANA.png',
  logoIconImg: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20SAKANA%20icon.png',
  logoPanjangImg: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20SAKANA%20panjang.png',
  logoDefaultImg: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20SAKANA.png',
  workshopImg: '',
  
  // Founder philosophy
  philosophyJa: '皆が楽しいと思える未来を作っていく。「なぜそれをしなければいけないのか？」「誰のためにやるのか？」「自分が決めた事をやり続けられる確証はあるのか？」考え続けた私の判断基準はいつも「自分が楽しいと思えるかどうか」でした。楽しいと思える事を形にして、多くの人にとって価値あるものに昇華していく事。水を得た魚のように生き生きと日々を楽しみながら過ごしていく事 — スタジオ魚（さかな）の名前の由来はそこから来ています。何ができる？ではなく、どうやってできるようにするか。スタジオ魚は自ら信じた事を大切にし、形にしていく事を理念に置いています。',
  philosophyEn: 'Creating a future where everyone finds joy. Asking "Why must we do this?", "For whom do we do it?", my compass has always been whether I find genuine joy in it. Transforming enjoyable passion into works of value that enrich people\'s lives. Living vibrantly like a fish in water — that is the origin of Studio Sakana. Not "What can we do?", but "How can we make it possible?". Studio Sakana puts believing in oneself and giving form to vision at its core.',
  
  // Capacities
  capacityList: [
    { titleJa: '絵コンテ・レイアウト (LO)', titleEn: 'Storyboard Animatic & Layout', titleId: 'Storyboard Animatic & Layout', value: '~80 cuts / day' },
    { titleJa: '原画 (Genga)', titleEn: 'Key Animation', titleId: 'Keypose', value: '~100 cuts / day' },
    { titleJa: '第二原画 (Nigen)', titleEn: '2nd Key Animation', titleId: 'Assisten Keypose', value: '~15 cuts / day' },
    { titleJa: '作画監督 (Sakkan)', titleEn: 'Animation Director', titleId: 'Supervisor Animasi', value: '~5 cuts / day' },
    { titleJa: '動画 & 仕上げ (Douga & Shiage)', titleEn: 'Clean up & Coloring', titleId: 'Clean up & Coloring', value: '~100 sheets / day' },
    { titleJa: 'TP修正 (TP Shū)', titleEn: 'Trace/Paint Supervision', titleId: 'Revisi Feedback', value: 'ご相談 (Negotiable)' },
    { titleJa: '撮影 (Satsuei)', titleEn: 'Compositing', titleId: 'Editing', value: '~80 cuts / day' },
    { titleJa: '撮影協力 (Satsuei Kyōryoku)', titleEn: 'Compositing Cooperation', titleId: 'Kerja Sama Editing', value: 'ご相談 (Negotiable)' }
  ]
};

export const STUDIO_STATS: StudioStat[] = [
  { labelJa: '公開・公式作品', labelEn: 'Official Released Works', labelId: 'Karya Anime Resmi', value: '85', suffix: '+' },
  { labelJa: '制作カット実績', labelEn: 'Production Cuts', labelId: 'Total Cut Produksi', value: '120', suffix: '+' },
  { labelJa: 'クライアント・提携スタジオ', labelEn: 'Client & Partner Studios', labelId: 'Studio Klien & Mitra', value: '5', suffix: '' },
  { labelJa: '在籍・登録クリエイター', labelEn: 'Registered Talent', labelId: 'Talent Terdaftar', value: '180', suffix: '+' }
];

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    stepNumber: '01',
    titleJa: '絵コンテ・レイアウト (LO)',
    titleEn: 'Storyboard Animatic & Layout',
    titleId: 'Storyboard Animatic & Layout',
    descJa: '絵コンテの演出意図を解析し、パース・空間構成・カメラレンズ感を正確に反映したレイアウトを構築。',
    descEn: 'Analyzing storyboards to establish precise spatial composition, perspective depth, and camera optics.',
    descId: 'Menganalisis storyboard untuk menyusun tata letak ruang, perspektif, dan sudut kamera secara presisi.',
    iconName: 'Layout'
  },
  {
    stepNumber: '02',
    titleJa: '原画 (Genga)',
    titleEn: 'Key Animation',
    titleId: 'Keypose',
    descJa: 'キャラクターの芝居、アクションのアーク、タイミングを追求した高品質な第一原画（1原）の制作。',
    descEn: 'Drafting expressive primary keyframes, movement arcs, and character acting timing.',
    descId: 'Menggambar pose animasi utama, alur gerakan, dan timing akting karakter secara presisi.',
    iconName: 'Feather'
  },
  {
    stepNumber: '03',
    titleJa: '第二原画 (Nigen)',
    titleEn: '2nd Key Animation',
    titleId: 'Assisten Keypose',
    descJa: 'ラフ原画の線画整理、モデルシート準拠のクリーンアップ、トレス線（影指定・ハイライト）の明示。',
    descEn: 'Refining rough keyframes to exact model sheets and clarifying color trace lines.',
    descId: 'Merapikan garis keyframe kasar sesuai model sheet dan memperjelas batasan warna & bayangan.',
    iconName: 'Pencil'
  },
  {
    stepNumber: '04',
    titleJa: '動画 (Douga)',
    titleEn: 'Clean up & In-Between Animation',
    titleId: 'Clean up & In-Between',
    descJa: '原画間の滑らかな中割り（動画）を制作。育成プログラムの若手タレントが丁寧に仕上げる社内ライン。',
    descEn: 'Generating smooth in-between frames along timing charts under senior mentorship.',
    descId: 'Membuat frame antar-pose dengan grafik timing presisi di bawah bimbingan animator senior.',
    iconName: 'Layers'
  },
  {
    stepNumber: '05',
    titleJa: '仕上げ (Shiage)',
    titleEn: 'Coloring',
    titleId: 'Coloring',
    descJa: '指定色パレットに従い、CLIP STUDIO PAINT EX上で正確なデジタルペイント・影分け・仕上げ処理。',
    descEn: 'Applying character color palettes, shadow fills, and highlight specs in CLIP STUDIO PAINT EX.',
    descId: 'Mengaplikasikan palet warna karakter, isian bayangan, dan higlight pada software digital.',
    iconName: 'Palette'
  },
  {
    stepNumber: '06',
    titleJa: '撮影 (Satsuei)',
    titleEn: 'Compositing',
    titleId: 'Editing',
    descJa: '作画・仕上げデータの撮影処理。作画テンポとコマ打ち・特効・合成の最終仕上げ。',
    descEn: 'Assembling animation layers, visual effects, and compositing for final output.',
    descId: 'Pemeriksaan dan penggabungan layer animasi, efek visual, dan proses editing akhir.',
    iconName: 'Video'
  }
];

export const STUDIO_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    date: '2025-01-15',
    titleJa: '2025年冬アニメ『真夜中ハートチューン』『10年ごしのラストスタンド』参加発表',
    titleEn: 'Production participation announced for Winter 2025 anime series',
    titleId: 'Partisipasi produksi diumumkan untuk serial anime Winter 2025',
    categoryJa: '作品情報',
    categoryEn: 'Work Info',
    categoryId: 'Info Karya',
    link: '#portfolio'
  },
  {
    id: 'news-2',
    date: '2025-01-07',
    titleJa: '株式会社魚（スタジオ魚）設立のお知らせ',
    titleEn: 'Studio Sakana Co., Ltd. official establishment announcement',
    titleId: 'Pengumuman pendirian resmi Studio Sakana Co., Ltd.',
    categoryJa: 'プレスリリース',
    categoryEn: 'Press Release',
    categoryId: 'Rilis Pers',
    link: '#about'
  }
];

export const UI_TRANSLATIONS = {
  ja: {
    navAbout: '会社概要・理念',
    navPortfolio: '制作実績',
    navClients: 'クライアント',
    navTalent: '採用情報',
    navPartner: '公式パートナー',
    navPipeline: '制作工程',
    navContact: 'お問い合わせ',
    joinUsBtn: '採用情報・Join Our Team',
    
    heroTitlePrefix: '株式会社魚 ',
    heroTitleHighlight: 'アニメーション制作',
    heroTitleSuffix: 'スタジオ',
    heroSubtitle: 'ANIME PRODUCTION STUDIO IN TOKYO',
    heroDesc: '株式会社魚（スタジオ魚）は、東京都板橋区高島平を拠点とするアニメーション制作スタジオです。作画・動画・仕上げなどアニメーション制作全般を手掛けています。',
    explorePortfolio: '制作実績を見る',
    registerTalent: '採用応募 / Join Our Team',
    
    talentTitle: '採用情報 & 制作メンバー募集 (Join Our Team)',
    talentSubtitle: 'スタジオ魚（さかな）では、作画監督・原画・第二原画・動画・仕上げ・撮影のクリエイターおよび制作スタッフを随時募集しています。リモート・高島平スタジオ通勤いずれも対応可能です。',
    
    formFullName: '氏名 (Full Name)',
    formNativeName: 'フリガナ / 本名',
    formEmail: 'メールアドレス (Email)',
    formCountry: '居住国 (Country)',
    formCity: '都道府県 / 都市 (City)',
    formPreferredRoles: '希望職種 (Preferred Production Roles)',
    formPortfolioUrl: 'ポートフォリオURL (Portfolio Link)',
    formDemoReelUrl: 'デモリール / 映像URL (Demo Reel Link)',
    formMotivation: '志望動機・自己PR (Self PR & Animation Background)',
    formSubmitting: '送信中...',
    formSubmit: '採用に応募する (Submit Application)',
    formSuccessTitle: '応募申請を受け付けました',
    formSuccessMsg: 'ご応募ありがとうございます。入力いただいたポートフォリオおよびスキルシートを確認の上、スタジオ魚 制作担当者より折り返しご連絡いたします。',
    
    clientInquiryTitle: 'アニメ制作・グロス請け・作画発注のお問い合わせ',
    clientInquiryDesc: '株式会社魚（スタジオ魚）では、TVアニメ・劇場版・MV・ゲームPV等の作画（原画・2原・動画・仕上げ・撮影）およびパートグロス等の受託制作のご相談を承っております。',
    
    demoPlayerTitle: '公式スタジオショーリール & 映像デモ',
    demoPlayerDesc: '作画監督・原画・エフェクト・仕上げ・背景美術の高品質作画ライン映像デモ。'
  },
  en: {
    navAbout: 'About Studio',
    navPortfolio: 'Portfolio',
    navClients: 'Clients',
    navTalent: 'Recruitment',
    navPartner: 'Partnership',
    navPipeline: 'Pipeline',
    navContact: 'Contact',
    joinUsBtn: 'Join Our Team',
    
    heroTitlePrefix: 'Studio Sakana ',
    heroTitleHighlight: 'Anime Production',
    heroTitleSuffix: 'Studio in Tokyo',
    heroSubtitle: 'ANIME PRODUCTION STUDIO IN TOKYO',
    heroDesc: 'Studio Sakana Co., Ltd. is an anime production studio located in Takashimadaira, Tokyo, providing animation, artwork, and production services.',
    explorePortfolio: 'Explore Portfolio',
    registerTalent: 'Recruitment / Join Our Team',
    
    talentTitle: 'Recruitment & Careers (Join Our Team)',
    talentSubtitle: 'Studio Sakana is recruiting animators, artists, and production team members for our Tokyo studio and remote projects.',
    
    formFullName: 'Full Name',
    formNativeName: 'Native Name / Kanji Name',
    formEmail: 'Email Address',
    formCountry: 'Country of Residence',
    formCity: 'City',
    formPreferredRoles: 'Preferred Production Roles',
    formPortfolioUrl: 'Portfolio URL',
    formDemoReelUrl: 'Demo Reel / Video URL',
    formMotivation: 'Self PR & Motivation Message',
    formSubmitting: 'Submitting...',
    formSubmit: 'Submit Application',
    formSuccessTitle: 'Application Received Successfully',
    formSuccessMsg: 'Thank you for your interest in Studio Sakana. Our production desk will review your portfolio and reach out to you shortly.',
    
    clientInquiryTitle: 'Production Inquiry',
    clientInquiryDesc: 'Studio Sakana Co., Ltd. accepts production inquiries for TV anime, theatrical films, MVs, and game PVs.',
    
    demoPlayerTitle: 'Official Studio Showreel & Demo Player',
    demoPlayerDesc: 'High-quality animation showreels covering Key Animation, Visual FX, Compositing, and Background Art.'
  },
  id: {
    navAbout: 'Tentang Studio',
    navPortfolio: 'Portofolio',
    navClients: 'Klien',
    navTalent: 'Rekrutmen',
    navPartner: 'Kemitraan',
    navPipeline: 'Alur Produksi',
    navContact: 'Kontak',
    joinUsBtn: 'Join Our Team',
    
    heroTitlePrefix: 'Studio Sakana ',
    heroTitleHighlight: 'Studio Produksi Animasi',
    heroTitleSuffix: 'di Tokyo',
    heroSubtitle: 'STUDIO PRODUKSI ANIMASI DI TOKYO',
    heroDesc: 'Studio Sakana Co., Ltd. adalah studio produksi animasi yang berlokasi di Takashimadaira, Tokyo, mengerjakan animasi, gambar, dan pewarnaan.',
    explorePortfolio: 'Lihat Portofolio',
    registerTalent: 'Rekrutmen / Join Our Team',
    
    talentTitle: 'Rekrutmen & Karir (Join Our Team)',
    talentSubtitle: 'Studio Sakana membuka lowongan pendaftaran untuk Supervisor Animasi, Keypose, Assisten Keypose, Clean-up & In-between, Pewarnaan, dan Komposit Tes Garis. Tersedia posisi Remote maupun Studio Takashimadaira Tokyo.',
    
    formFullName: 'Nama Lengkap (Full Name)',
    formNativeName: 'Nama Asli / Bahasa Lokal',
    formEmail: 'Alamat Email',
    formCountry: 'Negara Domisili',
    formCity: 'Kota',
    formPreferredRoles: 'Peran Produksi yang Diminati',
    formPortfolioUrl: 'Link Portofolio (Portfolio URL)',
    formDemoReelUrl: 'Link Demo Reel / Video',
    formMotivation: 'Motivasi & Pesan Singkat',
    formSubmitting: 'Mengirimkan...',
    formSubmit: 'Kirim Lamaran (Submit)',
    formSuccessTitle: 'Lamaran Berhasil Diterima',
    formSuccessMsg: 'Terima kasih telah mendaftar ke Studio Sakana. Tim manajemen produksi kami akan meninjau portofolio Anda dan segera menghubungi Anda.',
    
    clientInquiryTitle: 'Pengajuan Kontrak Produksi & Outsourcing Animasi',
    clientInquiryDesc: 'Studio Sakana Co., Ltd. menerima konsultasi dan penawaran proyek produksi animasi (TV Anime, Film, MV, Game PV) untuk Supervisor Animasi, Keypose, Assisten Keypose, Clean-up, Pewarnaan, hingga Komposit.',
    
    demoPlayerTitle: 'Showreel Studio Resmi & Pemutar Demo',
    demoPlayerDesc: 'Showreel animasi berkualitas tinggi mencakup Keypose, Efek Visual, Pewarnaan, dan Seni Latar Belakang.'
  }
};

