// src/components/sections/Skills/Skills.jsx
import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import { SKILLS_DATA } from '../../../data/skills';
import Section from '../../common/Section';
import Container from '../../common/Container';
import SectionHeader from '../../common/SectionHeader';
import Card from '../../common/Card';
import IconComponent from '../../common/IconComponent';
import SkillBar from './SkillBar';

const Skills = ({ t }) => {
  const getLanguage = () => {
    // Simple way to detect language from translation function
    try {
      const testTranslation = t('skills.title');
      return testTranslation.includes('المهارات') ? 'ar' : 'en';
    } catch {
      return 'en';
    }
  };

  const currentLanguage = getLanguage();

  return (
    <Section id="skills" className="bg-gray-50 dark:bg-gray-800">
      <Container>
        <SectionHeader title={t('skills.title')} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <Card key={index} className="p-8">
              <div className="flex items-center mb-6">
                <IconComponent 
                  name={category.icon}
                  className={category.iconColor}
                  size={24}
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">
                  {category.title[currentLanguage]}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="text-blue-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">
                {t('skills.education')}
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">University Of Technology</h4>
                <p className="text-blue-600 dark:text-blue-400">Bachelor of Science in Computer Science – Software</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">2020 – 2024</p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-center mb-6">
              <Award className="text-purple-600" size={24} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-3">
                {t('skills.certifications')}
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">UniCoding Bootcamp</h4>
                <p className="text-purple-600 dark:text-purple-400">Full-stack mobile applications</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Python & Django, Dart & Flutter</p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Courses:</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">Python for Everybody <span className="text-gray-500 dark:text-gray-400">(Coursera)</span></p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">C++ <span className="text-gray-500 dark:text-gray-400">(Udemy)</span></p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">Databases with Python: MySQL, SQLite & MongoDB <span className="text-gray-500 dark:text-gray-400">(Udemy)</span></p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">The Complete Dart Development Guide <span className="text-gray-500 dark:text-gray-400">(Udemy)</span></p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">The Complete Flutter Development Guide <span className="text-gray-500 dark:text-gray-400">(Udemy)</span></p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">Learn Flutter and Dart to Create Android and iOS Apps <span className="text-gray-500 dark:text-gray-400">(Udemy)</span></p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">Google UX Design <span className="text-gray-500 dark:text-gray-400">(Coursera)</span></p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Skills;