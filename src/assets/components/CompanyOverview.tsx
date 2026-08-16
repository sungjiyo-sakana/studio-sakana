import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { STUDIO_INFO } from '../data/studioData';
import { Building2, Clock, Phone, MessageSquare, Zap, ShieldCheck, Award } from 'lucide-react';
import { SakanaLogo } from './SakanaLogo';
import { StudioVideoBg } from './StudioVideoBg';

export const CompanyOverview: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    ja: {
      sectionBadge: 'COMPANY PROFILE & PHILOSOPHY (会社概要・理念)',
      title: 'ABOUT STUDIO SAKANA (株式会社魚)',
      subtitle: '「皆が楽しいと思える未来を作っていく」作画・撮影・2原・動仕 アニメーション専門スタジオ',
      founderRole: 'FOUNDER & CEO / 代表取締役',
      philosophyBadge: 'PHILOSOPHY / 理念',
      quote: '「皆が楽しいと思える未来を作っていく。合理的な思考の末の決定より、心の奥底にある情動を大事にする。」',
      q1: '「なぜそれをしなければいけないのか？」「誰のためにやるのか？」「自分が決めた事をやり続けられる確証はあるのか？」',
      q2: 'そんな事を考え続け振り返った時、私の選択した道にいつもあった判断基準は「自分が楽しいと思えるかどうか」でした。',
      q3: '【楽しいと思える事を形にして、多くの人にとって価値あるものに昇華していく事】これこそがこのスタジオの根本的な存続意義です。',
      q4: '水を得た魚のように生き生きと日々を楽しみながら過ごしていく事 — スタジオ魚（さかな）の名前の由来はそこから来ています。何ができる？ではなく、どうやってできるようにするか。自ら信じた事を大切にし、形にしていく事を理念に置いています。',
      outlineTitle: 'OUTLINE / 会社概要',
      labelName: '会社名 (Company Name)',
      valName: '株式会社魚 (Sakana Co., Ltd.)',
      labelFounded: '設立 (Established)',
      valFounded: '2025年1月7日',
      labelRep: '代表取締役 (Representative)',
      valRep: '菅原 聖 (Hijiri Sugahara)',
      labelLocation: '所在地 (Headquarters)',
      valLocation: '東京都板橋区高島平5-18-7',
      labelPhone: '電話番号 (TEL)',
      valPhone: '090-7343-2219',
      labelHours: '営業時間 (Hours)',
      valHours: '10:00 〜 22:00（※緊急時は22時以降も対応可能）',
      labelScope: '事業内容 (Business Scope)',
      scopeAnimeTitle: 'アニメーション企画・制作',
      scopeAnimeDesc: '作画監督 (Sakkan)、原画 (Genga)、第二原画 (Nigen)、動画 (Douga)、仕上げ (Shiage)、TP修正 (TP Shū)、撮影 (Satsuei)、撮影協力 (Satsuei Kyōryoku)。',
      discordBtn: 'Discord 公式デスクに連絡 (SMOOTH CONTACT)',
      capacityBadge: 'CAPACITY & DAILY OUTPUT (制作対応可能数)',
      capacityTitle: '日別対応可能キャパシティ一覧',
      welcomeGross: '話数グロス発注 歓迎企業',
      nightSupportTitle: '短期間・深夜対応可能：',
      nightSupportDesc: 'インドネシアおよび日本国内制作ラインとの連携により、迅速な撮影・2原・動仕を供給いたします。',
      inquireBtn: '発注・見積依頼 (INQUIRE)'
    },
    en: {
      sectionBadge: 'COMPANY PROFILE & PHILOSOPHY',
      title: 'ABOUT STUDIO SAKANA (Sakana Co., Ltd.)',
      subtitle: 'Creating a future filled with joy through Key Animation, Compositing, 2nd Key, and In-Between Production.',
      founderRole: 'FOUNDER & CEO',
      philosophyBadge: 'PHILOSOPHY',
      quote: '"Creating a future where everyone finds joy. Valuing inner emotional passion over dry rational calculation."',
      q1: '"Why must we do this?", "For whom are we doing it?", "Do we have proof we can keep going?"',
      q2: 'Whenever I reflected on those deep questions, my decision compass was always whether I found true joy in it.',
      q3: '[Transforming enjoyable passion into tangible works that hold immense value for many people] — This is the core purpose of Studio Sakana.',
      q4: 'Living vibrantly like a fish in water — that is where the name "Studio Sakana" comes from. Not "What can we do?", but "How can we make it happen?". We treasure believing in our vision and executing it.',
      outlineTitle: 'OUTLINE & DETAILS',
      labelName: 'Company Name',
      valName: 'Sakana Co., Ltd. (株式会社魚)',
      labelFounded: 'Established',
      valFounded: 'January 7, 2025',
      labelRep: 'Representative Director',
      valRep: 'Hijiri Sugahara (菅原 聖)',
      labelLocation: 'Headquarters',
      valLocation: '5-18-7 Takashimadaira, Itabashi-ku, Tokyo, Japan',
      labelPhone: 'Telephone',
      valPhone: '090-7343-2219',
      labelHours: 'Business Hours',
      valHours: '10:00 AM - 10:00 PM JST (Late night emergency support available)',
      labelScope: 'Business Scope',
      scopeAnimeTitle: 'Anime Production & Specialty Lines',
      scopeAnimeDesc: 'Animation Director (Sakkan), Key Animation (Genga), 2nd Key (Nigen), Clean up & In-Between (Douga), Coloring (Shiage), Trace/Paint Supervision (TP Shū), Compositing (Satsuei), and Compositing Cooperation (Satsuei Kyōryoku).',
      discordBtn: 'Contact via Discord Production Desk',
      capacityBadge: 'CAPACITY & DAILY OUTPUT',
      capacityTitle: 'Daily Production Output Limits',
      welcomeGross: 'Open for Episode Gross Contracts',
      nightSupportTitle: 'Fast Turnaround & Late Shifts:',
      nightSupportDesc: 'Seamless synchronization between Tokyo desk and Indonesia lines ensures steady line tests, 2nd keyframes, and paint.',
      inquireBtn: 'Inquire / Request Cut Estimate'
    },
    id: {
      sectionBadge: 'PROFIL PERUSAHAAN & FILOSOFI',
      title: 'TENTANG STUDIO SAKANA (Sakana Co., Ltd.)',
      subtitle: 'Menciptakan masa depan penuh kegembiraan melalui produksi Key Animation, Line Test, 2nd Key, dan In-Between.',
      founderRole: 'PENDIRI & CEO / 代表取締役',
      philosophyBadge: 'FILOSOFI',
      quote: '"Menciptakan masa depan di mana semua orang merasa gembira. Mengutamakan dorongan emosi dibanding kalkulasi rasional semata."',
      q1: '"Mengapa kita harus melakukannya?", "Untuk siapa?", "Apakah ada kepastian kita bisa terus melakukannya?"',
      q2: 'Ketika saya terus merenungi pertanyaan itu, tolok ukur utama dalam setiap pilihan saya adalah "Apakah saya merasa bahagia menjalankannya?"',
      q3: '[Mewujudkan hal yang menyenangkan menjadi karya nyata yang bernilai tinggi bagi banyak orang] — Inilah alasan keberadaan mendasar dari Studio Sakana.',
      q4: 'Hidup bergairah seperti ikan di dalam air — dari sinilah nama Studio Sakana (魚) berasal. Bukan "Apa yang bisa kita lakukan?", tetapi "Bagaimana cara agar kita bisa melakukannya?". Kami menjunjung tinggi keyakinan dan mewujudkannya.',
      outlineTitle: 'OUTLINE PERUSAHAAN',
      labelName: 'Nama Perusahaan',
      valName: 'Sakana Co., Ltd. (株式会社魚)',
      labelFounded: 'Tanggal Pendirian',
      valFounded: '7 Januari 2025',
      labelRep: 'Direktur Utama',
      valRep: 'Hijiri Sugahara (菅原 聖)',
      labelLocation: 'Alamat Kantor Pusat',
      valLocation: '5-18-7 Takashimadaira, Itabashi-ku, Tokyo, Jepang',
      labelPhone: 'Nomor Telepon',
      valPhone: '090-7343-2219',
      labelHours: 'Jam Operasional',
      valHours: '10:00 - 22:00 JST (Dukungan darurat larut malam tersedia)',
      labelScope: 'Bidang Usaha',
      scopeAnimeTitle: 'Perencanaan & Produksi Animasi',
      scopeAnimeDesc: 'Animation Director / Sakkan / Supervisor, Key Animation / Genga / Keypose, 2nd Key Animation / Nigen / Asisten Keypose, Clean up & In-Between Animation / Douga, Coloring / Shiage, Trace/Paint Supervision / TP Shū / Revisi Feedback, Compositing / Satsuei / Editing, Compositing Cooperation / Satsuei Kyōryoku / Kerja Sama Editing.',
      discordBtn: 'Hubungi Desk Discord Resmi',
      capacityBadge: 'KAPASITAS PRODUKSI HARIAN',
      capacityTitle: 'Rincian Kapasitas Output Harian',
      welcomeGross: 'Menerima Kontrak Gross Episode',
      nightSupportTitle: 'Pengerjaan Cepat & Shift Malam:',
      nightSupportDesc: 'Sinkronisasi lancar antara studio Tokyo dan tim Indonesia untuk line test, 2nd keyframe, dan pewarnaan.',
      inquireBtn: 'Minta Penawaran Cut'
    }
  };

  const curr = content[language] || content.ja;

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      {/* Background Video Header */}
      <StudioVideoBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-2 max-w-3xl mb-12 border-b border-slate-200 dark:border-slate-800 pb-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase font-bold">
            <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{curr.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight font-sans">
            {curr.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
            {curr.subtitle}
          </p>
        </motion.div>

        {/* Top Grid: Founder Message & Philosophy + Company Outline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Founder Message Card (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 text-left shadow-xs relative overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-blue-600 dark:bg-blue-500 border border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden shrink-0 shadow-2xs">
                  <SakanaLogo variant="icon" className="w-8 h-8" inverted />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest block font-semibold">{curr.founderRole}</span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 font-sans">
                    {STUDIO_INFO.founderJa} <span className="text-xs text-slate-500 dark:text-slate-400 font-mono font-normal">({STUDIO_INFO.founderEn})</span>
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-blue-600 dark:bg-blue-500 text-white text-[10px] font-mono font-bold tracking-wider">
                {curr.philosophyBadge}
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              <blockquote className="p-4 rounded bg-white dark:bg-slate-800 border-l-4 border-blue-600 dark:border-blue-400 text-slate-900 dark:text-slate-100 italic font-mono text-xs sm:text-sm shadow-2xs">
                {curr.quote}
              </blockquote>
              <p>{curr.q1}</p>
              <p>{curr.q2}</p>
              <p className="text-slate-900 dark:text-slate-100 font-bold">{curr.q3}</p>
              <p className="text-slate-600 dark:text-slate-400 text-xs">{curr.q4}</p>
            </div>
          </motion.div>

          {/* Official Company Outline (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-5 text-left font-mono shadow-xs"
          >
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                {curr.outlineTitle}
              </h3>
            </div>

            <dl className="space-y-3 text-xs">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <dt className="text-slate-500 dark:text-slate-400 font-medium">{curr.labelName}</dt>
                <dd className="text-slate-900 dark:text-slate-100 font-bold">{curr.valName}</dd>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <dt className="text-slate-500 dark:text-slate-400 font-medium">{curr.labelFounded}</dt>
                <dd className="text-slate-900 dark:text-slate-100 font-semibold">{curr.valFounded}</dd>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <dt className="text-slate-500 dark:text-slate-400 font-medium">{curr.labelRep}</dt>
                <dd className="text-slate-900 dark:text-slate-100 font-semibold">{curr.valRep}</dd>
              </div>

              <div className="flex flex-col border-b border-slate-200 dark:border-slate-800 pb-2 space-y-1">
                <dt className="text-slate-500 dark:text-slate-400 font-medium">{curr.labelLocation}</dt>
                <dd className="text-slate-900 dark:text-slate-100 font-sans font-medium">{curr.valLocation}</dd>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                <dt className="text-slate-500 dark:text-slate-400 font-medium">{curr.labelPhone}</dt>
                <dd className="text-slate-900 dark:text-slate-100 font-bold flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <span>{curr.valPhone}</span>
                </dd>
              </div>

              <div className="flex flex-col border-b border-slate-200 dark:border-slate-800 pb-2 space-y-1">
                <dt className="text-slate-500 dark:text-slate-400 font-medium">{curr.labelHours}</dt>
                <dd className="text-slate-800 dark:text-slate-200 text-[11px] font-sans flex items-start gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                  <span>{curr.valHours}</span>
                </dd>
              </div>

              <div className="space-y-1.5 pt-1">
                <dt className="text-slate-500 dark:text-slate-400 font-medium">{curr.labelScope}</dt>
                <dd className="space-y-2 text-[11px] font-sans text-slate-700 dark:text-slate-300">
                  <div className="p-3 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs">
                    <strong className="text-blue-600 dark:text-blue-400 block font-mono text-xs">{curr.scopeAnimeTitle}</strong>
                    {curr.scopeAnimeDesc}
                  </div>
                </dd>
              </div>
            </dl>

            {/* Discord Direct Access */}
            <a
              href={STUDIO_INFO.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full py-2.5 px-4 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors uppercase tracking-wider shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{curr.discordBtn}</span>
            </a>
          </motion.div>

        </div>

        {/* Capacity Matrix Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left font-mono space-y-6 shadow-xs"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-extrabold uppercase tracking-wider">
                <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{curr.capacityBadge}</span>
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 font-sans mt-0.5">
                {curr.capacityTitle}
              </h3>
            </div>
            <span className="px-3 py-1 rounded bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs font-extrabold">
              {curr.welcomeGross}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {STUDIO_INFO.capacityList.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-3.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-1.5 hover:border-blue-600 dark:hover:border-blue-400 transition-colors shadow-2xs"
              >
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                  {language === 'en' ? item.titleEn : item.titleJa}
                </span>
                <span className="text-base font-extrabold text-blue-600 dark:text-blue-400 font-mono">{item.value}</span>
              </motion.div>
            ))}
          </div>

          <div className="p-4 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-slate-700 dark:text-slate-300 shadow-2xs">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>
                <strong className="text-slate-900 dark:text-slate-100">{curr.nightSupportTitle}</strong> {curr.nightSupportDesc}
              </span>
            </div>
            <a
              href="#contact"
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold text-xs font-mono uppercase tracking-wider shrink-0 transition-colors shadow-xs"
            >
              {curr.inquireBtn}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
