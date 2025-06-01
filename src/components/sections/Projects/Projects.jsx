// src/components/sections/Projects/Projects.jsx
// Version with URL-based navigation using hash routing

import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../../data/projects';
import Section from '../../common/Section';
import Container from '../../common/Container';
import SectionHeader from '../../common/SectionHeader';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import useProjectRouter from '../../../hooks/useProjectRouter';

const Projects = ({ language, t }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { selectedProject, showDetail, navigateToProject, navigateBack } = useProjectRouter();
  
  const categories = [
    { id: 'all', name: t('projects.categories.all') },
    { id: 'mobile', name: t('projects.categories.mobile') },
    { id: 'web', name: t('projects.categories.web') }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(project => project.category === activeCategory);

  const featuredProjects = PROJECTS_DATA.filter(project => project.featured);

  // If showing project detail, render only the detail component
  if (showDetail && selectedProject) {
    return (
      <ProjectDetail 
        project={selectedProject}
        language={language}
        onBack={navigateBack}
      />
    );
  }

  return (
    <Section id="projects" className="bg-white dark:bg-gray-900">
      <Container className="max-w-7xl">
        <SectionHeader 
          title={t('projects.title')} 
          subtitle={t('projects.subtitle')} 
        />

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('projects.featured')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                language={language}
                onProjectClick={navigateToProject}
              />
            ))}
          </div>
        </div>

        {/* Project Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 flex space-x-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              language={language}
              onProjectClick={navigateToProject}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Projects;