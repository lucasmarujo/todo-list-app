import React from 'react';
import { format, isToday } from 'date-fns';
import { Todo } from '../../types/todo';
import { motion } from 'framer-motion';

interface CalendarDayProps {
  date: Date;
  isCurrentMonth: boolean;
  todos: Todo[];
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date, isCurrentMonth, todos }) => {
  const dayClasses = `min-h-[120px] p-2 bg-white ${
    !isCurrentMonth ? 'text-gray-400' : ''
  }`;

  const todayClasses = isToday(date)
    ? 'bg-emerald-100 text-emerald-800 font-semibold'
    : '';

  return (
    <div className={dayClasses}>
      <div className={`text-right mb-2 ${todayClasses}`}>
        {format(date, 'd')}
      </div>
      <div className="space-y-1">
        {todos.slice(0, 3).map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xs p-1 rounded ${
              todo.completed
                ? 'bg-gray-100 text-gray-600 line-through'
                : 'bg-emerald-100 text-emerald-800'
            }`}
          >
            {todo.title}
          </motion.div>
        ))}
        {todos.length > 3 && (
          <div className="text-xs text-gray-500">
            +{todos.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;