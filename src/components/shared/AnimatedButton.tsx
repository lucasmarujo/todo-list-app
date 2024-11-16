import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { useThemeStore } from '../../store/themeStore';

interface AnimatedButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  className = '',
  ...props
}) => {
  const currentTheme = useThemeStore((state) => state.currentTheme);

  const getVariantClasses = () => {
    const themeColors = {
      green: {
        primary: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
      },
      blue: {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
      },
      purple: {
        primary: 'bg-purple-600 hover:bg-purple-700 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
      },
    };

    return themeColors[currentTheme][variant];
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${getVariantClasses()} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </motion.button>
  );
};

export default AnimatedButton;