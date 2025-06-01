// src/utils/imageUpload.js
// Helper functions for managing project images

export const IMAGE_CATEGORIES = {
    SCREENSHOT: 'screenshot',
    UI_MOCKUP: 'ui_mockup',
    ARCHITECTURE: 'architecture',
    DEMO: 'demo',
    MOBILE: 'mobile',
    DESKTOP: 'desktop'
  };
  
  export const createImageObject = (url, caption, category = null, alt = null) => ({
    url,
    caption: typeof caption === 'string' ? { en: caption, ar: caption } : caption,
    category,
    alt: alt || caption
  });
  
  export const addImageToProject = (project, imageUrl, caption, category = null) => {
    const newImage = createImageObject(imageUrl, caption, category);
    
    return {
      ...project,
      images: [...(project.images || []), newImage]
    };
  };
  
  export const removeImageFromProject = (project, imageIndex) => {
    if (!project.images || imageIndex < 0 || imageIndex >= project.images.length) {
      return project;
    }
    
    return {
      ...project,
      images: project.images.filter((_, index) => index !== imageIndex)
    };
  };
  
  export const updateImageCaption = (project, imageIndex, newCaption) => {
    if (!project.images || imageIndex < 0 || imageIndex >= project.images.length) {
      return project;
    }
    
    const updatedImages = [...project.images];
    updatedImages[imageIndex] = {
      ...updatedImages[imageIndex],
      caption: typeof newCaption === 'string' ? { en: newCaption, ar: newCaption } : newCaption
    };
    
    return {
      ...project,
      images: updatedImages
    };
  };
  
  export const reorderImages = (project, fromIndex, toIndex) => {
    if (!project.images || fromIndex < 0 || toIndex < 0 || 
        fromIndex >= project.images.length || toIndex >= project.images.length) {
      return project;
    }
    
    const updatedImages = [...project.images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    
    return {
      ...project,
      images: updatedImages
    };
  };
  
  export const getImagesByCategory = (project, category) => {
    if (!project.images) return [];
    
    return project.images.filter(image => image.category === category);
  };
  
  export const validateImageUrl = (url) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const urlPattern = /^https?:\/\/.+/i;
    
    if (!urlPattern.test(url)) {
      return { valid: false, error: 'Invalid URL format' };
    }
    
    const hasValidExtension = imageExtensions.some(ext => 
      url.toLowerCase().includes(ext)
    );
    
    if (!hasValidExtension && !url.includes('unsplash.com') && !url.includes('images.')) {
      return { valid: false, error: 'URL does not appear to be an image' };
    }
    
    return { valid: true };
  };
  
  // Example usage for adding multiple images to a project
  export const createProjectWithImages = (baseProject, imageData) => {
    const imagesArray = imageData.map(img => createImageObject(
      img.url, 
      img.caption, 
      img.category, 
      img.alt
    ));
    
    return {
      ...baseProject,
      images: imagesArray
    };
  };
  
  // Helper to convert old single image format to new multiple images format
  export const migrateProjectImages = (project) => {
    if (project.images && project.images.length > 0) {
      return project; // Already has multiple images
    }
    
    if (project.image) {
      return {
        ...project,
        images: [createImageObject(
          project.image, 
          project.title, 
          IMAGE_CATEGORIES.SCREENSHOT
        )]
      };
    }
    
    return project;
  };