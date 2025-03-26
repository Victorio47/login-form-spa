import { getCookie, setCookie } from "@/utils";
export const getInitialTheme = () => {
    const saved = getCookie("theme");
    if (saved === "light" || saved === "dark")
        return saved;
    if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    return "light";
};
export const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    setCookie("theme", theme);
};
