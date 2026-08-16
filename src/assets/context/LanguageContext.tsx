import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/studioData';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof UI_TRANSLATIONS['ja'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ja');

  const t = UI_TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
