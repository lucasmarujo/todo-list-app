import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/shared/AnimatedButton';
import { Save, Trash2 } from 'lucide-react';
import { useTodoStore } from '../store/todoStore';
import { useThemeStore } from '../store/themeStore';

const SettingsPage: React.FC = () => {
  const clearTodos = useTodoStore((state) => state.clearTodos);
  const { currentTheme, setTheme } = useThemeStore();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as 'green' | 'blue' | 'purple');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Configurações</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Controle de tarefas</h2>
        <div className="space-y-4">
          <div>
            <AnimatedButton
              variant="danger"
              icon={<Trash2 className="w-4 h-4" />}
              onClick={clearTodos}
              className="w-full justify-center"
            >
              Excluir todas tarefas
            </AnimatedButton>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Aparência</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tema de Cores
            </label>
            <select
              value={currentTheme}
              onChange={handleThemeChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
            >
              <option value="green">Verde (Padrão)</option>
              <option value="blue">Azul</option>
              <option value="purple">Roxo</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsPage;