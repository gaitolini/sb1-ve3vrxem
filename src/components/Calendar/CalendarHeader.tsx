import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface CalendarHeaderProps {
  currentDate: Date;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}

export function CalendarHeader({ currentDate, onPreviousMonth, onNextMonth }: CalendarHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <button
        onClick={onPreviousMonth}
        className="p-2 hover:bg-gray-100 rounded-full"
        aria-label="Mês anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <h2 className="font-semibold text-gray-900">
        {format(currentDate, 'MMMM yyyy', { locale: ptBR })}
      </h2>
      
      <button
        onClick={onNextMonth}
        className="p-2 hover:bg-gray-100 rounded-full"
        aria-label="Próximo mês"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}