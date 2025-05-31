// src/components/sections/Projects/ProjectCard.jsx
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Card from '../../common/Card';

const ProjectCard = ({ project, language }) => (
  <Card className="group overflow-hidden hover:-translate-y-1 transform">
    {project.featured && (
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {language === 'en' ? 'Featured' : 'مميز'}
        </span>
      </div>
    )}
    <div className="relative overflow-hidden">
      <img 
        src={project.image} 
        alt={project.title[language]}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title[language]}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{project.description[language]}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
      <div className="flex space-x-3">
        <a 
          href={project.github} 
          className="flex-1 bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-center text-sm font-medium"
        >
          <Github size={16} className="inline mr-2" />
          Code
        </a>
        <a 
          href={project.demo} 
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-center text-sm font-medium"
        >
          <ExternalLink size={16} className="inline mr-2" />
          Demo
        </a>
      </div>
    </div>
  </Card>
);

export default ProjectCard;