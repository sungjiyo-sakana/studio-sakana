import React from 'react';

export const SAKANA_LOGOS = {
  icon: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20SAKANA%20icon.png',
  panjang: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20SAKANA%20panjang.png',
  default: 'https://raw.githubusercontent.com/Sungjiyo/sjy_porto/refs/heads/main/Sakana/LOGO%20SAKANA.png'
};

interface SakanaLogoProps {
  variant?: 'icon' | 'symbol' | 'panjang' | 'horizontal' | 'full-en' | 'full-ja' | 'default' | 'stacked' | 'credit';
  className?: string;
  inverted?: boolean; // Set to true if rendering over dark backgrounds
}

export const SakanaLogo: React.FC<SakanaLogoProps> = ({
  variant = 'panjang',
  className = '',
  inverted = false,
}) => {
  const filterClass = inverted ? 'filter brightness-0 invert' : '';

  if (variant === 'icon' || variant === 'symbol') {
    return (
      <div className={`relative inline-flex items-center justify-center overflow-hidden select-none shrink-0 ${className || 'w-10 h-10'}`}>
        <img
          src={SAKANA_LOGOS.icon}
          alt="Studio Sakana Icon"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-contain pointer-events-none select-none ${filterClass}`}
        />
        <div className="absolute inset-0 z-10 bg-transparent" onContextMenu={(e) => e.preventDefault()} />
      </div>
    );
  }

  if (variant === 'panjang' || variant === 'horizontal' || variant === 'full-en') {
    return (
      <div className={`relative inline-flex items-center justify-start overflow-hidden select-none shrink-0 ${className || 'h-9 sm:h-10 max-w-[220px] sm:max-w-[280px]'}`}>
        <img
          src={SAKANA_LOGOS.panjang}
          alt="Studio Sakana Logo"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          referrerPolicy="no-referrer"
          className={`max-h-full max-w-full object-contain pointer-events-none select-none ${filterClass}`}
        />
        <div className="absolute inset-0 z-10 bg-transparent" onContextMenu={(e) => e.preventDefault()} />
      </div>
    );
  }

  if (variant === 'credit') {
    return (
      <div className={`relative inline-flex flex-col items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm ${className}`}>
        <div className="relative h-12 sm:h-14 max-w-[240px] overflow-hidden select-none">
          <img
            src={SAKANA_LOGOS.panjang}
            alt="Studio Sakana Logo"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            referrerPolicy="no-referrer"
            className={`max-h-full max-w-full object-contain pointer-events-none select-none ${filterClass}`}
          />
          <div className="absolute inset-0 z-10 bg-transparent" onContextMenu={(e) => e.preventDefault()} />
        </div>
        <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-2 border-t border-slate-200 dark:border-slate-800 pt-2 uppercase tracking-wider">
          <span>ANIMATION PRODUCTION</span>
          <span>•</span>
          <span>VENDOR WORK</span>
          <span>•</span>
          <span>RECRUITMENT</span>
        </div>
      </div>
    );
  }

  // Default / stacked / full-ja
  return (
    <div className={`relative inline-flex flex-col items-center justify-center overflow-hidden select-none shrink-0 ${className || 'h-24 sm:h-28'}`}>
      <img
        src={SAKANA_LOGOS.default}
        alt="Studio Sakana Official Logo"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        referrerPolicy="no-referrer"
        className={`max-h-full max-w-full object-contain pointer-events-none select-none ${filterClass}`}
      />
      <div className="absolute inset-0 z-10 bg-transparent" onContextMenu={(e) => e.preventDefault()} />
    </div>
  );
};



