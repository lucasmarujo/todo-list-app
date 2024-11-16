import React from 'react';
import { Layout, ListTodo, Calendar, Settings, PieChart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';

const Sidebar: React.FC = () => {
  const currentTheme = useThemeStore((state) => state.currentTheme);
  
  const themeColors = {
    green: 'bg-emerald-900',
    blue: 'bg-blue-900',
    purple: 'bg-purple-900',
  };

  const hoverColors = {
    green: 'hover:bg-emerald-800/50',
    blue: 'hover:bg-blue-800/50',
    purple: 'hover:bg-purple-800/50',
  };

  const activeColors = {
    green: 'bg-emerald-800',
    blue: 'bg-blue-800',
    purple: 'bg-purple-800',
  };

  const navItems = [
    { icon: ListTodo, label: 'Tarefas', path: '/' },
    { icon: Calendar, label: 'Calendario', path: '/calendar' },
    { icon: PieChart, label: 'Analise', path: '/analytics' },
    { icon: Settings, label: 'Configurações', path: '/settings' },
  ];

  return (
    <div className={`${themeColors[currentTheme]} text-white w-64 min-h-screen p-4`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 mb-8"
      >
        <Layout className="w-6 h-6" />
        <h1 className="text-xl font-bold">Todo Dashboard</h1>
      </motion.div>
      
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <motion.li key={item.label} whileHover={{ x: 4 }}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 w-full p-2 rounded transition-colors ${
                    isActive ? activeColors[currentTheme] : hoverColors[currentTheme]
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;