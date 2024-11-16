import React from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  format,
} from 'date-fns';
import { Todo } from '../../types/todo';
import CalendarDay from './CalendarDay';

interface CalendarGridProps {
  currentDate: Date;
  todos: Todo[];
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ currentDate, todos }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="grid grid-cols-7 gap-px border-b">
        {weekDays.map((day) => (
          <div
            key={day}
            className="py-2 text-center text-sm font-semibold text-gray-700 bg-gray-50"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {days.map((day) => {
          const dayTodos = todos.filter((todo) =>
            todo.dueDate ? isSameDay(todo.dueDate, day) : false
          );

          return (
            <CalendarDay
              key={day.toString()}
              date={day}
              isCurrentMonth={isSameMonth(day, currentDate)}
              todos={dayTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;