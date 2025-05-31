// src/components/layout/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../data/constants';
import Container from '../common/Container';
import IconComponent from '../common/IconComponent';

const Footer = ({ t }) => {
  const footerSections = [
    {
      title: 'IBRAHIM ANMAR',
      isLogo: true,
      content: (
        <>
          <p className="text-gray-400 mb-4">{t('footer.description')}</p>
          <div className="flex space-x-4">
            {['Github', 'Linkedin', 'Globe'].map((social) => (
              <a key={social} href="https://www.linkedin.com/in/ibrahim-anmar-637936215/" className="text-gray-400 hover:text-white transition-colors">
                <IconComponent name={social} size={20} />
              </a>
            ))}
          </div>
        </>
      )
    },
    {
      title: t('footer.quickLinks'),
      content: (
        <ul className="space-y-2 text-gray-400">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-white transition-colors"
              >
                {t(`navigation.${item}`)}
              </a>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: t('footer.contactInfo'),
      content: (
        <div className="space-y-2 text-gray-400">
          <p className="flex items-center">
            <Mail size={16} className="mr-2" /> 
            ibrahimanmar2002@gmail.com
          </p>
          <p className="flex items-center">
            <Phone size={16} className="mr-2" /> 
            +964 771 478 3423
          </p>
          <p className="flex items-center">
            <MapPin size={16} className="mr-2" /> 
            Baghdad, Iraq
          </p>
        </div>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className={`text-xl font-bold mb-4 ${
                section.isLogo ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' : ''
              }`}>
                {section.title}
              </h3>
              {section.content}
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ibrahim Anmar. {t('footer.rights')}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;