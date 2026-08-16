import React, { useState } from 'react';
import { AnimeProject } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, ShieldCheck, Film, Users, Info, Youtube, Tv } from 'lucide-react';

interface KeyframePlayerModalProps {
  project: AnimeProject | null;
  onClose: () => void;
}

export const KeyframePlayerModal: React.FC<KeyframePlayerModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  const [activeModalTab, setActiveModalTab] = useState<'overview' | 'credits'>('overview');

  if (!project) return null;

  const projectDesc = language === 'ja'
    ? project.descriptionJa
    : language === 'en'
    ? project.descriptionEn
    : project.descriptionId;

  const tabOverviewLabel = language === 'ja' ? '詳細 & 概要' : language === 'en' ? 'Overview' : 'Ringkasan & Detail';
  const tabCreditsLabel = language === 'ja' ? '制作スタッフクレジット' : language === 'en' ? 'Staff Credits' : 'Kredit Staf';

  const getRoleText = (rKey: string) => {
    switch (rKey) {
      case 'sakkan':
        return language === 'ja' ? '作画監督 (Sakkan)' : language === 'id' ? 'Supervisor Animasi' : 'Animation Director';
      case 'genga':
        return language === 'ja' ? '原画 (Genga)' : language === 'id' ? 'Keypose' : 'Key Animation';
      case 'nigen':
        return language === 'ja' ? '第二原画 (Nigen)' : language === 'id' ? 'Assisten Keypose' : '2nd Key Animation';
      case 'douga':
        return language === 'ja' ? '動画 (Douga)' : language === 'id' ? 'Clean Up & Inbetween' : 'Clean Up & Inbetween';
      case 'shiage':
        return language === 'ja' ? '仕上げ (Shiage)' : language === 'id' ? 'Coloring' : 'Coloring';
      case 'tpshu':
        return language === 'ja' ? 'TP修正 (TP Shū)' : language === 'id' ? 'Revisi Feedback' : 'Trace/Paint Supervision';
      case 'sensatsu':
      case 'satsuei':
        return language === 'ja' ? '撮影 (Satsuei)' : language === 'id' ? 'Editing (Satsuei)' : 'Compositing (Satsuei)';
      case 'sensatsu_kyoryoku':
      case 'satsuei_kyoryoku':
        return language === 'ja' ? '撮影協力 (Satsuei Kyōryoku)' : language === 'id' ? 'Kerja Sama Editing (Satsuei Kyōryoku)' : 'Compositing Cooperation (Satsuei Kyōryoku)';
      case 'compositor':
        return language === 'ja' ? '撮影 (Satsuei)' : language === 'id' ? 'Editing' : 'Compositing';
      default:
        return rKey;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-150">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden my-8 text-left text-slate-900">
        
        {/* Fixed Close Button Top Right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-md border border-slate-300 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50 pr-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded bg-white text-[#0B2240] border border-slate-200 shadow-2xs">
              <Film className="w-5 h-5 text-[#0B2240]" />
            </span>
            <div>
              <h2 className="text-base font-bold text-slate-900 font-sans">
                {project.japaneseTitleText}
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                {project.titleEn}
              </p>
            </div>
          </div>

          {/* Modal Tabs */}
          <div className="flex items-center bg-white p-1 rounded-lg border border-slate-200 font-mono text-xs shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveModalTab('overview')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 font-bold cursor-pointer ${
                activeModalTab === 'overview'
                  ? 'bg-[#0B2240] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>{tabOverviewLabel}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveModalTab('credits')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 font-bold cursor-pointer ${
                activeModalTab === 'credits'
                  ? 'bg-[#0B2240] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>{tabCreditsLabel}</span>
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeModalTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Standard Vertical Poster & Official Links */}
              <div className="lg:col-span-5 space-y-4">
                {/* Standard Anime Poster Aspect Ratio (2/3) */}
                <div className="relative aspect-[2/3] max-w-[280px] sm:max-w-[320px] w-full mx-auto rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                  {project.posterUrl ? (
                    <img
                      src={project.posterUrl}
                      alt={project.titleEn}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : null}

                  {/* Client Studio Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-200 text-[11px] font-mono font-black text-[#0B2240] uppercase tracking-wider shadow-2xs">
                    {project.clientStudio}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded border border-slate-200 text-[11px] font-mono text-slate-700 flex items-center justify-between shadow-2xs">
                    <span>{project.year} ({project.season})</span>
                    <span className="font-bold text-[#0B2240]">Episode {project.episodes}</span>
                  </div>
                </div>

                {/* Direct External Links: Official Stream & Trailer */}
                <div className="grid grid-cols-2 gap-2 font-mono text-xs max-w-[280px] sm:max-w-[320px] mx-auto">
                  <a
                    href={project.officialStreamUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold transition-all flex items-center justify-center gap-1.5 text-center group shadow-2xs"
                  >
                    <Tv className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform shrink-0" />
                    <span>Official Tayang</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                  </a>

                  <a
                    href={project.trailerUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold transition-all flex items-center justify-center gap-1.5 text-center group shadow-2xs"
                  >
                    <Youtube className="w-4 h-4 text-red-600 group-hover:scale-110 transition-transform shrink-0" />
                    <span>Trailer</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Right Column: Project Overview & Scope */}
              <div className="lg:col-span-7 space-y-4 font-mono">
                
                {/* Metadata Table */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Client Studio</span>
                    <span className="font-bold text-white bg-[#0B2240] px-2.5 py-1 rounded uppercase tracking-wider">
                      {project.clientStudio}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Release Year / Season</span>
                    <span className="text-slate-900 font-bold">
                      {project.year} ({project.season})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Participation Episodes</span>
                    <span className="font-bold text-[#0B2240] bg-white px-2.5 py-1 rounded border border-slate-300">
                      Episode {project.episodes}
                    </span>
                  </div>
                </div>

                {/* Scope of Production Roles */}
                <div>
                  <span className="text-[11px] font-bold text-[#0B2240] uppercase tracking-widest block mb-2 font-mono">
                    Scope of Production (担当範囲)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.roles.map((rKey, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white text-slate-800 text-xs border border-slate-300 font-mono font-bold shadow-2xs"
                      >
                        {getRoleText(rKey)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Overview Description */}
                <div>
                  <span className="text-[11px] font-bold text-[#0B2240] uppercase tracking-widest block mb-1.5 font-mono">
                    Project Overview
                  </span>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans font-medium">
                    {projectDesc}
                  </div>
                </div>

                {/* View Staff Credits Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalTab('credits')}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-800 font-bold transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <Users className="w-4 h-4 text-[#0B2240]" />
                      <span>
                        {language === 'ja' ? '制作スタッフクレジット詳細を見る' : language === 'en' ? 'View Detailed Staff Credits' : 'Lihat Detail Kredit Staf'}
                      </span>
                    </span>
                    <span className="text-[11px] font-mono text-[#0B2240] font-bold">→</span>
                  </button>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: STAFF CREDITS */}
          {activeModalTab === 'credits' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Compact Poster */}
              <div className="lg:col-span-4 space-y-4 font-mono">
                <div className="relative aspect-[2/3] max-w-[220px] w-full mx-auto rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                  {project.posterUrl ? (
                    <img
                      src={project.posterUrl}
                      alt={project.titleEn}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-bold text-white font-sans">
                    {project.japaneseTitleText}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#0B2240] font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verified Credits</span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-sans leading-normal font-medium">
                    {language === 'ja' 
                      ? '公式アニメーションクレジットおよび制作ログに基づきます。'
                      : language === 'en'
                      ? 'Credits based on official broadcasting logs.'
                      : 'Kredit bersumber dari log produksi resmi.'}
                  </p>
                </div>
              </div>

              {/* Right Column: Detailed Staff Breakdown */}
              <div className="lg:col-span-8 space-y-4 font-mono">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h3 className="text-xs font-bold text-[#0B2240] uppercase tracking-wider flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#0B2240]" />
                    <span>PRODUCTION STAFF CREDITS</span>
                  </h3>
                  <span className="text-[10px] text-slate-500 font-mono font-bold">
                    Episode {project.episodes}
                  </span>
                </div>

                {project.staffDetails && project.staffDetails.length > 0 ? (
                  <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1 custom-scrollbar">
                    {project.staffDetails.map((staff, idx) => {
                      const roleDisplay = language === 'ja'
                        ? staff.roleJa
                        : language === 'en'
                        ? staff.roleEn
                        : (staff.roleId || staff.roleEn);

                      const namesDisplay = (language === 'ja' ? staff.namesJa : staff.namesEn) || staff.namesEn || [];

                      return (
                        <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-bold text-slate-900 font-mono">
                              {roleDisplay}
                            </span>
                            {staff.episodes && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-white text-[#0B2240] font-mono font-bold border border-slate-300">
                                {staff.episodes}
                              </span>
                            )}
                          </div>

                          {namesDisplay.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {namesDisplay.map((name, ni) => (
                                <span
                                  key={ni}
                                  className="px-2 py-1 rounded bg-white border border-slate-300 text-slate-800 text-[11px] font-sans font-medium"
                                >
                                  {name}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-slate-200">
                    No staff details available.
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
