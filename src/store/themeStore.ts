import { create } from 'zustand';

type Theme = 'green' | 'blue' | 'purple';

interface ThemeStore {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  currentTheme: 'green',
  setTheme: (theme) => set({ currentTheme: theme }),
})); 