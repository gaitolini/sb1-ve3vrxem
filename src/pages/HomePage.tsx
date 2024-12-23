import React from 'react';
import { SearchForm } from '../components/SearchForm';
import { Calendar } from '../components/Calendar/Calendar';
import { PublicationList } from '../components/PublicationList';

const mockPublications = [
  {
    id: '1',
    title: 'Decreto Municipal nº 123/2024',
    publicationDate: '2024-03-15',
    number: '868/2024'
  },
  {
    id: '2',
    title: 'Portaria nº 45/2024 - Secretaria de Administração',
    publicationDate: '2024-03-14',
    number: '867/2024'
  },
  {
    id: '3',
    title: 'Edital de Licitação - Pregão Eletrônico 001/2024',
    publicationDate: '2024-03-13',
    number: '866/2024'
  }
];

export function HomePage() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-12 gap-8">
        {/* Coluna da Esquerda - Calendário */}
        <div className="md:col-span-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">Calendário de Publicações</h2>
            <Calendar
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
            />
          </div>
        </div>

        {/* Coluna da Direita - Pesquisa e Lista */}
        <div className="md:col-span-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Consulta de Publicações</h2>
            <SearchForm />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Últimas Publicações</h2>
            <PublicationList publications={mockPublications} />
          </div>
        </div>
      </div>
    </div>
  );
}