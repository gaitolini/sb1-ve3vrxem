import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies?: string[];
  demoLink?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  technologies,
  demoLink 
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg transition-all hover:shadow-xl">
      <div className="flex items-center space-x-4 mb-4">
        <div className="text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      {technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center space-x-4">
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
        >
          Solicitar Consultoria
          <ArrowRight className="ml-2 h-4 w-4" />
        </ScrollLink>
        {demoLink && (
          <RouterLink
            to={demoLink}
            className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
          >
            Experimente
            <ArrowRight className="ml-2 h-4 w-4" />
          </RouterLink>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;