import React from 'react';
import { PublicationForm } from '../components/PublicationForm';

export function SchedulePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Agendar Publicação
      </h1>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <PublicationForm />
      </div>
    </div>
  );
}