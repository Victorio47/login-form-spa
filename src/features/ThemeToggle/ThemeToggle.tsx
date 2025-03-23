import { useState, useEffect, useCallback } from "react";
import { Toggle } from "../../components"; // путь поправь под себя

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark]);

  return (
    <Toggle
      checked={isDark}
      onChange={toggleTheme}
      labelOn="🌙 Dark Mode"
      labelOff="☀️ Light Mode"
    />
  );
};
