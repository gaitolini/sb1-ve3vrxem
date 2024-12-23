import React from 'react';
import { Calendar, Target, Lightbulb } from 'lucide-react';

const ProfessionalSummary: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Resumo Profissional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Calendar className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Experiência
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              10+ anos em desenvolvimento de software
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Delphi, SQL, GoLang, Docker, AWS, IoT
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Lightbulb className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Objetivo
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Impulsionar a transformação digital com soluções escaláveis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalSummary;