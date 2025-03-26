import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import styles from "./Toggle.module.scss";
export const Toggle = ({ checked, onChange, ariaLabel }) => {
    const handleKeyDown = (e) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            onChange();
        }
    };
    return (_jsx("div", { className: clsx(styles.toggle, checked && styles.toggle_checked), role: "switch", "aria-checked": checked, tabIndex: 0, onClick: onChange, onKeyDown: handleKeyDown, "aria-label": ariaLabel ?? "Toggle dark mode", children: _jsx("div", { className: styles.toggle__circle }) }));
};
