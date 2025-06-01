// src/components/sections/Projects/ImageGallery.jsx - Enhanced version
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Monitor, Smartphone } from 'lucide-react';

const ImageGallery = ({ images, language, projectTitle }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageAspectRatios, setImageAspectRatios] = useState([]);

  useEffect(() => {
    // Calculate aspect ratios for all images
    const loadImageAspectRatios = async () => {
      const ratios = await Promise.all(
        images.map((image) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              const aspectRatio = img.width / img.height;
              resolve({
                aspectRatio,
                isWide: aspectRatio > 2, // Consider wide if aspect ratio > 2:1
                isMobile: aspectRatio < 0.7 // Consider mobile if aspect ratio < 0.7:1
              });
            };
            img.onerror = () => resolve({ aspectRatio: 1.5, isWide: false, isMobile: false });
            img.src = image.url;
          });
        })
      );
      setImageAspectRatios(ratios);
    };

    if (images && images.length > 0) {
      loadImageAspectRatios();
    }
  }, [images]);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const currentImageInfo = imageAspectRatios[selectedImageIndex];

  // Determine container height based on aspect ratio
  const getMainImageClasses = () => {
    if (!currentImageInfo) return "w-full h-auto max-h-[60vh] object-contain";
    
    if (currentImageInfo.isWide) {
      // Wide screenshots (like desktop apps, websites)
      return "w-full h-auto max-h-[50vh] object-contain";
    } else if (currentImageInfo.isMobile) {
      // Mobile screenshots (tall aspect ratio)
      return "w-full h-auto max-h-[70vh] object-contain mx-auto";
    } else {
      // Standard aspect ratios
      return "w-full h-auto max-h-[60vh] object-contain";
    }
  };

  const getThumbnailClasses = (index) => {
    const info = imageAspectRatios[index];
    if (!info) return "w-20 h-12 object-cover rounded-lg";
    
    if (info.isWide) {
      return "w-24 h-10 object-cover rounded-lg";
    } else if (info.isMobile) {
      return "w-12 h-16 object-cover rounded-lg";
    } else {
      return "w-20 h-12 object-cover rounded-lg";
    }
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-6">
        {/* Main Image Display */}
        <div className="relative group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-100 dark:bg-gray-800">
            {/* Image Type Indicator */}
            {currentImageInfo && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                  {currentImageInfo.isWide ? (
                    <>
                      <Monitor size={12} />
                      <span>{language === 'en' ? 'Desktop' : 'سطح المكتب'}</span>
                    </>
                  ) : currentImageInfo.isMobile ? (
                    <>
                      <Smartphone size={12} />
                      <span>{language === 'en' ? 'Mobile' : 'هاتف'}</span>
                    </>
                  ) : (
                    <span>{language === 'en' ? 'Standard' : 'عادي'}</span>
                  )}
                </div>
              </div>
            )}

            <img
              src={images[selectedImageIndex]?.url}
              alt={images[selectedImageIndex]?.caption?.[language] || projectTitle}
              className={`${getMainImageClasses()} cursor-pointer transition-transform duration-300 group-hover:scale-105`}
              onClick={() => openLightbox(selectedImageIndex)}
            />
            
            {/* Zoom Overlay */}
            <div 
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
              onClick={() => openLightbox(selectedImageIndex)}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <ZoomIn size={24} className="text-white" />
              </div>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700"
                >
                  <ChevronLeft size={20} className="text-gray-800 dark:text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white dark:hover:bg-gray-700"
                >
                  <ChevronRight size={20} className="text-gray-800 dark:text-white" />
                </button>
              </>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}
          </div>

          {/* Image Caption */}
          {images[selectedImageIndex]?.caption && (
            <div className="mt-4 text-center">
              <p className="text-gray-600 dark:text-gray-300 italic">
                {images[selectedImageIndex].caption[language]}
              </p>
            </div>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 relative overflow-hidden transition-all duration-300 ${
                  index === selectedImageIndex
                    ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900 rounded-lg'
                    : 'opacity-70 hover:opacity-100 rounded-lg'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption?.[language] || `Image ${index + 1}`}
                  className={getThumbnailClasses(index)}
                />
                {index === selectedImageIndex && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>
                )}
                
                {/* Thumbnail type indicator */}
                {imageAspectRatios[index] && (
                  <div className="absolute bottom-1 right-1">
                    {imageAspectRatios[index].isWide ? (
                      <Monitor size={8} className="text-white drop-shadow-lg" />
                    ) : imageAspectRatios[index].isMobile ? (
                      <Smartphone size={8} className="text-white drop-shadow-lg" />
                    ) : null}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-colors"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </>
          )}

          {/* Main Image */}
          <div className="max-w-full max-h-full flex flex-col items-center">
            <img
              src={images[selectedImageIndex]?.url}
              alt={images[selectedImageIndex]?.caption?.[language] || projectTitle}
              className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            
            {/* Caption in Lightbox */}
            {images[selectedImageIndex]?.caption && (
              <div className="mt-4 text-center max-w-2xl">
                <p className="text-white/80 text-lg">
                  {images[selectedImageIndex].caption[language]}
                </p>
              </div>
            )}

            {/* Image Counter in Lightbox */}
            {images.length > 1 && (
              <div className="mt-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;