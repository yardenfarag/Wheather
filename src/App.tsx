import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import Weather from './components/Weather/Weather';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        <Weather />
      </div>
    </ThemeProvider>
  );
}

export default App;
