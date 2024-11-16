import { create } from 'zustand';
import { Todo } from '../types/todo';

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt'>) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, todo: Partial<Todo>) => void;
  clearTodos: () => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          ...todo,
          id: crypto.randomUUID(),
          createdAt: new Date(),
        },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  updateTodo: (id, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      ),
    })),
  clearTodos: () => set({ todos: [] }),
}));