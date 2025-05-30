import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={`${styles.themeToggle} ${theme === 'dark' ? styles.dark : ''}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className={styles.switch}>
        <div className={styles.handle}>
          <div className={styles.icon}>
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M12 3v1m0 16v1M5.6 5.6l.7.7m12.1-.7l-.7.7M3 12h1m16 0h1M5.6 18.4l.7-.7m12.1.7l-.7-.7M12 16a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}; 