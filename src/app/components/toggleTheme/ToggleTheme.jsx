"use client"
import { useTheme } from "../../contexts/ThemeProvider";
const ToggleTheme = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <button
       onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}>
        toggle theme
      </button>
    </div>
  );
};

export default ToggleTheme;
