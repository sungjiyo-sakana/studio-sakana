import React from 'react';
import { CLIENT_STUDIOS } from '../data/studioData';
import { useLanguage } from '../context/LanguageContext';
import { Building2 } from 'lucide-react';

export const ClientMarquee: React.FC = () => {
  const { language } = useLanguage();

  // Duplicate client list to create seamless infinite scroll loop
  const marqueeItems = [...CLIENT_STUDIOS, ...CLIENT_STUDIOS];

  return (
    <section id="clients" className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-y border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase font-bold mb-1">
              <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>CLIENTS & CO-PRODUCTION NETWORK</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight font-sans">
              {language === 'ja' && '制作協力・クライアントパートナー'}
              {language === 'en' && 'Client Studios & Co-Production Partners'}
              {language === 'id' && 'Studio Klien & Mitra Kerja Sama Produksi'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono font-semibold">
            Studio Gekkou / Studio KAI / MAPPA / KONAMI animation / Shuka
          </p>
        </div>
      </div>

      {/* Infinite Looping Slider Container with Edge Gradient Fades */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-20 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent pointer-events-none" />
        
        {/* Right Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-20 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent pointer-events-none" />

        {/* Sliding Track 1 */}
        <div className="flex animate-marquee space-x-6 sm:space-x-8 items-center">
          {marqueeItems.map((studio, idx) => (
            <div
              key={`${studio.id}-${idx}`}
              className="flex-shrink-0 group px-6 py-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-300 flex flex-col justify-center min-w-[200px] sm:min-w-[240px] cursor-default shadow-xs"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                {studio.logoUrl ? (
                  <div className="h-8 max-w-[120px] sm:max-w-[140px] flex items-center justify-start bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shrink-0 relative overflow-hidden select-none">
                    <img
                      src={studio.logoUrl}
                      alt={studio.nameEn}
                      className="max-h-full max-w-full object-contain pointer-events-none select-none dark:brightness-110"
                      referrerPolicy="no-referrer"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="absolute inset-0 bg-transparent z-10" onContextMenu={(e) => e.preventDefault()} />
                  </div>
                ) : (
                  <span className="font-extrabold text-sm sm:text-base text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 tracking-wider font-mono">
                    {studio.kanjiLogo}
                  </span>
                )}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-bold border border-slate-300/60 dark:border-slate-700 shrink-0">
                  {studio.tagline}
                </span>
              </div>
              <div className="text-[11px] text-slate-700 dark:text-slate-200 truncate font-semibold font-sans">
                {studio.nameJa}
              </div>
              <div className="mt-1 text-[10px] text-slate-500 dark:text-slate-400 font-mono truncate border-t border-slate-200 dark:border-slate-800 pt-1">
                {studio.notableWorks}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

