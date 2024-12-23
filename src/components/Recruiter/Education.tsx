import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { educationData } from './data/education';

const Education: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Formação Acadêmica
        </h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                {edu.type === 'academic' ? (
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                ) : (
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                )}
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
                      {edu.details && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          {edu.details}
                        </p>
                      )}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                      {edu.period}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;