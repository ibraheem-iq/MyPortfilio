import { useState } from 'react';
import { TRANSLATIONS } from '../data/translations';

export const useLanguage = (initialLanguage = 'en') => {
  const [language, setLanguage] = useState(initialLanguage);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = TRANSLATIONS[language];
    
    for (const key of keys) {
      value = value?.[key];
    }
    
    return value || path;
  };

  return [language, toggleLanguage, t];
};