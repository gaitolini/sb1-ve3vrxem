import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <BookOpen size={32} />
            <span className="text-2xl font-bold">Diário Oficial</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/search" className="flex items-center space-x-2 hover:text-blue-200">
              <Search size={20} />
              <span>Consultar</span>
            </Link>
            <Link to="/schedule" className="flex items-center space-x-2 hover:text-blue-200">
              <Calendar size={20} />
              <span>Agendar</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}