import React from 'react';
import { Code2, Rocket } from 'lucide-react';

const RecruiterHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Anderson Gaitolini
          <span className="block text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mt-2">
            Desenvolvedor Sênior & Entusiasta em Tecnologia
          </span>
        </h1>
        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300 mb-8">
          <Code2 className="h-5 w-5" />
          <p className="text-xl italic">
            "Transformando ideias em soluções tecnológicas de alto impacto"
          </p>
          <Rocket className="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}

export default RecruiterHero;