import React from 'react';
import { Link } from 'react-scroll';

export const FooterNav: React.FC = () => {
  const links = [
    { to: 'about', label: 'Sobre' },
    { to: 'projects', label: 'Projetos' },
    { to: 'services', label: 'Serviços' },
    { to: 'contact', label: 'Contato' },
  ];

  return (
    <div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Links Rápidos
      </h4>
      <nav className="space-y-3">
        {links.map(({ to, label }) => (
          <div key={to}>
            <Link
              to={to}
              smooth={true}
              duration={500}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            >
              {label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};