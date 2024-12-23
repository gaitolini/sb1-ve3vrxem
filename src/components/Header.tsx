import React from 'react';
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants/links';

const Header: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { to: 'about', label: 'Sobre' },
    { to: 'projects', label: 'Projetos' },
    { to: 'services', label: 'Serviços' },
    { to: 'contact', label: 'Contato' },
  ];

  const renderNavLink = (to: string, label: string) => {
    if (isHomePage) {
      return (
        <ScrollLink
          key={to}
          to={to}
          smooth={true}
          duration={500}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition"
        >
          {label}
        </ScrollLink>
      );
    }
    return (
      <RouterLink
        key={to}
        to={`/#${to}`}
        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        {label}
      </RouterLink>
    );
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <RouterLink to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Anderson Gaitolini
            </RouterLink>
            <ThemeToggle />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(({ to, label }) => renderNavLink(to, label))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <button className="md:hidden text-gray-700 dark:text-gray-300">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;