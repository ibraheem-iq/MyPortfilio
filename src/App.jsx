// src/App.jsx
import React from 'react';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';
import Contact from './components/sections/Contact/Contact';

// Styles
import './styles/globals.css';
import './styles/animations.css';

const App = () => {
  const [theme, toggleTheme] = useTheme('light');
  const [language, toggleLanguage, t] = useLanguage('en');

  const downloadPDF = () => {
    try {
      const driveFolderLink = 'https://drive.google.com/file/d/1PZ9-FCdblzXb-3T0TWh2YZgEukrq5nJI/view?usp=sharing';
      window.open(driveFolderLink, '_blank');
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header
        onToggleTheme={toggleTheme}
        onToggleLanguage={toggleLanguage}
        onDownloadPDF={downloadPDF}
        currentTheme={theme}
        currentLanguage={language}
        t={t}
      />
      
      <Hero language={language} t={t} />
      
      <main>
        <About t={t} />
        <Experience t={t} />
        <Projects language={language} t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
      
      <Footer t={t} />
      <BackToTop />
    </div>
  );
};

export default App;