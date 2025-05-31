import { useState, useEffect } from 'react';
import { THEMES } from '../data/constants';

export const useTheme = (initialTheme = 'light') => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex]);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return [theme, toggleTheme];
};