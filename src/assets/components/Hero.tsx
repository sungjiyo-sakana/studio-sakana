import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { STUDIO_INFO, STUDIO_STATS } from '../data/studioData';
import { SubView } from '../types';
import { Film, Users, ExternalLink, ArrowRight } from 'lucide-react';
import { SakanaLogo } from './SakanaLogo';
import { StudioVideoBg } from './StudioVideoBg';

interface HeroProps {
  onSelectView?: (view: SubView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectView }) => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const heroLoc = {
    ja: '東京都板橋区高島平 スタジオ 🇯🇵',
    en: 'Takashimadaira, Tokyo Studio 🇯🇵',
    id: 'Studio Takashimadaira, Tokyo 🇯🇵'
  };

  const heroPreviewBadge = {
    ja: '東京 高島平スタジオ Desk',
    en: 'Tokyo Takashimadaira Studio Desk',
    id: 'Desk Studio Takashimadaira Tokyo'
  };

  const heroFounded = {
    ja: '設立 2025年1月7日',
    en: 'Est. Jan 7, 2025',
    id: 'Berdiri 7 Jan 2025'
  };

  return (
    <section id="home" className="relative min-h-[85vh] pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Background Video with Clean Studio Overlay */}
      <StudioVideoBg />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Studio Pitch */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Location Line */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-mono shadow-sm"
            >
              <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                {heroLoc[language] || heroLoc.ja}
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xs font-mono text-blue-600 dark:text-blue-400 tracking-widest uppercase font-extrabold"
              >
                {t.heroSubtitle}
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight font-sans"
              >
                {t.heroTitlePrefix}
                <span className="text-blue-600 dark:text-blue-400 border-b-4 border-blue-600 dark:border-blue-400 pb-0.5 ml-1 mr-1">
                  {t.heroTitleHighlight}
                </span>{' '}
                {t.heroTitleSuffix}
              </motion.h1>
            </div>

            {/* Japanese Kanji Branding */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-3 py-1"
            >
              <span className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-widest font-serif">
                株式会社魚 <span className="text-sm font-sans font-semibold text-slate-600 dark:text-slate-400">(スタジオ魚)</span>
              </span>
              <span className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700" />
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono tracking-wider font-semibold">
                Studio Sakana Co., Ltd.
              </span>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-sans font-medium"
            >
              {t.heroDesc}
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={() => onSelectView ? onSelectView('works') : null}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <Film className="w-4 h-4" />
                <span>{t.explorePortfolio}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onSelectView ? onSelectView('talent') : null}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-blue-600 dark:text-blue-400 font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t.registerTalent}</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Studio Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 space-y-5 text-left shadow-lg">
              
              {/* Studio Workspace Preview */}
              {STUDIO_INFO.workshopImg ? (
                <div className="relative aspect-video rounded overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={STUDIO_INFO.workshopImg}
                    alt="Studio Sakana Workshop"
                    className="w-full h-full object-cover contrast-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-white bg-blue-600/90 dark:bg-blue-500/90 px-2 py-0.5 rounded">
                      {heroPreviewBadge[language] || heroPreviewBadge.ja}
                    </span>
                    <span className="text-[10px] font-mono text-slate-100 bg-slate-900/80 px-2 py-0.5 rounded">
                      {heroFounded[language] || heroFounded.ja}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video rounded overflow-hidden border border-slate-200 dark:border-slate-800 bg-blue-600 p-5 flex flex-col justify-between text-white shadow-inner">
                  <div className="flex items-center justify-between">
                    <SakanaLogo variant="panjang" className="h-6 text-white filter brightness-0 invert" inverted />
                    <span className="text-[9px] font-mono font-bold text-slate-200 bg-white/10 px-2 py-0.5 rounded border border-white/20">
                      OFFICIAL STUDIO
                    </span>
                  </div>
                  <div className="space-y-1 my-auto">
                    <p className="text-xs font-mono font-bold text-slate-100 tracking-wider">
                      TOKYO TAKASHIMADAIRA STUDIO
                    </p>
                    <p className="text-[10px] font-mono text-slate-300">
                      {STUDIO_INFO.locationJa}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-[9px] font-mono font-bold text-white bg-slate-800/90 px-2 py-0.5 rounded">
                      {heroPreviewBadge[language] || heroPreviewBadge.ja}
                    </span>
                    <span className="text-[9px] font-mono text-slate-200 bg-slate-800/90 px-2 py-0.5 rounded">
                      {heroFounded[language] || heroFounded.ja}
                    </span>
                  </div>
                </div>
              )}

              {/* Summary Statement */}
              <div className="space-y-2 text-left">
                <h3 className="text-xs font-mono uppercase font-black text-blue-600 dark:text-blue-400 tracking-wider">
                  {language === 'ja' && 'アニメーション制作デスク'}
                  {language === 'en' && 'Anime Production Desk'}
                  {language === 'id' && 'Desk Produksi Animasi'}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-medium">
                  {language === 'ja' && '作画・動画・仕上げなどアニメーション制作を手掛けています。東京・高島平スタジオより作品を届けています。'}
                  {language === 'en' && 'Handling animation production, artwork, clean-up, and coloring from our studio in Takashimadaira, Tokyo.'}
                  {language === 'id' && 'Mengerjakan animasi, gambar, clean-up, dan pewarnaan dari studio kami di Takashimadaira, Tokyo.'}
                </p>
              </div>

              {/* Client Network List */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block text-[9px] uppercase tracking-wider font-bold">Key Clients</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">MAPPA, KONAMI, Studio Kai...</span>
                </div>
                <a
                  href={STUDIO_INFO.keyframeStaffListUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold text-[10px] transition-colors flex items-center gap-1 shadow-xs"
                >
                  <span>Staff Credits</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Studio Stats Grid with Staggered Entrance */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STUDIO_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-blue-600 dark:hover:border-blue-500 transition-colors shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tracking-tight">
                {stat.value}{stat.suffix}
              </div>
              <div className="mt-1 text-xs font-bold text-slate-600 dark:text-slate-300 font-mono">
                {language === 'ja' && stat.labelJa}
                {language === 'en' && stat.labelEn}
                {language === 'id' && stat.labelId}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

