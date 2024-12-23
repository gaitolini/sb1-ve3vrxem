import React from 'react';
import { format, startOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface CalendarGridProps {
  currentDate: Date;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

export function CalendarGrid({ currentDate, selectedDate, onSelectDate }: CalendarGridProps) {
  const weekDays = Array.from({ length: 7 }).map((_, i) => {
    const date = startOfWeek(currentDate, { locale: ptBR });
    return format(addDays(date, i), 'EEEEEE', { locale: ptBR });
  });

  const getDayClassName = (day: Date) => {
    return `h-10 w-10 rounded-full flex items-center justify-center text-sm ${
      !isSameMonth(day, currentDate)
        ? 'text-gray-400'
        : isSameDay(day, selectedDate)
        ? 'bg-blue-600 text-white'
        : 'hover:bg-gray-100 text-gray-900'
    }`;
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <CalendarDays
        currentDate={currentDate}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
        getDayClassName={getDayClassName}
      />
    </div>
  );
}

interface CalendarDaysProps {
  currentDate: Date;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  getDayClassName: (day: Date) => string;
}

function CalendarDays({ currentDate, selectedDate, onSelectDate, getDayClassName }: CalendarDaysProps) {
  const days = getCalendarDays(currentDate);

  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((day, idx) => (
        <button
          key={idx}
          onClick={() => onSelectDate(day)}
          className={getDayClassName(day)}
        >
          {format(day, 'd')}
        </button>
      ))}
    </div>
  );
}

function getCalendarDays(date: Date): Date[] {
  const start = startOfWeek(date, { locale: ptBR });
  const days: Date[] = [];

  for (let i = 0; i < 42; i++) {
    days.push(addDays(start, i));
  }

  return days;
}