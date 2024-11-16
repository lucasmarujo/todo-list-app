import React from 'react';
import { useTodoStore } from '../store/todoStore';
import { Check, Trash2, Edit } from 'lucide-react';
import { format } from 'date-fns';

const TodoList: React.FC = () => {
  const { todos, toggleTodo, deleteTodo } = useTodoStore();

  const priorityColors = {
    low: 'bg-emerald-100 text-emerald-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                ${
                  todo.completed
                    ? 'bg-emerald-600 border-emerald-600'
                    : 'border-gray-300'
                }`}
            >
              {todo.completed && <Check className="w-4 h-4 text-white" />}
            </button>
            
            <div>
              <h3 className={`font-medium ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.title}
              </h3>
              <p className="text-sm text-gray-600">{todo.description}</p>
              <div className="flex gap-2 mt-1">
                <span className={`text-xs px-2 py-1 rounded ${priorityColors[todo.priority]}`}>
                  {todo.priority}
                </span>
                <span className="text-xs text-gray-500">
                  Created: {format(todo.createdAt, 'MMM d, yyyy')}
                </span>
                {todo.dueDate && (
                  <span className="text-xs text-gray-500">
                    Due: {format(todo.dueDate, 'MMM d, yyyy')}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={() => {/* Implement edit */}}
            >
              <Edit className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={() => deleteTodo(todo.id)}
            >
              <Trash2 className="w-5 h-5 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;