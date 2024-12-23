import React from 'react';
import { FileText, Download } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Publication {
  id: string;
  title: string;
  publicationDate: string;
  number: string;
}

interface PublicationListProps {
  publications: Publication[];
}

export function PublicationList({ publications }: PublicationListProps) {
  return (
    <div className="space-y-4">
      {publications.map((pub) => (
        <div
          key={pub.id}
          className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <FileText className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">{pub.title}</h3>
                <div className="text-sm text-gray-500 mt-1">
                  <span>Nº {pub.number}</span>
                  <span className="mx-2">•</span>
                  <span>
                    {format(new Date(pub.publicationDate), "dd 'de' MMMM 'de' yyyy", {
                      locale: ptBR,
                    })}
                  </span>
                </div>
              </div>
            </div>
            <button
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
              aria-label="Baixar publicação"
            >
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}