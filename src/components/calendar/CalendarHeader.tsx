import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format } from 'date-fns';
import AnimatedButton from '../shared/AnimatedButton';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  onPrevMonth,
  onNextMonth,
  onToday,
}) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <AnimatedButton
          variant="secondary"
          onClick={onToday}
          className="text-sm"
        >
          Hoje
        </AnimatedButton>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onPrevMonth}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNextMonth}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;