// src/components/sections/Contact/ContactForm.jsx
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Card from '../../common/Card';
import Button from '../../common/Button';

const ContactForm = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setFormData({ name: '', email: '', message: '' });
    
    // Show success message (you could implement a toast notification here)
    alert('Message sent successfully!');
  };

  return (
    <Card className="bg-gray-50 dark:bg-gray-800 p-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {t('contact.form.title')}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder={t('contact.form.namePlaceholder')}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder={t('contact.form.emailPlaceholder')}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-vertical"
            placeholder={t('contact.form.messagePlaceholder')}
          ></textarea>
        </div>
        <Button type="submit" className="w-full">
          <MessageCircle size={18} className="mr-2" />
          {t('contact.form.send')}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;