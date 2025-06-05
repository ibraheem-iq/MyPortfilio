// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../data/constants';
import { useScrollVisibility } from '../../hooks/useScrollVisibility';
import Container from '../common/Container';
import Button from '../common/Button';
import IconComponent from '../common/IconComponent';

const Header = ({ onToggleTheme, onToggleLanguage, onDownloadPDF, currentTheme, currentLanguage, t }) => {
  const isScrolled = useScrollVisibility(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDownloading, setIsDownloading] = useState(false);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = () => setIsMobileMenuOpen(false);
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_ITEMS.map(item => item.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    const section = item.toLowerCase();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(section);
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await onDownloadPDF();
      // Add a small delay for better UX
      setTimeout(() => setIsDownloading(false), 1000);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-xl border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}>
        <Container>
          <div className="flex justify-between items-center py-4">
            {/* Logo with enhanced styling */}
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative text-xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight hover:scale-105 transition-transform duration-300">
                IBRAHIM ANMAR
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAVIGATION_ITEMS.map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                      isActive 
                        ? 'text-blue-600 dark:text-blue-400' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-xl"></div>
                    )}
                    
                    {/* Hover background */}
                    <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    
                    <span className="relative z-10">{t(`navigation.${item}`)}</span>
                    
                    {/* Active dot indicator */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              {/* <button
                onClick={onToggleTheme}
                className="relative p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group overflow-hidden"
                title={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <IconComponent 
                  name={currentTheme === 'light' ? 'Moon' : 'Sun'} 
                  size={18}
                  className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                />
              </button> */}
              
              {/* Language Toggle */}
              <button
                onClick={onToggleLanguage}
                className="relative px-4 py-3 rounded-xl bg-gray-100/80 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 overflow-hidden font-semibold text-blue-50"
                title={`Switch to ${currentLanguage === 'en' ? 'Arabic' : 'English'}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-sm group-hover:scale-110 transition-transform duration-300">
                  {currentLanguage === 'en' ? 'عربي' : 'EN'}
                </span>
              </button>
              
              {/* Download CV Button */}
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`relative px-4 py-3 rounded-xl font-semibold transition-all duration-300 group overflow-hidden ${
                  isDownloading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25'
                } text-white`}
                title="Download my CV"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center space-x-2">
                  {isDownloading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <Download size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  )}
                  <span className="hidden sm:inline">
                    {isDownloading ? 'Downloading...' : 'My Cv' || 'My CV'}
                  </span>
                </div>
              </button>
              
              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="transition-transform duration-200 rotate-90" />
                ) : (
                  <Menu size={20} className="transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/20 dark:border-gray-700/20">
            <Container>
              <div className="py-4 space-y-2">
                {NAVIGATION_ITEMS.map((item, index) => {
                  const sectionId = item.toLowerCase();
                  const isActive = activeSection === sectionId;
                  
                  return (
                    <button
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{t(`navigation.${item}`)}</span>
                        {isActive && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </Container>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;