import React from 'react';
import { FileDown, Mail, Linkedin, Github } from 'lucide-react';

const ResumeDownload: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors mb-8">
          <FileDown className="h-5 w-5 mr-2" />
          Baixar Currículo (PDF)
        </button>
        
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:gaitolini@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/andersongaitolini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/gaitolini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ResumeDownload;