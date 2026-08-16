import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/projectsData';
import { useLanguage } from '../context/LanguageContext';
import { SubView, AnimeProject } from '../types';
import { Film, ArrowRight, Building2, Users, ChevronRight, Award, ChevronLeft, Eye } from 'lucide-react';
import { KeyframePlayerModal } from './KeyframePlayerModal';

interface FeaturedHighlightsProps {
  onSelectView: (view: SubView) => void;
}

export const FeaturedHighlights: React.FC<FeaturedHighlightsProps> = ({ onSelectView }) => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<AnimeProject | null>(null);

  const featuredWorks = PROJECTS_DATA.filter((p) => p.featured || true);

  // Auto advance carousel every 4 seconds if not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredWorks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, featuredWorks.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredWorks.length) % featuredWorks.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredWorks.length);
  };

  const getFormatText = (project: AnimeProject) => {
    if (project.formatType) return project.formatType;
    if (project.season === 'MV') return 'MV';
    return 'TV Series';
  };

  return (
    <div className="space-y-24 py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden relative transition-colors duration-300">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 dark:opacity-20 pointer-events-none" />
      
      {/* 1. FOCUS SLIDESHOW / CAROUSEL SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Animation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-1"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              <Film className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>FEATURED HIGHLIGHTS • ピックアップ</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 font-sans tracking-tight uppercase">
              {language === 'ja' && '注目制作実績スライド'}
              {language === 'en' && 'FEATURED PRODUCTION SLIDESHOW'}
              {language === 'id' && 'KARYA PRODUKSI UNGGULAN'}
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            type="button"
            onClick={() => onSelectView('works')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-500 border border-slate-300 dark:border-slate-700 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold tracking-wider uppercase transition-all group shrink-0 cursor-pointer shadow-xs"
          >
            <span>{language === 'ja' ? '制作実績一覧を見る' : language === 'en' ? 'VIEW ALL WORKS' : 'LIHAT SEMUA KARYA'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Dynamic Focus Carousel Container */}
        <div 
          className="relative py-6 flex items-center justify-center min-h-[460px] sm:min-h-[520px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Controls: Prev & Next Buttons */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 z-30 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all shadow-xl cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 sm:right-6 z-30 p-3 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all shadow-xl cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Slide Track */}
          <div className="relative w-full max-w-4xl h-[420px] sm:h-[480px] flex items-center justify-center">
            {featuredWorks.map((project, idx) => {
              const total = featuredWorks.length;
              // Calculate offset relative to currentIndex
              let offset = idx - currentIndex;
              if (offset < -Math.floor(total / 2)) offset += total;
              if (offset > Math.floor(total / 2)) offset -= total;

              const isFocused = offset === 0;
              const isPrev = offset === -1;
              const isNext = offset === 1;
              const isVisible = isFocused || isPrev || isNext;

              if (!isVisible) return null;

              const formatLabel = getFormatText(project);

              return (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={{
                    x: offset * 260, // Horizontal offset
                    scale: isFocused ? 1.05 : 0.82,
                    opacity: isFocused ? 1 : 0.4,
                    filter: isFocused ? 'blur(0px)' : 'blur(4px)',
                    zIndex: isFocused ? 20 : 10,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={() => {
                    if (isFocused) {
                      setActiveModalProject(project);
                    } else {
                      setCurrentIndex(idx);
                    }
                  }}
                  className={`absolute w-[230px] sm:w-[280px] aspect-[2/3] rounded-xl overflow-hidden cursor-pointer shadow-2xl border transition-colors ${
                    isFocused 
                      ? 'border-blue-600 dark:border-blue-400 shadow-[0_10px_40px_rgba(37,99,235,0.3)]' 
                      : 'border-slate-300 dark:border-slate-700'
                  }`}
                >
                  {/* Clean Vertical Poster Image */}
                  {project.posterUrl ? (
                    <img
                      src={project.posterUrl}
                      alt={project.titleEn}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : null}

                  {/* HOVER OVERLAY ONLY ON FOCUSED SLIDE */}
                  {isFocused && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 flex flex-col justify-between opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded bg-white text-blue-600 font-mono text-[10px] font-black uppercase shadow-xs">
                          {formatLabel}
                        </span>
                        <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-100 font-mono text-[10px] font-bold uppercase truncate max-w-[120px]">
                          {project.clientStudio}
                        </span>
                      </div>

                      <div className="self-center p-3 rounded-full bg-white/20 border border-white/40 text-white backdrop-blur-md">
                        <Eye className="w-5 h-5" />
                      </div>

                      <div className="space-y-1 text-left">
                        <h3 className="text-base font-bold text-white font-sans line-clamp-2">
                          {project.japaneseTitleText}
                        </h3>
                        <p className="text-xs text-slate-200 font-mono line-clamp-1">
                          {project.titleEn}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-0 flex items-center gap-2">
            {featuredWorks.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === currentIndex ? 'w-8 bg-blue-600 dark:bg-blue-400' : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </section>

      {/* 2. COMPANY HIGHLIGHT CARDS WITH TEXT ENTRANCE ANIMATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Company & Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 text-left space-y-4 flex flex-col justify-between transition-colors shadow-xs"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-2xs">
                <Building2 className="w-5 h-5" />
              </div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xl font-black text-blue-600 dark:text-blue-400 font-sans"
              >
                {language === 'ja' ? '会社概要・理念' : language === 'en' ? 'COMPANY & VISION' : 'PROFIL & VISI'}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-medium"
              >
                {language === 'ja'
                  ? '「皆が楽しいと思える未来を作っていく」東京都板橋区に本社を構えるアニメーション制作スタジオ。'
                  : language === 'en'
                  ? 'Tokyo-based specialized animation studio crafting Key Animation, Compositing, and Clean-Up lines.'
                  : 'Studio animasi berbasis di Tokyo yang berfokus pada Key Animation, Line Test, dan In-Between.'}
              </motion.p>
            </div>

            <button
              type="button"
              onClick={() => onSelectView('company')}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors pt-2 uppercase tracking-wider cursor-pointer"
            >
              <span>{language === 'ja' ? '詳細を見る' : language === 'en' ? 'ABOUT US' : 'TENTANG KAMI'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Card 2: Careers & Talent */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 text-left space-y-4 flex flex-col justify-between transition-colors shadow-xs"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-2xs">
                <Users className="w-5 h-5" />
              </div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xl font-black text-blue-600 dark:text-blue-400 font-sans"
              >
                {language === 'ja' ? '採用・アニメーター登録' : language === 'en' ? 'RECRUITMENT & CREATORS' : 'KARIR & ANIMATOR'}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-medium"
              >
                {language === 'ja'
                  ? '国内外のアニメーター、原画・2原・動仕クリエイターを随時募集しています。'
                  : language === 'en'
                  ? 'We are continuously recruiting global key animators, 2nd key creators, and cleanup specialists.'
                  : 'Kami membuka pendaftaran untuk animator Keypose, 2nd Key, dan Clean-Up dari Indonesia dan global.'}
              </motion.p>
            </div>

            <button
              type="button"
              onClick={() => onSelectView('talent')}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors pt-2 uppercase tracking-wider cursor-pointer"
            >
              <span>{language === 'ja' ? '採用情報を開く' : language === 'en' ? 'JOIN OUR TEAM' : 'GABUNG SEKARANG'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Card 3: Studio Partnerships */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-8 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 text-left space-y-4 flex flex-col justify-between transition-colors shadow-xs"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-2xs">
                <Award className="w-5 h-5" />
              </div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xl font-black text-blue-600 dark:text-blue-400 font-sans"
              >
                {language === 'ja' ? '提携スタジオネットワーク' : language === 'en' ? 'STUDIO PARTNERSHIPS' : 'JARINGAN KEMITRAAN'}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-medium"
              >
                {language === 'ja'
                  ? '大手企業・パートナー提携企業との円滑なグロス・カット制作デスク体制。'
                  : language === 'en'
                  ? 'Strategic alliance desks across major Japanese production studios for gross and cut commissions.'
                  : 'Jaringan kerja sama dengan studio-studio ternama di Jepang untuk pengerjaan gross dan cut.'}
              </motion.p>
            </div>

            <button
              type="button"
              onClick={() => onSelectView('partners')}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors pt-2 uppercase tracking-wider cursor-pointer"
            >
              <span>{language === 'ja' ? '提携先一覧' : language === 'en' ? 'PARTNER LIST' : 'DAFTAR MITRA'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* Modal for Keyframe Details */}
      <KeyframePlayerModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </div>
  );
};

