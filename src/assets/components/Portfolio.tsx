import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/projectsData';
import { AnimeProject, RoleCategory } from '../types';
import { KeyframePlayerModal } from './KeyframePlayerModal';
import { useLanguage } from '../context/LanguageContext';
import { Search, Film, LayoutGrid, List, Layers, Eye } from 'lucide-react';
import { StudioVideoBg } from './StudioVideoBg';

export const Portfolio: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<RoleCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<AnimeProject | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredProject, setHoveredProject] = useState<AnimeProject | null>(null);

  const categories: { id: RoleCategory; labelJa: string; labelEn: string; labelId: string }[] = [
    { id: 'all', labelJa: 'ALL WORKS', labelEn: 'ALL WORKS', labelId: 'SEMUA KARYA' },
    { id: 'sakkan', labelJa: '作画監督 (Sakkan)', labelEn: 'Animation Director', labelId: 'Supervisor Animasi' },
    { id: 'genga', labelJa: '原画 (Genga)', labelEn: 'Key Animation', labelId: 'Keypose' },
    { id: 'nigen', labelJa: '第二原画 (Nigen)', labelEn: '2nd Key Animation', labelId: 'Assisten Keypose' },
    { id: 'douga', labelJa: '動画 (Douga)', labelEn: 'Clean Up & Inbetween', labelId: 'Clean Up & Inbetween' },
    { id: 'shiage', labelJa: '仕上げ (Shiage)', labelEn: 'Coloring', labelId: 'Coloring' },
    { id: 'tpshu', labelJa: 'TP修正 (TP Shū)', labelEn: 'Trace/Paint', labelId: 'Revisi Feedback' },
    { id: 'compositor', labelJa: '撮影 (Satsuei)', labelEn: 'Compositing', labelId: 'Editing' }
  ];

  // Helper to format industry format type
  const getFormatText = (project: AnimeProject) => {
    if (project.formatType) return project.formatType;
    if (project.season === 'MV') return 'MV';
    return 'TV Series';
  };

  // Filter projects
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const isCompositorCategory = selectedCategory === 'compositor' || selectedCategory === 'satsuei' || selectedCategory === 'satsuei_kyoryoku';
    const matchesCompositor = isCompositorCategory && (
      project.category === 'satsuei' ||
      project.category === 'satsuei_kyoryoku' ||
      project.category === 'compositor' ||
      project.roles.includes('satsuei') ||
      project.roles.includes('satsuei_kyoryoku') ||
      project.roles.includes('compositor')
    );

    const matchesCategory =
      selectedCategory === 'all' ||
      project.category === selectedCategory ||
      project.roles.includes(selectedCategory) ||
      matchesCompositor;

    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      project.titleJa.toLowerCase().includes(q) ||
      project.titleEn.toLowerCase().includes(q) ||
      project.clientStudio.toLowerCase().includes(q) ||
      (project.partnerStudio && project.partnerStudio.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden min-h-screen border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Background Studio Video Header */}
      <StudioVideoBg />

      {/* Dynamic Background Atmosphere on hover */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out pointer-events-none z-0"
        style={{
          backgroundImage: hoveredProject ? `url(${hoveredProject.posterUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(50px) brightness(1.1) saturate(1.2)',
          transform: hoveredProject ? 'scale(1.08)' : 'scale(1)',
          opacity: hoveredProject ? 0.25 : 0
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-left border-b border-slate-200 dark:border-slate-800 pb-6"
        >
          <div className="space-y-2">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase font-bold"
            >
              <Film className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>WORKS ARCHIVE • 制作実績</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight font-sans uppercase"
            >
              {language === 'ja' && '制作参加実績作品'}
              {language === 'en' && 'PRODUCTION WORKS'}
              {language === 'id' && 'KARYA PRODUKSI ANIMASI'}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-sans max-w-2xl font-medium"
            >
              {language === 'ja' && 'TVアニメ、劇場版、MV等の作画監督・原画・第二原画・動画・仕上げ・撮影の参加クレジットアーカイブ。'}
              {language === 'en' && 'Official animation production credits covering TV Series, Films, MVs, and Specials.'}
              {language === 'id' && 'Kredit resmi animasi mencakup TV Series, Film, MV, dan karya produksi industri Jepang.'}
            </motion.p>
          </div>

          {/* Controls: Search & View Mode */}
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'ja' ? '作品名・スタジオ検索...' : language === 'en' ? 'Search title or studio...' : 'Cari judul atau studio...'}
                className="w-full pl-9 pr-3 py-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs font-mono focus:border-blue-600 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-800 focus:outline-none transition-colors shadow-xs"
              />
            </div>

            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded border border-slate-300 dark:border-slate-700 text-xs font-mono">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-600 dark:bg-blue-500 text-white font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-blue-600 dark:bg-blue-500 text-white font-bold' : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filters - Left Aligned, Spacious & Scrollable */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-10 overflow-x-auto pb-2 scrollbar-none text-left"
        >
          <div className="flex items-center gap-2 font-mono text-xs min-w-max">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const label = language === 'ja' ? cat.labelJa : language === 'en' ? cat.labelEn : cat.labelId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white font-extrabold'
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTriggerCategoryTab"
                      className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded shadow-md z-0"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Display */}
        {filteredProjects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-12 text-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3"
          >
            <Layers className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-sm font-mono font-bold text-slate-700 dark:text-slate-200">No Projects Found</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">Try adjusting your search query or selecting a different category filter.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 border border-slate-700 text-white text-xs font-mono font-bold transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        ) : viewMode === 'grid' ? (
          /* GRID VIEW: Vertical Tall Poster Format (aspect-[2/3]) */
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const isHovered = hoveredProject?.id === project.id;
                const formatLabel = getFormatText(project);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => setActiveModalProject(project)}
                    className={`group relative rounded-lg bg-slate-100 dark:bg-slate-900 overflow-hidden transition-all duration-300 cursor-pointer text-left aspect-[2/3] shadow-md border ${
                      isHovered
                        ? 'border-blue-600 dark:border-blue-400 shadow-[0_12px_35px_rgba(37,99,235,0.35)] scale-[1.04] z-20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-400 z-10'
                    }`}
                  >
                    {/* Poster Image - Clean, Full Color */}
                    {project.posterUrl ? (
                      <img
                        src={project.posterUrl}
                        alt={project.titleEn}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    ) : null}

                    {/* OVERLAY: Appears ONLY when Hovered */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 flex flex-col justify-between z-10"
                        >
                          {/* Top Info: Format & Studio Origin */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="px-2 py-0.5 rounded bg-white text-blue-600 font-mono text-[10px] font-black uppercase tracking-wider shadow-xs">
                              {formatLabel}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-100 font-mono text-[10px] font-bold uppercase truncate max-w-[110px]">
                              {project.clientStudio}
                            </span>
                          </div>

                          {/* Center Hover Action Icon */}
                          <div className="self-center p-3 rounded-full bg-white/20 border border-white/40 text-white backdrop-blur-md animate-pulse">
                            <Eye className="w-5 h-5 text-white" />
                          </div>

                          {/* Bottom Info: Japanese & English Title Only */}
                          <div className="space-y-1">
                            <h3 className="text-sm font-bold text-white font-sans line-clamp-2 leading-tight">
                              {project.japaneseTitleText}
                            </h3>
                            <p className="text-[11px] text-slate-200 font-mono line-clamp-1 opacity-90">
                              {project.titleEn}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* LIST VIEW */
          <motion.div 
            layout
            className="space-y-3"
          >
            {filteredProjects.map((project, idx) => {
              const formatLabel = getFormatText(project);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setActiveModalProject(project)}
                  className="group p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer text-left shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 sm:w-16 aspect-[2/3] rounded overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shrink-0">
                      {project.posterUrl ? (
                        <img
                          src={project.posterUrl}
                          alt={project.titleEn}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                          referrerPolicy="no-referrer"
                        />
                      ) : null}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-1.5 py-0.5 rounded bg-blue-600 dark:bg-blue-500 text-white text-[10px] font-mono font-bold uppercase">
                          {formatLabel}
                        </span>
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">{project.clientStudio}</span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-sans">
                        {project.japaneseTitleText}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono line-clamp-1">
                        {project.titleEn}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.year}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

      </div>

      {/* Keyframe Detail Modal */}
      <KeyframePlayerModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};

