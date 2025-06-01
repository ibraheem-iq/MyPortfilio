// src/components/sections/Hero.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { HERO_CONTACT_INFO, HERO_SOCIAL_LINKS,SOCIAL_LINKS } from '../../data/constants';
import { useTypewriter } from '../../hooks/useTypewriter';
import Section from '../common/Section';
import IconComponent from '../common/IconComponent';
import avatarImage from '../../assets/avatar.jpg';
console.log(SOCIAL_LINKS)
const Hero = ({ language, t }) => {
  const displayText = useTypewriter(t('hero.title'));
  
  // Generate fixed positions for floating elements to prevent re-positioning on re-renders
  const [floatingElements] = React.useState(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: 3 + Math.random() * 4
    }))
  );
  
  // Function to get the appropriate display text for contact info
  const getContactDisplayText = (item) => {
    const translationKey = `hero.contact.${item.icon.toLowerCase()}`;
    const translatedText = t(translationKey);
    
    // If translation exists and is different from the key, use it
    // Otherwise, fall back to the original text
    return translatedText !== translationKey ? translatedText : item.text;
  };
  
  return (
    <Section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float"
            style={{
              left: `${element.left}%`,
              top: `${element.top}%`,
              animationDelay: `${element.animationDelay}s`,
              animationDuration: `${element.animationDuration}s`
            }}
          >
            <div className="w-2 h-2 bg-blue-400/30 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
            <img
              width={128}
              height={128}
              src={avatarImage}
              alt="Ibrahim Anmar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in">
          IBRAHIM ANMAR
        </h1>
        
        <div className="h-8 mb-8">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
            {displayText}<span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {HERO_CONTACT_INFO.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <IconComponent name={item.icon} size={16} className="text-blue-600" />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {getContactDisplayText(item)}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {SOCIAL_LINKS.map((social, index) => (
            <a key={index} href={social.url} className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <IconComponent name={social.icon} size={24} className="text-gray-700 dark:text-gray-300" />
            </a>
          ))}
        </div>

        <button
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <ChevronDown size={24} className="text-gray-700 dark:text-gray-300" />
        </button>
      </div>
    </Section>
  );
};

export default Hero;