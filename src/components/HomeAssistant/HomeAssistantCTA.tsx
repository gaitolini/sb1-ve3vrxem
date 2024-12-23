import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeAssistantCTA: React.FC = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Pronto para Transformar sua Casa?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Posso ajudar você a implementar soluções de automação residencial personalizadas,
        integrando dispositivos IoT, criando automações inteligentes e garantindo a
        segurança do seu sistema.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Fale Comigo
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default HomeAssistantCTA;