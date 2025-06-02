// src/components/sections/Projects/ProjectCard.jsx
import React from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';
import Card from '../../common/Card';

const ProjectCard = ({ project, language, onProjectClick }) => (
  <Card className="group overflow-hidden hover:-translate-y-1 transform cursor-pointer">
    {project.featured && (
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {language === 'en' ? 'Featured' : 'مميز'}
        </span>
      </div>
    )}
    <div className="relative overflow-hidden" onClick={() => onProjectClick(project)}>
      {/* Auto sizing - uses natural image dimensions */}
      <div className="w-full h-auto">
        <img 
          src={project.image} 
          alt={project.title[language]}
          className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
          <Eye size={24} className="text-white" />
        </div>
      </div>
    </div>
    <div className="p-6">
      <h4 
        className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        onClick={() => onProjectClick(project)}
      >
        {project.title[language]}
      </h4>
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
      <div className="flex space-x-2">
        <button
          onClick={() => onProjectClick(project)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-center text-sm font-medium flex items-center justify-center space-x-1"
        >
          <Eye size={16} />
          <span>{language === 'en' ? 'View Details' : 'عرض التفاصيل'}</span>
        </button>
      </div>
    </div>
  </Card>
);

export default ProjectCard;