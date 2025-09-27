import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectTheme, setTheme } from './features/ui/uiSlice';

function App() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <header className="p-4 shadow-md bg-white dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-500">Bingo Manía</h1>
          <button 
            onClick={toggleTheme} 
            className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors"
          >
            Cambiar a {theme === 'light' ? 'Oscuro' : 'Claro'}
          </button>
        </div>
      </header>
      <main className="p-4">
        <div className="container mx-auto">
          <p>El contenido de la aplicación irá aquí.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
