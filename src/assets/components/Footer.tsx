import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { STUDIO_INFO } from '../data/studioData';
import { SubView } from '../types';
import { ExternalLink, MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import { SakanaLogo } from './SakanaLogo';
import { StudioVideoBg } from './StudioVideoBg';

interface FooterProps {
  onSelectView?: (view: SubView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView }) => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const footerText = {
    ja: {
      tagline: STUDIO_INFO.taglineJa,
      location: STUDIO_INFO.locationJa,
      hours: STUDIO_INFO.businessHoursJa,
      discordBtn: 'DISCORD 公式デスク',
      partnerTitle: 'Keyframe Staff List 掲載実績 (Studio #778)',
      partnerDesc: '作画協力・原画・仕上げ・撮影のパートナー企業実績。'
    },
    en: {
      tagline: 'Specialized Anime Production Studio in Tokyo — Delivering Precision Key Animation, In-Between, Digital Paint, and Compositing.',
      location: STUDIO_INFO.locationEn,
      hours: STUDIO_INFO.businessHoursEn,
      discordBtn: 'DISCORD OFFICIAL DESK',
      partnerTitle: 'Keyframe Staff List Verified (#778)',
      partnerDesc: 'Registered Keyframe Production Vendor on Keyframe Staff List.'
    },
    id: {
      tagline: 'Studio Spesialis Produksi Animasi di Tokyo — Menyediakan Key Animation, In-Between, Pewarnaan, dan Komposit.',
      location: STUDIO_INFO.locationId,
      hours: STUDIO_INFO.businessHoursId,
      discordBtn: 'DESK DISCORD RESMI',
      partnerTitle: 'Terverifikasi Keyframe Staff List (#778)',
      partnerDesc: 'Mitra vendor animasi resmi terdaftar di database Keyframe Staff List.'
    }
  };

  const curr = footerText[language] || footerText.ja;

  const handleNav = (v: SubView) => {
    if (onSelectView) {
      onSelectView(v);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 py-12 text-left font-mono relative overflow-hidden transition-colors duration-300">
      {/* Background Video Loop at Footer */}
      <StudioVideoBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Studio Profile */}
          <div className="md:col-span-5 space-y-4">
            <SakanaLogo variant="credit" inverted={theme === 'dark'} />

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm font-sans font-medium">
              {curr.tagline}
            </p>

            <div className="text-xs space-y-1.5 text-slate-700 dark:text-slate-300 font-mono pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{curr.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>TEL: {STUDIO_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 shrink-0" />
                <span>{curr.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-mono">
              <li>
                <button type="button" onClick={() => handleNav('home')} className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer">
                  {language === 'ja' ? 'トップ' : language === 'en' ? 'HOME' : 'UTAMA'}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('works')} className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer">
                  {language === 'ja' ? '制作実績' : language === 'en' ? 'WORKS' : 'KARYA'}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('company')} className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer">
                  {language === 'ja' ? '会社概要' : language === 'en' ? 'ABOUT US' : 'TENTANG KAMI'}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('partners')} className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer">
                  {language === 'ja' ? '提携スタジオ' : language === 'en' ? 'PARTNERS' : 'MITRA'}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('talent')} className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer">
                  {language === 'ja' ? '採用情報' : language === 'en' ? 'CAREERS' : 'KARIR'}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('contact')} className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer">
                  {language === 'ja' ? 'お問い合わせ' : language === 'en' ? 'CONTACT' : 'KONTAK'}
                </button>
              </li>
            </ul>
          </div>

          {/* Official Partner Badge & Discord */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider font-mono">Co-Production & Discord</h4>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2.5 shadow-2xs">
              <a
                href={STUDIO_INFO.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-xs font-bold transition-colors shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>{curr.discordBtn}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              </a>

              <div className="pt-1">
                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
                  <span>Studio Gekkou (スタジオ月光)</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">ID #778</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed font-sans mt-0.5 font-medium">
                  {curr.partnerDesc}
                </p>
                <a
                  href={STUDIO_INFO.keyframeStaffListUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline mt-1"
                >
                  <span>{curr.partnerTitle}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4 font-mono">
          <p>© 2025-2026 株式会社魚 (Studio Sakana Co., Ltd.). All rights reserved.</p>
          <div className="flex gap-4">
            <span>{curr.location}</span>
            <span>•</span>
            <span>TEL: {STUDIO_INFO.phone}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

