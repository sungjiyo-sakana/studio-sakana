import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TalentApplication, ApplicantType, RoleCategory } from '../types';
import { STUDIO_INFO } from '../data/studioData';
import { Users, CheckCircle2, Send, Upload, FileText, Award, Laptop, Code } from 'lucide-react';
import { StudioVideoBg } from './StudioVideoBg';

export const TalentRegistration: React.FC = () => {
  const { t, language } = useLanguage();
  
  const [applicantType, setApplicantType] = useState<ApplicantType>('freelancer');
  const [submittedApp, setSubmittedApp] = useState<{ id: string; data: TalentApplication } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState<TalentApplication>({
    applicantType: 'freelancer',
    fullName: '',
    nativeName: '',
    email: '',
    phone: '',
    country: 'Japan',
    city: 'Tokyo',
    preferredRoles: ['key_animation'],
    experienceLevel: 'junior_1_2_yrs',
    softwareSkills: ['CLIP STUDIO PAINT EX'],
    portfolioUrl: '',
    demoReelUrl: '',
    softwareProficiency: {
      clipStudioPaint: 80,
      toonBoom: 50,
      tvpaint: 40,
      blender: 60,
      afterEffects: 70
    },
    motivationMessage: '',
    availableFrom: '2026-09-01',
    preferredWorkType: 'remote',
    agreedToTerms: true
  });

  const availableRoles = [
    { key: 'sakkan', roleCategory: 'sakkan' as RoleCategory, labelJa: '作画監督 (Sakkan)', labelEn: 'Animation Director', labelId: 'Supervisor Animasi' },
    { key: 'genga', roleCategory: 'genga' as RoleCategory, labelJa: '原画 (Genga)', labelEn: 'Key Animation', labelId: 'Keypose' },
    { key: 'nigen', roleCategory: 'nigen' as RoleCategory, labelJa: '第二原画 (Nigen)', labelEn: '2nd Key Animation', labelId: 'Assisten Keypose' },
    { key: 'douga', roleCategory: 'douga' as RoleCategory, labelJa: '動画 (Douga)', labelEn: 'Clean Up & Inbetween', labelId: 'Clean Up & Inbetween' },
    { key: 'shiage', roleCategory: 'shiage' as RoleCategory, labelJa: '仕上げ (Shiage)', labelEn: 'Coloring', labelId: 'Coloring' },
    { key: 'tpshu', roleCategory: 'tpshu' as RoleCategory, labelJa: 'TP修正 (TP Shū)', labelEn: 'Trace/Paint Supervision', labelId: 'Revisi Feedback' },
    { key: 'compositor', roleCategory: 'satsuei' as RoleCategory, labelJa: '撮影 (Satsuei)', labelEn: 'Compositing', labelId: 'Editing' },
    { key: 'lo', roleCategory: 'genga' as RoleCategory, labelJa: '絵コンテ・レイアウト (LO)', labelEn: 'Storyboard Animatic & Layout', labelId: 'Storyboard Animatic & Layout' }
  ];

  const [selectedRoleKeys, setSelectedRoleKeys] = useState<string[]>(['genga', 'nigen']);

  const handleRoleToggle = (roleKey: string) => {
    setSelectedRoleKeys((prev) => {
      const exists = prev.includes(roleKey);
      const updated = exists ? prev.filter((k) => k !== roleKey) : [...prev, roleKey];
      return updated.length ? updated : [roleKey];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.portfolioUrl) {
      alert(language === 'ja' ? '必須項目（お名前・メールアドレス・ポートフォリオURL）を入力してください。' : 'Please fill in required fields (Name, Email, Portfolio URL).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `SAKANA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedApp({ id: generatedId, data: { ...formData, applicantType } });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section id="talent" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      {/* Background Video Header */}
      <StudioVideoBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Hero Header Card for Careers */}
        <div className="bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md border border-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold">
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span>RECRUITMENT & CREATIVE TALENT REGISTRATION</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-sans leading-tight">
              {t.talentTitle}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-medium max-w-3xl">
              {t.talentSubtitle}
            </p>
          </div>

          {/* Quick Track Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-xs font-bold text-blue-400 block uppercase">Track 01: Remote Freelancer</span>
              <p className="text-xs text-slate-300 font-sans">作画監督・原画・第二原画 (Per-cut global remote contract)</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-xs font-bold text-emerald-400 block uppercase">Track 02: Tokyo Onsite Desk</span>
              <p className="text-xs text-slate-300 font-sans">高島平スタジオ出社・動画仕上げ・演出管理</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
              <span className="text-xs font-bold text-amber-400 block uppercase">Track 03: Indonesia Desk</span>
              <p className="text-xs text-slate-300 font-sans">海外パートナーデスク・動仕一括・TP修正ライン</p>
            </div>
          </div>
        </div>

        {/* Application Form or Submitted Confirmation */}
        {submittedApp ? (
          /* CONFIRMATION CARD */
          <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 text-left font-mono">
            <div className="flex items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700">
                  REGISTRATION ID: {submittedApp.id}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-1.5 font-sans">
                  {t.formSuccessTitle}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans font-medium">
              {t.formSuccessMsg}
            </p>

            {/* Application Summary Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-3 text-xs font-mono shadow-sm">
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 dark:text-slate-400">Applicant Name:</span>
                <span className="text-slate-900 dark:text-slate-100 font-bold">{submittedApp.data.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 dark:text-slate-400">Email Address:</span>
                <span className="text-slate-800 dark:text-slate-200">{submittedApp.data.email}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 dark:text-slate-400">Location:</span>
                <span className="text-slate-700 dark:text-slate-300">{submittedApp.data.city}, {submittedApp.data.country}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/50 pb-2">
                <span className="text-slate-500 dark:text-slate-400">Program Track:</span>
                <span className="text-blue-600 dark:text-blue-400 uppercase font-bold">{submittedApp.data.applicantType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Portfolio URL:</span>
                <a
                  href={submittedApp.data.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline font-bold truncate max-w-[200px]"
                >
                  {submittedApp.data.portfolioUrl}
                </a>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSubmittedApp(null)}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                Submit Another Registration
              </button>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 text-left"
          >
            
            {/* Step 1: Personal Profile */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-black text-blue-600 dark:text-blue-400 font-mono uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-3">
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>01. Personal Information (基本情報)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.formFullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Kenji Takahashi / Budi Santoso"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.formNativeName}
                  </label>
                  <input
                    type="text"
                    value={formData.nativeName}
                    onChange={(e) => setFormData({ ...formData, nativeName: e.target.value })}
                    placeholder="e.g. 高橋健二"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    {t.formEmail} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="animator@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.formCountry}
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Japan / Indonesia / USA"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.formCity}
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Tokyo / Bandung"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Desired Roles & Work Preference */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-black text-blue-600 dark:text-blue-400 font-mono uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-2">
                <Laptop className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>02. Role & Production Specialty (希望職種)</span>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2">
                  {t.formPreferredRoles} (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {availableRoles.map((role) => {
                    const isChecked = selectedRoleKeys.includes(role.key);
                    return (
                      <button
                        key={role.key}
                        type="button"
                        onClick={() => handleRoleToggle(role.key)}
                        className={`p-3.5 rounded-xl border text-xs font-mono text-left transition-all cursor-pointer flex items-center justify-between ${
                          isChecked
                            ? 'bg-blue-600 border-blue-600 text-white font-bold shadow-md'
                            : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-600 dark:hover:border-blue-400'
                        }`}
                      >
                        <span>
                          {language === 'ja' && role.labelJa}
                          {language === 'en' && role.labelEn}
                          {language === 'id' && role.labelId}
                        </span>
                        {isChecked && <CheckCircle2 className="w-4 h-4 text-white shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Work Location Preference (勤務形態・希望場所)
                </label>
                <select
                  value={formData.preferredWorkType}
                  onChange={(e) => setFormData({ ...formData, preferredWorkType: e.target.value as any })}
                  className="w-full sm:w-1/2 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs font-mono focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-xs"
                >
                  <option value="remote">Remote (リモート / 在宅作画)</option>
                  <option value="onsite_tokyo">Onsite (スタジオ魚 高島平スタジオ / 本社出社)</option>
                  <option value="hybrid">Hybrid (ハイブリッド)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Software Tools Used */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-black text-blue-600 dark:text-blue-400 font-mono uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-3">
                <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>03. Software Tools Used (使用ツール)</span>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Select software tools used:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {[
                    'CLIP STUDIO PAINT EX',
                    'Toon Boom Harmony',
                    'TVPaint Animation',
                    'Blender 3D',
                    'Adobe After Effects',
                    'Adobe Photoshop',
                    'RETAS STUDIO',
                    'CACANi'
                  ].map((swName) => {
                    const isSelected = formData.softwareSkills.includes(swName);
                    return (
                      <button
                        key={swName}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => {
                            const exists = prev.softwareSkills.includes(swName);
                            const updated = exists
                              ? prev.softwareSkills.filter((s) => s !== swName)
                              : [...prev.softwareSkills, swName];
                            return { ...prev, softwareSkills: updated };
                          });
                        }}
                        className={`p-3 rounded-xl border text-left transition-all font-mono flex items-center justify-between text-xs cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600 border-blue-600 text-white font-bold shadow-xs'
                            : 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-600 dark:hover:border-blue-400'
                        }`}
                      >
                        <span className="truncate">{swName}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-white ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 4: Portfolio Links & Self PR */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-black text-blue-600 dark:text-blue-400 font-mono uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-3">
                <Upload className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>04. Portfolio & Reel Links (作品集)</span>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.formPortfolioUrl} <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  value={formData.portfolioUrl}
                  onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                  placeholder="https://artstation.com/yourname or Google Drive link"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.formDemoReelUrl}
                </label>
                <input
                  type="url"
                  value={formData.demoReelUrl}
                  onChange={(e) => setFormData({ ...formData, demoReelUrl: e.target.value })}
                  placeholder="https://youtube.com/watch?v=... or Vimeo reel link"
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs font-mono focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  {t.formMotivation}
                </label>
                <textarea
                  rows={3}
                  value={formData.motivationMessage}
                  onChange={(e) => setFormData({ ...formData, motivationMessage: e.target.value })}
                  placeholder="Please describe your animation goals, line quality, favorite anime titles..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs font-sans focus:border-blue-600 dark:focus:border-blue-400 focus:outline-none shadow-xs font-medium"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
              <div className="text-xs text-slate-600 dark:text-slate-400 font-mono flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Reviewed by Studio Sakana Production Desk</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 rounded bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold text-xs font-mono uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
              >
                {isSubmitting ? (
                  <span>{t.formSubmitting}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.formSubmit}</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
