// src/components/sections/About.jsx
import React from 'react';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import Section from '../common/Section';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import IconComponent from '../common/IconComponent';

const About = ({ t }) => {
  const experienceYears = useAnimatedCounter(2);

  const services = [
    { icon: 'Smartphone', color: 'text-blue-200' },
    { icon: 'Monitor', color: 'text-purple-200' },
    { icon: 'Database', color: 'text-pink-200' },
    { icon: 'Zap', color: 'text-yellow-200' }
  ];

  return (
    <Section id="about" className="bg-white dark:bg-gray-900">
      <Container>
        <SectionHeader title={t('about.title')} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {Math.floor(experienceYears * 10) / 10}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {t('about.yearsExperience')}
                </div>
              </Card>
              <Card className="text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700">
                <div className="text-3xl font-bold text-purple-600 mb-2">8+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {t('about.projectsCompleted')}
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">{t('about.whatIDo')}</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <IconComponent name={service.icon} className={service.color} size={20} />
                    <span>{t(`about.services.${index}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;