import React from 'react';
import { SearchForm } from '../components/SearchForm';

export function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Consultar Publicações
      </h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <SearchForm />
      </div>

      <div className="mt-8">
        {/* Results will be displayed here */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-500 text-center">
            Use o formulário acima para pesquisar publicações
          </p>
        </div>
      </div>
    </div>
  );
}