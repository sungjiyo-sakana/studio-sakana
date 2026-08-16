import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play, Pause, Film, Volume2, VolumeX, Sparkles, CheckCircle2, Maximize2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';

export const KeyframeFlipbookDemo: React.FC = () => {
  const { t, language } = useLanguage();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const reels = [
    {
      id: 'action-2026',
      titleJa: '2026 アクション作画＆原画集 (Action Reel)',
      titleEn: '2026 Action & Key Animation Reel',
      titleId: 'Showreel Animasi Aksi & Keyframe 2026',
      studio: 'MAPPA & KONAMI animation Collaboration',
      thumbnailUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop',
      featuredProjects: ['Jujutsu Kaisen S2', 'Yu-Gi-Oh! 25th', 'Chainsaw Man']
    },
    {
      id: 'fx-color',
      titleJa: 'エフェクト・撮影・仕上げ集 (Composite & FX Reel)',
      titleEn: 'Visual FX, Composite & Color Paint Reel',
      titleId: 'Showreel Efek Visual & Pewarnaan Digital',
      studio: 'Studio Kai & Shuka Collaboration',
      thumbnailUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1200&auto=format&fit=crop',
      featuredProjects: ['Uma Musume S3', 'Frieren', 'Natsume S7']
    },
    {
      id: 'bg-art',
      titleJa: '背景美術・世界観イラスト集 (Background Art Reel)',
      titleEn: 'Background Art & Environment Reel',
      titleId: 'Showreel Seni Latar Belakang & Latar Tempat',
      studio: 'Madhouse & WIT Studio Collaboration',
      thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
      featuredProjects: ['Spy x Family', 'Demon Slayer', 'Frieren']
    }
  ];

  const currentReel = reels[activeReelIndex];

  // Auto-progress simulation when playing
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1.5;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (progress >= 100) setProgress(0);
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="demo" className="py-20 bg-zinc-950 relative border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left space-y-2 max-w-3xl mb-10 border-b border-zinc-800 pb-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-400 uppercase font-semibold">
            <Film className="w-3.5 h-3.5 text-zinc-300" />
            <span>OFFICIAL STUDIO SHOWREEL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            {t.demoPlayerTitle}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            {t.demoPlayerDesc}
          </p>
        </div>

        {/* Main Showreel Player Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main: Video Screen Player */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-video rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl group">
              
              {currentReel.thumbnailUrl ? (
                <img
                  src={currentReel.thumbnailUrl}
                  alt={currentReel.titleEn}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isPlaying ? 'scale-105 contrast-125 brightness-105' : 'grayscale contrast-110'
                  }`}
                  referrerPolicy="no-referrer"
                />
              ) : null}

              {/* Dark Gradient Backdrop */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              {/* Watermark & Quality Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-zinc-950/90 border border-zinc-800 text-xs font-mono font-bold text-white uppercase tracking-wider">
                  STUDIO SAKANA REEL
                </span>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>4K SAKUGA QUALITY</span>
                </span>
              </div>

              {/* Playing Status Center Overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-zinc-950 flex items-center justify-center shadow-2xl transition-transform transform hover:scale-110"
                    title="Play Showreel"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                  </button>
                </div>
              )}

              {/* Player Bottom Control Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-zinc-950/95 border-t border-zinc-800/80 space-y-2">
                
                {/* Progress Bar */}
                <div className="w-full bg-zinc-800 h-1.5 rounded overflow-hidden cursor-pointer">
                  <div
                    className="bg-white h-full transition-all duration-200"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <span className="text-zinc-300 font-bold hidden sm:inline">
                      {language === 'ja' && currentReel.titleJa}
                      {language === 'en' && currentReel.titleEn}
                      {language === 'id' && currentReel.titleId}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-zinc-400 text-[10px]">
                    <span>{Math.floor((progress / 100) * 120)}s / 120s</span>
                    <button type="button" className="p-1 hover:text-white" title="Fullscreen">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Featured Anime Titles in this Reel */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-left">
              <span className="text-zinc-400 font-semibold uppercase tracking-wider">
                Featured Title Works:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentReel.featuredProjects.map((title, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-200 font-bold"
                  >
                    {title}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Showreel Playlist Channels */}
          <div className="lg:col-span-4 space-y-3 text-left">
            <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest px-1">
              SELECT SHOWREEL REEL
            </div>

            <div className="space-y-2.5">
              {reels.map((reel, idx) => (
                <div
                  key={reel.id}
                  onClick={() => {
                    setActiveReelIndex(idx);
                    setProgress(0);
                    setIsPlaying(true);
                  }}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex gap-3 ${
                    activeReelIndex === idx
                      ? 'bg-zinc-900 border-zinc-400 ring-1 ring-zinc-400 shadow-xl'
                      : 'bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900'
                  }`}
                >
                  <div className="w-20 h-14 rounded overflow-hidden bg-zinc-950 shrink-0 relative border border-zinc-800">
                    {reel.thumbnailUrl ? (
                      <img
                        src={reel.thumbnailUrl}
                        alt={reel.titleEn}
                        className="w-full h-full object-cover grayscale"
                        referrerPolicy="no-referrer"
                      />
                    ) : null}
                    {activeReelIndex === idx && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-1 font-mono text-xs flex-1">
                    <div className="font-bold text-white line-clamp-1">
                      {language === 'ja' && reel.titleJa}
                      {language === 'en' && reel.titleEn}
                      {language === 'id' && reel.titleId}
                    </div>
                    <div className="text-[10px] text-zinc-400 line-clamp-1">
                      {reel.studio}
                    </div>
                    {activeReelIndex === idx && (
                      <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1 pt-0.5">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>NOW PLAYING</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Poster Showcase Quick Link */}
            <div className="pt-2">
              <a
                href="#portfolio"
                className="w-full py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Film className="w-4 h-4 text-zinc-300" />
                <span>EXPLORE ALL POSTERS ({PROJECTS_DATA.length} TITLES)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
