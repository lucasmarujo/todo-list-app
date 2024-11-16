import React from 'react';
import Dashboard from '../components/Dashboard';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import { motion } from 'framer-motion';

const TasksPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Geral</h1>
      <Dashboard />
      <AddTodoForm />
      <TodoList />
    </motion.div>
  );
};

export default TasksPage;