import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Toggle } from "@/components";
import { getInitialTheme, setTheme } from "@/theme/theme-handler";
import styles from "./ThemeToggle.module.scss";
export const ThemeToggle = () => {
    const [theme, setThemeState] = useState(getInitialTheme);
    useEffect(() => {
        setTheme(theme);
    }, [theme]);
    const labelId = "theme-toggle-label";
    return (_jsxs("div", { className: styles.themeToggle, children: [_jsx(Toggle, { checked: theme === "dark", onChange: () => setThemeState(theme === "light" ? "dark" : "light"), ariaLabel: `Switch to ${theme === "dark" ? "light" : "dark"} mode` }), _jsx("span", { id: labelId, "aria-live": "polite", children: theme === "dark" ? "🌙" : "☀️" }), _jsx("span", { className: styles.themeToggle_visuallyHidden, children: theme === "dark" ? "Dark Mode" : "Light Mode" })] }));
};
