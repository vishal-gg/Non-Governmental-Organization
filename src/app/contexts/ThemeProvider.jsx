'use client'
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=> {
    if(typeof window !== 'undefined') {
      const storedTheme = window.localStorage.getItem('theme');
      return storedTheme ? storedTheme : 'light'
    }
  });

  useEffect(() => {
    if(typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
