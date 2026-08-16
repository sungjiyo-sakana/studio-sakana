import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { PIPELINE_STEPS, STUDIO_INFO } from '../data/studioData';
import { Layers, Check } from 'lucide-react';

export const StudioPipeline: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id="pipeline" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-left space-y-2 max-w-3xl mb-10 border-b border-slate-200 dark:border-slate-800 pb-6"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase font-bold">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>PRODUCTION PIPELINE & WORKFLOW</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight font-sans">
            {language === 'ja' && '制作工程と技術基準'}
            {language === 'en' && 'Anime Production Workflow & Standards'}
            {language === 'id' && 'Alur Kerja Produksi & Standar Kualitas'}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-sans font-medium">
            {language === 'ja' && 'レイアウトから第一原画、第二原画、動画、仕上げ、撮影まで。徹底したクオリティ管理のもと制作。'}
            {language === 'en' && 'From layout design to 1st/2nd key animation, in-betweening, digital paint, and final composite.'}
            {language === 'id' && 'Dari tata letak hingga keyframe 1st/2nd, in-between, pewarnaan digital, dan komposit akhir.'}
          </p>
        </motion.div>

        {/* Pipeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PIPELINE_STEPS.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-200 text-left space-y-3 font-mono shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-black font-mono text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800 px-3 py-1 rounded border border-slate-300 dark:border-slate-700 shadow-2xs">
                  {step.stepNumber}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold">
                  QUALITY CHECKED
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-sans">
                {language === 'ja' && step.titleJa}
                {language === 'en' && step.titleEn}
                {language === 'id' && step.titleId}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-medium">
                {language === 'ja' && step.descJa}
                {language === 'en' && step.descEn}
                {language === 'id' && step.descId}
              </p>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>CLIP STUDIO PAINT EX & CSP Cloud Sync</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
