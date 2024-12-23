import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const FeaturedProject: React.FC = () => {
  const achievements = [
    "Automatização de processos fiscais",
    "Integração com sistemas governamentais",
    "Otimização de consultas SQL complexas",
    "Redução de 40% no tempo de processamento"
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Projeto em Destaque
        </h2>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
          <div className="flex items-center space-x-2 mb-4">
            <Star className="h-6 w-6 text-yellow-500" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              SIATU - Sistema de Gestão Tributária
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Como desenvolvedor principal na Prefeitura de Blumenau, liderei o desenvolvimento
            do SIATU, um sistema completo de gestão tributária que revolucionou os processos
            fiscais do município.
          </p>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;