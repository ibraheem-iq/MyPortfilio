// src/components/sections/Projects/ProjectDetail.jsx
import React from 'react';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, Star, Package } from 'lucide-react';
import Container from '../../common/Container';
import Button from '../../common/Button';
import ImageGallery from './ImageGallery';

const ProjectDetail = ({ project, language, onBack }) => {
  if (!project) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <Container className="max-w-6xl">
        {/* Back Button */}
        <Button
          onClick={onBack}
          className="mb-8 flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          variant="ghost"
        >
          <ArrowLeft size={20} />
          <span>{language === 'en' ? 'Back to Projects' : 'العودة إلى المشاريع'}</span>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Images Gallery */}
          <div className="relative">
            <ImageGallery 
              images={project.images || [{ url: project.image, caption: { en: project.title.en, ar: project.title.ar } }]}
              language={language}
              projectTitle={project.title[language]}
            />
            {project.featured && (
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <Star size={16} />
                  <span>{language === 'en' ? 'Featured' : 'مميز'}</span>
                </span>
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title[language]}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.description[language]}
              </p>
            </div>

            {/* Technologies */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Code size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                {language === 'en' ? 'Technologies Used' : 'التقنيات المستخدمة'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-white dark:bg-gray-800 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-300 dark:border-blue-600 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Packages */}
            {project.packages && project.packages.length > 0 && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Package size={20} className="mr-2 text-purple-600 dark:text-purple-400" />
                  {language === 'en' ? 'Packages & Libraries' : 'المكتبات والحزم'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.packages.map((pkg) => (
                    <div 
                      key={pkg}
                      className="bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-300 px-4 py-3 rounded-lg text-sm font-medium border border-purple-300 dark:border-purple-600 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span>{pkg}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Category */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <Users size={20} className="mr-2 text-gray-600 dark:text-gray-400" />
                {language === 'en' ? 'Project Category' : 'فئة المشروع'}
              </h3>
              <span className={`inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                project.category === 'web' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-purple-500 to-violet-500 text-white shadow-lg'
              }`}>
                {project.category === 'web' 
                  ? (language === 'en' ? '🌐 Web Application' : '🌐 تطبيق ويب')
                  : (language === 'en' ? '📱 Mobile Application' : '📱 تطبيق هاتف')
                }
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              {/* <Button
                onClick={() => window.open(project.github, '_blank')}
                className="flex items-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 px-6 py-3 rounded-lg"
              >
                <Github size={20} />
                <span>{language === 'en' ? 'View Code' : 'عرض الكود'}</span>
              </Button> */}
              {/* <Button
                onClick={() => window.open(project.demo, '_blank')}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
              >
                <ExternalLink size={20} />
                <span>{language === 'en' ? 'Live Demo' : 'معاينة مباشرة'}</span>
              </Button> */}
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        {project.keyFeatures && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {language === 'en' ? 'Key Features' : 'الميزات الرئيسية'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {language === 'en' ? 'Project Overview' : 'نظرة عامة على المشروع'}
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <Code size={32} className="mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Technologies' : 'التقنيات'}
              </h3>
              <p className="text-2xl font-bold text-blue-600">{project.technologies.length}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <Package size={32} className="mx-auto mb-3 text-purple-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Packages' : 'المكتبات'}
              </h3>
              <p className="text-2xl font-bold text-purple-600">{project.packages ? project.packages.length : 0}</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <Star size={32} className="mx-auto mb-3 text-yellow-500" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Featured' : 'مميز'}
              </h3>
              <p className="text-2xl font-bold text-yellow-500">
                {project.featured ? (language === 'en' ? 'Yes' : 'نعم') : (language === 'en' ? 'No' : 'لا')}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <Users size={32} className="mx-auto mb-3 text-green-600" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Category' : 'الفئة'}
              </h3>
              <p className="text-lg font-semibold text-green-600 capitalize">
                {project.category}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectDetail;