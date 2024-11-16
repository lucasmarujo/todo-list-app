import React from 'react';
import { useTodoStore } from '../store/todoStore';
import { CheckCircle2, Circle, AlertCircle } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const Dashboard: React.FC = () => {
  const todos = useTodoStore((state) => state.todos);
  const currentTheme = useThemeStore((state) => state.currentTheme);

  const iconColor = `text-${currentTheme}-600`;

  const stats = {
    total: todos.length,
    completed: todos.filter((todo) => todo.completed).length,
    pending: todos.filter((todo) => !todo.completed).length,
    high: todos.filter((todo) => todo.priority === 'high' && !todo.completed).length,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total de tarefas</p>
            <p className="text-2xl font-semibold">{stats.total}</p>
          </div>
          <Circle className={`w-8 h-8 ${iconColor}`} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Completas</p>
            <p className="text-2xl font-semibold">{stats.completed}</p>
          </div>
          <CheckCircle2 className={`w-8 h-8 ${iconColor}`} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Pendente</p>
            <p className="text-2xl font-semibold">{stats.pending}</p>
          </div>
          <Circle className={`w-8 h-8 ${iconColor}`} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Prioridade Alta</p>
            <p className="text-2xl font-semibold">{stats.high}</p>
          </div>
          <AlertCircle className={`w-8 h-8 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;