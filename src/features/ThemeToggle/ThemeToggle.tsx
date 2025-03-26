import { useEffect, useState } from "react";
import { Toggle } from "@/components";
import { getInitialTheme, setTheme } from "@/theme/theme-handler";
import styles from "./ThemeToggle.module.scss";

export const ThemeToggle = () => {
  const [theme, setThemeState] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const labelId = "theme-toggle-label";

  return (
    <div className={styles.themeToggle}>
      <Toggle
        checked={theme === "dark"}
        onChange={() => setThemeState(theme === "light" ? "dark" : "light")}
        ariaLabel="Toggle theme"
      />
      <span id={labelId} aria-live="polite">
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
      <span className={styles.themeToggle_visuallyHidden}>
        {theme === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};