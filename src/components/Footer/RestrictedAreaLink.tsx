import React from 'react';
import { Lock } from 'lucide-react';

export const RestrictedAreaLink: React.FC = () => {
  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Área Restrita
      </h4>
      <a
        href="/admin"
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <Lock className="h-5 w-5" />
        <span>Acesso Administrativo</span>
      </a>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Área exclusiva para gerenciamento do conteúdo
      </p>
    </div>
  );
};