import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TasksPage from './pages/TasksPage';
import CalendarPage from './pages/CalendarPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import { useThemeStore } from './store/themeStore';

const App: React.FC = () => {
  const currentTheme = useThemeStore((state) => state.currentTheme);

  return (
    <Router>
      <div className={`theme-${currentTheme}`}>
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar />
          <main className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<TasksPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;