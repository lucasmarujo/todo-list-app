import React from 'react';
import { format } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Todo } from '../../types/todo';
import { useTodoStore } from '../../store/todoStore';
import AnimatedButton from '../shared/AnimatedButton';

interface TodoModalProps {
  date: Date;
  todos: Todo[];
  isOpen: boolean;
  onClose: () => void;
}

const TodoModal: React.FC<TodoModalProps> = ({ date, todos, isOpen, onClose }) => {
  const { toggleTodo } = useTodoStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 pointer-events-auto">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold">
                  Tasks for {format(date, 'MMMM d, yyyy')}
                </h3>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 max-h-[60vh] overflow-y-auto">
                {todos.length === 0 ? (
                  <p className="text-gray-500 text-center">Nenhuma tarefa para este dia</p>
                ) : (
                  <div className="space-y-2">
                    {todos.map((todo) => (
                      <div
                        key={todo.id}
                        className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded"
                      >
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => toggleTodo(todo.id)}
                          className="rounded text-emerald-600 focus:ring-emerald-500"
                        />
                        <div className={todo.completed ? 'line-through text-gray-500' : ''}>
                          <p className="font-medium">{todo.title}</p>
                          <p className="text-sm text-gray-600">{todo.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="p-4 border-t">
                <AnimatedButton onClick={onClose} className="w-full justify-center">
                  Fechar
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TodoModal;