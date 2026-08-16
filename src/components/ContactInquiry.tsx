import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STUDIO_INFO } from '../data/studioData';
import { Mail, CheckCircle2, MessageSquare, Phone, Clock } from 'lucide-react';
import { StudioVideoBg } from './StudioVideoBg';

export const ContactInquiry: React.FC = () => {
  const { language, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    projectType: 'TV Anime Series',
    estimatedCuts: '30-50 Cuts',
    scheduleDeadline: '2026-Q4',
    message: ''
  });

  const content = {
    ja: {
      badge: 'PRODUCTION INQUIRY & OUTSOURCING',
      title: 'アニメ制作・グロス請け・作画発注のお問い合わせ',
      desc: '株式会社魚（スタジオ魚）では、TVアニメ・劇場版・MV・ゲームPV等の作画（原画・2原・動画・仕上げ・撮影）およびパートグロス等の受託制作のご相談を承っております。',
      discordLabel: 'DISCORD 直接連絡 (SMOOTH CONTACT)',
      discordNote: 'ご連絡の際はDiscordにてご連絡いただくと最もスムーズです',
      phoneLabel: '電話問い合わせ / TEL',
      phoneVal: '090-7343-2219',
      hoursVal: '営業時間: 10:00 〜 22:00（緊急時は22時以降も対応）',
      labelCompany: '貴社名 / 製作委員会名',
      phCompany: '例：株式会社アニプレックス / ◯◯製作委員会',
      labelContact: 'ご担当者様お名前',
      phContact: '例：山田 太郎 (制作デスク)',
      labelEmail: 'ご連絡先メールアドレス',
      phEmail: 'producer@studio.co.jp',
      labelCuts: '想定カット数',
      labelDeadline: 'ご希望納品時期',
      phDeadline: '例：2026年10月末日',
      labelMessage: 'ご相談内容・作品概要',
      phMessage: '作品タイトル、必要職種（第一原画/第二原画/動画/仕上げ/撮影）をご記入ください...',
      btnSubmit: '送信する (Send Inquiry)',
      successTitle: 'お問い合わせを送信いたしました',
      successDesc: '担当プロデューサーより、営業日1日以内にご連絡を差し上げます。',
      btnNew: '新規問い合わせ'
    },
    en: {
      badge: 'PRODUCTION INQUIRY & OUTSOURCING',
      title: 'Production Inquiry & Anime Outsourcing Desk',
      desc: 'Studio Sakana Co., Ltd. accepts production inquiries for TV anime, theatrical films, MVs, and game PVs, specializing in Key Animation, 2nd Key, Clean-up, Digital Paint, and Line Test Compositing.',
      discordLabel: 'DISCORD DIRECT DESK',
      discordNote: 'Connecting via Discord provides the fastest response time for line desk.',
      phoneLabel: 'TELEPHONE INQUIRY',
      phoneVal: '+81 90-7343-2219',
      hoursVal: 'Hours: 10:00 AM - 10:00 PM JST (Late night emergency support available)',
      labelCompany: 'Company / Production Committee Name',
      phCompany: 'e.g., Aniplex Inc. / Anime Production Committee',
      labelContact: 'Contact Person Name',
      phContact: 'e.g., Taro Yamada (Line Producer)',
      labelEmail: 'Business Email Address',
      phEmail: 'producer@studio.co.jp',
      labelCuts: 'Estimated Cut Count',
      labelDeadline: 'Target Delivery Schedule',
      phDeadline: 'e.g., Late October 2026',
      labelMessage: 'Inquiry Details & Project Overview',
      phMessage: 'Please specify title, required roles (1st Key, 2nd Key, In-Between, Paint, Composite)...',
      btnSubmit: 'Submit Inquiry',
      successTitle: 'Inquiry Submitted Successfully',
      successDesc: 'Our line producer will get back to you within 1 business day.',
      btnNew: 'Submit Another Inquiry'
    },
    id: {
      badge: 'PENGAJUAN KONTRAK & OUTSOURCING',
      title: 'Pengajuan Kontrak Produksi & Outsourcing Animasi',
      desc: 'Studio Sakana Co., Ltd. menerima konsultasi dan penawaran proyek produksi animasi (TV Anime, Film, MV, Game PV) untuk Supervisor Animasi, Keypose, Assisten Keypose, Clean-up, Pewarnaan, hingga Komposit.',
      discordLabel: 'DISCORD DESK LANGSUNG',
      discordNote: 'Menghubungi via Discord memberikan respon tercepat dari tim produksi.',
      phoneLabel: 'TELEPON / TEL',
      phoneVal: '+81 90-7343-2219',
      hoursVal: 'Jam Kerja: 10:00 - 22:00 JST (Dukungan darurat larut malam tersedia)',
      labelCompany: 'Nama Perusahaan / Komite Produksi',
      phCompany: 'Contoh: Aniplex Inc. / Komite Produksi Anime',
      labelContact: 'Nama Penanggung Jawab',
      phContact: 'Contoh: Taro Yamada (Produser Lini)',
      labelEmail: 'Alamat Email Bisnis',
      phEmail: 'producer@studio.co.jp',
      labelCuts: 'Perkiraan Jumlah Cut',
      labelDeadline: 'Target Jadwal Pengiriman',
      phDeadline: 'Contoh: Akhir Oktober 2026',
      labelMessage: 'Rincian Pertanyaan & Ringkasan Proyek',
      phMessage: 'Tuliskan judul anime, peran yang dibutuhkan (Key 1, Key 2, In-Between, Paint, Composite)...',
      btnSubmit: 'Kirim Pertanyaan Bisnis',
      successTitle: 'Pertanyaan Berhasil Dikirim',
      successDesc: 'Produser lini kami akan menghubungi Anda dalam 1 hari kerja.',
      btnNew: 'Kirim Pertanyaan Baru'
    }
  };

  const curr = content[language] || content.ja;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      {/* Background Movie Loop */}
      <StudioVideoBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-left space-y-2 max-w-3xl mb-10 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase font-bold">
            <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{curr.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight font-sans">
            {t.clientInquiryTitle || curr.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
            {t.clientInquiryDesc || curr.desc}
          </p>
        </div>

        {/* Quick Contact Bar: Phone & Discord */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 font-mono text-left">
          <a
            href="https://discord.gg/cVzZxxSR6W"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-500 flex items-center justify-between group transition-colors shadow-2xs"
          >
            <div className="space-y-0.5">
              <span className="text-[10px] text-indigo-700 dark:text-indigo-300 uppercase font-bold tracking-wider block flex items-center gap-1.5">
                <MessageSquare className="w-3 h-3" />
                <span>{curr.discordLabel}</span>
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-900 dark:group-hover:text-indigo-300">discord.gg/cVzZxxSR6W</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans font-medium">{curr.discordNote}</p>
            </div>
            <span className="p-2 rounded bg-indigo-600 dark:bg-indigo-500 text-white font-bold text-xs uppercase shrink-0 ml-2 shadow-2xs">JOIN</span>
          </a>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-0.5 shadow-2xs">
            <span className="text-[10px] text-blue-600 dark:text-blue-400 uppercase font-bold tracking-wider block flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              <span>{curr.phoneLabel}</span>
            </span>
            <span className="text-sm font-bold text-slate-900 dark:text-slate-100 font-mono">{curr.phoneVal}</span>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 font-sans font-medium flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500 dark:text-slate-400" />
              <span>{curr.hoursVal}</span>
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="max-w-2xl p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left space-y-4 shadow-xs font-mono">
            <CheckCircle2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 font-sans">{curr.successTitle}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-sans font-medium">
              {curr.successDesc}
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-2 px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-xs font-bold uppercase transition-colors shadow-xs cursor-pointer"
            >
              {curr.btnNew}
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="max-w-3xl p-6 sm:p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 text-left shadow-xs font-mono"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {curr.labelCompany} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder={curr.phCompany}
                  className="w-full px-3.5 py-2.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {curr.labelContact} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  placeholder={curr.phContact}
                  className="w-full px-3.5 py-2.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-2xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {curr.labelEmail} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={curr.phEmail}
                className="w-full px-3.5 py-2.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-2xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {curr.labelCuts}
                </label>
                <select
                  value={formData.estimatedCuts}
                  onChange={(e) => setFormData({ ...formData, estimatedCuts: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-2xs"
                >
                  <option value="10-30 Cuts">10 〜 30 Cuts</option>
                  <option value="30-50 Cuts">30 〜 50 Cuts</option>
                  <option value="50-100 Cuts">50 〜 100 Cuts (Gross Contract)</option>
                  <option value="100+ Cuts">100+ Cuts (Full Episode Contract)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  {curr.labelDeadline}
                </label>
                <input
                  type="text"
                  value={formData.scheduleDeadline}
                  onChange={(e) => setFormData({ ...formData, scheduleDeadline: e.target.value })}
                  placeholder={curr.phDeadline}
                  className="w-full px-3.5 py-2.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-2xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                {curr.labelMessage}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={curr.phMessage}
                className="w-full px-3.5 py-2.5 rounded bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs font-sans focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-2xs font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
            >
              {curr.btnSubmit}
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
