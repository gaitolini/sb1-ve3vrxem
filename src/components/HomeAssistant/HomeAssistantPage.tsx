import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import HomeAssistantFeatures from './HomeAssistantFeatures';
import HomeAssistantDemo from './HomeAssistantDemo';
import HomeAssistantCTA from './HomeAssistantCTA';

const HomeAssistantPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <nav className="mb-8 flex items-center space-x-4">
          <Link
            to="/"
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar para página inicial
          </Link>
        </nav>

        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Casa Inteligente com Home Assistant
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Transforme sua casa em um ambiente inteligente, sustentável e seguro
          </p>
        </header>

        <HomeAssistantFeatures />
        <HomeAssistantDemo />
        <HomeAssistantCTA />
      </div>
    </div>
  );
}

export default HomeAssistantPage;