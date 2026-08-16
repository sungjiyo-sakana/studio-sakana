import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Language, SubView } from '../types';
import { Globe, Menu, X, ChevronDown, UserPlus, Sparkles } from 'lucide-react';
import { SakanaLogo } from './SakanaLogo';

interface NavbarProps {
  activeView: SubView;
  onSelectView: (view: SubView) => void;
  onOpenTalentModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onSelectView, onOpenTalentModal }) => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<SubView | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languageLabels: Record<Language, { code: string; label: string }> = {
    ja: { code: 'JA', label: '日本語' },
    en: { code: 'EN', label: 'English' },
    id: { code: 'ID', label: 'Indonesia' }
  };

  const navItems: { id: SubView; labelJa: string; labelEn: string; labelId: string }[] = [
    { id: 'home', labelJa: 'トップ', labelEn: 'HOME', labelId: 'UTAMA' },
    { id: 'works', labelJa: '制作実績', labelEn: 'WORKS', labelId: 'KARYA' },
    { id: 'company', labelJa: '会社概要', labelEn: 'ABOUT', labelId: 'TENTANG' },
    { id: 'partners', labelJa: '提携スタジオ', labelEn: 'PARTNERS', labelId: 'MITRA' },
    { id: 'talent', labelJa: '採用情報', labelEn: 'CAREERS', labelId: 'KARIR' },
    { id: 'contact', labelJa: 'お問い合わせ', labelEn: 'CONTACT', labelId: 'KONTAK' }
  ];

  const handleNavClick = (viewId: SubView) => {
    onSelectView(viewId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-2.5 shadow-md'
          : 'bg-white/85 dark:bg-slate-900/85 backdrop-blur-sm py-3.5 border-b border-slate-100 dark:border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand - Studio Sakana Official Keyframe Symbol */}
          <motion.button
            type="button"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none relative py-1 px-1.5 rounded-lg transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
          >
            <SakanaLogo variant="full-en" inverted={theme === 'dark'} />
          </motion.button>

          {/* Desktop Nav Links with Hover Micro-Animations */}
          <nav className="hidden lg:flex items-center gap-2 relative">
            {navItems.map((item) => {
              const label = language === 'ja' ? item.labelJa : language === 'en' ? item.labelEn : item.labelId;
              const isActive = activeView === item.id;
              const isHovered = hoveredNav === item.id;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  onMouseLeave={() => setHoveredNav(null)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-1.5 rounded-md text-xs font-mono font-bold tracking-widest uppercase transition-colors cursor-pointer select-none ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {/* Subtle Hover Pill Animation */}
                  {isHovered && !isActive && (
                    <motion.span
                      layoutId="navHoverPill"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 25 }}
                      className="absolute inset-0 bg-slate-100/70 dark:bg-slate-800/70 rounded-lg -z-10"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1 font-bold">
                    {label}
                  </span>

                  {/* Clean Bottom Line Accent (No Box Background) */}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveLine"
                      className="absolute -bottom-1 left-2 right-2 h-[2.5px] bg-blue-600 dark:bg-blue-400 rounded-full shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 25 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Right Controls: Language Selector & Talent CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            
            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-xs font-mono text-blue-600 dark:text-blue-400 transition-all shadow-2xs hover:shadow-xs cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 20 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <span className="font-bold">{languageLabels[language].code}</span>
                <motion.div
                  animate={{ rotate: langDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-36 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1 z-50 overflow-hidden"
                  >
                    {(Object.keys(languageLabels) as Language[]).map((lang) => (
                      <motion.button
                        key={lang}
                        type="button"
                        onClick={() => {
                          setLanguage(lang);
                          setLangDropdownOpen(false);
                        }}
                        whileHover={{ x: 4 }}
                        className={`w-full flex items-center justify-between px-3 py-1.5 text-xs text-left font-mono transition-colors cursor-pointer ${
                          language === lang
                            ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold'
                            : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                        }`}
                      >
                        <span>{languageLabels[lang].label}</span>
                        {language === lang && (
                          <motion.span
                            layoutId="langDot"
                            className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                          />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Talent Join CTA Button */}
            <motion.button
              type="button"
              onClick={() => handleNavClick('talent')}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md cursor-pointer overflow-hidden group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.4 }}
              >
                <UserPlus className="w-3.5 h-3.5" />
              </motion.div>
              <span>{language === 'ja' ? '採用・作画登録' : language === 'en' ? 'JOIN US' : 'GABUNG TIM'}</span>
              
              {/* Shine effect on hover */}
              <motion.span
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ rotate: 90, scale: 0.92 }}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 mt-2 space-y-4 shadow-xl overflow-hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Language</span>
              <div className="flex gap-1.5">
                {(Object.keys(languageLabels) as Language[]).map((lang) => (
                  <motion.button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    whileTap={{ scale: 0.92 }}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                      language === lang
                        ? 'bg-blue-600 dark:bg-blue-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {languageLabels[lang].code}
                  </motion.button>
                ))}
              </div>
            </div>

            <nav className="flex flex-col gap-1 font-mono">
              {navItems.map((item) => {
                const label = language === 'ja' ? item.labelJa : language === 'en' ? item.labelEn : item.labelId;
                const isActive = activeView === item.id;
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    whileHover={{ x: 6 }}
                    className={`flex items-center justify-between p-2.5 rounded-lg text-sm font-bold tracking-wider text-left transition-all ${
                      isActive
                        ? 'bg-slate-100/90 dark:bg-slate-800/90 text-blue-600 dark:text-blue-400 font-black border-l-4 border-blue-600 dark:border-blue-400 pl-3.5'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-amber-400" />}
                  </motion.button>
                );
              })}
            </nav>

            <motion.button
              type="button"
              onClick={() => handleNavClick('talent')}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              <UserPlus className="w-4 h-4" />
              <span>{language === 'ja' ? '採用・作画登録' : language === 'en' ? 'JOIN US' : 'GABUNG TIM'}</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


