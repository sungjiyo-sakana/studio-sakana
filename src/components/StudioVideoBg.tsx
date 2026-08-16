import React from 'react';

interface StudioVideoBgProps {
  className?: string;
  opacityClass?: string;
}

export const StudioVideoBg: React.FC<StudioVideoBgProps> = ({
  className = "absolute inset-0 pointer-events-none overflow-hidden select-none bg-white dark:bg-slate-950",
  opacityClass = "opacity-45 dark:opacity-25 sm:opacity-55"
}) => {
  return (
    <div className={className}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover object-center filter contrast-115 saturate-120 ${opacityClass}`}
      >
        <source
          src="https://pub-45ce6c444f0142409c144f23de3a547a.r2.dev/2a848693e3164b1e98059a862b208203_compressed.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/30 dark:from-slate-950 dark:via-slate-950/80 dark:to-slate-950/40 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-15 pointer-events-none" />
    </div>
  );
};
