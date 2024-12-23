import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Vamos Conversar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Estou sempre interessado em novos projetos e desafios tecnológicos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <ContactForm />
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;