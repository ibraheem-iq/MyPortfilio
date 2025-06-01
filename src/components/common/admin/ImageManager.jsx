// src/components/admin/ImageManager.jsx
// Component for managing project images (for admin/editing purposes)

import React, { useState } from 'react';
import { Plus, X, Edit2, ArrowUp, ArrowDown, Save, Image as ImageIcon } from 'lucide-react';
import { addImageToProject, removeImageFromProject, updateImageCaption, reorderImages, validateImageUrl } from '../../utils/imageUpload';

const ImageManager = ({ project, onProjectUpdate, language }) => {
  const [isAddingImage, setIsAddingImage] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageCaption, setNewImageCaption] = useState({ en: '', ar: '' });
  const [editCaption, setEditCaption] = useState({ en: '', ar: '' });

  const handleAddImage = () => {
    const validation = validateImageUrl(newImageUrl);
    if (!validation.valid) {
      alert(validation.error);
      return;
    }

    const updatedProject = addImageToProject(project, newImageUrl, newImageCaption);
    onProjectUpdate(updatedProject);
    
    // Reset form
    setNewImageUrl('');
    setNewImageCaption({ en: '', ar: '' });
    setIsAddingImage(false);
  };

  const handleRemoveImage = (index) => {
    if (window.confirm('Are you sure you want to remove this image?')) {
      const updatedProject = removeImageFromProject(project, index);
      onProjectUpdate(updatedProject);
    }
  };

  const handleEditCaption = (index) => {
    const image = project.images[index];
    setEditCaption(image.caption || { en: '', ar: '' });
    setEditingIndex(index);
  };

  const handleSaveCaption = () => {
    const updatedProject = updateImageCaption(project, editingIndex, editCaption);
    onProjectUpdate(updatedProject);
    setEditingIndex(-1);
    setEditCaption({ en: '', ar: '' });
  };

  const handleMoveImage = (fromIndex, direction) => {
    const toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1;
    if (toIndex < 0 || toIndex >= project.images.length) return;
    
    const updatedProject = reorderImages(project, fromIndex, toIndex);
    onProjectUpdate(updatedProject);
  };

  const images = project.images || [];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
          <ImageIcon size={20} className="mr-2" />
          Project Images ({images.length})
        </h3>
        <button
          onClick={() => setIsAddingImage(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus size={16} />
          <span>Add Image</span>
        </button>
      </div>

      {/* Add New Image Form */}
      {isAddingImage && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-gray-900 dark:text-white mb-4">Add New Image</h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Caption (English)
                </label>
                <input
                  type="text"
                  value={newImageCaption.en}
                  onChange={(e) => setNewImageCaption(prev => ({ ...prev, en: e.target.value }))}
                  placeholder="Image description in English"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Caption (Arabic)
                </label>
                <input
                  type="text"
                  value={newImageCaption.ar}
                  onChange={(e) => setNewImageCaption(prev => ({ ...prev, ar: e.target.value }))}
                  placeholder="وصف الصورة بالعربية"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
                  dir="rtl"
                />
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={handleAddImage}
                disabled={!newImageUrl.trim()}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors"
              >
                Add Image
              </button>
              <button
                onClick={() => {
                  setIsAddingImage(false);
                  setNewImageUrl('');
                  setNewImageCaption({ en: '', ar: '' });
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Images List */}
      <div className="space-y-4">
        {images.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <ImageIcon size={48} className="mx-auto mb-4 opacity-50" />
            <p>No images added yet. Click "Add Image" to get started.</p>
          </div>
        ) : (
          images.map((image, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                {/* Image Preview */}
                <div className="flex-shrink-0">
                  <img
                    src={image.url}
                    alt={image.caption?.[language] || `Image ${index + 1}`}
                    className="w-24 h-18 object-cover rounded-md"
                  />
                </div>
                
                {/* Image Details */}
                <div className="flex-1 min-w-0">
                  {editingIndex === index ? (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Caption (English)
                        </label>
                        <input
                          type="text"
                          value={editCaption.en}
                          onChange={(e) => setEditCaption(prev => ({ ...prev, en: e.target.value }))}
                          className="w-full px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Caption (Arabic)
                        </label>
                        <input
                          type="text"
                          value={editCaption.ar}
                          onChange={(e) => setEditCaption(prev => ({ ...prev, ar: e.target.value }))}
                          className="w-full px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
                          dir="rtl"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSaveCaption}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm flex items-center space-x-1"
                        >
                          <Save size={14} />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={() => setEditingIndex(-1)}
                          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {image.caption?.[language] || `Image ${index + 1}`}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                        {image.url}
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Actions */}
                <div className="flex-shrink-0 flex flex-col space-y-1">
                  <button
                    onClick={() => handleMoveImage(index, 'up')}
                    disabled={index === 0}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowUp size={16} />
                  </button>
                  <button
                    onClick={() => handleMoveImage(index, 'down')}
                    disabled={index === images.length - 1}
                    className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowDown size={16} />
                  </button>
                  <button
                    onClick={() => handleEditCaption(index)}
                    className="p-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-200"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="p-1 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-200"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ImageManager;