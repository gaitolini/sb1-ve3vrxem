import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} Diário Oficial. Todos os direitos reservados.
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              to="/admin"
              className="inline-flex items-center text-sm text-gray-300 hover:text-white"
            >
              <Lock className="h-4 w-4 mr-2" />
              Área Restrita
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}