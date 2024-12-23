import React from 'react';
import { Briefcase } from 'lucide-react';
import { experienceData } from './data/experience';
import CollapsibleText from './components/CollapsibleText';

const Timeline: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Linha do Tempo Profissional
        </h2>
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-blue-500">
              <div className="absolute -left-3 top-0">
                <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400">{exp.role}</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period}
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mb-4">
                  <CollapsibleText text={exp.description} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.keywords.map((keyword, kidx) => (
                    <span
                      key={kidx}
                      className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;