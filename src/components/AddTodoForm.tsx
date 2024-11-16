import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTodoStore } from '../store/todoStore';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './shared/AnimatedButton';

const AddTodoForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate] = useState('');

  const { addTodo } = useTodoStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addTodo({
      title,
      description,
      priority,
      completed: false,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    });

    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
    setIsOpen(false);
  };

  return (
    <div className="mb-6">
      <AnimatePresence>
        {!isOpen ? (
          <AnimatedButton
            onClick={() => setIsOpen(true)}
            icon={<Plus className="w-5 h-5" />}
          >
            Adicionar tarefa
          </AnimatedButton>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow p-4"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Descrição</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  rows={3}
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Prioridade</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  >
                    <option value="low">Baixa</option>
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Data</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <AnimatedButton
                  type="button"
                  variant="secondary"
                  onClick={() => setIsOpen(false)}
                >
                  Cancelar
                </AnimatedButton>
                <AnimatedButton type="submit">
                  Adicionar Tarefa
                </AnimatedButton>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddTodoForm;