// src/components/sections/Projects/ProjectModal.jsx
// Alternative implementation using a modal instead of full page

import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Code, Star, Users } from 'lucide-react';

const ProjectModal = ({ project, language, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 hover:bg-white dark:hover:bg-gray-800 transition-colors"
        >
          <X size={20} className="text-gray-600 dark:text-gray-300" />
        </button>

        {/* Project Image */}
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title[language]}
            className="w-full h-64 object-cover"
          />
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                <Star size={16} />
                <span>{language === 'en' ? 'Featured' : 'مميز'}</span>
              </span>
            </div>
          )}
        </div>

        <div className="p-8">
          {/* Project Title & Description */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title[language]}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {project.description[language]}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Code size={20} className="mr-2" />
              {language === 'en' ? 'Technologies Used' : 'التقنيات المستخدمة'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-xs">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Stats */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Code size={24} className="mx-auto mb-2 text-blue-600" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {language === 'en' ? 'Technologies' : 'التقنيات'}
                </p>
                <p className="text-xl font-bold text-blue-600">{project.technologies.length}</p>
              </div>
              <div>
                <Star size={24} className="mx-auto mb-2 text-yellow-500" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {language === 'en' ? 'Featured' : 'مميز'}
                </p>
                <p className="text-lg font-bold text-yellow-500">
                  {project.featured ? (language === 'en' ? 'Yes' : 'نعم') : (language === 'en' ? 'No' : 'لا')}
                </p>
              </div>
              <div>
                <Users size={24} className="mx-auto mb-2 text-green-600" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {language === 'en' ? 'Category' : 'الفئة'}
                </p>
                <p className="text-lg font-bold text-green-600 capitalize">
                  {project.category}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => window.open(project.github, '_blank')}
              className="flex-1 flex items-center justify-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors"
            >
              <Github size={20} />
              <span>{language === 'en' ? 'View Code' : 'عرض الكود'}</span>
            </button>
            <button
              onClick={() => window.open(project.demo, '_blank')}
              className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <ExternalLink size={20} />
              <span>{language === 'en' ? 'Live Demo' : 'معاينة مباشرة'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;