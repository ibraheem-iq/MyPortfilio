// src/components/sections/Experience.jsx
import React from 'react';
import { Calendar } from 'lucide-react';
import Section from '../common/Section';
import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';

const Experience = ({ t }) => {
  const experiences = t('experience.experiences');

  return (
    <Section id="experience" className="bg-gray-50 dark:bg-gray-800">
      <Container>
        <SectionHeader title={t('experience.title')} />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.company}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.position}</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Experience;