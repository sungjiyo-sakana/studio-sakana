import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { STUDIO_INFO, CLIENT_STUDIOS } from '../data/studioData';
import { StudioVideoBg } from './StudioVideoBg';
import { 
  Building2, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Users, 
  Lock, 
  Award, 
  Send, 
  Sparkles, 
  ArrowRight,
  FileCheck,
  Zap,
  Globe2,
  Check
} from 'lucide-react';

export const StudioPartnership: React.FC = () => {
  const { language } = useLanguage();
  const [selectedModel, setSelectedModel] = useState<'gross' | 'keyframe' | 'hybrid'>('gross');
  const [inquiryType, setInquiryType] = useState<string>('full_line');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Dedicated Co-Production Models
  const coProductionModels = [
    {
      id: 'gross' as const,
      icon: Layers,
      titleJa: 'グロス受託・一括制作ライン',
      titleEn: 'Full Episode Co-Production Line',
      titleId: 'Lini Co-Production Episode Penuh',
      badgeJa: '一括対応',
      badgeEn: 'Full Line',
      badgeId: 'Lini Penuh',
      descJa: '演出・作監・原画・2原・動画・仕上げ・撮影・TP修正まで、1話単位のグロス制作ラインを安定提供。',
      descEn: 'Turnkey episode production line encompassing Episode Direction, Animation Direction, Key Animation, 2nd Key, In-Between, Paint, Composite & TP Correction.',
      descId: 'Pipeline episode lengkap mencakup Pengarah Episode, Supervisor Animasi, Keypose, Assisten Keypose, In-Between, Pewarnaan, Komposit & Koreksi TP.',
      featuresJa: [
        '制作デスク・演出・作画監督の常駐体制',
        '月間最大 150+ カットの安定消化能力',
        '日本国内フォーマットに完全準拠したタイムシート＆作画指示',
        'keyframe-staff-list.com (#778) 公式クレジット記載'
      ],
      featuresEn: [
        'Dedicated Production Desk & Animation Directors on-site',
        'Stable delivery capacity of 150+ cuts per month',
        'Strict adherence to Japanese animation timesheets & cut sheets',
        'Official credit registration on keyframe-staff-list.com (#778)'
      ],
      featuresId: [
        'Tim Desk Produksi & Supervisor Animasi khusus di lokasi',
        'Kapasitas produksi stabil hingga 150+ cut per bulan',
        'Sesuai standar timesheet & instruksi cut animasi Jepang',
        'Pencatatan kredit resmi di keyframe-staff-list.com (#778)'
      ]
    },
    {
      id: 'keyframe' as const,
      icon: Zap,
      titleJa: '作監・原画・アクションカット特化ライン',
      titleEn: 'Specialized Key Animation & Action Line',
      titleId: 'Lini Khusus Keypose & Cut Aksi High-End',
      badgeJa: '作画特化',
      badgeEn: 'Keyframe Direct',
      badgeId: 'Khusus Keypose',
      descJa: 'アクション・日常作画・版権ビジュアル等、難易度の高い作画カットに特化した作監・原画チームの派遣・受注。',
      descEn: 'High-precision Key Animation line specialized in intense action sequences, subtle character acting, and copyright artwork.',
      descId: 'Lini Keypose presisi tinggi yang dispesialisasi untuk sekuens aksi intens, ekspresi karakter halus, dan visual promosi.',
      featuresJa: [
        '作画監督（総作監・作監）チェックによる品質保証',
        'LO・1原・2原の一貫サポート',
        'デジタル原画 (CLIP STUDIO PAINT EX) 完全対応',
        '緊急カット・締め切り直前ラインの迅速なカバー'
      ],
      featuresEn: [
        'Double-layer QA by Chief Animation Directors',
        'Seamless Layout, 1st Key, and 2nd Key workflow',
        'Fully digital native (CLIP STUDIO PAINT EX)',
        'Rapid response capacity for urgent deadlines'
      ],
      featuresId: [
        'Jaminan kualitas berlapis oleh Supervisor Animasi Utama',
        'Workflow terintegrasi untuk Layout, Keypose 1, dan Keypose 2',
        'Sepenuhnya digital (CLIP STUDIO PAINT EX)',
        'Dukungan cepat untuk tenggat waktu mendesak'
      ]
    },
    {
      id: 'hybrid' as const,
      icon: Globe2,
      titleJa: '日印ハイブリッド作画開発ライン',
      titleEn: 'Tokyo-Indonesia Hybrid Studio Pipeline',
      titleId: 'Pipeline Studio Hybrid Tokyo-Indonesia',
      badgeJa: '国境越え連携',
      badgeEn: 'Global Pipeline',
      badgeId: 'Pipeline Global',
      descJa: '東京本社の作画監督・演出指揮のもと、インドネシアの優秀なキーフレームアニメーター陣が高速かつ高品質に作画を担当。',
      descEn: 'Hybrid workflow combining Tokyo animation supervision and creative direction with Indonesia\'s top keyframe talent pool.',
      descId: 'Workflow hibrida menggabungkan supervisi & arah kreatif Tokyo dengan talenta keypose terbaik dari Indonesia.',
      featuresJa: [
        '日英日三 shared Discord リアルタイム進行管理',
        '日本語作画指示＆翻訳アシスタント常駐',
        '日本品質を維持しながらのコスト効率とスケーラビリティ',
        '時差を活用した 24 時間体制のライン進行'
      ],
      featuresEn: [
        'Real-time production tracking via shared Discord server',
        'Dedicated Japanese translation & localization staff',
        'High scalability with strict Japanese quality control',
        'Time-zone advantage enabling continuous production workflow'
      ],
      featuresId: [
        'Manajemen produksi real-time via server Discord bersama',
        'Staf penerjemah & lokalisasi bahasa Jepang berpengalaman',
        'Skalabilitas tinggi dengan kontrol kualitas Jepang yang ketat',
        'Keunggulan zona waktu mendukung aliran kerja berkesinambungan'
      ]
    }
  ];

  // Key Security Protocols
  const securityProtocols = [
    {
      icon: Lock,
      titleJa: '厳格な 機密保持契約 (NDA)',
      titleEn: 'Strict NDA & IP Confidentiality',
      titleId: 'Perjanjian Kerahasiaan Strict (NDA)',
      descJa: '未公開アニメ作品のカット・設定資料・タイムシートは暗号化サーバーにて厳重管理。',
      descEn: 'All unreleased anime cut assets, character sheets, and timesheets stored on encrypted secure servers.',
      descId: 'Seluruh materi cut, lembar karakter, dan timesheet terenkripsi pada server aman.'
    },
    {
      icon: ShieldCheck,
      titleJa: '2重クオリティチェック体制',
      titleEn: 'Dual-Stage Quality Control',
      titleId: 'Kontrol Kualitas 2-Tahap',
      descJa: '現地リード作監チェック ＋ 東京本社総作監修正による二重検査で納品クオリティを保証。',
      descEn: 'Local Lead Review + Tokyo Chief Animation Director Check ensuring 100% broadcast-ready cuts.',
      descId: 'Inspeksi Lead Lokal + Pemeriksaan Supervisor Utama Tokyo menjamin kualitas standar siaran.'
    },
    {
      icon: FileCheck,
      titleJa: '公式スタッフリスト登録 (#778)',
      titleEn: 'Verified Credit Registry (#778)',
      titleId: 'Registrasi Kredit Terverifikasi (#778)',
      descJa: 'keyframe-staff-list.com にて制作実績およびスタッフクレジットを公式公開・透明性を担保。',
      descEn: 'Transparent staff credit recording officially listed on keyframe-staff-list.com.',
      descId: 'Pencatatan kredit staf transparan yang terdaftar resmi pada keyframe-staff-list.com.'
    }
  ];

  // Official Partners Detailed
  const officialPartners = [
    {
      nameJa: '株式会社Studio Gekkou',
      nameEn: 'Studio Gekkou Co., Ltd.',
      kanjiName: 'Studio Gekkou (月光)',
      roleJa: '公式共同制作パートナー (Co-Production Partner)',
      roleEn: 'Official Co-Production Partner',
      roleId: 'Mitra Co-Production Resmi',
      notable: 'Mayonaka Heart Tune, 10-Year Last Stand',
      logoUrl: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20GEKKOU.png',
      descJa: '作画監督・原画・動画仕上げラインにおける包括的共同制作を提携展開。',
      descEn: 'Comprehensive co-production agreement covering Animation Direction, Key Animation, and Finishing lines.',
      descId: 'Kemitraan co-production komprehensif untuk Supervisor Animasi, Keypose, dan Lini Pewarnaan.'
    },
    {
      nameJa: '株式会社スタジオKAI',
      nameEn: 'Studio KAI Inc.',
      kanjiName: 'Studio KAI (スタジオKAI)',
      roleJa: 'アニメーション制作パートナー (Animation Partner)',
      roleEn: 'Animation Production Partner',
      roleId: 'Mitra Produksi Animasi',
      notable: 'Yumeiro Wonder MV, Yuusha Kei ni Shosu',
      logoUrl: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20STUDIO%20KAI.png',
      descJa: '劇場版・TVアニメ・MVにおける高品質作画カット・仕上げラインの共同制作。',
      descEn: 'Collaborative production for high-end theatrical, TV series, and MV keyframe cuts.',
      descId: 'Kolaborasi produksi untuk anime TV, bioskop, dan MV dengan standar estetika tinggi.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 pt-20 pb-16 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Video Header */}
      <StudioVideoBg />

      {/* Hero Header for Partnership Page */}
      <section className="relative z-10 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md border border-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 text-left">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold"
            >
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              <span>OFFICIAL STUDIO PARTNERSHIPS & NETWORK</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans leading-tight"
            >
              {language === 'ja'
                ? '提携アニメーションスタジオ & 共同制作体制'
                : language === 'en'
                ? 'Official Anime Studio Partnerships & Co-Production Lines'
                : 'Kemitraan Studio Animasi Resmi & Lini Co-Production'}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-medium max-w-4xl"
            >
              {language === 'ja'
                ? '株式会社魚（スタジオ魚）は、Studio Gekkou および スタジオKAI の公式制作パートナーとして、安定した作画監督・原画・動画・仕上げラインを提供。東京とインドネシアを結ぶ高品質な制作ネットワークを構築しています。'
                : language === 'en'
                ? 'Studio Sakana Co., Ltd. serves as an official production partner for Studio Gekkou and Studio KAI, delivering dependable Animation Direction, Key Animation, In-between, and Paint lines backed by a robust Tokyo-Indonesia animation network.'
                : 'Studio Sakana Co., Ltd. beroperasi sebagai mitra produksi resmi untuk Studio Gekkou dan Studio KAI, menyediakan lini Supervisor Animasi, Keypose, In-Between, dan Pewarnaan tepercaya dengan jaringan kerja Tokyo-Indonesia.'}
            </motion.p>

            {/* Quick Metrics Ticker */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono"
            >
              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 shadow-xs">
                <span className="text-xl font-bold text-blue-400 block">2 Studios</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-0.5">Official Partners</span>
              </div>
              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 shadow-xs">
                <span className="text-xl font-bold text-amber-400 block">#778</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-0.5">Verified Registry</span>
              </div>
              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 shadow-xs">
                <span className="text-xl font-bold text-emerald-400 block">100+ Cuts/d</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-0.5">Keyframe Capacity</span>
              </div>
              <div className="p-3.5 bg-slate-800/80 rounded-xl border border-slate-700/80 shadow-xs">
                <span className="text-xl font-bold text-purple-400 block">Dual QA</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-0.5">Japanese Supervision</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-8 relative z-10">

        {/* SECTION 1: OFFICIAL PARTNER STUDIOS (Studio Gekkou & Studio KAI) */}
        <section className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">OFFICIAL ALLIANCE</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1 font-sans">
                {language === 'ja' ? '公式共同制作パートナー' : language === 'en' ? 'Official Co-Production Partners' : 'Mitra Co-Production Utama'}
              </h2>
            </div>
            <a
              href={STUDIO_INFO.keyframeStaffListUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#0B2240] hover:bg-[#071528] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-xs shrink-0 self-start sm:self-auto"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Keyframe Staff List (#778)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {officialPartners.map((partner, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-5 shadow-sm hover:border-[#0B2240] dark:hover:border-blue-500 transition-all relative overflow-hidden"
              >
                {/* Header with Logo */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#0B2240] text-white text-[10px] font-mono font-bold uppercase tracking-wider">
                      {partner.roleId}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 font-sans mt-1">
                      {language === 'ja' ? partner.nameJa : language === 'en' ? partner.nameEn : partner.nameJa}
                    </h3>
                  </div>

                  {/* Logo Container */}
                  {partner.logoUrl ? (
                    <div className="h-10 px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-2xs">
                      <img 
                        src={partner.logoUrl} 
                        alt={partner.nameEn} 
                        className="max-h-full max-w-[130px] object-contain pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : null}
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-sans font-medium leading-relaxed">
                  {language === 'ja' ? partner.descJa : language === 'en' ? partner.descEn : partner.descId}
                </p>

                {/* Notable Works */}
                <div className="bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700/80 p-3.5 space-y-1 font-mono text-xs">
                  <span className="text-[10px] text-slate-400 dark:text-slate-400 uppercase tracking-widest block font-bold">Notable Joint Projects:</span>
                  <p className="text-slate-900 dark:text-slate-100 font-bold font-sans">{partner.notable}</p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0B2240] dark:text-blue-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Verified Credit Registry Registered (#778)</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Client Studios Grid */}
          <div className="pt-6 space-y-3">
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">
              ADDITIONAL ANIME PRODUCTION CLIENTS & NETWORKS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 font-mono">
              {CLIENT_STUDIOS.map((studio) => (
                <div key={studio.id} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-2 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs">
                  <div className="h-8 flex items-center justify-center">
                    {studio.logoUrl ? (
                      <img src={studio.logoUrl} alt={studio.nameEn} className="max-h-full max-w-[100px] object-contain" referrerPolicy="no-referrer" />
                    ) : (
                      <span className="font-bold text-xs text-slate-800 dark:text-slate-200">{studio.kanjiLogo}</span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold tracking-tight block truncate w-full">
                    {studio.notableWorks}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: CO-PRODUCTION SERVICE MODELS (CARDS) */}
        <section className="space-y-6 text-left">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">PIPELINE OPTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 mt-1 font-sans">
              {language === 'ja' ? '共同制作・ライン受託モデル' : language === 'en' ? 'Co-Production & Line Service Models' : 'Model Layanan & Lini Co-Production'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-sans font-medium mt-1">
              {language === 'ja' 
                ? '作品の規模やスケジュールに合わせて、柔軟な制作ラインをご提案いたします。' 
                : language === 'en' 
                ? 'We provide tailored animation pipeline configurations matching your project timeline and budget.' 
                : 'Kami menyediakan konfigurasi pipeline produksi animasi yang disesuaikan dengan tenggat waktu & skala proyek Anda.'}
            </p>
          </div>

          {/* Model Selection Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            {coProductionModels.map((model) => {
              const Icon = model.icon;
              const isSelected = selectedModel === model.id;

              return (
                <motion.div
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  whileHover={{ y: -4 }}
                  className={`cursor-pointer rounded-2xl border p-6 space-y-4 transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-[#0B2240] dark:border-blue-500 shadow-md ring-2 ring-[#0B2240]/10 dark:ring-blue-500/20'
                      : 'bg-slate-50/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-[#0B2240] text-white' : 'bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        {language === 'ja' ? model.badgeJa : language === 'en' ? model.badgeEn : model.badgeId}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 font-sans">
                        {language === 'ja' ? model.titleJa : language === 'en' ? model.titleEn : model.titleId}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed font-medium">
                        {language === 'ja' ? model.descJa : language === 'en' ? model.descEn : model.descId}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="pt-2 space-y-2 font-mono text-xs border-t border-slate-200 dark:border-slate-800">
                      {(language === 'ja' ? model.featuresJa : language === 'en' ? model.featuresEn : model.featuresId).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#0B2240] dark:text-blue-400 shrink-0 mt-0.5" />
                          <span className="text-[11px] text-slate-700 dark:text-slate-300 font-sans font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedModel(model.id);
                        const element = document.getElementById('producer-inquiry');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full py-2 px-3 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-[#0B2240] hover:bg-[#071528] text-white'
                          : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>{language === 'ja' ? 'このモデルで問い合わせ' : language === 'en' ? 'Select This Pipeline' : 'Pilih Pipeline Ini'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: SECURITY, QUALITY & NDA PROTOCOLS */}
        <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden text-left shadow-xl border border-slate-800">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">SECURITY & COMPLIANCE</span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans tracking-tight">
              {language === 'ja' ? '品質保証・機密保持セキュリティ' : language === 'en' ? 'Quality Assurance & Security Compliance' : 'Jaminan Kualitas & Kerahasiaan Sempurna'}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
              {language === 'ja' 
                ? '未公開アニメIPの保護と、TV放映・劇場公開に耐えうる厳格な作画検査体制を約束します。' 
                : language === 'en' 
                ? 'Complete protection of unreleased anime intellectual properties backed by broadcast-grade double inspection.' 
                : 'Perlindungan menyeluruh untuk IP anime yang belum dirilis dengan inspeksi ganda standar siaran TV & bioskop.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            {securityProtocols.map((protocol, pIdx) => {
              const Icon = protocol.icon;
              return (
                <div key={pIdx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {language === 'ja' ? protocol.titleJa : language === 'en' ? protocol.titleEn : protocol.titleId}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {language === 'ja' ? protocol.descJa : language === 'en' ? protocol.descEn : protocol.descId}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: PRODUCER & STUDIO INQUIRY FORM */}
        <section id="producer-inquiry" className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 space-y-6 text-left shadow-xs">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#0B2240] dark:text-blue-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#0B2240] dark:text-blue-400" />
              <span>DIRECT PRODUCER INQUIRY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 font-sans">
              {language === 'ja' ? '制作デスク・プロデューサー様ご相談窓口' : language === 'en' ? 'Producer & Production Desk Inquiry' : 'Formulir Konsultasi Producer & Desk Produksi'}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-sans font-medium">
              {language === 'ja' 
                ? 'アニメ制作ラインの確保、作画監督・原画カットのご相談は下記よりお気軽にご連絡ください。' 
                : language === 'en' 
                ? 'Request production line capacity or consult with our Tokyo animation desk directly below.' 
                : 'Konsultasikan ketersediaan lini produksi atau pemesanan cut dengan tim desk Tokyo kami di bawah ini.'}
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  {language === 'ja' ? '貴社名・スタジオ名' : language === 'en' ? 'Company / Studio Name' : 'Nama Perusahaan / Studio'} *
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Studio Gekkou Production Desk"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#0B2240] dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  {language === 'ja' ? 'ご担当者様名 / 役職' : language === 'en' ? 'Your Name & Title' : 'Nama Anda & Jabatan'} *
                </label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Taro Tanaka (Producer / 制作進行)"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#0B2240] dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  {language === 'ja' ? 'メールアドレス' : language === 'en' ? 'Official Business Email' : 'Email Bisnis Resmi'} *
                </label>
                <input 
                  type="email" 
                  required 
                  placeholder="producer@studio-example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#0B2240] dark:focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                  {language === 'ja' ? 'ご希望の受託形態' : language === 'en' ? 'Required Pipeline Scope' : 'Scope Pipeline Yang Dibutuhkan'}
                </label>
                <select 
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-[#0B2240] dark:focus:border-blue-500"
                >
                  <option value="full_line">1話グロス請負 (Full Episode Co-Production)</option>
                  <option value="keyframe">作監・原画ライン特化 (Key Animation & Supervision)</option>
                  <option value="cleanup">動画・仕上げライン (In-between & Digital Paint)</option>
                  <option value="other">その他・作画相談 (Other / Custom Inquiry)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">
                {language === 'ja' ? 'ご相談内容・スケジュール・カット数' : language === 'en' ? 'Project Details, Timeline & Cut Count' : 'Rincian Proyek, Jadwal & Jumlah Cut'} *
              </label>
              <textarea 
                rows={4}
                required
                placeholder="Describe your anime project, required cut count, target delivery dates, and specific requirements..."
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#0B2240] dark:focus:border-blue-500 font-sans text-xs"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B2240] hover:bg-[#071528] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'ja' ? '提携問い合わせを送信' : language === 'en' ? 'Submit Studio Inquiry' : 'Kirim Konsultasi Studio'}</span>
              </button>

              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-sans hidden sm:inline">
                Direct phone support: {STUDIO_INFO.phone} (10:00 - 22:00 JST)
              </span>
            </div>

            {formSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 font-sans text-xs flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>
                  {language === 'ja'
                    ? 'お問い合わせありがとうございます。担当者より24時間以内にご連絡いたします。'
                    : language === 'en'
                    ? 'Thank you for your studio inquiry. Our production desk will contact you within 24 hours.'
                    : 'Terima kasih atas konsultasi studio Anda. Tim desk produksi kami akan menghubungi Anda dalam 24 jam.'}
                </span>
              </motion.div>
            )}
          </form>
        </section>

      </div>
    </div>
  );
};
