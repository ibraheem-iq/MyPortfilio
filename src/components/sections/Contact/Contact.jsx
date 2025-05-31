// src/components/sections/Contact/Contact.jsx
import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../../data/constants';
import Section from '../../common/Section';
import Container from '../../common/Container';
import SectionHeader from '../../common/SectionHeader';
import IconComponent from '../../common/IconComponent';
import ContactForm from './ContactForm';

const Contact = ({ t }) => {
  return (
    <Section id="contact" className="bg-white dark:bg-gray-900">
      <Container>
        <SectionHeader 
          title={t('contact.title')} 
          subtitle={t('contact.subtitle')} 
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {t('contact.info')}
            </h3>
            <div className="space-y-6">
              {CONTACT_INFO.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${item.color}`}>
                    <IconComponent name={item.icon} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {t('contact.follow')}
              </h4>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className={`p-3 rounded-full transition-colors ${social.className}`}
                  >
                    <IconComponent name={social.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm t={t} />
        </div>
      </Container>
    </Section>
  );
};

export default Contact;