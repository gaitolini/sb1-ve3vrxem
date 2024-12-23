import React from 'react';

export const FooterCopyright: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
      <p className="text-gray-600 dark:text-gray-300">
        © {currentYear} Anderson Gaitolini. Todos os direitos reservados.
      </p>
    </div>
  );
};