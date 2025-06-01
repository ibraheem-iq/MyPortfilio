// src/hooks/useProjectRouter.js
import { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../data/projects';

const useProjectRouter = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    // Check URL hash on mount and hash change
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = parseInt(hash.replace('#project-', ''));
        const project = PROJECTS_DATA.find(p => p.id === projectId);
        if (project) {
          setSelectedProject(project);
          setShowDetail(true);
        }
      } else {
        setSelectedProject(null);
        setShowDetail(false);
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateToProject = (project) => {
    window.location.hash = `project-${project.id}`;
    setSelectedProject(project);
    setShowDetail(true);
  };

  const navigateBack = () => {
    window.history.pushState(null, '', window.location.pathname);
    setSelectedProject(null);
    setShowDetail(false);
  };

  return {
    selectedProject,
    showDetail,
    navigateToProject,
    navigateBack
  };
};

export default useProjectRouter;