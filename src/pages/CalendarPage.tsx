import React, { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import {
  addMonths,
  subMonths,
  startOfToday,
  isSameDay,
} from 'date-fns';
import { motion } from 'framer-motion';
import CalendarHeader from '../components/calendar/CalendarHeader';
import CalendarGrid from '../components/calendar/CalendarGrid';
import TodoModal from '../components/calendar/TodoModal';

const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(startOfToday());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const todos = useTodoStore((state) => state.todos);

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const handleToday = () => setCurrentDate(startOfToday());

  const selectedTodos = selectedDate
    ? todos.filter((todo) => todo.dueDate && isSameDay(todo.dueDate, selectedDate))
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
        onToday={handleToday}
      />

      <CalendarGrid
        currentDate={currentDate}
        todos={todos}
      />

      <TodoModal
        date={selectedDate ?? new Date()}
        todos={selectedTodos}
        isOpen={!!selectedDate}
        onClose={() => setSelectedDate(null)}
      />
    </motion.div>
  );
};

export default CalendarPage;