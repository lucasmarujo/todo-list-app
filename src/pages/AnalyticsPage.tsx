import React from 'react';
import { useTodoStore } from '../store/todoStore';
import { motion } from 'framer-motion';
import { PieChart, BarChart, Activity } from 'lucide-react';

const AnalyticsPage: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const stats = {
    total: todos.length,
    completed: todos.filter((todo) => todo.completed).length,
    byPriority: {
      high: todos.filter((todo) => todo.priority === 'high').length,
      medium: todos.filter((todo) => todo.priority === 'medium').length,
      low: todos.filter((todo) => todo.priority === 'low').length,
    },
  };

  const completionRate = stats.total ? ((stats.completed / stats.total) * 100).toFixed(1) : '0';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Analise geral</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <PieChart className="w-6 h-6 text-black-600" />
            <h2 className="text-lg font-semibold">Taxa de conclusão</h2>
          </div>
          <p className="text-3xl font-bold text-black-600">{completionRate}%</p>
          <p className="text-sm text-gray-600 mt-2">
            {stats.completed} de {stats.total} tarefas completas
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="w-6 h-6 text-black-600" />
            <h2 className="text-lg font-semibold">Distribuição de Prioridade</h2>
          </div>
          <div className="space-y-2">
            {Object.entries(stats.byPriority).map(([priority, count]) => (
              <div key={priority} className="flex items-center gap-2">
                <span className="capitalize text-sm">{priority}:</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(count / stats.total) * 100}%` }}
                    className={`h-full ${
                      priority === 'high'
                        ? 'bg-red-500'
                        : priority === 'medium'
                        ? 'bg-yellow-500'
                        : 'bg-black-500'
                    }`}
                  />
                </div>
                <span className="text-sm text-gray-600">{count}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-black-600" />
            <h2 className="text-lg font-semibold">Status Tarefas</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Tarefas Ativas</p>
              <p className="text-2xl font-semibold">{stats.total - stats.completed}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tarefas Completas</p>
              <p className="text-2xl font-semibold">{stats.completed}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnalyticsPage;