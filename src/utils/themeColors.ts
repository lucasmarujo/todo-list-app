type ThemeColor = 'emerald' | 'blue' | 'purple';

export const getThemeColors = (theme: ThemeColor) => ({
  primary: {
    bg: `bg-${theme}-600`,
    text: `text-${theme}-600`,
    hover: `hover:bg-${theme}-700`,
    border: `border-${theme}-600`,
    ring: `focus:ring-${theme}-500`,
    focusBorder: `focus:border-${theme}-500`,
  },
  sidebar: {
    bg: `bg-${theme}-900`,
    hover: `hover:bg-${theme}-800/50`,
    active: `bg-${theme}-800`,
  }
}); 