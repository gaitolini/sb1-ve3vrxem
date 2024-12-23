import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Settings } from 'lucide-react';

export function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Área Administrativa</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          to="/admin/schedule"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col items-center text-center">
            <Calendar className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Agendamento</h2>
            <p className="text-gray-600">
              Agende e gerencie publicações futuras
            </p>
          </div>
        </Link>

        <Link
          to="/admin/publications"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col items-center text-center">
            <FileText className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Publicações</h2>
            <p className="text-gray-600">
              Gerencie todas as publicações
            </p>
          </div>
        </Link>

        <Link
          to="/admin/settings"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex flex-col items-center text-center">
            <Settings className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Configurações</h2>
            <p className="text-gray-600">
              Configure parâmetros do sistema
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}