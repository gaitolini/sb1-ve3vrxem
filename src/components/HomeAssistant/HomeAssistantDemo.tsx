import React from 'react';
import { ExternalLink, Key } from 'lucide-react';

const HomeAssistantDemo: React.FC = () => {
  return (
    <section className="mb-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Experimente o Home Assistant
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Você está convidado a experimentar nossa demonstração do Home Assistant e ver na prática como
          funciona uma casa inteligente. Acesse nossa plataforma e controle alguns dispositivos reais
          da minha própria casa!
        </p>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Key className="h-5 w-5 mr-2" />
            Credenciais de Acesso
          </h3>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p>Usuário: <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">convidado</code></p>
            <p>Senha: <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">convidado</code></p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://ha.gaitolini.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Acessar Demonstração
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
          <a
            href="https://homeassistant.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Conhecer Home Assistant
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeAssistantDemo;