import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [userTheme, setUserTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const systemSettingQuery = window.matchMedia(
      '(prefers-color-scheme: light)',
    );

    const updateTheme = () => {
      if (userTheme === 'light') {
        setIsLightMode(true);
      } else if (userTheme === 'dark') {
        setIsLightMode(false);
      } else {
        setIsLightMode(systemSettingQuery.matches);
      }
    };
    updateTheme();

    if (userTheme === 'system') {
      systemSettingQuery.addEventListener('change', updateTheme);
    }

    return () => {
      systemSettingQuery.removeEventListener('change', updateTheme);
    };
  }, [userTheme]);

  useEffect(() => {
    localStorage.setItem('theme', userTheme);
  }, [userTheme]);

  return (
    <ThemeContext.Provider value={{ userTheme, setUserTheme, isLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
