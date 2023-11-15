"use client"
import './ToggleTheme.scss'
import { useTheme } from "../../contexts/ThemeProvider";
import {motion} from 'framer-motion'
// import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { useEffect, useState } from 'react';

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();
  const [localTheme, setLocalTheme] = useState(null)

  useEffect(() => {
    setLocalTheme(theme)
  }, [theme])

  if(localTheme === null) return <div>Loading...</div>
  
  return (
    <div>
      <button className="toggle-theme-btn"
       onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
       style={{justifyContent: localTheme === 'light' ? 'flex-start' : 'flex-end'}}
       >
        <motion.span transition={{duration: .1, type: 'spring', stiffness: 150, mass: .5}} layout>
        </motion.span>
      </button>
    </div>
  );
};

export default ToggleTheme;
